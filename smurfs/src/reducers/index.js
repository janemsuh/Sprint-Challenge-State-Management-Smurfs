import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL
} from '../actions';

const initialState = {
    smurfs: [
        {
            name: '',
            age: null,
            height: '',
            id: null
        }
    ],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ''
            };
        case FETCH_SMURFS_FAIL:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};