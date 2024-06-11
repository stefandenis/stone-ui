import React from 'react';
import { Fade, Grid } from "@mui/material";
import QuizBox from "../../components/QuizBox/QuizBox";
import Roadmap from "../../components/Roadmap/Roadmap";
import useQuizQuery from "../../data-access/useQuizQuery";
import {config} from "../../config";
import PopoverButton from "../../components/PopoverButton/PopoverButton";
import {
    FullQuestionRequest,
    QuestionsRequest,
    QuizAnswersRequest
} from "../../shared/models/request/QuizAnswersRequest";
import useVerifyQuizQuery from "../../data-access/useVerifyQuizQuery";
import {JsonConvert} from "json2typescript";
import {useNavigate} from "react-router-dom";
function Quiz() {
    const [activeQuestion, setActiveQuestion] = React.useState<number>(0);
    const navigate = useNavigate();
    const [verifyQuizRequest, setVerifyQuizRequest] = React.useState<QuizAnswersRequest | null>(null);
    const [fadeIn, setFadeIn] = React.useState(true);
    const total = 10;
    const { isLoading, error, data } = useQuizQuery();
    const { data: dataVerifyQuiz } = useVerifyQuizQuery(verifyQuizRequest);

    const [formValues, setFormValues] = React.useState<any>({});
    const [answeredQuestions, setAnsweredQuestions] = React.useState(Array(10).fill(false))

    React.useEffect(() => {
        console.log("verifyQuizRequest: ", verifyQuizRequest);
    }, [verifyQuizRequest]);

    React.useEffect(() => {
        return () => {
            console.log("Quiz unmounted")
        }
    }, [])

    const handleFormChange = React.useCallback((stoneId: string, answer: string, questionIndex: number) => {
        setFormValues({
            ...formValues,
            [stoneId]: answer
        });
        setAnsweredQuestions(prevState => {
            prevState[questionIndex] = true;
            return [...prevState];
        })
    }, [formValues])

    const handleFinishQuiz = React.useCallback(() => {
        if (data) {
            let questionsRequest = new QuestionsRequest(
                data.questions.map((question) => {
                    return new FullQuestionRequest(question.stoneId, formValues[question.stoneId], question.answers)
                })
            )
            let username = localStorage.getItem('username')
            if (username == null) {
                throw Error("no username found")
            }
            let jsonConvert = new JsonConvert();
            let quizAnswersRequest = new QuizAnswersRequest(username, questionsRequest)
            // @ts-ignore
            setVerifyQuizRequest(jsonConvert.serializeObject(quizAnswersRequest, QuizAnswersRequest))
        }
    }, [data, formValues])

    React.useEffect(()=>{
        console.log("dataVerifyQuiz: ", dataVerifyQuiz)
        if (dataVerifyQuiz) {
            let attempts = localStorage.getItem('attempts');
            if (attempts == null) {
                localStorage.setItem('attempts', JSON.stringify([dataVerifyQuiz.attemptId]));
            } else {
                let parsedAttempts = JSON.parse(attempts);
                if (!parsedAttempts.includes(dataVerifyQuiz.attemptId)){
                    parsedAttempts.push(dataVerifyQuiz.attemptId);
                    localStorage.setItem('attempts', JSON.stringify(parsedAttempts))
                }
            }
            navigate(`/attempt/${dataVerifyQuiz.attemptId}`);
        }
    },[dataVerifyQuiz, navigate])

    const handleNextButton = React.useCallback(()=>{
        setFadeIn(false);
        setTimeout(()=>{
            setActiveQuestion(prevState => ((prevState+1) % (total)));
            setFadeIn(true)
        }, 300)
    }, [])

    const handleRoadmapBulletClick = React.useCallback((indexOfActiveQuestion: number) => {
        setFadeIn(false);
        setTimeout(() => {
            setActiveQuestion(indexOfActiveQuestion)
            setFadeIn(true);
        }, 300)
    }, [])

    const handlePreviousButton = React.useCallback(() => {
        setFadeIn(false);
        setTimeout(() => {
            setActiveQuestion(prevState => Math.max((prevState-1), -1) === -1 ? (total - 1) : (prevState - 1))
            setFadeIn(true)
        }, 300)
    }, [])

    React.useEffect(()=>{console.log(activeQuestion)}, [activeQuestion])
    return (
       <>
           <Roadmap
               map={answeredQuestions}
               activeBullet={activeQuestion}
               onClickBullet={(indexOfActiveQuestion)=>{handleRoadmapBulletClick(indexOfActiveQuestion)}}
           />
           <Fade timeout={{enter: 1000, exit: 500}} in={fadeIn}>
           <Grid container justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
               {
                   data ?
                       <QuizBox
                           answers={data.questions[activeQuestion].answers}
                           imageUrl={config.backendUrl + data.questions[activeQuestion].stoneImage}
                           nextButtonText="NEXT"
                           handleNextButton={()=>{handleNextButton()}}
                           handlePreviousButton={()=>{handlePreviousButton()}}
                           previousButtonText="PREVIOUS"
                           stoneId={data.questions[activeQuestion].stoneId}
                           setFormValues={(stoneId, answer)=>{handleFormChange(stoneId, answer, activeQuestion)}}
                           formValues={formValues}
                       />
                       :
                       null
               }
                <PopoverButton
                    text='You have not answered all the questions.'
                    handleClick={()=>{handleFinishQuiz()}}
                    shouldPop={answeredQuestions.includes(false)}
                    sx={{marginTop: '10px'}}
                >
                    FINISH QUIZ
                </PopoverButton>
           </Grid>
       </Fade>



       </>
)
}

export default Quiz;