import { Reducer } from "react"

interface State {
    loadAnimation: boolean
    load: boolean
}

export const createInitialState = (): State => {
    return {
        loadAnimation: false,
        load: false,
    }
}

type Action =  
    | { type: 'animateOpen' }
    | { type: 'animateClose' }
    | { type: 'openInfo' }
    | { type: 'closeInfo' }

const reducer: Reducer<State, Action> = (state, action) => {
    switch (action.type) {
        case 'animateOpen': 
            return {
                ...state,
                loadAnimation: true,
            }
        case 'animateClose':
            return {
                ...state,
                loadAnimation: false,
            }
        case 'openInfo':
            return {
                ...state,
                load: true,
            }
        case 'closeInfo':
            return {
                ...state,
                load: false,
            }
    }
}

export { reducer }