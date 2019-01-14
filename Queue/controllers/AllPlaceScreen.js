import AllPlaceView from '../views/AllPlaceView'
import { responsData,getMyPlace } from "../models/getMyPlace";
import React from 'react';
import {AsyncStorage} from "react-native";
export default class AllPlaceScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            name : '',
            refreshing : false,
        }

        this.content = [];
    }
    _onRefresh = () => {
        this.setState({refreshing: true});
        this.myPlace().then(() => {
          this.setState({refreshing: false});
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
    myPlace = async() =>{
        await getMyPlace(parseInt(this.state.id_user)).then(()=>{
            if (responsData.status == true) {
                this.setState({
                    data : responsData.data,
                    statusPlaceData : responsData.status, 
                    id_place : responsData.data.id_place,
                    name : responsData.data.name_place,
                    address  :responsData.data.address,
                    picture :responsData.data.picture,
                    status: responsData.data.status});
                }
            }
        )
    }
    toMyPlace (params) {
        this.props.navigation.push("MyPlace",params)
    }
    render = () => {
        return <AllPlaceView 
            refreshing = {this.state.refreshing}
            _onRefresh = {()=>this._onRefresh()}
            data = {this.state.data}
            status = {this.state.statusPlaceData}
            toMyPlace = {(params)=>this.toMyPlace(params)}
        />
    }
}