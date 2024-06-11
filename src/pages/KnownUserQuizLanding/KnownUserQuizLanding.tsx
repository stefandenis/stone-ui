import React, {useCallback} from 'react';
import {Box, Button, Fade, Grid, TextField, Typography} from "@mui/material";
import styles from "../NewUserQuizLanding/NewUserQuizLanding.module.css";
import {useNavigate} from "react-router-dom";
const FADEIN_TIMEOUT = 2000
function KnownUserQuizLanding() {
    const [fadeIn, setFadeIn] = React.useState(true)
    const navigate = useNavigate();

    const handleStartQuiz = useCallback(() => {
            setFadeIn(false)
            setTimeout(() => {
                navigate("/quiz", { replace: true })
            }, FADEIN_TIMEOUT - 500)
    }, [navigate]);

    const getAttempts = React.useCallback((): string[] => {
        let attempts: string | null = localStorage.getItem('attempts');
        if (attempts) {
           let attemptsParsed = JSON.parse(attempts);
           console.log(attemptsParsed);
           return attemptsParsed
        }
        return []
    }, []);

    const handleClickAttempt = React.useCallback((attemptId: string) => {
        navigate(`/quiz-learn/${attemptId}`);
    }, [navigate])

    return (
        <>
            <Grid container justifyContent='center'>
                <Fade timeout={{enter: FADEIN_TIMEOUT, exit: FADEIN_TIMEOUT - 500}} in={fadeIn}>
                    <Box
                        borderRadius={"10px"}
                        sx={{
                            width: 450,
                            minHeight: 300,
                            bgcolor: 'primary.dark',
                            paddingBottom: '10px',
                        }}>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            className = {styles.box}
                        >
                            <Grid container justifyContent="center" item xs={12}>
                                <Typography>Welcome back, {localStorage.getItem('username')}!</Typography>
                            </Grid>
                            <Grid container justifyContent="center" item xs={12}>
                                <Typography sx={{padding: "15px"}} align="justify">You can take a look at your previous attempts: </Typography>
                            </Grid>
                            <Grid container justifyContent="center" item xs={12}>
                                {getAttempts().map((attemptId: string, index: number) =>

                                    <Button
                                            color="secondary"
                                            variant={"contained"}
                                            onClick={()=>{handleClickAttempt(attemptId)}}
                                            sx={{margin:'5px'}}
                                        >
                                            Attempt #{index + 1}
                                        </Button>
                                )}
                            </Grid>
                            <Grid container justifyContent="center" item xs={12}>
                                <Button onClick={()=>{handleStartQuiz()}} color="secondary" variant={"contained"}>START ANOTHER QUIZ</Button>
                            </Grid>

                        </Grid>
                    </Box>
                </Fade>
            </Grid>
        </>
    );

}

export default KnownUserQuizLanding;