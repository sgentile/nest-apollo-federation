import {
    makeStyles,
    createStyles,
    Typography,
    Theme,
    List,
    Grid,
    Button,
    Card,
    CardContent,
    CardActions,
    Box,
} from '@material-ui/core';
import React, { useState } from 'react';
import Layout from '../components/layout';
import { Post, useGetPostsQuery } from '../types/gen/graphql-types';
import Link, { LinkProps } from '../components/link/Link';
import PostDialog from '../components/dialog/PostDialog';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            minWidth: theme.breakpoints.values.sm,
            [theme.breakpoints.down('xs')]: {
                width: '100%',
                minWidth: 100,
            },
        },
        root: {
            padding: '2em',
        },
        linkButton: {
            marginLeft: '1em',
        },
    })
);

export default function Home() {
    const [dialogOpen, setDialogOpen] = useState(false);
    // CSR(Client-side rendering) example
    const { data } = useGetPostsQuery();
    const classes = useStyles();

    return (
        <>
            <Layout title="Next.js example">
                <Grid container spacing={4} direction="column" className={classes.root}>
                    <Grid item container spacing={4} direction="column">
                        <Grid
                            item
                            container
                            spacing={4}
                            alignContent="center"
                            justifyContent="center"
                            direction="column"
                        >
                            <Grid item container justifyContent="center">
                                <Typography variant="h5" component="h2">
                                    Posts
                                </Typography>
                            </Grid>
                            <Grid item container justifyContent="center">
                                <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}>
                                    Create
                                </Button>
                            </Grid>
                            <PostDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
                        </Grid>
                        <Grid item container justifyContent="center">
                            <List
                                aria-label={data?.posts.map((post: Post) => post.title).join(', ')}
                                className={classes.list}
                            >
                                {/* {data?.posts.map(({ title, content, id, user }) => {
                                    const link: LinkProps = {
                                        href: '/post/[id]',
                                        as: `/post/${id}`,
                                        label: 'Learn More',
                                    };
                                    return <ListItem key={id} name={title} content={content} user={user} link={link} />;
                                })} */}

                                {data?.posts.map((post: Post) => {
                                    const link: LinkProps = {
                                        href: '/post/[id]',
                                        as: `/post/${post.id}`,
                                        label: 'Learn More',
                                    };
                                    return (
                                        <Box mt={2} key={post.id}>
                                            <Card>
                                                <CardContent>
                                                    <Typography variant="h5" component="div">
                                                        {post.title}
                                                    </Typography>
                                                    <Typography variant="body2">by {post.user?.name}</Typography>
                                                    <Typography component="div">
                                                        <Box mt={2}>{post.content}</Box>
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small">
                                                        <Link href={link.href} as={link?.as} label="Learn More" />
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Box>
                                    );
                                })}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}
