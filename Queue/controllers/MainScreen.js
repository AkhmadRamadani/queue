import React from 'react';

import MainScreenView from "../views/MainScreenView";

export default class MainScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }

    Click = async () => {
        this.props.navigation.push("Take")
    }

    render = () => {
        return <MainScreenView onPressClick={() => this.Click()}/>
    }


}