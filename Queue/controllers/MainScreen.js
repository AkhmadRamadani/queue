import React from 'react';

import MainScreenView from "../views/MainScreenView";

export default class MainScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }


    render = () => {
        return <MainScreenView />
    }


}