import { combineReducers } from "redux";
import startImage from './startImageReducer'
import scene from './scene';

export default combineReducers({
    startImage,
    scene
});