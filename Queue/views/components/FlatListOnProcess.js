import React, { Component } from 'react';
import { Text, TouchableOpacity , FlatList, StyleSheet,View, RefreshControl,Image,Dimensions} from 'react-native';
import ImageView from './ImageView';
import TextLine from './TextLine';
import Button from './Button';
export default class FlatListNew extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render =()=>{
        return(
            <View>
                <FlatList
                data = {this.props.dataOn}
                showsVerticalScrollIndicator= {false}
                renderItem={({item}) => 
                <View style={[styles.container,this.props.style]}>
                    <ImageView imageSrc={this.props.imageSrc} style={[styles.photo,this.props.style]}/>
                    <View style={[styles.container_text,this.props.style]}>
                        <TextLine style={[styles.title,this.props.style]} label={item.queue_code}>
                        </TextLine>
                        <TextLine style={[this.props.style,styles.description]} label={item.name}>
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
                                        id : item.id_user,
                                        photoprofile : item.photoprofile,
                                        kode : item.queue_code,
                                        name : item.name
                                    }
                                )}  
                                style={{
                                    alignItems : 'center',
                                    backgroundColor : '#1C3144'

                                }}></Button>
                    </View>
                </View>}keyExtractor={(item,index) => item.id_queue}
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
        width : Dimensions.get('window').width - (50),
        height : Dimensions.get('window').height/6,
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
        height: 50,
        width: 50,
        borderRadius : 50
    },
});