import { ISCENE, IStoreState } from '../declarations';
import { SCENETYPE } from '../actions/scene';
import { Action, handleActions } from 'redux-actions';

const defaultScene:ISCENE = {
    sceneType:SCENETYPE.START_IMAGE
}

export default handleActions({
    changeScene:(state:IStoreState, action:Action<ISCENE>) => ({
        sceneType: action.payload;
    })
}, defaultScene);
