import {StyleSheet, SafeAreaView, TextInput, Pressable } from 'react-native';
//import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useState } from 'react';
import { Link } from 'expo-router'; 
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import RNPickerSelect from 'react-native-picker-select';
import FontAwesome from '@expo/vector-icons/FontAwesome6';
import Zocial from '@expo/vector-icons/Zocial'; 

export type placeholder = {
  label?: string;
  value?: any;
};

export type MyPicker=  {   
  placeholder?: placeholder;
  items?:[{label: string, value?: string }];
  onValueChange?: any;
  value?:string;
}

export default function MakeRegistred() { 
  const [selectedValue, setSelectedValue] = useState(null); 


  const placeholder:placeholder = {
    label: 'Sexe',
    value: null,
  };

  const options = [
    { label: 'Homme', value: 'Homme' },
    { label: 'Femme', value: 'Femme' }, 
  ];



return (
  <SafeAreaView>
    <ThemedView style={styles.container}>   
        <ThemedText type='subtitle' style={{marginBottom:40}}> Enregistrer vous </ThemedText>
          <ThemedView style={{flex:1}}>
            <ThemedView style={{flex:0.6}} >
                <TextInput 
                  style={styles.input}
                  inputMode='text'
                  placeholder='Nom'
                  placeholderTextColor='gainsboro'
                /> 
                <TextInput 
                  style={styles.input}
                  inputMode='text'
                  placeholder='Prenom'
                  placeholderTextColor='gainsboro'
                />
                <TextInput 
                  style={styles.input}
                  inputMode='tel'
                  placeholder='+221 Votre numero ici'
                  keyboardType='numeric'
                  placeholderTextColor='gainsboro'
                />  
                <TextInput 
                  style={styles.input}
                  inputMode='email'
                  placeholder='exemple@taxibi.com'
                  placeholderTextColor='gainsboro'
                /> 
                <RNPickerSelect
                    placeholder={placeholder}
                    items={options}
                    onValueChange={(value) => setSelectedValue(value)}
                    value={selectedValue}
                    style={pickerSelectStyles}
                 /> 
               </ThemedView>
               <ThemedView style={{flex:0.3, marginTop:5}}>
                  <ThemedText type='default'> * Les termes sont lue et accepter </ThemedText>
                <Link href='setPassword' asChild> 
                    <Pressable 
                      style={styles.pressenreg}
                      >
                    Enregistrer 
                    </Pressable>
                </Link>
                <ThemedView style={{flexDirection:'row', justifyContent:'center', marginTop:20, marginBottom:4}}>
                   <ThemedText 
                      type='default' 
                      style={{color:'gray', backgroundColor:'gray', height:1,width:150}}> 
                    </ThemedText>
                   <ThemedText style={{color:'gray', backgroundColor:'gainsboro', padding:0, borderRadius:3}}> ou </ThemedText>
                   <ThemedText 
                      type='default' 
                      style={{color:'gray', backgroundColor:'gray', height:1,width:150}}> 
                   </ThemedText>
                </ThemedView> 
                <ThemedView style={styles.collectionSociale}>
                  <ThemedView style={styles.containerIcons}>
                    <FontAwesome.Button
                        name='facebook' 
                        size={25}
                        color='blue'
                        backgroundColor='gainsboro' 
                      >
                      </FontAwesome.Button> 
                      <Zocial.Button
                        name='gmail' 
                        size={25} 
                        color='red'
                        backgroundColor='gainsboro'
                      >
                      </Zocial.Button> 
                      <FontAwesome.Button
                        name='apple' 
                        size={25} 
                        color='black'
                        backgroundColor='gainsboro'
                      >
                      </FontAwesome.Button> 
                   </ThemedView>
                 </ThemedView>
               </ThemedView>
               <ThemedView style={{flexDirection:'row', marginTop:90, flex:0.1, justifyContent:'center',}}>
                <ThemedText type='default'>
                    Vous avez déja un compte? 
                  <Link href="login">
                    <ThemedText type="link"> Se connecter </ThemedText>
                  </Link>
              </ThemedText>
             </ThemedView>
            </ThemedView>
      </ThemedView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1, 
   padding:15, paddingTop:50,
   backgroundColor:"#fff"
  },
  input:{
    borderRadius:5,
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'gainsboro',
    padding:8,
    height:50,
    marginBottom:20,
    fontSize:16
  },
  placeholder: {
    color: 'gray'
  },
  pressenreg:{
    fontFamily:'Roboto',
    backgroundColor:'yellow', 
    marginBottom: 20,
    marginTop:20,
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
  },
  collectionSociale:{
    flexDirection:'row', 
    justifyContent:'center', 
    borderTopColor:'gainsboro', 
    paddingTop:8
  }
});

const pickerSelectStyles = StyleSheet.create({ 
  inputIOS : { 
      fontSize : 16 , 
      paddingVertical : 12 , 
      paddingHorizontal : 10 , 
      borderWidth : 1 , 
      borderColor : 'gray' , 
      borderRadius : 4 , 
      color : 'black' , 
      paddingRight : 30
    },
  inputAndroid : { 
      fontSize : 16 , 
      paddingHorizontal : 10 , 
      paddingVertical : 8 , 
      borderWidth : 0.5 , 
      borderColor : 'purple' , 
      borderRadius : 8 , 
      color : 'black' , 
      paddingRight : 30 
     } 
  });           
            
