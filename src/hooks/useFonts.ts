import * as Font from 'expo-font';

export const useLoadFonts = async () => {
    await Font.loadAsync({
        'nunito-800': require('../assets/fonts/nunito-800.ttf'),
        'nunito-500': require('../assets/fonts/nunito-500.ttf'),
        'nunito-300': require('../assets/fonts/nunito-300.ttf'),
        'a-bee-zee-regular': require('../assets/fonts/a-bee-zee-regular.ttf'),
    });
};
