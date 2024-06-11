import {JsonObject, JsonProperty} from "json2typescript";
import {QuestionMistake} from "./QuestionMistake";

@JsonObject("ScoreResponse")
export class ScoreResponse {
    @JsonProperty("score", Number)
    score: number;

    @JsonProperty("max_score", Number)
    maxScore: number;

    @JsonProperty("quiz_feedback", [QuestionMistake])
    quizFeedback: QuestionMistake[]
}