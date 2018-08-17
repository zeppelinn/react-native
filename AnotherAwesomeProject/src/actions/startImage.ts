import { createAction } from 'redux-actions';
import { IStartImage, IStoreState } from '../declarations';
import { Dispatch } from 'redux';
import { changeScene, SCENETYPE } from './scene';


export const fetchStartImage = () => async (dispatch:Dispatch<IStoreState>) => {
    const response = await fetch("http://localhost:8111/start-image");
    const json:IStartImage = await response.json();
    await dispatch(receivedStartImage(json));
    setTimeout(() => {
        dispatch(changeScene(SCENETYPE.HOME_PAGE))
    }, 1500);
}



export const receivedStartImage = createAction(
    "receivedStartImage",
    (startimage:IStartImage) => startimage,
)
