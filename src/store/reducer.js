const { createContext } = require('react');
const { actionTypes } = require('./actions');

const AppContext = createContext({});

const initialStateApp = {
    itemCount: '',
}

const reducerHome = (state= {}, action) => {
    let response;

    switch(action.type) {
        case actionTypes.SET_ITEM_COUNT:
            response = { ...state, itemCount: action.data };
            break
        default:
            return state;
    }
    return response;
}

module.exports = { initialStateApp, reducerHome, AppContext };