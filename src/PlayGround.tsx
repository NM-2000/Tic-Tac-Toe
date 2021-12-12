import React, { useCallback, useRef } from "react";
import { StyleSheet, View } from "react-native";
import Cell from "./Cell";

const styles = StyleSheet.create({
    playgroundStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 64,
    },
    rowStyle: {
        flexDirection: 'row'
    },
    marginStyle: {
        marginBottom: 16,
    },
    cellCustomStyle: {
        marginRight: 16,
    }
});

const PlayGround = () => {
    const turn = useRef(1);

    const getTurn = useCallback(() => {
        return turn.current;
    }, []);

    const toggleTurn = useCallback(() => {
        if (turn.current === 1) {
            turn.current = 2;
        }
        else {
            turn.current = 1;
        }
    }, []);

    return (
        <View style={styles.playgroundStyle} >
            <View style={[styles.rowStyle, styles.marginStyle]} >
                <Cell customStyles={styles.cellCustomStyle} getTurn={getTurn} toggleTurn={toggleTurn} />
                <Cell customStyles={styles.cellCustomStyle} getTurn={getTurn} toggleTurn={toggleTurn} />
                <Cell getTurn={getTurn} toggleTurn={toggleTurn} />
            </View>
            <View style={[styles.rowStyle, styles.marginStyle]} >
                <Cell customStyles={styles.cellCustomStyle} getTurn={getTurn} toggleTurn={toggleTurn} />
                <Cell customStyles={styles.cellCustomStyle} getTurn={getTurn} toggleTurn={toggleTurn} />
                <Cell getTurn={getTurn} toggleTurn={toggleTurn} />
            </View>
            <View style={styles.rowStyle} >
                <Cell customStyles={styles.cellCustomStyle} getTurn={getTurn} toggleTurn={toggleTurn} />
                <Cell customStyles={styles.cellCustomStyle} getTurn={getTurn} toggleTurn={toggleTurn} />
                <Cell getTurn={getTurn} toggleTurn={toggleTurn} />
            </View>
        </View>
    );
};

export default PlayGround;