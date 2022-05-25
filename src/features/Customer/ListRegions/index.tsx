import regionStyles from './styles'
import {Text, TouchableOpacity, View} from "react-native";
import {useRegionList, useRegionListStatus} from "../hooks";
import {LoadingState} from "../../../components/types";
import {Button} from "../../../components/Button";


const ListRegions = () => {
    const styles = regionStyles;
    const regions=useRegionList();
    const status = useRegionListStatus();
    return (
        <View style={styles.container}>
            { status == LoadingState.Pending && ( <View>
                <Text>Loading Regions</Text>
            </View>)}

            {
                status == LoadingState.Success && regions.map( (region: string) => (
                    <Button buttonText={region} key={region} onPress={event => {}}/>
                ))
            }
        </View>
    )
}

export default ListRegions;
