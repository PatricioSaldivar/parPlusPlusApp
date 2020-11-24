import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert, Keyboard, TouchableOpacity} from 'react-native';
// Alert.alert('Error Alert!', 'There was an Error compiling' )

// import ParPlusPlusCompiler from '../Par-Plus-Plus-Compiler/app'

import {compiler} from '../Par-Plus-Plus-Compiler/app.js'



export default function CompilerView() {
  const [name, setName] = useState('Ingeniero Adrián')

  var [stateEntryText, setStateEntryText] = useState('');

  var [outputText, setOutputText] = useState('Resultado');


  const clickHandler = () => {
    // ParPlusPlusCompiler(stateEntryText) // ).compileAndExecuteProgram(stateEntryText)
      let output = compiler(stateEntryText);
      // console.log('——————— Output —————— ');
      setOutputText(output)
      // setOutputText('hola')
      // console.log(output);
      // console.log('——————— Output END —————— ');

      // Alert.alert('Error Alert!', 'error al compi')
    // setOutputText( compiler(stateEntryText) )

  }
  return (
    <View style={styles.container}>
        <ScrollView > 
      
        <View style={styles.secondaryView}>
            <View
                style={styles.Banner}>
                <Text
                    style={styles.TitleOne}>
                    Bienvenido al ParPlusPlus Compiler
                </Text>
            </View>
            <View>
            <Text style={styles.titleText}>
                Ingrese el Código a Compilar!
            </Text>
            </View>
        
            <TextInput 
                placeholderTextColor={'#000'}
                multiline
                style={styles.textInput}
                placeholder='Ingrese el código a compilar'
                onChangeText={(val) => setStateEntryText(val)} >
            </TextInput>
        
            <TouchableOpacity
                style={styles.touchableCompile}
                onPress={clickHandler}>
                <Text 
                    style={styles.touchableText}
                    color="#000">
                    Compilar
                </Text>
            </TouchableOpacity>


            <TextInput 
                placeholderTextColor={'#000'}
                multiline
                style={styles.textInputResult}
                value={outputText}
            >
              </TextInput>

            <View
                style={styles.BannerTwo}>
                <Text
                    style={styles.TitleCredit}>
                    Creado por Adrián Hinojosa y Patricio Saldivar
                </Text>
            </View>


            <StatusBar style="auto" />
                
        </View>

        </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  Banner: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: '#6633FF',  
    marginBottom: 30,
  },
  BannerTwo: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: '#6633FF',  
    marginTop: 30,
    height: 100,
    
  },
  secondaryView: {
    alignItems: "center",
    justifyContent: "center"
  },
  Title: {
    color: '#000',
    alignItems: "center",
    padding: 10,
    fontWeight: "bold",
  },
  TitleOne: {
    color: '#fff',
    alignItems: "center",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",  
  },
  TitleCredit: {
    color: '#fff',
    alignItems: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 16   
  },
  touchableCompile: {
    marginBottom: 35,
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "#6666FF",
    maxWidth: "70%",
    padding: 10,
    justifyContent: 'center',  
  },
  touchableText: {
    fontSize: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 2,
    paddingBottom: 2,
    color: '#fff',
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 100,
    backgroundColor: '#000',
  },
  titleText: {
    color: '#000',
    fontSize: 26,
    fontWeight: "bold"
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    margin: 10,
    marginTop: 40,
    marginBottom: 40,
    width: 300,
    height: 300
  },
  textInputResult: {
    height: 100,
    width: 300,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    borderWidth: 1
  },
  scrollStyle: {
    marginTop: 20
  }
});
