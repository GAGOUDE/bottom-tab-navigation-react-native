import React from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
    View,
} from 'react-native';
import { Image } from '@rneui/themed';

const BASE_URI = 'https://source.unsplash.com/random?profile&sig=456';

export default function ProfileScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={[...new Array(30)].map((_, i) => i.toString())}
                numColumns={1}
                keyExtractor={(e) => e}
                renderItem={({ item }) => (
                    <View style={styles.list}>
                        <Image
                            source={{ uri: BASE_URI + item }}
                            containerStyle={styles.item}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    list: {
        width: '100%',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
    },
    item: {
        aspectRatio: 1,
        width: '100%',
        objectFit: 'cover',
        borderColor: 'gray',
        borderWidth: 5
    },
});
