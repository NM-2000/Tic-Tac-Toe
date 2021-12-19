import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    dividerStyle: {
        height: 8,
        backgroundColor: 'tomato',
    }
});

const Divider = () => {

    return (
        <View style={styles.dividerStyle} />
    );
};

export default Divider;