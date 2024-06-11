import React from 'react';
import {Box, Button, FormControlLabel, Grid, Radio, RadioGroup} from "@mui/material";
import styles from './QuizBox.module.css'
type QuizBoxProps = {
    stoneId: string;
    imageUrl: string;
    answers: string[];
    nextButtonText?: string;
    handleNextButton: () => void;
    previousButtonText?: string;
    handlePreviousButton: () => void;
    setFormValues: (stoneId: string, answer: string) => void;
    formValues: any
}

function QuizBox(props: QuizBoxProps) {

    const handleRadioChange = React.useCallback((e) => {
        let answer = (e.target as HTMLInputElement).value
        console.log(props.stoneId)
        props.setFormValues(props.stoneId, answer)
    }, [props])
    return(
      <Box
          borderRadius={"10px"}
          sx={{
              width: 400,
              height: "auto",
              bgcolor: 'primary.dark',
          }}>
          <Grid sx={{ paddingTop: "10px", paddingBottom: "10px" }}
              container
              justifyContent='center'
              alignItems='center'
              direction='column'
              spacing={2}
          >
             <Grid item><img className={styles.stoneImage} src={props.imageUrl}/></Grid>
             <Grid item>
              <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  onChange={(e)=>{handleRadioChange(e)}}
              >
                { props.answers.map((answer, number) => {
                    return <FormControlLabel
                        key={`quiz-answer-${answer}-${number}-`}
                        value={answer}
                        control={<Radio checked={props.formValues[props.stoneId] === answer} />}
                        label={answer}
                    />
                })}
              </RadioGroup>
             </Grid>
              <Grid item container>
                  <Grid item textAlign={'center'} xs={6}>
                          <Button
                              color="secondary"
                              variant={"contained"}
                              onClick={()=>{props.handlePreviousButton()}}
                          >
                              {props.previousButtonText}
                          </Button>
                  </Grid>
                  <Grid item textAlign={'center'} xs={6}>
                              <Button color="secondary" variant={"contained"} onClick={()=>{props.handleNextButton()}}>
                                  {props.nextButtonText}
                              </Button>
                  </Grid>
              </Grid>

          </Grid>
      </Box>
    );
}
export default QuizBox;