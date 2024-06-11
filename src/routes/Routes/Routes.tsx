import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewUserQuizLanding from "../../pages/NewUserQuizLanding/NewUserQuizLanding";
import Quiz from "../../pages/Quiz/Quiz";
import {AppBar} from "@mui/material";
import styles from "../../pages/NewUserQuizLanding/NewUserQuizLanding.module.css";
import Logo from "../../components/Logo";
import Layout from "../../components/Layout/Layout";
import Attempt from "../../pages/Attempt/Attempt";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import QuizLearn from "../../pages/QuizLearn/QuizLearn";
import QuizLanding from "../../components/QuizLanding/QuizLanding";
import {config} from "../../config";

function AppRoutes() {
    return (
        <BrowserRouter>
                <AppBar position='static' className = {styles.appBar}>
                    <Logo textPosition={'right'} width={400}/>
                </AppBar>
                <div>{config.backendUrl}</div>
                <div>{console.log(process.env.REACT_APP_REST_API_URL)}asdf</div>
                {console.log(process.env)}
                <Layout>
                    <Routes>
                        <Route path="/" element={<QuizLanding />} />
                        <Route path="/quiz" element={
                            <ProtectedRoute>
                                <Quiz />
                            </ProtectedRoute>
                        }
                        />
                        <Route path="/attempt/:id" element={<Attempt />} />
                        <Route path="/quiz-learn/:id" element={<QuizLearn />} />
                    </Routes>
                </Layout>
        </BrowserRouter>
    )
}

export default AppRoutes;