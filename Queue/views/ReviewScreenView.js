import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, Text } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import Button from './components/Button';
import ImageView from './components/ImageView';
import CardView from 'react-native-cardview';

export default class ReviewScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {}]}>
            <View style={{ flexDirection:"row", 
                           justifyContent:"flex-start", 
                           alignItems:"center", 
                           borderBottomWidth: 2, 
                           borderBottomColor: '#EDEDED'}}>
                <TouchableOpacity onPress={()=>this.props.onPressBack()}>
                    <View>
                        <ImageView
                            style={{marginLeft : 8}}
                            imageSrc={require('../assets/images/back.png')}
                            width={Dimensions.get('window').width / 10}
                            height={24}
                            />
                        
                    </View>
                </TouchableOpacity>
                
                <View style={{ flex : 0.85,justifyContent : 'center' ,alignContent : 'center' ,alignItems:'center'}}>
                    <ImageView
                        imageSrc={require('../assets/images/myqueue.png')}
                        width={Dimensions.get('window').width / 3}
                        height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                        />
                </View>                
            </View> 
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                <Text style={{fontSize: 15, fontWeight: "bold"}}>
                    Review antrian Anda  
                </Text>
            </View>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center', marginTop: 1 * AppConstants.ActiveTheme.AppObjectSpacing
            }}>
                <CardView
                    style={{ marginTop: 8 }}
                    width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={Dimensions.get('window').height/2}
                    cardElevation={2}
                    cardMaxElevation={1}
                    cornerRadius={5}>
                    <View style={{ justifyContent: "flex-start"}}>
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#EDEDED' }}>
                            <Text style={{ fontWeight: "bold", fontSize: 15, padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>Nama Layanan</Text>
                            <Text style={{ fontSize: 15, padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing, 
                                padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>{this.props.name_place}</Text>
                        </View>
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#EDEDED' }}>
                            <Text style={{ fontWeight: "bold", fontSize: 15, padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>Alamat Tempat</Text>
                            <Text style={{ fontSize: 15, padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing, 
                                padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>{this.props.address}</Text>
                        </View>
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#EDEDED' }}>
                            <Text style={{ fontWeight: "bold", fontSize: 15, padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>Tanggal</Text>
                            <Text style={{ fontSize: 15, padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing,
                                 padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>8 Januari 2019</Text>
                        </View>
                        <View style={{ borderBottomWidth: 2, borderBottomColor: '#EDEDED' }}>
                            <Text style={{ fontWeight: "bold", fontSize: 15, padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>Kode Antrian</Text>
                            <Text style={{ fontSize: 15, padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing,
                                 padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>{this.props.kode}</Text>
                        </View>
                    </View>
                </CardView>
            </View>
            <View style={{
                marginTop: 3 * AppConstants.ActiveTheme.AppObjectSpacing, justifyContent: "flex-end", alignItems: "center" }}>
                <Button
                    style={{ borderRadius: 4 * AppConstants.ActiveTheme.AppObjectSpacing }}
                    width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (1 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    label={'Hapus Antrean'}
                    onPress={() => this.props.onPressPut()}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing} />
            </View>
        </View>
    }
}