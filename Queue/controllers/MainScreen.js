import React from 'react';

import MainScreenView from "../views/MainScreenView";
import {responsData, dataPlace} from '../models/dataPlaceModels'

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

    render = () => {
        return <MainScreenView onPressClick={() => this.Click()} data = {this.state.data}/>
    }


}