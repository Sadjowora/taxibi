import {StyleSheet, SafeAreaView, TextInput, Pressable, Image } from 'react-native';
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

export default function Profile() { 
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
         <ThemedView style={styles.containerPhoto}> 
            <Image
                source={require('@/assets/images/chouayb.jpg')}
                style={styles.photoProfile}
              />
        </ThemedView>
          <ThemedView style={{flex:1, backgroundColor:'#fff', paddingBottom:100}}>
            <ThemedView style={{flex:0.7}} >
                <TextInput 
                  style={styles.input}
                  inputMode='text'
                  placeholder='Rue'
                  placeholderTextColor='gainsboro'
                /> 
                <TextInput 
                  style={styles.input}
                  inputMode='text'
                  placeholder='Ville'
                  placeholderTextColor='gainsboro'
                />
                <TextInput 
                  style={styles.input}
                  inputMode='text'
                  placeholder='Quartier' 
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
                <ThemedView style={{flexDirection:'row', marginTop:55, flex:0.3, justifyContent:'space-between',}}>
                  <Link href='setPassword' asChild> 
                      <Pressable 
                        style={styles.pressannul}
                        >
                      Annuler 
                      </Pressable>
                  </Link>
                  <Link href='setPassword' asChild> 
                      <Pressable 
                        style={styles.pressenreg}
                        >
                      Enregistrer 
                      </Pressable>
                  </Link>
                </ThemedView>
            </ThemedView>
      </ThemedView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1, 
   padding:15, 
   paddingTop:50,
   backgroundColor:"#fff"
  },
  containerPhoto:{
    flexDirection:'row',
    justifyContent:'center'
  },
  photoProfile: {
    height: 150,
    width: 150, 
    marginBottom:10,
    borderRadius:300,
    borderWidth:4,
    borderColor:'yellow'
  },
  input:{
    borderRadius:5,
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'gainsboro',
    padding:10,
    height:55,
    marginBottom:20,
    fontSize:18
  },
  placeholder: {
    color: 'gray'
  },
  pressannul:{
    fontFamily:'Roboto',
    backgroundColor:'#fff', 
    marginBottom: 20,
    marginTop:20,
    borderColor:'dimgray',
    borderWidth:1,
    padding:15,
    width:'40%',
    paddingLeft:35,
    paddingRight:35,
    borderRadius: 5,
    fontSize:18,
    textAlign: 'center',
    color:'black',
    fontWeight:"500",
    height:50
  },
  pressenreg:{
    fontFamily:'Roboto',
    backgroundColor:'yellow', 
    marginBottom: 20,
    marginTop:20,
    padding:15,
    width:'40%',
    paddingLeft:35,
    paddingRight:35,
    borderRadius: 5,
    fontSize:18,
    textAlign: 'center',
    color:'black',
    fontWeight:"500",
    height:50
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
            
