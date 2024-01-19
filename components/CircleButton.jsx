import {MaterialIcons} from "@expo/vector-icons";
import {StyleSheet, Pressable, View} from "react-native";

export default function CircleButton ({ onPress }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress} style={styles.circleButton}>
                <MaterialIcons name="add" size={38} color="#252923" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 84,
        height:84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: '#ffd33d',
        borderRadius: 42,
        padding: 3,
    },
    circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor:'#fff',
    }
})
