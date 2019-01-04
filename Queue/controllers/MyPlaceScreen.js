import React from 'react';

import MyPlaceScreenView from "../views/MyPlaceScreenView";

export default class MyPlaceScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }

    process = async () => {
        this.props.navigation.push("Process")
    }

    render = () => {
        return <MyPlaceScreenView onPressProcess={()=> this.process()}/>
    }


}