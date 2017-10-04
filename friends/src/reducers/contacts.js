import { GET_CONTACTS, ADD_CONTACT, REMOVE_CONTACT, UPDATE_CONTACTS } from '../actions';

import { editContact } from '../actions';

const contactsReducer = (contacts = [], action) => {
    switch(action.type) {
        case GET_CONTACTS:
            return action.payload.data;
        case ADD_CONTACT:
            return action.payload.data;
        case REMOVE_CONTACT:
            return action.payload.data;
        case UPDATE_CONTACTS:
            return action.payload.data;
        default:
            return contacts;
    }
};

export default contactsReducer;
