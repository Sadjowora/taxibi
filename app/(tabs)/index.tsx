import { Image, StyleSheet, Platform, SafeAreaView, View, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
//import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ThemedView style={styles.container}> 
       <View style={styles.containerLogo}> 
        <Image
            source={require('@/assets/images/avionHome.png')}
            style={styles.reactLogo}
          />
        </View>
        <View style={styles.stepContainer}>
          <ThemedView style={{width:220, backgroundColor:'rgb(210, ,240, 230)'}}>
             <ThemedView style={styles.titleContainer}>
                <ThemedText type="title"> Bienvenue </ThemedText>
                <HelloWave />
            </ThemedView>
            <ThemedText style={styles.message} >
              Bonne expérience à vous!
            </ThemedText> 
          </ThemedView>        
        </View> 
        <View style={{flexDirection: 'column', alignItems: 'center', marginTop:150}} >
              <Pressable   
                 style={{backgroundColor:'rgb(210,230,255)', marginBottom: 20}}
              >  S'inscrire
              </Pressable>
              <Pressable
                 style={{backgroundColor:'rgb(241,230,210'}}   
              > Se connecter
             </Pressable>  
        </View>
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
    backgroundColor:"lavender",
    flex: 1
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
    padding: 10
  }, 
  stepContainer: { 
    marginBottom: 8,
    backgroundColor:"yellow",
    paddingTop: 3,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent:'center' 
  },
  reactLogo: {
    height: 250,
    width: 380, 
    marginBottom:100,
    borderRadius:4
  },
});
