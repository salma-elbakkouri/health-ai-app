import React from 'react';
import { Button, Image, Text, View, StyleSheet, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons from Expo Vector Icons
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router'; // Corrected import for router

export default function HomeScreen() {
  const router = useRouter(); // Use the router hook

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello Salma</Text>
          <Text style={styles.headerPara}>Book your appointment <Ionicons name="search" size={24} color="black" /></Text>
        </View>
        <LinearGradient
          colors={['#4d869c', '#548ea1', '#5b97a5', '#649fa9', '#6da7ad', '#78afb2', '#84b7b8', '#8fbfbe', '#9fc9c7', '#aed3d1', '#bededb', '#cde8e5']}
          style={styles.motivationBox}
        >
          <View style={styles.motivationContent}>
            <View style={styles.motivationTexts}>
            <Text style={styles.motivationText}>Trust care with us</Text>
            {/* <Button title="Start Now" color="#1F3943" onPress={() => {}} /> */}
            </View>
            <Image source={require('@/assets/images/doctor.png')} style={styles.image} />
          </View>
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, 
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 40, 
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerPara: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  motivationBox: {
    marginTop: 20,
    height: 150,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  motivationContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  motivationTexts: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  motivationText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 150,
  },
});

