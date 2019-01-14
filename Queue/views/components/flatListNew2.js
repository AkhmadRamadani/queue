import React, { Component } from 'react';
import { Text, TouchableOpacity , FlatList, StyleSheet,View, Image,Dimensions, RefreshControl} from 'react-native';
import ImageView from './ImageView';
import TextLine from './TextLine';
import Button from './Button';
import { AppConstants } from '../../systems/Constants';
export default class flatListNew2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            refreshing : false
        }
    }
    
    render =()=>{
        return(
            <View>
                <FlatList
                data = {this.props.data}
                showsVerticalScrollIndicator= {false}
                renderItem={({item}) => 
                <TouchableOpacity onPress={() => this.props.onItemClick(
                    {
                        name_place : item.name_place,
                        kode : item.queue_code,
                        address : item.address
                    }
                )} >
                <View style={[styles.container,this.props.style]}>
                    <Image source={{uri :  "http://192.168.43.2/apiqueue/v1/"+ item.picture}} style={[styles.photo,this.props.style]}/>
                    <View style={[styles.container_text,this.props.style]}>
                        <TextLine style={[styles.title,this.props.style]} label={item.name_place}>
                        </TextLine>
                        <TextLine style={[this.props.style,styles.description]} label={item.queue_code}>
                        </TextLine>
                    </View>
                    <View style={{
                        justifyContent : "center"
                    }}>
                        <Button label={'>'}
                                height={30}
                                width ={30}
                                radius={20}
                                onPress={() => this.props.onItemClick(
                                    {
                                        name_place : item.name_place,
                                        kode : item.queue_code,
                                        address : item.address
                                    }
                                )}      
                                style={{
                                    alignItems : 'center',
                                    backgroundColor : AppConstants.ActiveTheme.AppMainButtonColor

                                }}></Button>
                    </View>
                </View>
                </TouchableOpacity>}keyExtractor={(item,index) => item.id_queue}
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.refreshing}
                        onRefresh={this.props._onRefresh}
                    />
                }    
                ></FlatList>
            </View>
        );
    }}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 4,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
        alignItems : 'center',
        justifyContent : 'center'
    },
    title: {
        fontSize: 16,
        color: '#000',
        fontWeight : 'bold'
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    photo: {
        width : Dimensions.get('window').width / 3,
        height : Dimensions.get('window').height/ 10,
        borderRadius : 5
    },
});