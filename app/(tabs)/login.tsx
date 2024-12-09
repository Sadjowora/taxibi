import {StyleSheet, SafeAreaView, TextInput, Pressable} from 'react-native';
//import ParallaxScrollView from '@/components/ParallaxScrollView'; 
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';  
import FontAwesome from '@expo/vector-icons/FontAwesome6';
import Zocial from '@expo/vector-icons/Zocial'; 
import { Link } from 'expo-router';  
 
export default function Login() {  
return (
    <SafeAreaView>
       <ThemedView style={styles.container}>   
        <ThemedText type='subtitle' style={{marginBottom:40}}> Connecte toi ! </ThemedText>
          <ThemedView style={{flex:1}}>
              <ThemedView style={{flex:0.6}} >                
                <TextInput 
                  style={styles.input}
                  inputMode='email'
                  textContentType='emailAddress'
                  placeholder='exemple@taxibi.com'
                  placeholderTextColor='gainsboro'
                />
                <TextInput 
                  style={styles.input} 
                  textContentType='password'
                  placeholder='Mot de passe'
                  placeholderTextColor='gainsboro'
                />                
               <ThemedView style={{flexDirection:'column', alignItems:'flex-end'}}>
                <Link href='/' 
                      style={styles.forgetMotdepasse}> 
                      Mot de passe oublier ?
                </Link> 
                </ThemedView>
               <Link href='activerGps' asChild> 
                  <Pressable 
                    style={styles.pressenreg}
                    >
                    Se Connecter 
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
                 </ThemedView>
                 <ThemedView style={{flexDirection:'row', flex:0.2, justifyContent:'center'}}>
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
              <ThemedView style={{flexDirection:'row', paddingBottom:275, alignItems:'flex-end', flex:0.2, justifyContent:'center'}}>
                <ThemedText type='default'>
                    Je n'ai pas de compte ? 
                  <Link href='registred'>
                    <ThemedText type="link"> S'inscrire </ThemedText>
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
  },
  forgetMotdepasse: {
    color: 'red',
    fontWeight:500
  }
});