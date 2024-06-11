import React from 'react';
import useQuizLanding from './hooks/useQuizLanding';
import NewUserQuizLanding from "../../pages/NewUserQuizLanding/NewUserQuizLanding";
import KnownUserQuizLanding from "../../pages/KnownUserQuizLanding/KnownUserQuizLanding";

function QuizLanding() {

    const { isNewUser } = useQuizLanding();
    return (
        <>
            { isNewUser ? <NewUserQuizLanding/> : <KnownUserQuizLanding/>}
        </>
    );
}

export default QuizLanding;