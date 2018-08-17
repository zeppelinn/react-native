import { SCENETYPE } from "./actions/scene";

export interface IStartImage{
    img:string,
    text:string,
}

export interface ISCENE{
    sceneType:SCENETYPE
}

export interface IStoreState{
    startImage:IStartImage,
    scene:ISCENE
}