import React from 'react';
import { Image, View } from 'react-native';

interface IAvatarProps {
    source?: string;
}

function Avatar({ source }: IAvatarProps) {
    return (
        <View>
            <Image source={{ uri: source }} />
        </View>
    );
}

export default React.memo(Avatar);
