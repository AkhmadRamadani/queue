import React from 'react';
import { BackHandler , Alert,AsyncStorage} from 'react-native';
import { name as appName } from '../../app.json';
import {responsData,loginFunc} from '../models/loginModels'
import FirstScreen from "../views/FirstScreenView";

export default class LoginScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            email: "",
            id_user : '',
            name : '',
            photoprofile : '',
            password: "",
            
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

    saveData () {
        AsyncStorage.setItem("id_user",this.state.id_user)
        AsyncStorage.setItem("email",this.state.email)
        AsyncStorage.setItem("name",this.state.name)
        AsyncStorage.setItem("password",this.state.password)
        AsyncStorage.setItem("photoprofile",this.state.photoprofile)
    }
    //IKI SING DIGAWE NDEK ONPRESS E BUTTON NDEK FIRST SCREEN
    //PAHAMI SEK
    loginHandler = async () => {
        await loginFunc(this.state.email,this.state.password).then(res=>{
            if (responsData.status == false){
                this.setState({
                    onLogin : 0
                })
            }else if(responsData.status == true){
                this.setState({
                id_user : responsData.data.id_user,
                name : responsData.data.name,
                email  :responsData.data.email,
                password :responsData.data.password,
                photoprofile : responsData.data.photoprofile
                });
                this.saveData();

                this.props.navigation.push("Second", 
               { id_user : responsData.data.id_user,
                name : responsData.data.name,
                email  :responsData.data.email,
                password :responsData.data.password,
                photoprofile : responsData.data.photoprofile});
                
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
            onLogin = {this.state.onLogin}    
            onPress={()=> this.loginHandler()} 
            emailChange={email => this.setState({email})}
            passChange = {password => this.setState({password})}
            onPressRegister={()=> this.register()}
            onPressForgot={()=> this.forgot()} />
    }


}