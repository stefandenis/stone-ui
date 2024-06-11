import {useQuery} from "react-query";
import axios, {AxiosResponse} from "axios";
import { config } from "../config";
import { JsonConvert } from "json2typescript";
import { QuizAnswersRequest } from "../shared/models/request/QuizAnswersRequest";
import { QuizResultResponse } from "../shared/models/response/QuizResultResponse";

export function fetchVerifyQuiz(body: QuizAnswersRequest | null) {
    return axios.post<AxiosResponse<QuizResultResponse>>(config.api.quiz, body).then((response) => {
        let jsonConvert = new JsonConvert()
        return jsonConvert.deserializeObject(response.data, QuizResultResponse);
    })
}

function useVerifyQuizQuery(requestData: QuizAnswersRequest | null) {
    return useQuery(
        "verify-quiz",
        () => fetchVerifyQuiz(requestData),
        {
            enabled: requestData != null,
            staleTime: 0,
            cacheTime: 0,
        }
    );
}

export default useVerifyQuizQuery;