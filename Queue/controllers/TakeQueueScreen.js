import React from 'react';
import {Alert, AsyncStorage} from "react-native";
import TakeQueueScreenView from "../views/TakeQueueScreenView";
import {response, getSisaAntrean} from '../models/getSisaAntrean'
import {responsData , takeQueue  } from "../models/takeQueue";
import {responseKode , getOnProcessKode  } from "../models/getOnProcessKode";
export default class TakeQueueScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            id: '',
            name : '',
            alamat : '' ,
            kode : '',
            sisa : ''
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
    componentWillMount = () => {
        const { navigation } = this.props;
        this.setState({
            id: navigation.getParam('id_place', ''),
            name: navigation.getParam('name', ''),
            alamat : navigation.getParam('address', '')
        });
        this.data();
        this.getSisa();
        this.getKode();
    }
    data =()=>{
        AsyncStorage.getItem("id_user",(error,result)=>{
            this.setState({
                id_user : result
            })
        })
    }
    take = async () =>{
        await takeQueue(this.props.navigation.state.params.id , parseInt (this.state.id_user))
        .then(res=>{
            if (responsData.status == true) {
                Alert.alert("OK")
            } else {
                Alert.alert("Gagal")
            }
                   
        })
    }
    getSisa = async () =>{
        await getSisaAntrean(this.props.navigation.state.params.id).then(()=>{
            this.setState({
                sisa : response.data
            })
        })
        Alert.alert(this.state.sisa)
    }
    getKode = async() =>{
        await getOnProcessKode(this.props.navigation.state.params.id)
        .then(res=>{
            this.setState({
               kode : responseKode.data
            });
        });
        Alert.alert(this.state.kode)
    }
    back = async () => {
        this.props.navigation.goBack(null);
    }

    render = () => {
        return <TakeQueueScreenView
            onPressTake={()=>this.take()} 
            sisa = {this.state.sisa}
            kode = {this.state.kode}
            id = {this.props.navigation.state.params.id}
            alamat = {this.props.navigation.state.params.alamat}
            name = {this.props.navigation.state.params.name}
            onPressBack={()=> this.back()}/>
    }


}