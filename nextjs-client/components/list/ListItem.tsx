import {
    ListItem as MUIListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Grid,
    Typography,
    makeStyles,
    createStyles,
    Theme,
} from '@material-ui/core';

import Image from '../Image';
import Link from '../link/Link';
import { Maybe, User } from '../../types/gen/graphql-types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        info: {
            justify: 'center',
            padding: theme.spacing(2),
        },
        avatar: {
            backgroundColor: theme.palette.grey[100],
        },
    })
);

export type Link = {
    label: string;
    href: string;
    as?: string;
};

type Props = {
    name: string;
    content: string;
    image?: Maybe<string> | undefined;
    user: User;
    link: Link;
};

export default function ListItem({ name, content, image, user, link }: Props) {
    const classes = useStyles();
    return (
        <MUIListItem divider>
            <Grid container alignItems="center">
                <ListItemAvatar>
                    <Avatar alt={name} className={classes.avatar}>
                        {/* NextJS Image optimization example. Props are src(any file under the public dir), width, and height */}
                        <Image image={image} name={name} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText>
                    <Typography variant="body1">{name}</Typography>
                </ListItemText>
                <ListItemText>
                    <Typography variant="body1">{content}</Typography>
                </ListItemText>
                <ListItemText>
                    <Typography variant="body1">{user.name}</Typography>
                </ListItemText>
                <Grid
                    container
                    item
                    xs={12}
                    md={3}
                    className={classes.info}
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Link href={link.href} as={link?.as} label={link.label} />
                </Grid>
            </Grid>
        </MUIListItem>
    );
}
