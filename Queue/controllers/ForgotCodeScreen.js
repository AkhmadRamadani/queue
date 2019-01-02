import React from 'react';
import ForgotCode from '../views/ForgotCodeView'

export default class ForgotCodeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.content = [];
    }
    disableButton = () => {

    }

    newPass = async () => {
        this.props.navigation.push("NewPassword");
    }

    render = () => {
        return <ForgotCode onPressNew={()=> this.newPass()}/>
    }
}