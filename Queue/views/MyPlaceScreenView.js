import React, { Component } from 'react';
import CardView from 'react-native-cardview';
import { View, Dimensions, Text, Alert } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import FlatList from './components/FlatListNew';
import { ScrollView } from 'react-native-gesture-handler';
import Button from './components/Button';
import { Menu,MenuProvider,MenuOption,MenuOptions,MenuTrigger } from "react-native-popup-menu";
export default class MyPlaceScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (this.props.statusPlaceData == false) {
            return <View style={[GlobalStyles.Wrapper,{backgroundColor : 'blue'}]}>
                    <View style={{justifyContent:"center", alignItems:"center", 
                    borderBottomWidth: 2, borderBottomColor: '#EDEDED', flex : 1, flexDirection : "row"}}>
                        <ImageView
                            imageSrc={require('../assets/images/myplace.png')}
                            width={Dimensions.get('window').width / 3}
                            height={7 * AppConstants.ActiveTheme.AppObjectSpacing}/>
                    </View>
                    <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                        <Text style={{ fontSize: 20 }}>Anda belum mendaftarkan tempat</Text>
                        <Text style={{ fontSize: 20 }}>Klik My Profile -> Tambah tempat</Text>
                        <Text style={{ fontSize: 20 }}>dan isi data tempat anda</Text>
                    </View>
                </View>
        }else {
        return <View>
            <View style={{borderBottomWidth: 2, borderBottomColor: '#EDEDED', flexDirection : "row"}}>
                <View style = {{flex : 0.4, padding : 5,paddingTop : 10, justifyContent : 'center',
                            alignItems : "flex-start"}}>
                    <MenuProvider style={{ flex : 1}}>
                        <Menu onSelect={value => Alert.alert(`You Clicked : ${value}`)}>
                            <MenuTrigger>
                                <ImageView  imageSrc={require('../assets/images/3dots.png')}
                                            width ={25}
                                            height = {25}>
                                </ImageView>
                            </MenuTrigger>
                            <MenuOptions>
                                <MenuOption value={"Login"} style={{flex : 1}}>   
                                    <Text style={{color: "#000",
                                            fontWeight: "bold",
                                            padding: 2,
                                            fontSize: 20}}>Login
                                    </Text>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>
                    </MenuProvider>
                </View>
                <View style={{flex : 1 , justifyContent : "center", 
                alignItems : "flex-start"}}>
                    <ImageView
                        imageSrc={require('../assets/images/myplace.png')}
                        width={Dimensions.get('window').width / 3}
                        height={7 * AppConstants.ActiveTheme.AppObjectSpacing}/>
                </View>
            </View>
            <ScrollView 
                showsVerticalScrollIndicator= {false}>
            <View style={{ 
                justifyContent: 'center',
                alignItems: 'center', marginTop: Dimensions.get('window').height / 10, marginBottom : 16}}>
                
                <CardView
                    style={{cardElevation : 1,padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing, marginTop : 8}}
                    width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (6 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    cardElevation={2}
                    cardMaxElevation={1}
                    cornerRadius={5}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{this.props.name}</Text>
                        <Text style={{ marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing, fontSize: 15 }}>{this.props.address}</Text>
                        <Text style={{ fontSize: 15 }}>Jumlah Antrean : {this.props.sisa}</Text>
                    </View>
                </CardView>
                <FlatList onItemClick={(params) => this.props.onItemClick(params)}
                            imageSrc={require('../assets/images/user.png')}
                          data={this.props.data}></FlatList>
            </View>
            </ScrollView>
        </View>
        }
    }
}
