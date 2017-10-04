import { EDIT_CONTACT, SET_EDIT_CONTACT } from '../actions';

import { updateContacts } from '../actions';

const settingsReducer = (settings = {
    currentContact: {
        index: null,
        contact: {
            name: '',
            email: '',
            age: 0,
            userDefined: {}
        }
    },
    editReady: false
}, action) => {
    switch(action.type) {
        case SET_EDIT_CONTACT:
            const newSet = Object.assign(settings, {currentContact: {index: action.payload.index, contact: action.payload.contact}, editReady: true});
            console.log(newSet);
            return newSet;
        default:
            console.log('bla');
            return settings;
    }
};

export default settingsReducer;
