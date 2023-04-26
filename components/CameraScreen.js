import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import { Image } from '@rneui/themed';

const BASE_URI = 'https://source.unsplash.com/random?camera&sig=456';

export default function CameraScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={[...new Array(20)].map((_, i) => i.toString())}
                style={styles.list}
                numColumns={2}
                keyExtractor={(e) => e}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: BASE_URI + item }}
                        containerStyle={styles.item}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    list: {
        width: '100%',
        backgroundColor: '#000',
    },
    item: {
        aspectRatio: 1,
        width: '100%',
        borderWidth: 2,
        borderColor: 'white',
        flex: 1,
    },
});
