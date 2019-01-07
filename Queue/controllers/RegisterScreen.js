import RegScreen from '../views/RegisterScreenView'
import React from 'react';
import {Alert,BackHandler} from 'react-native';
import {responsData, registerFunc} from '../models/registerModels'
export default class RegisterScreen extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            name : "",
            email: "",
            password: "",
            passwordChecker : "",
        }
        this.content = [];
    }
    handlerBack = () => {
        BackHandler.goBack()
        return true
    }
    daftar = async () => {
        if (this.state.passwordChecker != this.state.password) {
            Alert.alert('Password Tidak Sama !!!');
        }
        else{
            await registerFunc(this.state.name,this.state.email,this.state.password).then(res=>{
                if (responsData.status == false){
                    Alert.alert('Gagal Daftar' ,'Mungkin email Anda sudah ada yang memakai');
                }else if(responsData.status == true){
                    Alert.alert('Success ','Login Please !!!', [
                        { text :  'OK', onPress :() => this.masuk()}
                    ],{cancelable : false});
                }
            })
        }
    }

    masuk = async () => {
        this.props.navigation.goBack();
    }

    render = () => {
        return <RegScreen 
        onPressDaftar={()=> this.daftar()} 
        onPressMasuk={()=> this.masuk()}
        nameChange={name => this.setState({name})}
        passChange = {password => this.setState({password})}
        emailChange={email => this.setState({email})}
        passChecker = {passwordChecker => this.setState({passwordChecker})}
        />
    }
}