import React, { Component } from 'react';
import CardView from 'react-native-cardview';
import { View, Dimensions, Text } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import ImageView from './components/ImageView';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Button from './components/Button';


export default class DoneScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [
                {
                    key: "1",
                    nomor: "BKG-000",
                    nama: "Anisa"
                },
                {
                    key: "2",
                    nomor: "BKG-001",
                    nama: "Latifah"
                },
                {
                    key: "3",
                    nomor: "BKG-002",
                    nama: "Ramaduo"
                },
                {
                    key: "4",
                    nomor: "BKG-003",
                    nama: "Titto"
                }
            ]
        };
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {}]}>
            <View style={{ justifyContent: "center", alignItems: "center", borderBottomWidth: 2, borderBottomColor: '#EDEDED' }}>
                <ImageView
                    imageSrc={require('../assets/images/myplace.png')}
                    width={Dimensions.get('window').width / 3}
                    height={7 * AppConstants.ActiveTheme.AppObjectSpacing} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 1 * AppConstants.ActiveTheme.AppObjectSpacing, 
                            marginBottom: 1 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                        <FlatList
                            data={this.state.FlatListItems}
                            renderItem={({ item }) =>
                                <CardView
                                    style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#08c5d1", cardElevation: 1, 
                                            marginTop: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}
                                    width={Dimensions.get('window').width - (5 * AppConstants.ActiveTheme.AppObjectSpacing)}
                                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (13 * AppConstants.ActiveTheme.AppObjectSpacing)}
                                    cardElevation={1}
                                    cardMaxElevation={1}
                                    cornerRadius={5}>
                                    <View style={{ marginTop: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>
                                        <View style={{ alignItems: "center" }}>
                                            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                                                {item.nomor}
                                            </Text>
                                            <Text style={{ fontSize: 15 }}>
                                                {item.nama}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Button
                                            style={{ backgroundColor: "#3399f8", borderRadius: 2 * AppConstants.ActiveTheme.AppObjectSpacing, 
                                            marginTop: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}
                                            width={Dimensions.get('window').width - (11 * AppConstants.ActiveTheme.AppObjectSpacing)}
                                            height={AppConstants.ActiveTheme.AppInputHeightDefault + (1 * AppConstants.ActiveTheme.AppObjectSpacing)}
                                            label={'Selesai'}
                                            radius={AppConstants.ActiveTheme.AppObjectSpacing}
                                            onPress={()=> this.props.onPressSelesaii()}
                                        />
                                    </View>
                                </CardView>}
                        />
                </View>
            </ScrollView>
        </View>
    }
}