import React from 'react';

import EmptyMyPlaceScreenView from "../views/EmptyMyPlaceScreenView";

export default class EmptyMyPlaceScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }


    render = () => {
        return <EmptyMyPlaceScreenView />
    }


}