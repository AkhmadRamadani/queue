import React from 'react';
import { Alert } from "react-native";
import ReviewScreenView from "../views/ReviewScreenView";
import { cancellingQueue,hapusData} from "../models/cancellingQueue";
export default class ReviewScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            thisDay : '',
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
        this.showCurrentDate();
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
    showCurrentDate (){
        day = new Date().getDay();
        date = new Date().getDate();
        month = new Date().getMonth();
        year = new Date().getFullYear();
        var days = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
        var thisDay = days[day];
        var months    = ['January','February','March','April','May','June',
                        'July','August','September','October','November','December'];
        var thisMonth = months[month];
        var now = (thisDay + ' ' + date + ' / '+ thisMonth + ' / ' + year )
        this.setState({
            day : now
        })

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
            now = {this.state.day}
            name_place = {this.props.navigation.state.params.name_place}
            address = {this.props.navigation.state.params.address}
            id = {this.props.navigation.state.params.id}
            kode = {this.props.navigation.state.params.kode}
            onPressBack={() => this.back()}
            onPressPut={() => this.hapusData()}/>
    }
}