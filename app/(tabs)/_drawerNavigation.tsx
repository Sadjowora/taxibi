//import Login from './(tabs)/login';
//import { useWindowDimensions } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme'; 
import { Feather } from '@expo/vector-icons';
import  BottomNavigator  from './_bottomNavigation'; 
//import 'react-native-gesture-handler';
import Login from './login';

const Drawer = createDrawerNavigator();

export default function DrawerNavgiator() {
  const colorScheme = useColorScheme();
  //const dimensions = useWindowDimensions();
 
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>       
        <Drawer.Navigator screenOptions={{
        headerTitleStyle: {fontWeight: 'bold', fontSize: 22},
        headerPressColor: 'yellow',
        headerStyle: {backgroundColor:'yellow', borderWidth:0} 
        }}>
          <Drawer.Screen    
                  name="Connexion" 
                  component={BottomNavigator}  
                  options={{
                    drawerIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />,
                    drawerLabel: 'Accueil'
                  }}
              /> 

             <Drawer.Screen  
                  name="Login" 
                  component={Login} 
                  options={{
                    drawerIcon: ({ color, size }) => <Feather name='settings' color={color} size={size} />,
                    drawerLabel: 'Paramêtre'
                  }}
              />
           <Drawer.Screen  
                  name="Apropos" 
                  component={Login} 
                  options={{
                    drawerIcon: ({ color, size }) => <Feather name='info' color={color} size={size} />,
                    drawerLabel: 'Apropos de nous'
                  }}
              /> 

        </Drawer.Navigator> 
    </ThemeProvider>
  );
}
