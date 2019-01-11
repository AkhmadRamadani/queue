import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { GlobalStyles } from '../assets/GlobalStyles';
import { AppConstants } from "../systems/Constants";
import TextLine from './components/TextLine';
import ImageView from './components/ImageView';
import FlatListNew  from "./components/flatListNew2";
import { ScrollView } from 'react-native-gesture-handler';
export default class MyQueueScreenView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNya : [
                {
                id_queue : 1,
                'queue_code' : 'rama',
                'name' : 'wkwk'
                },
                {
                id_queue : 2,
                'queue_code' : 'rama',
                'name' : 'asuuuu'
                }
        ]
        };
    }

    render() {
        return <View style={[GlobalStyles.Wrapper, {}]}>
        
            <View style={{justifyContent:"center", alignItems:"center", borderBottomWidth: 2, borderBottomColor: '#EDEDED'}}>
                <ImageView
                    imageSrc={require('../assets/images/myqueue.png')}
                    width={Dimensions.get('window').width / 3}
                    height={7 * AppConstants.ActiveTheme.AppObjectSpacing}
                    />
            </View>  
            <ScrollView 
                showsVerticalScrollIndicator= {false}>
                
                <FlatListNew refreshing={this.props.refreshing} _onRefresh={this.props._onRefresh} data={this.props.data}  onItemClick={(params) => this.props.onItemClick(params)}
                imageSrc={require('../assets/images/images.png')}></FlatListNew>
            </ScrollView>
        </View>
    }
}
