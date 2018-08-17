import { createAction } from 'redux-actions';
import { IStartImage, IStoreState } from '../declarations';
import { Dispatch } from 'redux';


export const fetchStartImage = () => async (dispatch:Dispatch<IStoreState>) => {
    const response = await fetch("http://localhost:8111/start-image");
    const json:IStartImage = await response.json();

    // fetch('http://localhost:8111/start-image').then(function(response){
    //     if(response.status != 200){
    //         console.log('fetch failed: ', response.status);
    //         return ;
    //     }
    //     response.json().then(function(data){
            
    //     })
    // })

    dispatch(receivedStartImage(json));
}



export const receivedStartImage = createAction(
    "receivedStartImage",
    (startimage:IStartImage) => startimage,
)
