import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    titleContainertyle: {
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor: 'seagreen',
    },
    titleStyle: {
        fontSize: 48,
        color: 'orange',
        elevation: 10,
    }
});

const Title = () => {
    const TITLE = "Tic-Tac-Toe"

    return (
        <View style={styles.titleContainertyle} >
            <Text style={styles.titleStyle} >
                {TITLE}
            </Text>
        </View>
    );
};

export default Title;