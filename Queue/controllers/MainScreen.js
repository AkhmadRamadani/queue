import React from 'react';

import MainScreenView from "../views/MainScreenView";
import {  Alert} from "react-native";
import {responsData, dataPlace} from '../models/dataPlaceModels'
import {response, getSisaAntrean} from '../models/getSisaAntrean'

export default class MainScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }
    componentWillMount = () => {
        this.dataPlace();
    }
    dataPlace = async() =>{
        await dataPlace().then(res => {
            this.setState({data : responsData.data});
        });
    }

    Click = async () => {
        this.props.navigation.push("Take")
    }
    onItemClick = async ( params ) => {
        this.props.navigation.push( "Take",params)
    }
    Search = async () => {
        this.props.navigation.push("Search")
    }
    render = () => {
        return <MainScreenView
            onPressClick={() => this.Click()} data = {this.state.data}
            sisaAntrean = {this.state.sisaAntrean}
            onPressSearch={()=>this.Search()}
            onItemClick={(params) => this.onItemClick(params)}/>
    }


}