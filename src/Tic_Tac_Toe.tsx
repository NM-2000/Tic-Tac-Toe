import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import Divider from "./Divider";
import PlayGround from "./PlayGround";
import Register from "./Register";
import Title from "./Title";

const styles = StyleSheet.create({
    appStyle: {
        flex: 1,
        backgroundColor: 'grey'
    }
});

const TicTacToe = () => {
    const player1 = useRef('');
    const player2 = useRef('');
    const [registered, setRegistered] = useState(false);

    const startPlay = () => {
        setRegistered(true);
    };

    const setPlayer = (player: number, name: string) => {
        if (player === 1) {
            player1.current = name;
        }
        else { 
            player2.current = name;
        }
    };

    const getPlayer = (player: number) => {
        if (player === 1) {
            return player1.current;
        }
        else {
            return player2.current;
        }
    };

    const validRegistration = () => {
      return player1.current.length > 0 && player2.current.length > 0;
    };

    return (
        <View style={styles.appStyle} >
            <Title />
            <Divider />
            <Register setPlayer={setPlayer} startPlay={startPlay} validRegistartion={validRegistration} />
            <PlayGround play={registered} getPlayer={getPlayer} />
        </View>
    );
}

export default TicTacToe;