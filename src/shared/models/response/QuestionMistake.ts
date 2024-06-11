import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("QuestionMistake")
export class QuestionMistake {
    @JsonProperty("stoneId", String)
    stoneId: string;

    @JsonProperty("correctAnswer", String)
    correctAnswer: string;

    @JsonProperty("chosenAnswer", String)
    chosenAnswer: string;

    @JsonProperty("possibleAnswers", [String])
    possibleAnswers: string[];
}
