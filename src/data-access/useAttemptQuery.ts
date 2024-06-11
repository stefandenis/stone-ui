import React from 'react';
import {useQuery} from "react-query";
import {QuizAnswersRequest} from "../shared/models/request/QuizAnswersRequest";
import axios, {AxiosResponse} from "axios";
import {QuizResultResponse} from "../shared/models/response/QuizResultResponse";
import {config} from "../config";
import {JsonConvert} from "json2typescript";
import {AttemptResponse} from "../shared/models/response/AttemptResponse";

export function fetchAttempt(attemptId: string) {
    return axios.get<AxiosResponse<AttemptResponse>>(config.api.attempt.replace(":id", attemptId)).then((response) => {
        let jsonConvert = new JsonConvert()
        return jsonConvert.deserializeObject(response.data, AttemptResponse);
    })
}

function useAttemptQuery(attemptId: string) {
    return useQuery(
        "attempt",
        () => fetchAttempt(attemptId),
        {
            staleTime: 0,
            cacheTime: 0,
        }
    );
}

export default useAttemptQuery;