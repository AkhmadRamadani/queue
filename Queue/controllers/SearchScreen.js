import React from 'react';
import SearchScreenView from '../views/SearchScreenView'
import { responsData,searchPlace } from "../models/searchPlace";
export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search : null,
        }
        this.content = [];
    }
    onPressClick(params){
        this.props.navigation.push("Take",params)
    }
    dataSearch = async() =>{
        await searchPlace(this.state.search).then(()=>{
            this.setState({data : responsData.data,
            status : responsData.status})
        })
    }
    render = () => {
        return <SearchScreenView 
        data = {this.state.data}
        status = {this.state.status}
        onPressSearch={() => this.dataSearch()} 
        onPressClick={(params) => this.onPressClick(params)} 
        search={search => this.setState({search})}/>
    }
}