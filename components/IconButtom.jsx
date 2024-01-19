import {Pressable, StyleSheet} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

export default function IconButton ({icon, label, onPress}) {
    return (
        <Pressable onPress={onPress}>
            <MaterialIcons name={icon} size={24} color={'#fff'} />
            <Text>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12,
    }
})
