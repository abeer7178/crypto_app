import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import DashboardScreen from '../screens/DashboardScreen';

const Tab = createBottomTabNavigator();

const PlaceholderScreen = ({ name }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{name} Screen</Text>
  </View>
);

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') iconName = 'home';
          else if (route.name === 'Deals') iconName = 'pricetag';
          else if (route.name === 'Card') iconName = 'card';
          else if (route.name === 'Notification') iconName = 'notifications';
          else if (route.name === 'Profile') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: '#B0BEC5',
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
          paddingBottom: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false, tabBarLabel: 'Menu' }} />
      <Tab.Screen name="Deals" component={() => <PlaceholderScreen name="Deals" />} options={{ tabBarLabel: 'Deals' }} />
      <Tab.Screen name="Card" component={() => <PlaceholderScreen name="Card" />} options={{ tabBarLabel: 'Card' }} />
      <Tab.Screen name="Notification" component={() => <PlaceholderScreen name="Notification" />} options={{ tabBarLabel: 'Notification' }} />
      <Tab.Screen name="Profile" component={() => <PlaceholderScreen name="Profile" />} options={{ tabBarLabel: 'Profile' }} />
    </Tab.Navigator>
  );
}