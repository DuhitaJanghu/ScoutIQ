
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DiscoverScreen from "../screens/DiscoverScreen";

import ProfileScreen from "../screens/ProfileScreen";

import ShortlistScreen from "../screens/ShortlistScreen";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function DiscoverStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DiscoverHome"
        component={DiscoverScreen}
        options={{
          title: "Discover",
        }}
      />

      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Discover" component={DiscoverStack} />

        <Tab.Screen name="Shortlist" component={ShortlistScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
