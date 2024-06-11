import {useQuery} from "react-query";
import axios, {AxiosResponse} from "axios";
import {config} from "../config";
import {JsonConvert} from "json2typescript";
import {QuestionResponse} from "../shared/models/response/QuestionResponse";

export function fetchQuiz() {
    return axios.get<AxiosResponse>(config.api.quiz).then((response) => {
        let jsonConvert = new JsonConvert()
        console.log(response.data)
        return jsonConvert.deserializeObject(response.data, QuestionResponse)
    })
}

function useQuizQuery() {
    return useQuery(
        "quiz",
        () => fetchQuiz()
    );
}

export default useQuizQuery;