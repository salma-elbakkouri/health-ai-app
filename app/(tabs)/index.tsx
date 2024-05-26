import {  Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { Button, Image, Text, View, StyleSheet, StatusBar , ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <>
      <StatusBar hidden />
      <LinearGradient
        colors={['#4d869c', '#548ea1', '#5b97a5', '#649fa9', '#6da7ad', '#78afb2', '#84b7b8', '#8fbfbe', '#9fc9c7', '#aed3d1', '#bededb', '#cde8e5']}
        style={styles.container}
      >
      {/* <View style={styles.container}> */}
      {/* <ImageBackground source={require('@/assets/images/bg1.png')} style={styles.container}> */}
        <Image source={require('@/assets/images/doctor.png')} style={styles.image} />
        <View style={styles.motivationBox}>
          <View style={styles.linesview}>
            <View style={styles.line} />
            <View style={styles.point1} />
            <View style={styles.point2} />
          </View>
          <Text style={styles.motivationText}>Stay Healthy Stay Happy with health AI</Text>
          <Text style={styles.subText}>We will walk you each step in order to achieve a better health</Text>
          <View style={styles.buttonContainer}>
            <Button title="Start Now" color="#1F3943" onPress={() => {router.push("/HomeScreen");}} />
          </View>
        </View>
        {/* </ImageBackground> */}
        {/* </View> */}
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  
    
  },
  image: {
    width: 220,
    height: 220,
  },
  motivationBox: {
    textAlign: 'center',
    height: 290, 
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 50,
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding:20,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 2,
  },
  linesview : 
  {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    width:'100%',
    marginTop:10,
    marginBottom:10,
  },
  line: {
    width: 20,
    height: 5,
    backgroundColor: '#1F3943', // Same color as motivation text
    borderRadius: 50,
    marginRight:3,
  },
  point1 : 
  {
    width: 6,
    height: 5,
    backgroundColor: '#9DA3AE', // Same color as motivation text
    borderRadius: 50,
    marginRight:3,
    
  },
  point2 : 
  {
    width: 6,
    height: 5,
    backgroundColor: '#9DA3AE', // Same color as motivation text
    borderRadius: 50,
    
  },
  motivationText: {
    lineHeight :31,
    marginTop: 20,
    width:'90%',
    color: '#1F3943',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center', 
    marginBottom:13,
  },
  subText: {
    lineHeight :18,
    color: '#9DA3AE',
    fontSize: 12,
    width:'80%',
    textAlign:  'center',
  },
  buttonContainer: {
    borderRadius: 50, 
    marginTop:30,
    width: 210,
    height: 40,
    marginBottom:10,
    backgroundColor: '#1F3943',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});


