import React from 'react';
import {Alert, AsyncStorage} from "react-native";
import AddImagePlaceScreenView from "../views/AddImagePlaceScreenView";
import { showImagePicker } from 'react-native-image-picker';
import { responseData,imageUpload } from "../models/createPlace";
// import { responseRegPlace,registerPlace } from "../models/regPlace";
const options = {
    title: "Pilih Gambar",
    takePhotoButtonTitle: "Buka Kamera",
    chooseFromLibraryButtonTitle: "Pilih Dari Galeri",
    quality: 1
}

export default class AddImagePlaceScreen extends React.Component {

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
        this.Alert();
    }
    Alert = async () => {
        Alert.alert(this.props.navigation.state.params.id_place);
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
    sendData = async () => {
        Alert.alert(JSON.stringify(this.state.image))
        await imageUpload(this.props.navigation.state.params.id_place,this.state.image).then(res => {
            if(responseData.status == true){ 
                Alert.alert("Upload Success")
            }
            else if(responseData.status == false) Alert.alert("Upload gagal");
        
        })

    }
    render = () => {
        return <AddImagePlaceScreenView
        selectPhoto = {()=> this.selectPhoto()}
        sendData = {()=> this.sendData()}
        Alert = {() => this.Alert()}
        imageSource = {this.state.imageSource}
        />
    }


}