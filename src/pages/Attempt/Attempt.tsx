import React from 'react';
import {Box, Fade, Grid, Skeleton, Stack} from "@mui/material";
import useAttemptQuery from "../../data-access/useAttemptQuery";
import {useParams} from "react-router-dom";
import QuizResultBox, {QuizResultBoxLoading} from "../../components/QuizResultBox/QuizResultBox";

function Attempt() {
    const { id } = useParams<{ id: string }>()
    const { data, isLoading } = useAttemptQuery(String(id));
    React.useEffect(() => {
        console.log(data);
    }, [data])
    return (
        <>
                <Fade timeout={{enter: 1000, exit: 500}} in={true}>
                    <Grid container justifyContent={'center'}>
                        { isLoading ? <QuizResultBoxLoading/> : null }
                        { data ?
                            <QuizResultBox score={data.score} maxScore={data.maxScore}/>
                            :
                            null
                        }
                    </Grid>
                </Fade>
        </>
    );
}

export default Attempt;