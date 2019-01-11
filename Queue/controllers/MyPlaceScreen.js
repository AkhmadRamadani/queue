import React from 'react';
import {Alert, AsyncStorage} from "react-native";
import MyPlaceScreenView from "../views/MyPlaceScreenView";
import {responsData, getMyPlace} from '../models/getMyPlace'
import {responseOn, getPlaceQueueListOnProcess} from '../models/getMyPlaceQueueListOn'
import {responseDone,getPlaceQueueListDone} from '../models/getMyPlaceQueueListDone'
import {response, getPlaceQueueList} from '../models/getMyPlaceQueueList'
import {responseSisa, getSisaAntrean } from '../models/getSisaAntrean';
import { resetData, resetDataQueue } from "../models/resetData";
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
            refreshing : false
        }

        this.content = [];
    }
    _onRefresh = () => {
        this.setState({refreshing: true});
        this.myPlace().then(() => {
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
        AsyncStorage.getItem('id_user',(error , result)=>{
            this.setState({
                id_user : result
            })
        this.myPlace();
        this.onProcessList();
        this.doneList();
        })
    }
    myPlace = async() =>{
        await getMyPlace(parseInt(this.state.id_user)).then(()=>{
            if (responsData.status == true) {
                this.setState({
                    statusPlaceData : responsData.status, 
                    id_place : responsData.data.id_place,
                    name : responsData.data.name_place,
                    address  :responsData.data.address,
                    picture :responsData.data.picture,
                    status: responsData.data.status});
                getSisaAntrean(responsData.data.id_place).then(res=>{
                    this.setState({sisa : responseSisa.data})
                });
                getPlaceQueueList(responsData.data.id_place).then(res=>{
                    this.setState({data : response.data})
                });
            } else {
                this.setState({statusPlaceData : responsData.status});
            }
                   
        })
    }
    onProcessList = async() =>{
        await getMyPlace(parseInt(this.state.id_user)).then(()=>{
            if (responsData.status == true) {
                this.setState({
                    statusPlaceData : responsData.status, 
                    id_place : responsData.data.id_place,
                    name : responsData.data.name_place,
                    address  :responsData.data.address,
                    picture :responsData.data.picture,
                    status: responsData.data.status});
                getSisaAntrean(responsData.data.id_place).then(res=>{
                    this.setState({sisa : responseSisa.data})
                });
                getPlaceQueueListOnProcess(responsData.data.id_place).then(res=>{
                    this.setState({dataOn : responseOn.data})
                });
            } else {
                this.setState({statusPlaceData : responsData.status});
            }
                   
        })
    }
    doneList = async() =>{
        await getMyPlace(parseInt(this.state.id_user)).then(()=>{
            if (responsData.status == true) {
                this.setState({
                    statusPlaceData : responsData.status, 
                    id_place : responsData.data.id_place,
                    name : responsData.data.name_place,
                    address  :responsData.data.address,
                    picture :responsData.data.picture,
                    status: responsData.data.status});
                getSisaAntrean(responsData.data.id_place).then(res=>{
                    this.setState({sisa : responseSisa.data})
                });
                getPlaceQueueListDone(responsData.data.id_place).then(res=>{
                    this.setState({dataDone : responseDone.data})
                });
            } else {
                this.setState({statusPlaceData : responsData.status});
            }
                   
        })
    }
    onItemClick = async ( params ) => {
        this.props.navigation.push( "Process",params)
    }
    showCurrentDate (){
        day = new Date().getDay();
        date = new Date().getDate();
        month = new Date().getMonth();
        year = new Date().getFullYear();
        var days = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
        var thisDay = days[day];
        var months    = ['January','February','March','April','May','June',
                        'July','August','September','October','November','December'];
        var thisMonth = months[month];
        Alert.alert(thisDay + ' '+ date + '/'+ thisMonth + '/' + year );

    }

    hapusData (){
        Alert.alert("Reset Data" , "Anda Yakin menghapus semua data pada antrean tempat anda ? " ,[
            {text : 'Ok', onPress: () => 
                    this.resetAllData()},
            {text : "Batal" , style : 'cancel'}
        ]);
    }
    resetAllData = async() =>{
        await resetDataQueue(this.state.id_place).then(()=>{
            if (resetData.status == true) {
                Alert.alert("Data Terhapus")
                this._onRefresh();
            }else{
                Alert.alert("Gagal Menghapus Data")
            }
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
        id_place = {this.state.id_place}
        address = {this.state.address}
        picture = {this.state.picture}
        name = {this.state.name}
        data = {this.state.data}
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