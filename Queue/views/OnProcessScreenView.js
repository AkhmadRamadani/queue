import React, { Component } from 'react';
import { View, Dimensions, Text , TouchableOpacity} from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import Button from './components/Button';
import ImageView from './components/ImageView';
import CardView from 'react-native-cardview';

export default class OnProcessScreenView extends Component {

    constructor(props) {

        super(props);

        this.state = {};
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {}]}>
            <View style={{ flexDirection:"row", 
                           justifyContent:"flex-start", 
                           alignItems:"center", 
                           borderBottomWidth: 2, 
                           borderBottomColor: '#EDEDED'}}>
                <TouchableOpacity onPress={()=>this.props.kembali()}>
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
                        imageSrc={require('../assets/images/myplace.png')}
                        width={Dimensions.get('window').width / 3}
                        height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                        />
                </View>                
            </View> 

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing}}>
                <CardView
                    style={{ cardElevation: 1, marginTop: 8 }}
                    width={Dimensions.get('window').width - (4 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (32 * AppConstants.ActiveTheme.AppObjectSpacing)}
                    cardElevation={2}
                    cardMaxElevation={1}
                    cornerRadius={5}>
                    <View style={{ alignItems: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 25, 
                        padding: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>{this.props.kode}</Text>
                        <Text style={{fontSize: 17}}>{this.props.name}</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>
                        <CardView
                            style={{ cardElevation: 1, marginTop: 8 }}
                            width={Dimensions.get('window').width - (8 * AppConstants.ActiveTheme.AppObjectSpacing)}
                            height={AppConstants.ActiveTheme.AppInputHeightDefault + (19 * AppConstants.ActiveTheme.AppObjectSpacing)}
                            cardElevation={2}
                            cardMaxElevation={1}
                            cornerRadius={5}>

                            <View style={{ alignItems: "center", marginTop: 2 * AppConstants.ActiveTheme.AppObjectSpacing }}>
                                <Text style={{fontSize: 17 }}>Status</Text>
                            </View>

                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 1 * AppConstants.ActiveTheme.AppObjectSpacing }}>
                                <Button
                                    style={{ backgroundColor: "#3399f8", borderRadius: 2 * AppConstants.ActiveTheme.AppObjectSpacing }}
                                    width={Dimensions.get('window').width - (11 * AppConstants.ActiveTheme.AppObjectSpacing)}
                                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (1 * AppConstants.ActiveTheme.AppObjectSpacing)}
                                    label={'Proses'}
                                    radius={AppConstants.ActiveTheme.AppObjectSpacing}
                                    onPress={() => this.props.updateToOn()}
                                />
                                <Button
                                    style={{ backgroundColor: "#FFB300", borderRadius: 2 * AppConstants.ActiveTheme.AppObjectSpacing, marginTop: 1 * AppConstants.ActiveTheme.AppObjectSpacing}}
                                    width={Dimensions.get('window').width - (11 * AppConstants.ActiveTheme.AppObjectSpacing)}
                                    height={AppConstants.ActiveTheme.AppInputHeightDefault + (1 * AppConstants.ActiveTheme.AppObjectSpacing)}
                                    label={'Selesai'}
                                    radius={AppConstants.ActiveTheme.AppObjectSpacing}
                                    onPress={() => this.props.OnPressSelesai()}
                                />
                            </View>
                        </CardView>
                    </View>
                </CardView>
            </View>
        </View>
    }

}