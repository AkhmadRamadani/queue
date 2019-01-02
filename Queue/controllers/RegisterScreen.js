import RegScreen from '../views/RegisterScreenView'
import React from 'react';
export default class RegisterScreen extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }
    
    daftar = async () => {
        this.props.navigation.push("First");
    }

    masuk = async () => {
        this.props.navigation.push("LoginView");
    }

    render = () => {
        return <RegScreen onPressDaftar={()=> this.daftar()} onPressMasuk={()=> this.masuk()}/>
    }
}