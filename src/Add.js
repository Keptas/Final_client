import {View, Text, Flatlist, StyleSheet, Pressable, FlatList, Keyboard, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useEffect } from 'react'
import { firebase } from '../config';

const Home = () => {
    const todoRef = firebase.firestore().collection('Data');
    const [addName, setAddName] = useState('');
    const [addPrice, setAddPrice] = useState('');
    const [addText, setAddText] = useState('');
    const addField = () => {

        if (addName && addName.length > 0){
            const data = {
                name: addName,
                price: addPrice,
                text: addText,
            };
            todoRef
                .add(data)
                .then(() => {
                    setAddName('');
                    setAddText('');
                    setAddPrice('');
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                })
        }
    }

    return (
        <View style={{ flex:1, marginTop:100}}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add Heading'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(heading) => setAddName(heading)}
                    value={addName}
                    multiline={true}
                    autoCapitalize='none'
                    />
                    
                   
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add some text'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(text) => setAddText(text)}
                    value={addText}
                    multiline={true}
                    autoCapitalize='none'
                    />
                    
                   
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add price'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(price) => setAddPrice(price)}
                    value={addPrice}
                    multiline={true}
                    autoCapitalize='none'
                    />
                     <TouchableOpacity style={styles.button} onPress={addField}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                   
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer:{
        flexDirection:'row',
        height:50,
        marginLeft:10,
        marginRight:10,
    },
    input:{
        height:48,
        borderRadius:5,
        overflow:'hidden',
        backgroundColor:'white',
        paddingLeft:16,
        flex:1,
        marginRight:5
    },
    button:{
        height:47,
        borderRadius:5,
        backgroundColor:'#788e52',
        width:80,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'white',
        fontSize:20

    }




})

export default Home