import React from 'react';
import {Box, Button, Container, Skeleton, Stack, Typography} from "@mui/material";
import {congratulationsMessages, titles} from "../../pages/Attempt/messages";
import {useNavigate, useParams} from "react-router-dom";

interface QuizResultBoxProps {
    score: number
    maxScore: number
}

function QuizResultBox(props: QuizResultBoxProps) {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate();
    return (
        <Box
            borderRadius={"10px"}
            sx={{
                width: 400,
                height: 'auto',
                bgcolor: 'primary.dark',
                padding: '15px'
            }}>
            <Stack spacing={1} alignItems={'center'}>
            <Typography
                sx={{
                    fontSize: "40px",
                    textAlign: 'center',
                    background: "-webkit-linear-gradient(90deg, #f8842b 30%, #f9c252 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: '700',
                }}
            >
                {titles[props.score].toLocaleUpperCase()}
            </Typography>
            <Typography sx={{
                fontSize: "30px",
                textAlign: 'center'
            }}>{props.score}/{props.maxScore}</Typography>
            <Typography sx={{textAlign:'center'}}>{congratulationsMessages[props.score]}</Typography>
            <Button
                color="secondary"
                variant={"contained"}
                onClick={()=>{navigate(`/quiz-learn/${id}`)}}
            >
                see what you did wrong
            </Button>
            </Stack>
        </Box>
        )
}

export default QuizResultBox;

export function QuizResultBoxLoading() {
    return (
        <Box
            borderRadius={"10px"}
            sx={{
                width: 400,
                height: 'auto',
                bgcolor: 'primary.dark',
                padding: '15px'
            }}>
            <Stack spacing={1} alignItems={'center'}>
                <Skeleton width={'200px'} height='60px' />
                <Skeleton width={'70px'} height='45px' />
                <Skeleton width={'300px'} height='150px' />
            </Stack>
        </Box>
    )
}
