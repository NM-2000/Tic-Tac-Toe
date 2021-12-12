import React, { useCallback, useState } from "react";
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

const styles = StyleSheet.create({
    cellStyle: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
    },
    labelStyle: {
        fontSize: 40,
        color: 'seagreen',
    }
});

const Cell: React.FC<{
    getTurn: () => number,
    toggleTurn: () => void,
    customStyles?: StyleProp<ViewStyle>,
}> = ({
    getTurn,
    toggleTurn,
    customStyles,
}) => {
    const [label, setLabel] = useState('');

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

    return (
        <TouchableOpacity
            style={[styles.cellStyle, customStyles]}
            onPress={onCellPress}
            disabled={!!label}
            activeOpacity={0.5}
        >
            <Text style={styles.labelStyle} >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default Cell;