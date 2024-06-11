import axios, {AxiosResponse} from "axios";
import { config } from "../config";
import { JsonConvert } from "json2typescript";
import { useQuery } from "react-query";
import { StoneResponse } from "../shared/models/response/StoneResponse";

export function fetchStone(stoneId: string) {
    return axios.get<AxiosResponse>(config.api.stone.replace(":id", stoneId)).then((response) => {
        let jsonConvert = new JsonConvert()
        console.log(response.data)
        return jsonConvert.deserializeObject(response.data, StoneResponse)
    })
}

function useStoneQuery(stoneId: string) {
    return useQuery(
        `stone-${stoneId}`,
        () => fetchStone(stoneId),
    );
}

export default useStoneQuery;