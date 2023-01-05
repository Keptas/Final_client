import { StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';

const styles=StyleSheet.create({
    button:{
        backgroundColor:'#e5e5e5',
        padding:15,
        borderRadius:15,
        margin:5,
        marginHorizontal:10,
    },
    container: {
        marginTop:0,
        padding:120,
        backgroundColor: '#B9C0D0',
        width: 450,
        height: 900,
        alignSelf:"center",
        flexDirection: "column"
    },
    text:{
        fontSize:20,
        color:"black",
        fontWeight:"bold"
    },
    titleText: {
        fontSize:30,
        color:"black",
        fontWeight:"bold",
        textAlign: "center"
    },
})

export default styles;