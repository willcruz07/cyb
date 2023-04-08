/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-native/no-unused-styles */
import { useCallback, useEffect, useState } from 'react';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { Dimensions, Modal, StyleSheet } from 'react-native';
import { IComponentWithChildren } from '@/src/models/components';

interface IModalProps extends IComponentWithChildren {
    isVisible: boolean;
    bottomModal: boolean;
}

const deviceHeight = Dimensions.get('window').height + 56;

export function ModalComponent({ isVisible, children }: IModalProps)  {
    const [showModal, setShowModal] = useState<boolean>(isVisible);
    const [showBackdrop, setShowBackdrop] = useState<boolean>(false);
    const [showContent, setShowContent] = useState<boolean>(false);

    const toggleModal = useCallback(() => {
        if (isVisible) {
            setShowModal(true);
            setTimeout(() => setShowBackdrop(true), 100);
            setTimeout(() => setShowContent(true), 300);
        } else {
            setShowContent(false);
            setTimeout(() => setShowBackdrop(false), 100);
            setTimeout(() => setShowModal(false), 300);
        }
    }, [isVisible]);

    useEffect(() => {
        toggleModal();
    }, [isVisible]);

    if (!showModal) return null;

    return (
        <Modal
            statusBarTranslucent
            transparent
            style={{ height: deviceHeight }}
            visible={showModal}
        >
            {showBackdrop && (
                <Animated.View style={styles.modalContainer} entering={FadeIn} exiting={FadeOut}>
                    {showContent && (
                        <Animated.View style={styles.modalContent} entering={ZoomIn.duration(200)} exiting={ZoomOut}>
                            {children}
                        </Animated.View>
                    )}
                </Animated.View>
            )}
        </Modal>
    );
};

export const styles = StyleSheet.create({
    modalContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        height: deviceHeight,
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 48,
    },

    modalContent: { maxHeight: '80%' },
});
