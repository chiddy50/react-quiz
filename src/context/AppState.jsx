import React, { useState, createContext } from 'react'
// import AppContext from './app-context'
import allQuestions from '../questions.json'
export const AppContext = createContext();

export function AppState(props) {
    const [darkMode, setDarkMode] = useState(false);
    const [questions, setQuestions] = useState(allQuestions);
    const [start, setStart] = useState(false);
    const [index, setIndex] = useState(0)


    return (
        <AppContext.Provider value={{
            setDarkMode,
            setQuestions,
            setStart,
            setIndex,
            darkMode,
            questions,
            start,
            index
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

// export default AppState
