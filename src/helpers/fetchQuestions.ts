import {Question} from "../context/Game.interface";
import axios from "axios";

export const fetchQuestions = async (amount:number, errorHandler:(m:string)=>void):Promise<Question[]> => {
    const url = `https://opentdb.com/api.php?amount=${amount}`;
    const data = await axios.get(url).catch(e => errorHandler(e.message));
    return data?.data?.results || [];
}
