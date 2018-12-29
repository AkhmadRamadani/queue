import React from 'react';
import { BackHandler } from 'react-native';
import { name as appName } from '../../app.json';

import FirstScreen from "../views/FirstScreenView";

export default class LoginScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.content = [];
    }

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.handlerBack);
    }

    componentWillUnmount = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handlerBack);
    }

    _onBackPress = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handlerBack)
    }

    handlerBack = () => {
        BackHandler.exitApp()
        return true
    }

    //IKI SING DIGAWE NDEK ONPRESS E BUTTON NDEK FIRST SCREEN
    //PAHAMI SEK
    loginHandler = async () => {
        this.props.navigation.push("Second");
    }
    register = async () => {
        this.props.navigation.push("RegisterView");
    }

    render = () => {
        return <FirstScreen onPress={()=> this.loginHandler()} onPressRegister={()=> this.register()} />
    }


}