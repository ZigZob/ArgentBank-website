import { combineReducers } from 'redux';
// import authReducer from '../store/slices/loggedInSlice';
// import userReducer from '../store/slices/userSlice';
// import authReducer from "./auth.reducer"
import userSlice from '../store/slices/userSlice'

const rootReducer = combineReducers({
    // auth: authReducer,
    user: userSlice,
});

export default rootReducer;