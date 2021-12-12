import React from "react";
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

    return (
        <View style={styles.playgroundStyle} >
            <View style={[styles.rowStyle, styles.marginStyle]} >
                <Cell customStyles={styles.cellCustomStyle} />
                <Cell customStyles={styles.cellCustomStyle} />
                <Cell />
            </View>
            <View style={[styles.rowStyle, styles.marginStyle]} >
                <Cell customStyles={styles.cellCustomStyle} />
                <Cell customStyles={styles.cellCustomStyle} />
                <Cell />
            </View>
            <View style={styles.rowStyle} >
                <Cell customStyles={styles.cellCustomStyle} />
                <Cell customStyles={styles.cellCustomStyle} />
                <Cell />
            </View>
        </View>
    );
};

export default PlayGround;