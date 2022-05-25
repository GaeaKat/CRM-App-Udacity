import {TouchableOpacity, Text, GestureResponderEvent} from "react-native";
import buttonStyles from './styles'
type ButtonProps = {
    buttonText: string,
    onPress: ((event: GestureResponderEvent) => void)
}

export const Button = ({buttonText, onPress}:ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyles.button}>
            <Text style={buttonStyles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>

    )
}
