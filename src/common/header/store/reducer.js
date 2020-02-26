import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    test: 'hello Header'
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGHE_TEST:
            return state.set('test', 'Header hello');
        default:
            return state;
    }
};