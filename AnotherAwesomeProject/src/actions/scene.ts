import { createAction } from 'redux-actions';

export enum SCENETYPE{
    START_IMAGE,
    HOME_PAGE,
}

export const changeScene = createAction(
    "changeScene",
    (sceneType:SCENETYPE) => sceneType
)
