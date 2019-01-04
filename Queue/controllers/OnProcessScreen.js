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

    render = () => {
        return <OnProcessScreenView 
            OnPressSelesai={()=> this.selesai()}
            onPressDalamProcess={()=> this.dalamProcess()}/>
    }


}