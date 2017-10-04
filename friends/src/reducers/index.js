import { combineReducers } from 'redux';

import contactsReducer from './contacts';
import settingsReducer from './settings';


const rootReducer = combineReducers({
    contacts: contactsReducer,
    settings: settingsReducer
});

export default rootReducer;
