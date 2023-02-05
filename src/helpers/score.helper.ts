import {Score} from "../context/Game.interface";
import {scoreTemplates} from "./score.templates";

export const scoreHelper = (amount:number):Array<Score> => {
    let scores = scoreTemplates[amount];
    const MAX = 1000000;

    let fixedL = Math.floor(amount/3);

    if(!scores) {
        scores = Array(amount); // Array(20)
        scores[amount-1] = MAX; // Array[19] = 1000000
        for(let i=amount-2; i>=0; i--) {
            if(scores[i+2]/i+1 < 100) {
                scores[i] = 100;
            } else {
                const num = scores[i+1]/2;
                const dv = num > 1000 ? 1000 : 100;
                scores[i] = Math.ceil(num / dv) * dv;
            }
        }
    }

    return scores.map((price, index)=>{
        return({
            price, round: index+1, fixed: index+1 === fixedL || index+1 === fixedL*2 || index+1 === amount
        })
    }).reverse();
}



