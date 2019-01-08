import React from 'react';
import {Alert, AsyncStorage} from "react-native";
import MyPlaceScreenView from "../views/MyPlaceScreenView";
import {responsData, getMyPlace} from '../models/getMyPlace'
import {response, getPlaceQueueList} from '../models/getMyPlaceQueueList'

export default class MyPlaceScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = { 
            done: false,
            statusPlaceData : null,
            id_place : '',
            name : '',
            address : '',
            picture : '',
            status : '',
            nameOfQueuer : '',
            queue_code : '',
            photoProfile : '',
            name_acc : "",
        }

        this.content = [];
    }
    componentWillMount = () => {
        AsyncStorage.getItem('id_user',(error , result)=>{
            this.setState({
                id_user : result
            })
        this.myPlace();
        })
    }
    myPlace = async() =>{
        await getMyPlace(parseInt(this.state.id_user)).then(()=>{
            if (responsData.status == true) {
                this.setState({
                    statusPlaceData : responsData.status, 
                    id_place : responsData.data.id_place,
                    name : responsData.data.name,
                    address  :responsData.data.address,
                    picture :responsData.data.picture,
                    status: responsData.data.status});
                getPlaceQueueList(responsData.data.id_place).then(res=>{
                    this.setState({data : response.data})
                });
            } else {
                this.setState({statusPlaceData : responsData.status});
            }
                   
        })
    }
    process = async () => {
        this.props.navigation.push("Process")
    }

    render = () => {
        return <MyPlaceScreenView onPressProcess={()=> this.process()} 
        id_user ={this.state.id_user}
        id_place = {this.state.id_place}
        address = {this.state.address}
        name = {this.state.name}
        data = {this.state.data}
        statusPlaceData = {this.state.statusPlaceData}
        />
    }


}