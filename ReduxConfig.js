const INITIAL_STATE = {
    current: [],
    possible: [
        'Allie',
        'Gator',
        'Lizzie',
        'Reptar',
    ],
};

const friendReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_FRIEND':
        var newState = {...state};
        
        newState.current = [...newState.current, state.possible[action.payload]]
        
        console.warn("New state: " + JSON.stringify(newState))
        return newState
        default:
        return state
    }
};

export const AllReducers = {
  friends: friendReducer,
};

export const addFriend = friendIndex => (
    {
        type: 'ADD_FRIEND',
        payload: friendIndex,
    }
);