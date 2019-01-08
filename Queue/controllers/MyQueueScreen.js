import React from 'react';

import MyQueueScreenView from "../views/MyQueueScreenView";
import { responsData,getMyQueue } from "../models/myQueueList";
import { AsyncStorage,Alert } from "react-native";
export default class MyQueueScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }

    componentWillMount = () => {
        AsyncStorage.getItem("id_user" ,(error, result)=>{
            this.setState({
                id_user : result
            })
            this.getMyQueueList();
        })
        
    }
    getMyQueueList = async () => {
        await getMyQueue(parseInt( this.state.id_user)).then(()=>{
            this.setState({data : responsData.data});            
        })
        Alert.alert(JSON.stringify(this.state.data))
    }
    render = () => {
        return <MyQueueScreenView data={this.state.data}/>
    }


}