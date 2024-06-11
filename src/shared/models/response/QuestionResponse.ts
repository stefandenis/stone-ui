import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("Question")
export class Question {
    @JsonProperty("stoneId", String)
    stoneId: string;

    @JsonProperty("stoneImage", String)
    stoneImage: string;

    @JsonProperty("answers", [String])
    answers: string[];
}

@JsonObject("QuestionResponse")
export class QuestionResponse {
    @JsonProperty("questions", [Question])
    questions: Question[]
}