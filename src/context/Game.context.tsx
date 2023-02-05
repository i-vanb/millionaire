import React, {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {CurrentQuestion, GameContextInterface, Question, Score} from "./Game.interface";
import {scoreHelper} from "../helpers/score.helper";
import {fetchQuestions} from "../helpers/fetchQuestions";
import {randomizeArray} from "../helpers/randomizeArray";
import {replaceQuotes} from "../helpers/replaceQuotes";

export const GameContext = createContext<GameContextInterface>({} as GameContextInterface);

export const GameContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const [amount, setAmount] = useState<number>(15);
    const [round, setRound] = useState<number>(0);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [scores, setScores] = useState<Score[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<CurrentQuestion>({});
    const [httpError, setHttpError] = useState<string>('');
    const closeError = () => setHttpError('');

    useEffect(()=>{
        setScores(scoreHelper(amount));
    }, [amount])

    useEffect(()=>{
        if(questions.length) {
            const currentNext = createCurrentQuestion(questions[round]);
            setCurrentQuestion(currentNext);
        }
    }, [round, questions])

    const setUserAnswer = (userAnswer:string) => {
        const nextCurrent = {...currentQuestion, userAnswer};
        setCurrentQuestion(nextCurrent);
        setTimeout(()=>{
            const updatedNextCurrent = {
                ...nextCurrent,
                correctAnswer:replaceQuotes(questions[round].correct_answer)
            };

            if(updatedNextCurrent.userAnswer===updatedNextCurrent.correctAnswer) {
                if(round === amount-1) {
                    updatedNextCurrent.win = 1000000;
                }
                updatedNextCurrent.success = true;
            }
            setCurrentQuestion(updatedNextCurrent);
        }, 3000);
    }
    const fetchQuestionsHandler = async () => {
        const data = await fetchQuestions(amount, setHttpError);
        setQuestions(data);
    }

    const createCurrentQuestion = ({type, correct_answer, incorrect_answers, question}:Question) => {
        question = replaceQuotes(question);
        let options;
        if(type === "boolean") {
            options = ["True", "False"];
        } else {
            options = randomizeArray(
                [correct_answer, ...incorrect_answers]
                .map(i => replaceQuotes(i))
            )
        }
        return({question, options, userAnswer:'', correctAnswer:'', success: false})
    }

    const next = () => setRound(round+1);
    const reset = () => {
        setRound(0);
        fetchQuestionsHandler();
    }

    const clear = () => {
        setRound(0);
        setQuestions([]);
        setCurrentQuestion({});
    };

    return <GameContext.Provider value={{
        amount, round, scores, currentQuestion, httpError,
        setAmount, next, clear, reset, setUserAnswer, closeError
    }}>
        {children}
    </GameContext.Provider>;
};
