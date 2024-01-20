import { Image, View } from "react-native";
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';
import {Gesture, GestureDetector} from "react-native-gesture-handler";

export default function EmojiSticker ({ imageSize, stickerSource }) {
    const scaledImage = useSharedValue(imageSize);

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if(scaledImage.value !== imageSize * 2) {
                scaledImage.value = scaledImage.value * 2;
            }
        });

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaledImage.value),
            height: withSpring(scaledImage.value),
        }
    })
    return (
        <View style={{ top: -350 }}>
            <GestureDetector gesture={doubleTap}>
                <Animated.Image source={stickerSource} resizeMode={'contain'} style={[imageStyle, { width: imageSize, height: imageSize }]} />
            </GestureDetector>
        </View>
    )
}
