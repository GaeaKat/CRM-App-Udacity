import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import welcomeStyles from './styles'
import {useNavigation} from "@react-navigation/native";
import {CrmButton} from "../../components/CrmButton";

export default function () {
    const styles=welcomeStyles;
    const { navigate } = useNavigation()
    return (
        <View style={styles.container}>
            <Text>{'Welcome to Customer Manager Plus'}</Text>
            <CrmButton buttonText="Customer Regions" onPress={event => navigate('ListRegions')} />
        </View>
    )
}
