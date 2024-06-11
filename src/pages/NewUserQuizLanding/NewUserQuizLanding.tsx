import React, {useCallback, useState} from 'react';
import { Box, Button, Fade, Grid, TextField, Typography} from "@mui/material";
import styles from "./NewUserQuizLanding.module.css"
import { useNavigate } from "react-router-dom";

const FADEIN_TIMEOUT = 2000

function NewUserQuizLanding() {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(true)
    const [error, setError] = useState(false);
    const [name, setName] = useState('');

    const handleStartQuiz = useCallback(() => {
        if (name) {
            setFadeIn(false)
            setTimeout(() => {
                localStorage.setItem("username", name)
                navigate("/quiz", { replace: true })
            }, FADEIN_TIMEOUT - 500)
        } else {
            setError(true);
        }
    }, [navigate, name]);

    return (
        <>
                <Grid container justifyContent='center'>
                    <Fade timeout={{enter: FADEIN_TIMEOUT, exit: FADEIN_TIMEOUT - 500}} in={fadeIn}>
                        <Box
                            borderRadius={"10px"}
                            sx={{
                            width: 400,
                            height: 300,
                            bgcolor: 'primary.dark',
                        }}>
                           <Grid
                               container
                               justifyContent="center"
                               alignItems="center"
                               className = {styles.box}
                           >
                               <Grid container justifyContent="center" item xs={12}>
                                   <Typography>Welcome to Stone Quiz!</Typography>
                               </Grid>
                               <Grid container justifyContent="center" item xs={12}>
                                   <Typography sx={{padding: "15px"}} align="justify">You will receive 10 images with semi-precious and precious stones. Select the name of the stone from the list provided.</Typography>
                               </Grid>
                               <Grid container justifyContent="center" item xs={12}>
                                   <TextField
                                       error={error}
                                       className="subvariant-hovered"
                                       id="outlined-basic"
                                       placeholder={"Enter your name..."}
                                       value={name}
                                       onChange={(event) => {
                                           if (error) { setError(false) }
                                           setName(event.target.value)
                                       }}
                                   />
                               </Grid>
                               { error ?
                                   <Grid container justifyContent="center" item xs={12}>
                                    <Typography fontSize={12} color={'red'} align="justify">Please enter your name</Typography>
                                   </Grid> : null
                               }
                               <Grid container justifyContent="center" item xs={12}>
                                   <Button onClick={()=>{handleStartQuiz()}} color="secondary" variant={"contained"}>START QUIZ</Button>
                               </Grid>

                           </Grid>
                        </Box>
                    </Fade>
                </Grid>
        </>
    )
}

export default NewUserQuizLanding;