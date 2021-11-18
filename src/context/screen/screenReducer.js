import { CHANGE_SCREEN} from '../types';


export const screenReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_SCREEN:
            return action.payload
        default:
            return state
    }
}


// Альтернативная запись!!!!
// import { CHANGE_SCREEN } from '../types'

// const handlers = {
//   [CHANGE_SCREEN]: (state, payload) => payload,
//   DEFAULT: state => state
// }

// export const screenReducer = (state, action) => {

//     console.log('actionactionaction',action);
//   const handler = handlers[action.type] || handlers.DEFAULT
//   return handler(state, action.payload)
// }