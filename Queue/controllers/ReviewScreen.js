import React from 'react';
import { Alert } from "react-native";
import ReviewScreenView from "../views/ReviewScreenView";
import { cancellingQueue,hapusData} from "../models/cancellingQueue";
export default class ReviewScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }

        this.content = [];
    }
    ActionNavigate = (Page, Params) => {
        const { push } = this.props.navigation;

        push(Page, Params);
    }

    ActionPop = (value) => {
        this.props.navigation.pop(value)
    }

    ContentRefresh = (con) => {
        this.setState({
            content: con
        });
    }
    back = async () => {
        this.props.navigation.goBack(null);
    }
    componentWillMount = async ()=>{
        const { navigation } = this.props;
        this.setState({
            kode: navigation.getParam('queue_code', ''),
            name_place: navigation.getParam('name_place', ''),
            address: navigation.getParam('address', ''),
        });
    }
    hapusData= () =>{
        Alert.alert(
            "Hapus Antrean" , 
            "Anda Yakin menghapus Antrean ini ? ",
        [
            {text: 'Yakin', onPress: () => 
                this.cancel()
            },
            {text: 'Tidak', style : 'cancel'},
        ],)
    }
    cancel = async ()=> {
        await cancellingQueue(this.props.navigation.state.params.kode).then(()=>{
            this.props.navigation.goBack();
        })
    }
    put = async () => {
        this.props.navigation.navigate("Place");
    }
    getDate = () =>{
        new Date()
    }
    render = () => {
        return <ReviewScreenView
            name_place = {this.props.navigation.state.params.name_place}
            address = {this.props.navigation.state.params.address}
            id = {this.props.navigation.state.params.id}
            kode = {this.props.navigation.state.params.kode}
            onPressBack={() => this.back()}
            onPressPut={() => this.hapusData()}/>
    }
}