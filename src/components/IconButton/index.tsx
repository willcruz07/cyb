/* eslint-disable react-native/no-color-literals */
import React, { ReactNode, useMemo } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../../styles/Colors';
import { Fonts } from '../../styles/Fonts';

type TIcon = 'add' | 'history';

interface IIconButton {
    label: string;
    onPress(): void;
    icon: TIcon;
}

function IconButton({ icon, label, onPress }: IIconButton) {
    const getIcon = useMemo(() => {
        const data: Record<TIcon, ReactNode> = {
            add: <Ionicons name="md-add-circle-outline" size={32} color="#8BA688" />,
            history: <Ionicons name="newspaper-outline" size={28} color="#8BA688" />,
        };

        return data[icon];
    }, [icon]);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            {getIcon}
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.tertiary,
        borderColor: Colors.tertiaryBorder,
        borderRadius: 8,
        borderWidth: 2,
        height: 128,
        justifyContent: 'center',
        width: 112,
    },

    label: {
        color: Colors.white,
        fontFamily: Fonts.primaryBold,
        marginTop: 8,
    },
});

export default React.memo(IconButton);
