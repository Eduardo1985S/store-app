import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons'

import Feed from "../screens/Feed";
import New from "../screens/New";
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="home"
                component={Feed}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
                    tabBarLabel: 'Feed'

                }}

            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="add" color={color} size={40} />,
                    tabBarLabel: 'Profile'
                }}
            />
            <Tab.Screen
                name="new"
                component={New}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="local-library" color={color} size={size} />,
                    tabBarLabel: 'New'
                }}
            />
        </Tab.Navigator>
    )
}

