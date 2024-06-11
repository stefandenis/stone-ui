import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("FullQuestionRequest")
export class FullQuestionRequest {

    @JsonProperty("stone_id", String)
    stoneId: string;

    @JsonProperty("chosen_answer", String)
    chosenAnswer: string;

    @JsonProperty("possible_answers", [String])
    possibleAnswers: string[];

    constructor(stoneId: string, chosenAnswer: string, possibleAnswers: string[]) {
        this.stoneId = stoneId;
        this.chosenAnswer = chosenAnswer;
        this.possibleAnswers = possibleAnswers;
    }
}


@JsonObject("QuestionsRequest")
export class QuestionsRequest {
    @JsonProperty("questions", [FullQuestionRequest])
    questions: FullQuestionRequest[]

    constructor(questions: FullQuestionRequest[]) {
        this.questions = questions;
    }
}

@JsonObject("QuizAnswersRequest")
export class QuizAnswersRequest {
    @JsonProperty("username", String)
    username: string;

    @JsonProperty("quiz", QuestionsRequest)
    quiz: QuestionsRequest;

    constructor(username: string, quiz: QuestionsRequest) {
        this.username = username;
        this.quiz = quiz;
    }

}