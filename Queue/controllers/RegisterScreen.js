import RegisterScreenView from '../views/RegisterScreenView'
import React from 'react';
export default class RegisterScreen extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }
    disableButton = () =>{
        
    }
    render = () => {
        return <RegisterScreenView />
    }
}