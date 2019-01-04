import React, { Component } from 'react';
import { View, Dimensions, FlatList, Text, Alert, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import Button from './components/Button';
import { Card } from 'react-native-elements';
 
export default class TakeQueueScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return <View>
            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center", borderBottomWidth: 2, borderBottomColor: '#EDEDED'}}>
                <TouchableOpacity style={{flex: 1}} onPress={()=>this.props.onPressBack()}>
                    <View style={{flexDirection: "row"}}>
                        <ImageView
                            imageSrc={require('../assets/images/back.png')}
                            width={Dimensions.get('window').width / 10}
                            height={3 * AppConstants.ActiveTheme.AppObjectSpacing}
                            />

                        <Text>
                            Back
                        </Text>
                    </View>
                </TouchableOpacity>
                
                <View style={{flex: 1, alignItems: 'center'}}>
                    <ImageView
                        imageSrc={require('../assets/images/Place.png')}
                        width={Dimensions.get('window').width / 3}
                        height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                        />
                </View>

                <View style={{flex: 1}}></View>
                
            </View> 

            <View>
                <View style={{alignItems: 'center'}}>
                    <ImageView
                        style={{marginTop: AppConstants.ActiveTheme.AppObjectSpacing}}
                        imageSrc={require('../assets/images/images.png')}
                        width={Dimensions.get('window').width}
                        height={20 * AppConstants.ActiveTheme.AppObjectSpacing}
                        />
                    
                </View>
                
                <Text style={{padding: 2 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                    Jalan Jaksa Agung Suprapto No. 2, Klojen
                    {"\n"}
                    Antrian saat ini 3 dari 7
                </Text>
            </View>

            <Card containerStyle={{padding: 0}}>
                <Text style={[GlobalStyles.FontH4, {padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing}]}>
                    Sekarang
                </Text>

                <Text style={[GlobalStyles.FontH1, {
                        padding: 1,
                        color: '#468cfc', 
                        textAlign: 'center', 
                    }]}>
                    A0003
                </Text>
            </Card>

            <Card containerStyle={{padding: 0}}>
                <Text style={[GlobalStyles.FontH4, {padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing}]}>
                    Selanjutnya
                </Text>

                <Text style={[GlobalStyles.FontH1, {
                        padding: 1,
                        color: '#ffd53d', 
                        textAlign: 'center',
                    }]}>
                    A0004
                </Text>
            </Card>

            <View style={{alignItems: "center", marginTop: 3 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                <Button
                    style={{borderRadius : 4 * AppConstants.ActiveTheme.AppObjectSpacing}}
                    width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (1 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    label={'Ambil Antrian'}
                    onPress={()=>this.props.onPressTake()}
                    radius={AppConstants.ActiveTheme.AppObjectSpacing} />
            </View>
        
        </View>
    }
}