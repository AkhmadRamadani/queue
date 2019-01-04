import React from 'react';

import TakeQueueScreenView from "../views/TakeQueueScreenView";

export default class MainScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }

    back = async () => {
        this.props.navigation.goBack(null);
    }

    render = () => {
        return <TakeQueueScreenView onPressBack={()=> this.back()}/>
    }


}