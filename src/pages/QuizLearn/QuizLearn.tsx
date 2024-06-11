import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useAttemptQuery from "../../data-access/useAttemptQuery";
import {Button, Fab, Stack} from "@mui/material";
import QuestionMistake from "../../components/QuestionMistake/QuestionMistake";

function QuizLearn() {
    const { id } = useParams<{ id: string }>()
    const { data } = useAttemptQuery(String(id))
    const navigate = useNavigate();

    return (
        <>
        <Stack spacing={'20px'} alignItems={'center'} sx={{marginBottom:20}}>
            {data?.quizFeedback.map((questionMistake) => {
                return <QuestionMistake
                    possibleAnswers={questionMistake.possibleAnswers}
                    stoneId={questionMistake.stoneId}
                    correctAnswer={questionMistake.correctAnswer}
                    chosenAnswer={questionMistake.chosenAnswer}
                />
            })}
        </Stack>
            <Button
                sx={{
                    position:"fixed",
                    bottom:30,
                    right:30
                }}
                color="secondary"
                variant={"contained"}
                onClick={()=>{navigate('/quiz')}}
            >
                try another quiz
            </Button>
        </>
    );
}

export default QuizLearn;
