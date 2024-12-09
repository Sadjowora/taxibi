import {StyleSheet, SafeAreaView, Image, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import ParallaxScrollView from '@/components/ParallaxScrollView';
//import { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';  
import { Link } from 'expo-router'; 
//import { useEffect, useState } from 'react';
 
export default function AcitveLocation() {  
return (
    <SafeAreaView>
       <ThemedView style={styles.container}> 
         <ThemedView style={styles.secondContainer}> 
            <ThemedView style={styles.containerPhoto}>
                <ThemedView style={styles.iconLocation}>
                    <Ionicons name='location' size={50} color={'black'}  />
                </ThemedView>  
            </ThemedView>  
            <ThemedView style={{padding:10, backgroundColor:'gainsboro', borderRadius:10, marginTop:15}}>
                <ThemedText type='subtitle' style={{padding:5, textAlign:'center'}}> Activez votre location </ThemedText>
                <ThemedText type='default' style={{color:'darkgray', textAlign:'center'}}> 
                    Ouvrez votre location pour pouvoir accedez aux taxis dans votre zone
                </ThemedText>
                <Link href='/' asChild> 
                    <Pressable 
                    style={styles.useMylocate}
                    >
                    Montrer ma position
                    </Pressable>
                </Link>
                <Link href='registred' style={{color:'dimgray', fontSize:16, textAlign:'center', marginTop:15}}> ignorer pour l'instant </Link>
           </ThemedView>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1, 
   padding:20, paddingTop:150, 
   paddingBottom:150, 
   backgroundColor:"#fff",
  },
  secondContainer: {
    backgroundColor:"#f5f5f5",
    borderColor:'gray',
    borderWidth:1,
    borderRadius:10,
    padding:10,
    shadowColor:'dimgray', 
    shadowOpacity: 0.4,
    shadowOffset: {width: 1, height: 1},
    shadowRadius:4,
  },
  containerPhoto:{
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#fffff',
  },
  iconLocation: {
    height: 100,
    width: 100,  
    borderWidth:4, 
    borderRadius:300,
    padding:10,
    flexDirection:'row',
    justifyContent:'center',
    borderColor:'yellow',
    shadowColor:'yellow', 
    shadowOpacity: 0.8,
    shadowOffset: {width: 1, height: 1},
    shadowRadius:4,
  },
  useMylocate:{
    fontFamily:'Roboto',
    backgroundColor:'yellow', 
    marginBottom: 20,
    marginTop:30,
    padding:15,
    width:'100%',
    paddingLeft:35,
    paddingRight:35,
    borderRadius: 5,
    fontSize:18,
    textAlign: 'center',
    color:'black',
    fontWeight:"500"
  },
});