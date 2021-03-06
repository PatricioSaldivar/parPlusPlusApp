import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert, Keyboard} from 'react-native';



export default function TechnicalDocs() {
  
  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>
            Documentación Técnica!
        </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  pdf: {
        flex:1
    }
});
