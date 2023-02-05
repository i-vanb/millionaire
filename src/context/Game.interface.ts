export interface GameContextInterface {
    amount: number;
    setAmount: (amount:number)=>void;
    round: number;
    next: ()=>void;
    clear:()=>void;
    scores: Score[];
    reset: ()=>void;
    setUserAnswer: (userAnswer:string)=>void;
    currentQuestion: CurrentQuestion;
    httpError: string;
    closeError: ()=>void;

}

export interface Question {
    category: string;
    type: "boolean" | "multiple";
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface Score{
    round: number;
    price: number;
    fixed?: boolean;

}

export interface CurrentQuestion {
    question?: string;
    options?: string[];
    userAnswer?: string;
    correctAnswer?: string;
    win?: number;
    success?: boolean;

}
