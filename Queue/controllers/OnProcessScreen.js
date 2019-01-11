import React from 'react';
import { Alert } from "react-native";
import OnProcessScreenView from "../views/OnProcessScreenView";
import { responsData ,updateToOn } from "../models/statusOnQueue";
import { responseDone ,updateToDone } from "../models/doneStatus";
export default class OnProcessScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }
    componentWillMount (){
        const { navigation } = this.props;
        this.setState({
            id: navigation.getParam('id_place', ''),
            name: navigation.getParam('name', ''),
            kode : navigation.getParam('kode', '')
        });
    }
    selesai = async () => {
        this.props.navigation.push("selesai")
    }
    updateToOn = async() =>{
        await updateToOn(this.state.kode).then(()=>{
            this.props.navigation.goBack();
        })
    }
    updateToDone = async() =>{
        await updateToDone(this.state.kode).then(()=>{
            this.props.navigation.goBack();
        })
    } 
    kembali = async () => {
        this.props.navigation.goBack()
    }

    render = () => {
        return <OnProcessScreenView 
            kode = {this.state.kode}
            name = {this.state.name}
            OnPressSelesai={()=> this.updateToDone()}
            updateToOn={()=> this.updateToOn()}
            kembali={()=> this.kembali()}/>
    }


}