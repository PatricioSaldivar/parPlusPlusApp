import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity, FlatList, Image} from 'react-native';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>

            <View
                style={styles.Banner}>
                <Text
                    style={styles.TitleOne}>
                    Bienvenido a Nuestra Aplicación!
                </Text>
            </View>
      
      
            <TouchableOpacity
                style={styles.touchableCompile}
                onPress={() => navigation.navigate('HowToUse')}>
                <Text 
                    style={styles.touchableText}
                    color="#000">
                    How to Use
                </Text>
            </TouchableOpacity>
      
            <TouchableOpacity
                style={styles.touchableCompile}
                onPress={() => navigation.navigate('TechnicalDocs')}>
                <Text 
                    style={styles.touchableText}
                    color="#000">
                    Technical Documentation
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.touchableCompile}
                 onPress={() => navigation.navigate('Compile')}>
                <Text 
                    style={styles.touchableText}
                    color="#000">
                    Get Started
                </Text>
            </TouchableOpacity>
            
            <Image style={styles.imagestyle} source={require('./compilerimg.jpg')} />



            <View
                style={styles.ViewCredits}>
                <View
                    style={styles.BannerTwo}>
                    <Text
                        style={styles.TitleCredit}>
                        Creado por: Adrian Hinojosa y Patricio Saldivar 
                    </Text>
                </View>       
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
    ViewCredits: {
        width: "100%",
        backgroundColor: '#FFF',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        marginBottom: 30
    },
  BannerTwo: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: '#6633FF',  
    marginBottom: -30,
    height: 100
  },
      TitleCredit: {
    color: '#fff',
    alignItems: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 16
  },
  TitleOne: {
    color: '#fff',
    alignItems: "center",
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",  
  },
  Banner: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: '#6633FF',  
    marginBottom: 30,
  },
  touchableCompile: {
    marginBottom: 35,
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "#6666FF",
    minWidth: "70%",
    padding: 10,
    justifyContent: 'center',  
  },
  touchableText: {
    fontSize: 15,
    width: '50%',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#fff',
    fontWeight: "bold",
  },
  imagestyle: {
    width: 300,
    height: 300
  },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    
})