import { fromJS } from 'immutable';

const defaultState = fromJS({
    test: 'hello Header'
});

export default (state = defaultState, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
};