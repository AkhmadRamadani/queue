import React from 'react';

import MyPlaceScreenView from "../views/MyPlaceScreenView";

export default class MyPlaceScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }


    render = () => {
        return <MyPlaceScreenView />
    }


}