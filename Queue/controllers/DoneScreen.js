import React from 'react';
import DoneScreenView from "../views/DoneScreenView";

export default class DoneScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.content = [];
    }

    selesaii = async () => {
        this.props.navigation.push("Second")
    }

    render = () => {
        return <DoneScreenView 
                onPressSelesaii={() => this.selesaii()} />
    }


}