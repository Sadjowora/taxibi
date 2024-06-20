import { Image, StyleSheet, Platform, SafeAreaView, View, Pressable } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
//import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}> 
       <ThemedView style={styles.containerLogo}> 
        <Image
            source={require('@/assets/images/avionHome.png')}
            style={styles.reactLogo}
          />
        </ThemedView>
        <ThemedView style={{backgroundColor:"yellow", flex:0.5}}>
        <View style={styles.stepContainer}>
          <ThemedView style={{backgroundColor:"yellow"}}>
             <ThemedView style={styles.titleContainer}>
                <ThemedText type="title" style={{backgroundColor:"yellow"}}> Bienvenue </ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedText style={styles.message} >
              Bonne expérience à vous!
            </ThemedText> 
          </ThemedView>        
        </View> 
        <ThemedView style={{flexDirection: 'column', alignItems: 'center', marginBottom:0, flex:0.4, backgroundColor:"yellow"}} >
              <Link href='registred' asChild>
                <Pressable   
                  style={styles.pressableRegistred} 
                > Crée un compte
                </Pressable>
              </Link>
              <Link href='login' asChild>
                <Pressable
                  style={styles.pressableConnexion}   
                > Se connecter
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
   padding: 10
  },
  containerLogo: {
    backgroundColor:"#fff",
    flex: 0.6,
    alignContent:'center',
    alignItems:'center',
    flexDirection:'row',
    borderColor:'red'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:12
  },
  down: {
    padding: 10
  },
  message: {
    padding: 10,
    color:'dimgray'
  }, 
  stepContainer: {
    marginBottom: 100,
    backgroundColor:"yellow",
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent:'center',
    flex:0.4
  },
  pressableConnexion:{
    fontFamily:'Roboto',
    backgroundColor:'#ffffff', 
    marginBottom: 20,
    padding:15,
    width:300,
    paddingLeft:35,
    paddingRight:35,
    borderRadius: 5,
    fontSize:18,
    textAlign: 'center'
  },
  pressableRegistred : {
    fontFamily:'Roboto',
    backgroundColor:'black', 
    marginBottom: 20, 
    padding:15,
    width:300,
    paddingLeft:35, 
    paddingRight:35,
    borderRadius: 5, 
    color:'yellow',
    fontSize: 18,
    textAlign: 'center'
  },
  reactLogo: {
    height: 250,
    width: 395, 
    marginBottom:1,
    borderRadius:4
  },
});
