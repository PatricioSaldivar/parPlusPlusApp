import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert, Keyboard} from 'react-native';
import Navigator from './routes/homeStack';


export default function App() {
  return (
    <Navigator></Navigator>
  );
}