import React, { Component } from 'react';
import { Text } from 'react-native';

class Router extends Component {
    render() {
        return (
            <Text
                style={{
                    flex:1,
                    fontSize:20,
                    color:"black",
                    backgroundColor:"transparent",
                    alignSelf:"center"
                }}
            >
                This is Page Router
            </Text>
        );
    }
}
export default Router;