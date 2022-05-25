import {View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import WelcomeScreen from "./screens/Welcome";
import ListRegionsScreen from "./screens/Customers/ListRegions";

export type RootStackParamList = {
    Welcome: undefined;
    ListRegions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const BaseNavigation = () => {
    return (<NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="ListRegions" component={ListRegionsScreen} options={{title: 'Customer Regions'}}/>
        </Stack.Navigator>
    </NavigationContainer>);
}


export default BaseNavigation;
