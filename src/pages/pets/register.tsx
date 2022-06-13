import { NextPage } from 'next'
import useRegister from '../../data/hooks/useRegister'
import Title from '../../ui/components/title/Title'
import { Paper, Grid, TextField, Button, Snackbar } from '@mui/material'

const Register: NextPage = () => {
    const {
        name,
        story,
        photo,
        setName,
        setStory,
        setPhoto,
        register,
        message,
        setMessage
    } = useRegister();
    return (
        <>
            <Title
                title={'Register a new PET for adoption'}
                subtitle={"Don't forget any info about the pet"}
            />

            <Paper sx={{ maxWidth: 1000, mx: 'auto', p: 2 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label={'Name'}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={story}
                            onChange={(e) => setStory(e.target.value)}
                            label={"Pet's Story"}
                            fullWidth
                            multiline
                            rows={6}
                        />

                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            label={'Photo'}
                            placeholder={'Image URL'}
                            fullWidth
                        />
                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            sx={{ mt: 2 }}
                            component={'a'}
                            href={'//imgur.com/upload'}
                            target={'_blank'}
                        >
                            Upload Photo
                        </Button>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Button
                                onClick={register}
                                variant={'contained'}
                                fullWidth
                                sx={{ maxWidth: { md: 500 }, mt: 4 }}
                            >
                                Register Pet
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
            </Paper>

            <Snackbar
                open={message.length > 0}
                message={message}
                autoHideDuration={3000}
                onClose={() => setMessage('')}
            />
        </>
    )
}

export default Register