import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';
import MakeRegistred from './registred'; 
import HomeScreen from './home'
//import { Colors } from '@/constants/Colors';
//import TabTwoScreen from './explore';

const Tabs = createBottomTabNavigator();

export default function BottomNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Tabs.Navigator
      screenOptions={{
       // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
      }}>

      <Tabs.Screen        
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
    
      <Tabs.Screen 
            name="registred"
            component={MakeRegistred}
            options={{
                title: 'Inscription',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                ),
            }}
        />
    
      <Tabs.Screen
        name="explore"
        component={MakeRegistred}
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />      
    </Tabs.Navigator>
  );
}
