import EditProfileScreenView from '../views/EditProfileScreenView'

import React from 'react';
import { Keyboard } from 'react-native';

export default class EditProfileScreen extends React.Component {
    
    constructor(props) {

        super(props);

        this.state = {
            toScroll: false,
        }

        this.content = [];
    }

    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    
    _keyboardDidShow = () => {
        this.setState({ toScroll: true });
    }
    
    _keyboardDidHide = () => {
        this.setState({ toScroll: false });
    }

    back = async () => {
        this.props.navigation.goBack(null);
    }

    edit = async () => {
        this.props.navigation.push("Profil")
    }

    render = () => {
        const { toScroll } = this.state;
        return <EditProfileScreenView onPressBack={()=> this.back()}
        scrollEnabled={toScroll} onPressEdit={()=> this.edit()}/>
    }
}