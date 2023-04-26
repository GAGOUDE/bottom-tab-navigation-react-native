import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CameraScreen from './components/CameraScreen';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import NotificationsScreen from './components/NotificationsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Camera') {
              iconName = 'md-videocam';
            } else if (route.name === 'Profile') {
              iconName = 'md-people';
            }
            return <Ionicons name={iconName} size={25} color={color} />;
          },
          "tabBarActiveTintColor": "#0984e3",
          "tabBarInactiveTintColor": "#747d8c",
          "tabBarActiveBackgroundColor": "#dfe6e9",
          "tabBarInactiveBackgroundColor": "#FFF",
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
        })}
      >
        {/* Link of Navigation */}
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
