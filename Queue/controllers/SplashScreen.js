import React from 'react';
import SplashScreenView from "../views/SplashScreenView";

export default class SplashScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.content = [];
    }
    componentWillMount =()=>{
        setTimeout(() => {
             this.props.navigation.push("First");            
        }, 2000);
    }
    render = () => {
        return <SplashScreenView></SplashScreenView> 
    }
}