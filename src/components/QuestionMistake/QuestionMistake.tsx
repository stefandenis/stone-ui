import React from 'react';
import {Box, Container, FormControlLabel, Grid, Radio, RadioGroup, Stack, Tooltip} from "@mui/material";
import useStoneQuery from "../../data-access/useStoneQuery";
import {config} from "../../config";
import styles from './QuestionMistake.module.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

interface QuestionMistakeProps {
    possibleAnswers: string[];
    chosenAnswer: string;
    stoneId: string;
    correctAnswer: string;
}
function QuestionMistake(props: QuestionMistakeProps) {

    const { data } = useStoneQuery(props.stoneId);

    const getTooltipMessage = React.useCallback((possibleAnswer: string) => {
        if (possibleAnswer === props.chosenAnswer) {
            return 'Your answer.'
        } else if (possibleAnswer === props.correctAnswer) {
            return 'Correct answer.'
        } else {
            return '';
        }
    }, [props.chosenAnswer, props.correctAnswer]);
    const getRadioColor = React.useCallback((possibleAnswer: string) => {
        if (possibleAnswer === props.chosenAnswer && possibleAnswer === props.correctAnswer) {
            return 'success'
        } else if (possibleAnswer === props.chosenAnswer && possibleAnswer !== props.correctAnswer) {
            return 'error'
        } else {
            return undefined;
        }
    }, [props])

    return (
        <Box
            borderRadius={"10px"}
            sx={{
                width: 500,
                height: "auto",
                bgcolor: 'primary.dark',
                flexGrow: 1,
                padding: "5px"
            }}
        >
            <Grid container>
              <Grid item xs = {5} textAlign={'center'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                  <img className={styles.image} src={config.backendUrl + data?.imagePath} alt={'stone'}/>
              </Grid>
              <Grid item xs={5}>
                      <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                      >
                      {props.possibleAnswers.map((possibleAnswer) => {
                          return <FormControlLabel
                              key={`quiz-mistake-${possibleAnswer}`}
                              control={
                                  <Tooltip
                                      placement='left-start'
                                      title={getTooltipMessage(possibleAnswer)}>
                                    <Radio
                                        checked={(possibleAnswer === props.correctAnswer) || (possibleAnswer === props.chosenAnswer)}
                                        color={getRadioColor(possibleAnswer)}
                                        sx={{padding: '5px'}}
                                    />
                                  </Tooltip>

                              }
                              label={possibleAnswer}
                          />
                      })}
                      </RadioGroup>

              </Grid>
                <Grid item xs={2} display={'flex'} alignItems={'center'} >
                    {props.chosenAnswer === props.correctAnswer ?
                    <CheckCircleOutlineIcon color='success' fontSize={'large'}/>
                    :
                    <HighlightOffOutlinedIcon color='error' fontSize={'large'}/>
                    }

                </Grid>
            </Grid>
        </Box>
    );
}

export default QuestionMistake;
