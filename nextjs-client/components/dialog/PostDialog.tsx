import { Dialog, DialogTitle, DialogContent, Grid, TextField, DialogActions, Button } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { QUERY_POSTS } from '../../pages/queries';
import { NewPost, useCreatePostMutation } from '../../types/gen/graphql-types';

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function PostDialog({ open, onClose }: Props): ReactElement {
    const { handleSubmit, reset, control } = useForm<NewPost>({
        defaultValues: {
            title: '',
            content: '',
            userId: 1,
        },
    });
    const [createPost] = useCreatePostMutation();

    const onSubmit = async (values: NewPost) => {
        const { title, content, userId } = values;
        await createPost({
            variables: { input: { title, content, userId } },
            refetchQueries: [{ query: QUERY_POSTS }],
        });
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">{`Create Post`}</DialogTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <Grid container alignItems="center" justifyContent="center" direction="column">
                        <Grid item xs={12} style={{ margin: '0 0 1em 0' }}>
                            <Controller
                                name="title"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Post Title"
                                        variant="outlined"
                                        required
                                        margin="dense"
                                        autoFocus={true}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="content"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        rows={4}
                                        required
                                        multiline
                                        variant="outlined"
                                        label="Post Content"
                                        margin="dense"
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="default" variant="contained">
                        CANCEL
                    </Button>
                    <Button onClick={() => reset()} type="reset" color="secondary" variant="contained">
                        RESET
                    </Button>
                    <Button type="submit" color="primary" variant="contained">
                        SUBMIT
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}
