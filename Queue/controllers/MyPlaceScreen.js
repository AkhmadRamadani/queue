import React from 'react';
import {Alert, AsyncStorage} from "react-native";
import MyPlaceScreenView from "../views/MyPlaceScreenView";
import {responsData, getMyPlaceData} from '../models/getMyPlaceData'
import {responseOn, getPlaceQueueListOnProcess} from '../models/getMyPlaceQueueListOn'
import {responseDone,getPlaceQueueListDone} from '../models/getMyPlaceQueueListDone'
import {response, getPlaceQueueList} from '../models/getMyPlaceQueueList'
import {responseSisa, getSisaAntrean } from '../models/getSisaAntrean';
import { resetData, resetDataQueue } from "../models/resetData";
import { responseStatus, openOrClose } from "../models/openClosePlace";
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
            refreshing : false,
        }

        this.content = [];
    }
    _onRefresh = () => {
        this.setState({refreshing: true});
        this.waitingList().then(() => {
          this.setState({refreshing: false});
        });
    }
    _onRefreshOn = () => {
        this.setState({refreshing: true});
        this.onProcessList().then(() => {
          this.setState({refreshing: false});
        });
    }
    _onRefreshDone = () => {
        this.setState({refreshing: true});
        this.doneList().then(() => {
          this.setState({refreshing: false});
        });
    }
    componentWillMount = () => {
        const { navigation } = this.props;
        this.setState({
            id: navigation.getParam('id_place', ''),
            name: navigation.getParam('name_place', ''),
            alamat : navigation.getParam('address', ''),
            picture : navigation.getParam('picture', ''),
            status : navigation.getParam('status', '')
        });
        AsyncStorage.getItem('id_user',(error , result)=>{
            this.setState({
                id_user : result
            })
        })
        this.sisa();
        this.waitingList();
        this.onProcessList();
        this.doneList();
    }
    sisa = async() => {
        await getSisaAntrean(this.props.navigation.state.params.id).then(res=>{
            this.setState({sisa : responseSisa.data})
        });
    }
    waitingList= async()=>{
        await getPlaceQueueList(this.props.navigation.state.params.id).then(()=>{
            this.setState({data : response.data})
        });
    }
    onProcessList= async()=>{
        await getPlaceQueueListOnProcess(this.props.navigation.state.params.id).then(()=>{
            this.setState({dataOn : responseOn.data})
        });
    }
    doneList =async()=>{
        await getPlaceQueueListDone(this.props.navigation.state.params.id).then(()=>{
            this.setState({dataDone : responseDone.data})
        });
    }
    onItemClick = async ( params ) => {
        this.props.navigation.push( "Process",params)
    }
    
    hapusData (){
        Alert.alert("Reset Data" , "Anda Yakin menghapus semua data pada antrean tempat anda ? " ,[
            {text : 'Ok', onPress: () => 
                    this.resetAllData()},
            {text : "Batal" , style : 'cancel'}
        ]);
    }
    resetAllData = async() =>{
        await resetDataQueue(this.props.navigation.state.params.id).then(()=>{
            if (resetData.status == true) {
                Alert.alert("Data Terhapus")
                this._onRefresh();
            }else{
                Alert.alert("Gagal Menghapus Data")
            }
        })
    }
    openPlace = async()=>{
        await openOrClose('open',this.props.navigation.state.params.id).then(()=>{
            this.setState({
                status : 'open'
            })
        })
    }
    
    closePlace = async()=>{
        await openOrClose('close',this.props.navigation.state.params.id).then(()=>{
            this.setState({
                status : 'close'
            })
        })
    }
    refreshDataPress (){
        this._onRefresh();
        this._onRefreshDone();
        this._onRefreshOn();
    }
    settings = () => {
        this.props.navigation.push("AddImage",{
            id_place : this.state.id_place
        })
    }
    render = () => {
        return <MyPlaceScreenView onPressProcess={()=> this.hapusData()} 
        id_user ={this.state.id_user}
        id = {this.props.navigation.state.params.id}
        picture = {this.props.navigation.state.params.picture}
        address = {this.props.navigation.state.params.alamat}
        name = {this.props.navigation.state.params.name}
        status = {this.state.status}
        data = {this.state.data}
        openPlace = {()=>this.openPlace()}
        closePlace = {()=>this.closePlace()}
        dataOn = {this.state.dataOn}
        dataDone = {this.state.dataDone}
        refreshDataPress={()=>this.refreshDataPress()}
        settings={()=>this.settings()}
        sisa = {this.state.sisa}
        _onRefresh={this._onRefresh}
        _onRefresh2={this._onRefreshOn}
        _onRefreshDone={this._onRefreshDone}
        refreshing = {this.state.refreshing}
        onItemClick={(params) => this.onItemClick(params)}
        statusPlaceData = {this.state.statusPlaceData}
        />
    }


}