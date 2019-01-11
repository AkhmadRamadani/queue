import React, { Component } from 'react';
import { View, Dimensions, FlatList, Text, Alert, TouchableOpacity,ImageBackground } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import Button from './components/Button';
import { Card } from 'react-native-elements';
import CardView from 'react-native-cardview';
 
export default class TakeQueueScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sisa : '',
            kode : ''
        };
    }

    render() {
        return <View>

            <View style = {{ alignItems : 'center'}}>
                <View style={{marginBottom : Dimensions.get("window").height /64}}>
                    <ImageBackground
                        source={{uri : this.props.picture}}
                        style={{width : Dimensions.get('window').width,
                                height : Dimensions.get('window').height/3}}
                        >
                         <View style={{ flexDirection:"row", 
                           justifyContent:"flex-start", 
                           alignItems:"center", 
                           backgroundColor : 'rgba(255,255,255,0.5)'}}>
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
                                    imageSrc={require('../assets/images/Place.png')}
                                    width={Dimensions.get('window').width / 3}
                                    height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                                    />
                            </View>                
                        </View>      
                    </ImageBackground>
                </View>
                <View style = {{width : Dimensions.get('window').width - ( 20),
                                height : Dimensions.get("window").height/ 6.3 , 
                                alignItems : 'flex-start', marginBottom : 4,
                                borderColor : '#ededed', borderWidth : 1, 
                                borderRadius : 5, paddingVertical : 4, paddingHorizontal : 16}}>
                    <TextLine label={this.props.alamat} type={'h6'} style={{marginBottom : 4}}/>
                    <TextLine label={this.props.name} type={'h3'} style ={{fontWeight : 'bold',marginBottom : 4}}/>
                    <View style={{flex :1 ,flexDirection : 'row', justifyContent : 'center', alignItems :'center'}}>
                        <View style={{width : 56, height : 24, justifyContent : 'center', alignItems : 'center', 
                                backgroundColor :'#2ecc71',
                                borderRadius : 12, marginRight : 8}}>
                                <Text style = {{color : '#fff'}}>
                                    OPEN
                                </Text>
                        </View>
                        <Text>Jam Buka Tergantung Pemilik Toko</Text>
                    </View>
                </View>
                <View>
                    <CardView
                        style={{ marginTop: 8 }}
                        width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                        height={Dimensions.get('window').height/ 4}
                        cardElevation={2}
                        cardMaxElevation={1}
                        cornerRadius={5}>
                        <View style={{ justifyContent: "flex-start"}}>
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#EDEDED', paddingLeft : 8 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 15,
                                 padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing, }}>Jumlah Pengantri</Text>
                                <Text style={{ fontSize: 15, padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing, 
                                    padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>{this.props.sisa}</Text>
                            </View>
                            <View style={{ borderBottomWidth: 2, borderBottomColor: '#EDEDED' , paddingLeft : 8}}>
                                <Text style={{ fontWeight: "bold", fontSize: 15,
                                 padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>Antrian Dalam Proses</Text>
                                <Text style={{ fontSize: 15, padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing, 
                                    padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>{this.props.kode}</Text>
                            </View>
                        </View>
                    </CardView>
                </View>
            </View>

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