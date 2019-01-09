import React from 'react';
import {Alert, AsyncStorage} from "react-native";
import TakeQueueScreenView from "../views/TakeQueueScreenView";
import {responseSisa, getSisaAntrean} from '../models/getSisaAntrean'
import {responsData , takeQueue  } from "../models/takeQueue";
import {responseKode , getOnProcessKode  } from "../models/getOnProcessKode";
export default class TakeQueueScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            id: '',
            name : '',
            alamat : '',
            kode : '',
            sisa : '' 
        }

        this.content = [];
    }
    componentWillMount = () => {
        const { navigation } = this.props;
        this.setState({
            id: navigation.getParam('id_place', ''),
            name: navigation.getParam('name_place', ''),
            alamat : navigation.getParam('address', '')
        });
        AsyncStorage.getItem("id_user",(error,result)=>{
            this.setState({
                id_user : result
            })
        })
        this.getSisa();
        this.getKode();
    }
    take = async () =>{
        await takeQueue(this.props.navigation.state.params.id , parseInt (this.state.id_user))
        .then(res=>{
            if (responsData.status == true) {
                this.props.navigation.push('Review',{
                    name_place : this.props.navigation.state.params.name,
                    address : this.props.navigation.state.params.alamat,
                    id : this.props.navigation.state.params.id,
                    kode : responsData.data
                });
        
            } else {
                Alert.alert("Gagal")
            }
                   
        })
        
    }
    getSisa = async () =>{
        await getSisaAntrean(this.props.navigation.state.params.id).then(()=>{
            this.setState({sisa : responseSisa.data})
        })
        Alert.alert(this.state.sisa)
    }
    getKode = async() =>{
        await getOnProcessKode(this.props.navigation.state.params.id)
        .then(res=>{
            this.setState({kode : responseKode.data});
        });
        Alert.alert(this.state.kode)
    }
    back = async () => {
        this.props.navigation.goBack(null);
    }

    render = () => {
        return <TakeQueueScreenView
            onPressTake={()=>this.take()}
            id = {this.props.navigation.state.params.id}
            alamat = {this.props.navigation.state.params.alamat}
            name = {this.props.navigation.state.params.name} 
            sisa = {this.state.sisa}
            kode = {this.state.kode}
            onPressBack={()=> this.back()}/>
    }


}