import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity, Text
} from 'react-native';
import { Image } from '@rneui/themed';

const BASE_URI = 'https://source.unsplash.com/400x400/?home&sig=456';

const data = [...new Array(14)].map((_, i) => {
    return {
        id: i.toString(),
        uri: BASE_URI + i.toString()
    };
});

export default function HomeScreen() {
    const [selectedId, setSelectedId] = useState();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={data}
                style={styles.list}
                numColumns={2}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) => {
                    const color = item.id === selectedId ? '#FFFFFF' : 'transparent';
                    const backgroundColor = item.id === selectedId ? '#000000' : 'transparent';

                    return (
                        <TouchableOpacity
                            style={{ flex: 1, backgroundColor: 'green' }}
                            onPress={() => setSelectedId(item.id)}
                            activeOpacity={0.6}
                        >
                            <Image
                                source={{ uri: item.uri }}
                                containerStyle={styles.item}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                            <Text style={{ position: 'absolute', top: '40%', left: '25%', fontSize: 22, color: color, backgroundColor: backgroundColor, padding: 8, borderRadius: 10 }}>Home !</Text>
                        </TouchableOpacity>
                    )
                }}
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
        borderWidth: 2,
        flex: 1,
    },
});
