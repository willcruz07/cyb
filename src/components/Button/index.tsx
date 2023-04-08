/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../../styles/Colors';
import { Fonts } from '../../styles/Fonts';

interface IButtonProps {
    label: string;
    onPress?(): void;
    marginTop?: number;
    marginBottom?: number;
}

function PrimaryButton({ label, onPress, marginBottom, marginTop }: IButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={[{ marginBottom, marginTop }, styles.container]}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderColor: '#63784B',
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 2,
        height: 56,
        justifyContent: 'center',
        width: '100%',
    },

    label: {
        color: Colors.white,
        fontFamily: Fonts.primaryBold,
        fontSize: 16,
    },
});

export default React.memo(PrimaryButton);
