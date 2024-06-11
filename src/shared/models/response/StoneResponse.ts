import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("StoneResponse")
export class StoneResponse {
    @JsonProperty("id", String)
    id: string;

    @JsonProperty("image_path", String)
    imagePath: string;

    @JsonProperty("stone_name", String)
    stoneName: string;
}