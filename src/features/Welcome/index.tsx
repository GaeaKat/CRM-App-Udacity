import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import welcomeStyles from './styles'
import {useNavigation} from "@react-navigation/native";
import {Button} from "../../components/Button";

export default function () {
    const styles=welcomeStyles;
    const { navigate } = useNavigation()
    return (
        <View style={styles.container}>
            <Text>{'Welcome to Customer Manager Plus'}</Text>
            <Button buttonText="Customer Regions" onPress={event => navigate('ListRegions')} />
        </View>
    )
}
