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
            sisa : '',
            kode : ''
        };
    }

    render() {
        return <View>
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
                        imageSrc={require('../assets/images/Place.png')}
                        width={Dimensions.get('window').width / 3}
                        height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                        />
                </View>                
            </View> 

            <View style = {{ alignItems : 'center'}}>
                <View>
                    <ImageView
                        imageSrc={require('../assets/images/images.png')}
                        width={Dimensions.get('window').width}
                        height={21 * AppConstants.ActiveTheme.AppObjectSpacing}/>
                </View>
                <View style = {{width : Dimensions.get('window').width - ( 20),
                                height : 68 , alignItems : 'flex-start', borderColor : '#ededed', borderWidth : 2,
                                borderRadius : 5, paddingVertical : 4, paddingHorizontal : 10}}>
                    <TextLine label={this.props.name} type={'h5'} style ={{fontWeight : 'bold'}}/>
                    <TextLine label={this.props.alamat} type={'h6'}/>
                    <View style={{flexDirection : 'row'}}>
                    <TextLine label={'Sisa Antrean : '} type={'h6'}/>
                    <TextLine label={this.props.sisa} type={'h6'}/>
                    </View>
                </View>
            </View>

            <Card containerStyle={{padding: 8,justifyContent : 'center', borderRadius: 5}}>
                <TextLine label={'Sekarang'}></TextLine>

                <TextLine style={[GlobalStyles.FontH1, {
                        padding: 1,
                        color: '#468cfc', 
                        textAlign: 'center', 
                    }]} label={this.props.kode}/>
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