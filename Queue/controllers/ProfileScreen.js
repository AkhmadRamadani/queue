import ProfileScreenView from '../views/ProfileScreenView'
import {responsData, getMyPlace} from '../models/getMyPlace'

import React from 'react';
import {AsyncStorage,Alert} from "react-native";
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
    LogOut = async() =>{
        Alert.alert("Logout","Anda Yakin ingin keluar ?",[
            {text: 'Yakin', onPress: () => 
                {
                    AsyncStorage.clear(()=>{
                        this.props.navigation.push("First");
                    })}
            },
            {text: 'Tidak', style : 'cancel'},
        ])
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
        AsyncStorage.getItem("photoprofile", (error,result) =>{
            if (result != null) {
                this.setState({
                    photoprofile : result
                })
            }
        });
        
    }
    componentWillMount () {
        this.data();
        AsyncStorage.getItem("id_user", (error,result) =>{
            if (result != null) {
                this.setState({
                    id_user : result
                })
            }    
            this.myPlace();
        });
    }
    myPlace = async () =>{
        await getMyPlace(this.state.id_user).then(()=>{
            this.setState({
                havePlace : responsData.status
            })
        })
    }
    
    sett = async () => {
        this.props.navigation.push("EditProfile")
    }
    make = async () => {
        this.props.navigation.push("Make")
    }

    render = () => {
        return <ProfileScreenView 
            havePlace = {this.state.havePlace}
            onPressSetting={() => this.sett()} 
            onPressMake={() => this.make()}
            LogOut={() => this.LogOut()}
            name = {this.state.name}
            photoprofile = {this.state.photoprofile}
            email = {this.state.email}
        />
    }
}