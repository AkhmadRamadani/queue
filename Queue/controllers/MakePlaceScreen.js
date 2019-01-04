import React from 'react';

import MakePlaceScreenView from "../views/MakePlaceScreenView";

export default class MakePlaceScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }

    create = async () => {
        this.props.navigation.push("Place")
    }

    render = () => {
        return <MakePlaceScreenView onPressCreate={()=> this.create()}/>
    }


}