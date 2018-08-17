import React from 'react';
import { Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { IStartImage, IStoreState } from '../../declarations';
import { fetchStartImage } from '../../actions/startImage';

// 将组件中的属性与state绑定
interface IStateProps {
    startImage:IStartImage
}

// 将组件中的属性与action绑定
interface IDispatchProps{
    fetchStartImage: () => void
}

// 组件自身的属性
interface IOwnProps{

}

// const mapStateToProps = (state:IStoreState) => ({
//     startImage:state.startImage,
// })

type IProps = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps = (state:IStoreState) => ({
    startImage:state.startImage,
})

const mapDispatchToProps = {
    fetchStartImage
}


export class StartImage extends React.Component<IProps, {}>{

    componentDidMount(){
        this.props.fetchStartImage();
    }

    render(){
        return (
            <Image
                source={{uri:this.props.startImage.img}}
                style={{flex:1}}
            >
                <Text
                    style={{
                        position:"absolute",
                        bottom:20,
                        color:"white",
                        backgroundColor:"transparent",
                        alignSelf:"center",
                        fontSize:16,
                    }}    
                >
                    {this.props.startImage.text}
                </Text>
            </Image>
        )
    }

}


export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(StartImage);