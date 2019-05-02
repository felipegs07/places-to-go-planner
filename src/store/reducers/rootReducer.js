import authReducer from './authReducer';
import placeReducer from './placeReducer';
import tourReducer from './tourReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    place: placeReducer,
    tour: tourReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;