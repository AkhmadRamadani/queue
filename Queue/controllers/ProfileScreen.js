import ProfileScreenView from '../views/ProfileScreenView'

import React from 'react';

export default class ProfileScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }

    sett = async () => {
        this.props.navigation.push("EditProfile")
    }
    make = async () => {
        this.props.navigation.push("Make")
    }

    render = () => {
        return <ProfileScreenView 
            onPressSetting={() => this.sett()} 
            onPressMake={() => this.make()}
        />
    }
}