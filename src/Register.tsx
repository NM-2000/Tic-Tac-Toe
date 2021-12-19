import React, { useCallback, useState } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    registerStyle: {
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    textInputStyle: {
        marginBottom: 16,
        width: '100%',
        backgroundColor: 'lightyellow',
        borderRadius: 8,
        paddingHorizontal: 16,
        color: 'grey',
        elevation: 10,
    },
    submitStyle: {
        borderRadius: 8,
        paddingHorizontal: 32,
        paddingVertical: 16,
        backgroundColor: 'seagreen',
        elevation: 10,
    },
    submitTextStyle: {
        color: 'lightyellow',
    }
});

const Register: React.FC<{
    setPlayer: (player: number, name: string) => void,
    startPlay: () => void,
    validRegistartion: () => boolean,
}> = ({
    setPlayer,
    startPlay,
    validRegistartion,
}) => {
        const PLACEHOLDER1 = "Player1's name";
        const PLACEHOLDER2 = "Player2's name";
        const REGISTER = "Submit!";
        const [show, setShow] = useState(true);
        const [submitElevation, setSubmitElevation] = useState(10);

        const setPlayer1Name = useCallback((name: string) => {
            setPlayer(1, name);
        }, []);

        const setPlayer2Name = useCallback((name: string) => {
            setPlayer(2, name);
        }, []);

        const onSubmit = useCallback(() => {
            if(!validRegistartion()) {
                return;
            }
            setShow(false);
            startPlay();
        }, []);

        const onPressIn = useCallback(() => {
            setSubmitElevation(0);
        }, []);

        const onPressOut = useCallback(() => {
            setSubmitElevation(10);
        }, []);

        return (
            show ? 
                <View style={styles.registerStyle} >
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={PLACEHOLDER1}
                        onChangeText={setPlayer1Name}
                        placeholderTextColor={'darkgrey'}
                    />
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder={PLACEHOLDER2}
                        onChangeText={setPlayer2Name}
                        placeholderTextColor={'darkgrey'}
                    />
                    <TouchableOpacity
                        style={[styles.submitStyle, { elevation: submitElevation }]}
                        onPress={onSubmit}
                        onPressIn={onPressIn}
                        onPressOut={onPressOut}
                        activeOpacity={1}
                    >
                        <Text
                            style={styles.submitTextStyle}
                        >
                            {REGISTER}
                        </Text>
                    </TouchableOpacity>
                </View>
                : null
        );
    };

export default Register;