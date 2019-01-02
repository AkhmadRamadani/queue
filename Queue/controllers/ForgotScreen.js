import React from 'react';
import ForgotPassScreen from '../views/ForgotScreenView'

export default class ForgotScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.content = [];
    }
    disableButton = () => {

    }

    forgotCode = async () => {
        this.props.navigation.push("ForgotCodeView");
    }

    render = () => {
        return <ForgotPassScreen onPressCode={() => this.forgotCode()} />
    }
}