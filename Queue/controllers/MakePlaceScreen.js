import React from 'react';
import {Alert, AsyncStorage} from "react-native";
import MakePlaceScreenView from "../views/MakePlaceScreenView";
import { showImagePicker } from 'react-native-image-picker';
import { responseData,imageUpload } from "../models/createPlace";
import { responseRegPlace,registerPlace } from "../models/regPlace";
const options = {
    title: "Pilih Gambar",
    takePhotoButtonTitle: "Buka Kamera",
    chooseFromLibraryButtonTitle: "Pilih Dari Galeri",
    quality: 1
}

export default class MakePlaceScreen extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            imageSource: null,
            image: null
        }

        this.content = [];
    }
    componentWillMount = () =>{
        AsyncStorage.getItem('id_user',(error , result)=>{
            this.setState({
                id_user : result
            });
        })
    }
    create = async () => {
        this.props.navigation.push("AddImage")
    }

    selectPhoto = () => {
        showImagePicker(options, (response) => {
            console.log("Response = ", response);

            if(response.didCancel)  Alert.alert("User cancelled image picker");
            else if(response.error) Alert.alert("ImagePicker Error: ", response.error);
            else {
                let source = { uri : response.uri }
                const data = new FormData();
                data.append('picture',{
                    uri     : response.uri,
                    type    : response.type,
                    name    : response.fileName
                })
                this.setState({
                    imageSource: source,
                    image: data
                })
            }
        })
    }
    registerMyPlace = async()=>{
        await registerPlace(this.state.id_user,this.state.address,
            this.state.namePlace,this.state.inisialPlace).then(()=>{
                if (responseRegPlace.status ==  true) {
                    this.props.navigation.goBack();
                }else{
                    this.setState({
                        inisial : 0
                    })
                }
            })
    }
    sendData = async () => {
        Alert.alert(JSON.stringify(this.state.image))
        await imageUpload(this.state.image).then(res => {
            if(responseData.status == true){ 
                Alert.alert('Ok')
            }
            else if(responseData.status == false) Alert.alert("Upload gagal");
        
        })

    }
    render = () => {
        return <MakePlaceScreenView
        inisialStatus ={this.state.inisial} 
        namePlaceChange={namePlace => this.setState({namePlace})}
        addressPlaceChange = {address => this.setState({address})}
        inisialPlace={inisialPlace => this.setState({inisialPlace})}
        sendData={()=>this.sendData()}
        regPlace={()=>this.registerMyPlace()}
        selectPhoto={()=>this.selectPhoto()}
        image={this.state.imageSource}
        onPressCreate={()=> this.create()}/>
    }


}