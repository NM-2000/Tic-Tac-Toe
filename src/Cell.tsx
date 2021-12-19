import React, { useCallback, useState } from "react";
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

const styles = StyleSheet.create({
    cellStyle: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightyellow',
        borderRadius: 4,
        elevation: 10,
    },
    labelStyle: {
        fontSize: 40,
        color: 'tomato',
    }
});

const Cell: React.FC<{
    play: boolean,
    getTurn: () => number,
    toggleTurn: () => void,
    customStyles?: StyleProp<ViewStyle>,
}> = ({
    play,
    getTurn,
    toggleTurn,
    customStyles,
}) => {
    const [label, setLabel] = useState('');
    const [cellBackgroundColor, setCellBackgroundColor] = useState('lightyellow');
    const [cellElevation, setCellElevation] = useState(10);

    const onCellPress = useCallback(() => {
        const turn = getTurn();
        toggleTurn();
        if(turn === 1) {
            setLabel('X');
        }
        else {
            setLabel('O');
        }
    }, []);

    const onCellPressIn = useCallback(() => {
        setCellBackgroundColor('#FFD580');
        setCellElevation(0);
    }, []);

    const onCellPressOut = useCallback(() => {
        setCellBackgroundColor('lightyellow');
        setCellElevation(10);
    }, []);

    return (
        <TouchableOpacity
            style={[styles.cellStyle, customStyles, {backgroundColor: cellBackgroundColor, elevation: cellElevation}]}
            onPress={onCellPress}
            onPressIn={onCellPressIn}
            onPressOut={onCellPressOut}
            disabled={!play || !!label}
            activeOpacity={1}
        >
            <Text style={styles.labelStyle} >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default Cell;