import {JsonObject, JsonProperty} from "json2typescript";
import {QuestionMistake} from "./QuestionMistake";

@JsonObject("AttemptResponse")
export class AttemptResponse {
    @JsonProperty("score", Number)
    score: number;

    @JsonProperty("maxScore", Number)
    maxScore: number;

    @JsonProperty("quizFeedback", [QuestionMistake])
    quizFeedback: QuestionMistake[];

    @JsonProperty("username")
    username: string;
}