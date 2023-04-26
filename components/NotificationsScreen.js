import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import { Image } from '@rneui/themed';

const BASE_URI = 'https://source.unsplash.com/random?notifications&sig=456';

export default function NotificationsScreen() {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <FlatList
                data={[...new Array(10)].map((_, i) => i.toString())}
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
        backgroundColor: '#1aafff',
    },
    item: {
        // aspectRatio: 1,
        width: 170,
        height: 170,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10
    },
});
