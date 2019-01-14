import React, { Component } from 'react';
import CardView from 'react-native-cardview';
import { View, Dimensions, Text, Alert , TouchableOpacity} from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import FlatList from './components/FlatListNew';
import FlatListOn from './components/FlatListOnProcess';
import { ScrollView } from 'react-native-gesture-handler';
import Button from './components/Button';
import { Menu,MenuProvider,MenuOption,MenuOptions,MenuTrigger } from "react-native-popup-menu";
export default class MyPlaceScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kondisi : 1,
            status : 0,
        };
    }

    render() {
        if (this.props.statusPlaceData == false) {
            return <View style={[GlobalStyles.Wrapper]}>
                    <View style ={{ width : Dimensions.get("window").width,
                                    height : Dimensions.get("window").height/10, paddingVertical : 3 ,
                                    borderBottomWidth : 2, borderBottomColor : "#ededed"}}>
                        <View style={{ flex : 1,flexDirection : "row",
                                    width : Dimensions.get("window").width, 
                                    height : Dimensions.get("window").height/12.5 , alignContent :'center',
                                    justifyContent : 'center', alignItems :'flex-start'}}>
                           <ImageView
                            imageSrc={require('../assets/images/myplace.png')}
                            width={Dimensions.get('window').width / 3}
                            height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                            />
                        </View>
                    </View>
                    
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing }}>
                        <Text style={{ fontSize: 20 }}>Anda belum mendaftarkan tempat</Text>
                        <Text style={{ fontSize: 20 }}>Klik My Profile -> Tambah tempat</Text>
                        <Text style={{ fontSize: 20 }}>dan isi data tempat anda</Text>
                    </View>
                </View>
        }else if (this.props.statusPlaceData != false){
        return <View>
            <View style={{height : Dimensions.get('window').height/ 10,
                        flexDirection : 'row',borderBottomWidth: 2, justifyContent : 'center',borderBottomColor: '#EDEDED'}}>
                    <View style={{flex : 0.225, alignItems : 'flex-start',justifyContent : "flex-start",
                            marginLeft : 16, marginBottom : 10}}>
                            <TouchableOpacity activeOpacity ={0.5} 
                                              onPress={()=>this.props.onPressProcess()}>
                                <ImageView
                                    imageSrc={require('../assets/images/refresh.png')}
                                    width={Dimensions.get('window').width / 14}
                                    height={Dimensions.get('window').height / 10}
                                    />
                            </TouchableOpacity>
                    </View>
                    <View style={{flex : 1, alignItems : "center"}}>
                        <ImageView
                            imageSrc={require('../assets/images/myplace.png')}
                            width={Dimensions.get('window').width / 3}
                            height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                            />
                    </View>
                    <View style={{flex : 0.225, alignItems : 'flex-end',justifyContent : "flex-start",
                            marginRight : 16, marginBottom : 10}}>
                            <TouchableOpacity activeOpacity ={0.5} 
                                              onPress={()=>this.props.settings()}>
                                <ImageView
                                    imageSrc={require('../assets/images/settings.png')}
                                    width={Dimensions.get('window').width / 14}
                                    height={Dimensions.get('window').height / 10}
                                    />
                            </TouchableOpacity>
                    </View>
                </View>
            <ScrollView 
                showsVerticalScrollIndicator= {false}>
            <View style={{ 
                justifyContent: 'center',
                alignItems: 'center', flex : 1, 
                marginBottom : Dimensions.get("window").width/ 4}}>
                
                <CardView
                    style={{cardElevation : 1,padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing,
                            marginTop : 16, marginBottom : 4}}
                    width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (6 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    cardElevation={2}
                    cardMaxElevation={1}
                    cornerRadius={5}>
                    {(()=>{
                        if (this.props.status == 'open') {
                            return (
                                <View style={{flex :1 ,justifyContent : 'flex-start', 
                                alignItems :'flex-start'}}>
                                    <TouchableOpacity onPress={this.props.closePlace}>
                                        <View style={{width : 56, height : 24, justifyContent : 'center', alignItems : 'center', 
                                                backgroundColor :'#2ecc71',
                                                borderRadius : 12, marginRight : 8}}>
                                                    <Text style = {{color : '#fff'}}>
                                                        OPEN
                                                    </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }else if(this.props.status == 'close'){
                            return(
                                <View style={{flex :1 ,justifyContent : 'flex-start', 
                                alignItems :'flex-start'}}>
                                    <TouchableOpacity onPress={this.props.openPlace}>
                                        <View style={{width : 56, height : 24, justifyContent : 'center', alignItems : 'center', 
                                                backgroundColor :'#e74c3c',
                                                borderRadius : 12, marginRight : 8}}>
                                                    <Text style = {{color : '#fff'}}>
                                                        CLOSE
                                                    </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                            
                        }
                    })()}
                   
                    
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{this.props.name}</Text>
                        <Text style={{ marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing, fontSize: 15 }}>{this.props.address}</Text>
                        <Text style={{ fontSize: 15 }}>Jumlah Antrean : {this.props.sisa}</Text>
                    </View>
                    <View style={{flex : 1,justifyContent : 'flex-end', 
                        alignItems : 'flex-end'}}>
                        <TouchableOpacity activeOpacity ={0.6} onPress={this.props.refreshDataPress}>
                            <ImageView
                                imageSrc={require('../assets/images/update.png')}
                                width={Dimensions.get("window").width / 13}
                                height = {Dimensions.get("window").height / 18}>
                            </ImageView>
                        </TouchableOpacity>
                    </View>
                </CardView>
                <CardView style={{cardElevation : 1,padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing,
                            marginTop : 4, marginBottom : 8}}
                    width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault}
                    cardElevation={2}
                    cardMaxElevation={1}
                    cornerRadius={5}>
                    <View style={{flex : 1, flexDirection : 'row', justifyContent :'center', alignItems : 'center'}}>
                        
                        <View style={{flex : 1, justifyContent :'center', alignItems : 'center'}}>
                            <TouchableOpacity activeOpacity ={0.6} onPress={()=>{
                                this.setState({
                                    kondisi : 1
                                }),this.props.refreshDataPress
                            }}>
                                <ImageView
                                    imageSrc={require('../assets/images/antri.png')}
                                    width={Dimensions.get("window").width / 13}
                                    height = {Dimensions.get("window").height / 18}>
                                </ImageView>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex : 1, justifyContent :'center', alignItems : 'center'}}>
                            <TouchableOpacity activeOpacity ={0.6} onPress={()=>{
                                this.setState({
                                    kondisi : 2
                                }),this.props._onRefresh2
                            }}>
                                <ImageView
                                    imageSrc={require('../assets/images/onproses.png')}
                                    width={Dimensions.get("window").width / 13}
                                    height = {Dimensions.get("window").height / 18}>
                                </ImageView>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex : 1, justifyContent :'center', alignItems : 'center'}}>
                            <TouchableOpacity activeOpacity ={0.6} onPress={()=>{
                                this.setState({
                                    kondisi : 3
                                }),this.props._onRefreshDone
                            }}>
                                <ImageView
                                    imageSrc={require('../assets/images/done.png')}
                                    width={Dimensions.get("window").width / 13}
                                    height = {Dimensions.get("window").height / 18}>
                                </ImageView>
                            </TouchableOpacity>
                        </View>
                    </View>
                </CardView>
                {(()=>{
                    if (this.state.kondisi == 1) {
                        return(
                            <View style={{flex : 1}}>
                                <FlatList   _onRefresh={this.props._onRefresh}
                                refreshing = {this.props.refreshing}
                                onItemClick={(params) => this.props.onItemClick(params)}
                                imageSrc={require('../assets/images/user.png')}
                                data={this.props.data}></FlatList>
                            </View>
                        )
                    }else if (this.state.kondisi == 2) {
                        return(
                            <View style={{flex : 1}}>
                                <FlatList _onRefresh={this.props._onRefresh2}
                                refreshing = {this.props.refreshing}
                                onItemClick={(params) => this.props.onItemClick(params)}
                                imageSrc={require('../assets/images/user.png')}
                                data={this.props.dataOn}></FlatList>
                            </View>
                        )
                    }else if (this.state.kondisi == 3) {
                        return(
                            <View style={{flex : 1}}>
                                <FlatList _onRefresh={this.props._onRefreshDone}
                                refreshing = {this.props.refreshing}
                                onItemClick={(params) => this.props.onItemClick(params)}
                                imageSrc={require('../assets/images/user.png')}
                                data={this.props.dataDone}></FlatList>
                            </View>
                        )
                    }
                })()}
            </View>
            </ScrollView>
        </View>
        }
    }
}
