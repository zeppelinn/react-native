import { handleActions, Action } from "redux-actions";
import { IStartImage } from '../declarations';

const defaultValue = {
    text: "© HaHa",
    img: "https://ooo.0o0.ooo/2017/06/16/5942e6866f7ef.jpg"
}
export default handleActions(
    {
        receivedStartImage:(state:IStartImage, action:Action<IStartImage>) => action.payload
    },
    defaultValue
);