import {StyleSheet, SafeAreaView, TextInput, Pressable} from 'react-native';
//import ParallaxScrollView from '@/components/ParallaxScrollView';
//import { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView'; 
//import { useEffect, useState } from 'react';
import { Link } from 'expo-router';

export default function SetPassWord() { 
 //const [motdepasse, setMdp] = useState(null); 
return (
    <SafeAreaView>
       <ThemedView style={styles.container}>   
        <ThemedView style={{flexDirection:'column', alignItems:'center'}}>
            <ThemedText type='subtitle' style={{marginBottom:10}}> Enregistrer votre mot de passe ! </ThemedText>
            <ThemedText type='default' style={{marginBottom:40, color:'gray'}}> Entrez votre mot de passe </ThemedText>
        </ThemedView>
          <ThemedView style={{flex:1, paddingBottom:300}}>
              <ThemedView style={{flex:0.6, marginBottom:10}} >                
                <TextInput 
                  style={styles.input}
                  //inputMode='email'
                  placeholder='mot de passe'
                  placeholderTextColor='gainsboro'
                />
                <TextInput 
                  style={styles.input}
                  //inputMode='password'
                  placeholder='confirmer votre mot de passe'
                  placeholderTextColor='gainsboro'
                />                               
              </ThemedView> 
              <ThemedView style={{flexDirection:'row', alignItems:'flex-end', flex:0.2, justifyContent:'center'}}>
                <ThemedText type='default' style={{color:'gray'}}>
                  Veuillez rajouter des chiffres des lettres majuscule 
                </ThemedText>
              </ThemedView>
            <Link href='setProfile' asChild> 
                <Pressable 
                style={styles.pressenreg}
                >
                Enregistrer 
                </Pressable>
            </Link>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1, 
   padding:15, paddingTop:50,
   backgroundColor:"#fff",
   height:300
  },
  input:{
    borderRadius:5,
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'gainsboro',
    padding:10,
    height:60,
    marginBottom:20,
    fontSize:18, 
    fontWeight:600
  },
  placeholder: {
    color:'gray'
  },
  pressenreg:{
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
  containerIcons:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width: 200,
  } 
});