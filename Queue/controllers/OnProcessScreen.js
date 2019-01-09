import React from 'react';

import OnProcessScreenView from "../views/OnProcessScreenView";

export default class OnProcessScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }

    selesai = async () => {
        this.props.navigation.push("Second")
    }
    dalamProcess = async () => {
        this.props.navigation.push("Second")
    }
    componentWillMount = async ()=>{
        const { navigation } = this.props;
        this.setState({
            photoprofile: navigation.getParam('photoprofile', ''),
            name: navigation.getParam('name', ''),
            kode: navigation.getParam('kode', ''),
        });
    }
    render = () => {
        return <OnProcessScreenView 
            name = {this.props.navigation.state.params.name}
            kode = {this.props.navigation.state.params.kode}
            name = {this.props.navigation.state.params.name}
            OnPressSelesai={()=> this.selesai()}
            onPressDalamProcess={()=> this.dalamProcess()}/>
    }


}