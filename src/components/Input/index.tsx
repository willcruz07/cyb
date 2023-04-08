/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View, TextInput, Text, TextInputProps, StyleSheet } from 'react-native';
import { Colors } from '../../styles/Colors';
import { Fonts } from '../../styles/Fonts';

interface IInputProps extends TextInputProps {
    label: string;
    marginBottom?: number;
    marginTop?: number;
}

function Input({ label, marginBottom, marginTop, ...rest }: IInputProps) {
    return (
        <View style={[{
            marginBottom,
            marginTop,
        }, styles.container]}
        >
            <Text style={styles.label}>{label}</Text>
            <View style={styles.containerInput}>
                <TextInput {...rest} selectionColor={Colors.black} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: Colors.white,
        width: '100%',
        // flex: 1,
    },
    containerInput: {
        backgroundColor: Colors.white,
        borderColor: '#BBB89B',
        borderRadius: 8,
        borderStyle: 'solid',
        borderWidth: 2,
        height: 48,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    label: {
        color: Colors.white,
        fontFamily: Fonts.primary,
        marginBottom: 8,
        marginLeft: 8,
    },
});

export default React.memo(Input);
