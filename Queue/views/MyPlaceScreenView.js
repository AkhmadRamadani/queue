import React, { Component } from 'react';
import CardView from 'react-native-cardview';
import { View, Dimensions, Text } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
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
    }

    render() {
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
                alignItems: 'center', marginTop: 1 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                
                <CardView
                    style={{cardElevation : 1,padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing, marginTop : 8}}
                    width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (6 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    cardElevation={1}
                    cardMaxElevation={1}
                    cornerRadius={5}>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Dr. Saiful Anwar Regional Hospital</Text>
                        <Text style={{ marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing, fontSize: 15 }}>Jalan Jaksa Agung Suprapto No. 2, Klojen</Text>
                        <Text style={{ fontSize: 15 }}>Antrian saat ini 3 dari 7</Text>
                    </View>
                </CardView>
                <FlatList
                    data={ this.state.FlatListItems }

                    renderItem={({item}) => 
                        <View style={{ elevation : 1,flexDirection: 'column', marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing 
                        ,borderColor : '#ededed', borderWidth : 1, borderStyle : "solid",
                        paddingVertical : 8, borderRadius : 10}}>
                            <View style={{ flexDirection: 'row', marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                                <ImageView
                                    imageSrc={require('../assets/images/user.png')}
                                    width={Dimensions.get('window').width / 2}
                                    height={10 * AppConstants.ActiveTheme.AppObjectSpacing}
                                />
                                <View style={{alignItems: "center"}}> 
                                    <Text style={{fontSize: 25, fontWeight:"bold"}}>
                                        {item.nomor}
                                    </Text>
                                    <Text style={{fontSize:15}}>
                                        {item.nama}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Button
                                    style={{ backgroundColor: "#3399f8" }}
                                    width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (1 * AppConstants.ActiveTheme.AppObjectSpacing)}
                                    label={'Proses'}
                                    onPress={()=> this.props.onPressProcess()}
                                />
                            </View>
                        </View>}
                />
            </View>
            </ScrollView>
        </View>
    }
}
