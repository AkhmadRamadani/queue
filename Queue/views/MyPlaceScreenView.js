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

export default class MyPlaceScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [
                {   key: "1",
                    nomor: "A002",
                    nama: "Ariana Grande"
                },
                {
                    key: "2",
                    nomor: "A003",
                    nama: "Amelia Putri"
                },
                {
                    key: "3",
                    nomor: "A004",
                    nama: "Amelia Lestari"
                },
                {
                    key: "4",
                    nomor: "A005",
                    nama: "Ummu Cholifatul Latifah"
                }
            ]
        };
        // Alert.alert (this.props.statusPlaceData);
        
    }

    render() {
        if (this.props.statusPlaceData == false) {
            return <View style={[GlobalStyles.Wrapper]}>
                    <View style={{justifyContent:"center", alignItems:"center", borderBottomWidth: 2, borderBottomColor: '#EDEDED'}}>
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
        return <View style={[GlobalStyles.Wrapper, {}]}>
            <View style={{justifyContent:"center", alignItems:"center", borderBottomWidth: 2, borderBottomColor: '#EDEDED'}}>
                <ImageView
                    imageSrc={require('../assets/images/myplace.png')}
                    width={Dimensions.get('window').width / 3}
                    height={7 * AppConstants.ActiveTheme.AppObjectSpacing}/>
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
                    cardElevation={1}
                    cardMaxElevation={1}
                    cornerRadius={5}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{this.props.name}</Text>
                        <Text style={{ marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing, fontSize: 15 }}>{this.props.address}</Text>
                        <Text style={{ fontSize: 15 }}>Antrian saat ini 3 dari 7</Text>
                    </View>
                </CardView>
                <FlatList imageSrc={require('../assets/images/user.png')}
                          data={this.props.data}></FlatList>
            </View>
            </ScrollView>
        </View>
        }
    }
}
