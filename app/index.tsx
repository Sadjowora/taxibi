//import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font'; 
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import NotFoundScreen from './+not-found'; 
import DrawerNavigator from './(tabs)/_drawerNavigation'
//import { NavigationContainer } from '@react-navigation/native'; 
//import 'react-native-reanimated';
//import { useColorScheme } from '@/hooks/useColorScheme'; 

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function RootLayout() {
//  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  //  <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
  //  </ThemeProvider>

  return (  
      <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>

        <Stack.Screen 
              name="_drawerNavigation" 
              component={DrawerNavigator}
              /> 
         
         <Stack.Screen name="+not-found" component={NotFoundScreen} />       
      </Stack.Navigator> 
  );
}
