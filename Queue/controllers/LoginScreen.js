import React from 'react';
import { BackHandler , Alert} from 'react-native';
import { name as appName } from '../../app.json';
import {responsData,loginFunc} from '../models/loginModels'
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
        await loginFunc(this.state.email,this.state.password).then(res=>{
            if (responsData.status == false){
                Alert.alert('Failed Login');
            }else if(responsData.status == true){
                this.props.navigation.push("Second", 
               {   id_user : responsData.data.id_user,
                    name : responsData.data.name,
                   email  :responsData.data.email,
                password :responsData.data.password});
            
            }
        })
    }
    register = async () => {
        this.props.navigation.push("RegisterView");
    }
    forgot = async () => {
        this.props.navigation.push("ForgotView");
    }

    render = () => {
        return <FirstScreen     
            onPress={()=> this.loginHandler()} 
            emailChange={email => this.setState({email})}
            passChange = {password => this.setState({password})}
            onPressRegister={()=> this.register()}
            onPressForgot={()=> this.forgot()} />
    }


}