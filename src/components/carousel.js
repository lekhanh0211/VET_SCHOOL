import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler';

const images = [
    'https://bizweb.dktcdn.net/100/398/603/themes/835010/assets/index_banner_1.jpg?1633510149717',
    'https://nhasachquangloi.vn/pub/media/magiccart/magicslider/b/a/banner_sachgiaokhoa1_1.jpg',
    'https://nhasachhaihau.com/wp-content/uploads/2021/04/banner2.jpg'
]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Carousel = () => {
    const [imgActive, setimgActive] = useState(0);
    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {
                        images.map((item, index) =>
                            <Image
                                resizeMode='stretch'
                                key={item}
                                style={styles.wrap}
                                source={{ uri: item }}
                            />
                        )}
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((item, index) =>
                            <Text
                                key={item}
                                style={imgActive == index ? styles.dotActive : styles.dot}
                            >●</Text>
                        )
                    }
                </View>
            </View>
        </View>
    )
}

export default Carousel

const styles = StyleSheet.create({
    container: {

    },
    wrap: {
        width: WIDTH * 0.9,
        height: HEIGHT * 0.2,
        borderRadius: 10,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5
    },
    dotActive: {
        margin: 3,
        color: '#1fc250'
    },
    dot: {
        margin: 3,
        color: '#000'
    },
})