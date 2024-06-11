import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("QuizResultResponse")
export class QuizResultResponse {
    @JsonProperty("attempt_id", String)
    attemptId: string;
}
