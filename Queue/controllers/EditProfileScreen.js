import EditProfileScreenView from '../views/EditProfileScreenView'

import React from 'react';

export default class EditProfileScreen extends React.Component {
    
    constructor(props) {

        super(props);

        this.state = {
        }

        this.content = [];
    }

    render = () => {
        return <EditProfileScreenView />
    }
}