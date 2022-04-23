import { INCREMENT, DECREMENT } from "./types";

const initialState = {
    likes: 5,
    dislike: 10
}

export const likesReducer = (state = initialState, action) => {

    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                likes: state.likes + 1
            }
        case DECREMENT:
            return{
                ...state,
                dislike: state.dislike - 1
            }
        default:
            return state;
    }
  
}