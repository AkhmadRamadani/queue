import ProfileScreenView from '../views/ProfileScreenView'

import React from 'react';
import {AsyncStorage} from "react-native";
export default class ProfileScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            name : ''
        }

        this.content = [];
    }
    ActionNavigate = (Page, Params) => {
        const { push } = this.props.navigation;

        push(Page, Params);
        const {navigate} = this.props.navigation;
        navigate (Page,Params);
    }

    ActionPop = (value) => {
        this.props.navigation.pop(value)
    }

    ContentRefresh = (con) => {
        this.setState({
            content: con
        });
    }
    data (){
        AsyncStorage.getItem("name", (error,result) =>{
            if (result != null) {
                this.setState({
                    name : result
                })
            }
        });
        AsyncStorage.getItem("email", (error,result) =>{
            if (result != null) {
                this.setState({
                    email : result
                })
            }
        });
    }
    componentWillMount () {
        this.data();
    }
    sett = async () => {
        this.props.navigation.push("EditProfile")
    }
    make = async () => {
        this.props.navigation.push("Make")
    }

    render = () => {
        return <ProfileScreenView 
            onPressSetting={() => this.sett()} 
            onPressMake={() => this.make()}
            name = {this.state.name}
            email = {this.state.email}
        />
    }
}