import React from "react";
import { StyleSheet, View } from "react-native";
import Divider from "./Divider";
import PlayGround from "./PlayGround";
import Title from "./Title";

const styles = StyleSheet.create({
    appStyle: {
        flex: 1,
    }
});

const TicTacToe = () => {

    return (
        <View style={styles.appStyle} >
            <Title />
            <Divider />
            <PlayGround />
        </View>
    );
}

export default TicTacToe;