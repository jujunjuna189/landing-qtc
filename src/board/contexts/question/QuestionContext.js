import { createContext, useContext, useEffect, useState } from "react";
import { deleteQuestionApi, getQuestionApi } from "../../helpers";

const QuestionContext = createContext();

export const QuestionContextProvider = ({ children }) => {
    const [question, setQuestion] = useState({});

    const getQuestion = async () => {
        await getQuestionApi({}).then((res) => {
            setQuestion(res);
        });
    }

    const deleteQuestion = async ({ id }) => {
        await deleteQuestionApi({ id: id }).then((res) => {
            getQuestion();
        });
    }

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <QuestionContext.Provider value={{ question, getQuestion, deleteQuestion }}>
            {children}
        </QuestionContext.Provider>
    );
}

export const UseQuestionContext = () => {
    return useContext(QuestionContext);
}