import React from 'react';

import MyQueueScreenView from "../views/MyQueueScreenView";
import { responsData,getMyQueue } from "../models/myQueueList";
import { AsyncStorage,Alert } from "react-native";
export default class MyQueueScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            refreshing : false
        }

        this.content = [];
    }
    _onRefresh = () => {
        this.setState({refreshing: true});
        this.getMyQueueList().then(() => {
          this.setState({refreshing: false});
        });
    }
    componentWillMount () {
        AsyncStorage.getItem("id_user" ,(error, result)=>{
            this.setState({
                id_user : result
            })
            this.getMyQueueList();
        }) 
    }
    getMyQueueList = async () => {
        await getMyQueue(parseInt(this.state.id_user)).then(()=>{
            this.setState({data : responsData.data,
                id_queue : responsData.data.id_queue,
                name_place : responsData.data.name_place,
                address : responsData.data.address,
                picture : responsData.data.picture
            })  
        })
    }
    onItemClick = async ( params ) => {
        this.props.navigation.push( "Review",params)
        this._onRefresh();
    }
    render = () => {
        return <MyQueueScreenView refreshing={this.state.refreshing} _onRefresh = {this._onRefresh} data = {this.state.data}
        onItemClick={(params) => this.onItemClick(params)}/>
    }


}