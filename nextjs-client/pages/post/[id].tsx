import {
    Button,
    Grid,
    makeStyles,
    Theme,
    Link as MUILink,
    Typography,
    Card,
    CardContent,
    Box,
} from '@material-ui/core';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Image from '../../components/Image';
import gql from 'graphql-tag';
import { useGetPostQuery } from '../../types/gen/graphql-types';
import { link } from 'fs';

const useStyles = makeStyles((theme: Theme) => ({
    description: {
        maxWidth: '80ch',
        paddingLeft: 100,
    },
    root: {
        padding: '.5em 2em',
    },
    title: {
        paddingLeft: '1em',
        color: theme.palette.text.secondary,
    },
}));

interface URLParams {
    id?: string;
}

// export const QUERY_TOOL = gql`
//     query Tool($id: ID!) {
//         tool(where: { id: $id }) {
//             id
//             name
//             description
//             link
//             image
//         }
//     }
// `;

// export const QUERY_TOOL = gql`
//     query Post($toolWhere: ToolWhereUniqueInput!) {
//         tool(where: $toolWhere) {
//             id
//             name
//             description
//             link
//             image
//         }
//     }
// `;

export default function PostInfo(): ReactElement {
    const classes = useStyles();
    const { query }: { query: URLParams } = useRouter();
    // client side fetch
    const { data } = useGetPostQuery({ variables: { id: query.id } });
    // const { data } = useToolQuery({ variables: { toolWhere: { id: Number(query.id) } } });

    if (!data) {
        return (
            <Grid container spacing={4} className={classes.root}>
                <Grid item xs={12}>
                    <Link href="/" passHref>
                        <Breadcrumbs aria-label="breadcrumb">Home</Breadcrumbs>
                    </Link>
                </Grid>
                <Grid item xs={12} container>
                    <Typography variant="h3">Post not found.</Typography>
                </Grid>
            </Grid>
        );
    }

    return (
        <>
            <Layout title={`${data?.post?.title} | Next.js example`}>
                <Grid container spacing={4} direction="column" className={classes.root}>
                    <Grid item xs={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link href="/" passHref>
                                <MUILink>Home</MUILink>
                            </Link>
                            <Typography color="textPrimary">{data?.post?.title}</Typography>
                        </Breadcrumbs>
                    </Grid>
                    {/* <Grid item container justifyContent="center"> */}
                    <Grid item xs={3}>
                        <Card key={data?.post?.id}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {data?.post?.title}
                                </Typography>
                                <Typography variant="body2">by {data?.post?.user?.name}</Typography>
                                <Typography component="div">
                                    <Box mt={2}>{data?.post?.content}</Box>
                                </Typography>
                            </CardContent>
                            {/* <CardActions>
                                <Button size="small">
                                    <Link href={link.href} as={link?.as} label="Learn More" />
                                </Button>
                            </CardActions> */}
                        </Card>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}
