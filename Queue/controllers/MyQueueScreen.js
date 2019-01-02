import React from 'react';

import MyQueueScreenView from "../views/MyQueueScreenView";

export default class MyQueueScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }


    render = () => {
        return <MyQueueScreenView />
    }


}