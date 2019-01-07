import ProfileScreenView from '../views/ProfileScreenView'

import React from 'react';

export default class ProfileScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }
    ActionNavigate = (Page, Params) => {
        const { push } = this.props.navigation;

        push(Page, Params);
        const {navigate} = this.props.navigation;
        navigate (Page,Params);
    }

    ActionPop = (value) => {
        this.props.navigation.pop(value)
    }

    ContentRefresh = (con) => {
        this.setState({
            content: con
        });
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
            name = {this.props.navigation.state.params.name}
            email = {this.props.navigation.state.params.email}
        />
    }
}