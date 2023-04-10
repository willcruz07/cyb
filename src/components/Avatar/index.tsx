/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../../styles/Colors';

interface IAvatarProps {
    source?: string;
}

function Avatar({ source }: IAvatarProps) {
    return (
        <View style={styles.container}>
            {!source ? (
                <FontAwesome5 name="user" size={20} color={Colors.white} />
            ) : (
                <Image source={{ uri: source }} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.tertiary,
        borderColor: Colors.white,
        borderRadius: 40,
        borderWidth: 2,
        elevation: 5,
        height: 64,
        justifyContent: 'center',
        overflow: 'hidden',
        shadowColor: Colors.gray,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: 64,
    },
});

export default React.memo(Avatar);
