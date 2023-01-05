import {View, Text, Flatlist, StyleSheet, Pressable, FlatList, Keyboard, TextInput, TouchableOpacity, Alert} from 'react-native'
import React, {useState, useEffect } from 'react'
import { firebase } from '../config';
import { BarCodeScanne, BarCodeScanner } from 'expo-barcode-scanner';
import styless from '../styles';
import { SelectList } from 'react-native-dropdown-select-list'




const Home = () => {
    const todoRef = firebase.firestore().collection('Data');
    const [addName, setAddName] = useState('');
    const [addPatiekalas, setAddPatiekalas] = useState('');
    const [addDesertas, setAddDesertas] = useState('');
    const [addGerimas, setAddGerimas] = useState('');
    const [addState, setAddState] = useState('');
    const [addText, setAddText] = useState('');
    const [selected, setSelected] = useState('');
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scanned');
    
    const askForCameraPermission = () => {
      (async () =>{
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == 'granted')
      })()
    }
    
    useEffect(() => {
      askForCameraPermission();
    }, []);
    
    const handleBarCodeScanned = ({type, data}) => {
      setScanned(true);
      setText(data);
      setAddName(data);
      setAddState('Nepriimtas');
      console.log('Type: ' + type + '\nData: ' + data)
    
    }




    const addField = () => {

        if (addName && addName.length > 0){
            const data = {
                name: addName, //staliukas
                patiekalas: addPatiekalas,
                desertas: addDesertas,
                gerimas: addGerimas,
                state: addState
            };
            todoRef
                .add(data)
                .then(() => {
                    setAddName('');
                    setAddPatiekalas('');
                    setAddDesertas('');
                    setAddGerimas('');
                    setAddState('');
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                })
            Alert.alert("Uzsakymas priimtas");
        }
    }

    return (
    
        <View style={styles.container}>


{scanned && <Text style={styless.titleText}>Patiekalai</Text>}
{scanned &&<Text>Kebababas Leksteje - 4 Eur</Text>}
{scanned &&<Text>Kebabas lavase - 3 Eur</Text>}
{scanned &&<Text>Bulvytes fri- 2 Eur</Text>}
{scanned &&<Text>Koldunai - 2.5 Eur</Text>}
{scanned &&<Text>Bulvytes fri su desrele - 3.5 Eur</Text>}
{scanned &&<Text style={styless.titleText}>Desertai</Text>}
{scanned &&<Text>Ledai - 2 Eur</Text>}
{scanned &&<Text>Blyneliai - 3.5 Eur</Text>}
{scanned &&<Text>Surelis - 1 Eur</Text>}
{scanned &&<Text style={styless.titleText}>Gerimai 0.5l</Text>}
{scanned &&<Text>Fanta - 2 Eur</Text>}
{scanned &&<Text>Sprite - 2 Eur</Text>}
{scanned &&<Text>Coca Cola - 2 Eur</Text>}
{scanned &&<Text>Gira - 2 Eur</Text>}
{scanned &&<Text>Vanduo - 1.5 Eur</Text> }

          {scanned &&  <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add Heading'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(heading) => setAddName(heading)}
                    value={addName}
                    multiline={true}
                    autoCapitalize='none'
                    editable = {false}
                    />
                    
                   
            </View> }
            {scanned &&   <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Pagrindinis patiekalas'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(patiekalas) => setAddPatiekalas(patiekalas)}
                    value={addPatiekalas}
                    multiline={true}
                    autoCapitalize='none'
                    />
                    
                   
            </View> }
            {scanned &&   <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Desertas'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(desertas) => setAddDesertas(desertas)}
                    value={addDesertas}
                    multiline={true}
                    autoCapitalize='none'
                    />
                     
                   
            </View> }
            {scanned &&   <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Gerimas'
                    placeholderTextColor='#aaaaaa'
                    onChangeText={(gerimas) => setAddGerimas(gerimas)}
                    value={addGerimas}
                    multiline={true}
                    autoCapitalize='none'
                    />
                    
                   
            </View> }






      {!scanned &&   <Text style={styless.titleText}>Nuskanuokite ant stalo esanti QR koda</Text> }
      {!scanned &&  <View style={styles.barcodebox}>
      
          <BarCodeScanner 
           onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
           style={{height: 400, width: 400}}
           /> 
        </View> }
        
   
      
        

        {scanned && <TouchableOpacity style={styles.button} onPress={addField}>
                        <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity> }
        
        {scanned && <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
                        <Text style={styles.buttonText}>Exit</Text>
                        </TouchableOpacity> }
                   
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
        width:200,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 100,
        alignSelf: 'center',
        
    },
    buttonText:{
        color:'white',
        fontSize:20

    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
      },
      container: {
        flex: 1,
        backgroundColor: '#B9C0D0',
        alignItems: 'center',

      },
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

/*
{scanned && <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
                        <Text style={styles.buttonText}>Scan again?</Text>
        </TouchableOpacity> }
         {scanned &&   <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={maistas} 
        save="value"
        onChangeText={(save) => setAddPatiekalas(save)}
        
        
            /> }
             {scanned &&   <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={desertas} 
        save2="desertas"
            /> }
*/