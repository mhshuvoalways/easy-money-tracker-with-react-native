import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransScreen from './screens/TransScreen';
import TransAddScreen from './screens/TransAddScreen';
import AccountAddScreen from './screens/AccountAddScreen';
import AccountEditScreen from './screens/AccountEditScreen';
import CategoryAddScreen from './screens/CategoryAddScreen';
import CategoryEditScreen from './screens/CategoryEditScreen';
import AnalyisScreen from './screens/AnalyisScreen';
import AccountScreen from './screens/AccountScreen';
import MoreScreen from './screens/MoreScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#40B5AD',
        tabBarStyle: {
          height: 55,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen
        name="TransScreen"
        component={TransScreen}
        options={{
          tabBarLabel: 'Trans.',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AnalyisScreen"
        component={AnalyisScreen}
        options={{
          tabBarLabel: 'Analysis',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="barschart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Accounts',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="creditcard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <Feather name="more-horizontal" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TransAddScreen" component={TransAddScreen} />
        <Stack.Screen name="AccountAddScreen" component={AccountAddScreen} />
        <Stack.Screen name="AccountEditScreen" component={AccountEditScreen} />
        <Stack.Screen name="CategoryAddScreen" component={CategoryAddScreen} />
        <Stack.Screen
          name="CategoryEditScreen"
          component={CategoryEditScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
