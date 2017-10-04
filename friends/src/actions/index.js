import axios from 'axios';

export const GET_CONTACTS = 'GET_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';
export const UPDATE_CONTACTS = 'UPDATE_CONTACTS';
export const SET_EDIT_CONTACT = 'SET_EDIT_CONTACT';

export const getContacts = () => {
    // Add the code for this action
    const getContactsPromise = axios.get('http://localhost:5000/friends');
    return {
        type: GET_CONTACTS,
        payload: getContactsPromise
    }
};

export const addContact = (contact) => {
    const addContactPromise = axios.post('http://localhost:5000/new-friend', {
        name: contact.name,
        age: contact.age,
        email: contact.email
    });
    return {
        type: ADD_CONTACT,
        payload: addContactPromise
    }
};

export const removeContact = (contactID) => {
    const removeContactPromise = axios.post('http://localhost:5000/remove-friend', {
        contactID: contactID
    });
    return {
        type: REMOVE_CONTACT,
        payload: removeContactPromise
    }
};

export const editContact = (contactObj) => {
    const editContactPromise = axios.put('http://localhost:5000/update-friend', {
        index: contactObj.index,
        update: contactObj.contact
    });

    return {
        type: EDIT_CONTACT,
        payload: editContactPromise
    }
}

export const updateContacts = (promiseResult) => {
    return {
        type: UPDATE_CONTACTS,
        payload: promiseResult
    }
}

export const setEditContact = (contactObj, contactIndex) => {
    return {
        type: SET_EDIT_CONTACT,
        payload: {
            index: contactIndex,
            contact: contactObj
        }
    }
}
