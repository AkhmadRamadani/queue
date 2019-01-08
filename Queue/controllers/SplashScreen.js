import React from 'react';
import { AsyncStorage } from "react-native";
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
        AsyncStorage.getItem("name",(error,result) => {
            if (result != null) {
                 setTimeout(() => {
                    this.props.navigation.push("Second");            
                }, 2000);
            }else{
                 setTimeout(() => {
                  this.props.navigation.push("First");            
                }, 2000);
            }
        });
    }
    render = () => {
        return <SplashScreenView></SplashScreenView> 
    }
}