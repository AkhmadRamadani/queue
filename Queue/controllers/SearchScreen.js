import React from 'react';
import SearchScreenView from '../views/SearchScreenView'

export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.content = [];
    }
    
    render = () => {
        return <SearchScreenView onPressCode={() => this.forgotCode()} />
    }
}