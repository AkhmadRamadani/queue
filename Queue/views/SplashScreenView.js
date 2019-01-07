import React,{Component} from 'react';
import {View} from 'react-native';
import ImageView from './components/ImageView';
export default class SplashScreenView extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }
        
    }
    render() {
        return <View style={{flex : 1 , backgroundColor : '#ecb84a',
                            justifyContent : "center",alignContent:"center",alignItems:'center'}}>
                <ImageView 
                height={100}
                width={100}
                imageSrc ={require('../assets/images/Logo12.png')}></ImageView>
        </View>}
}