import React, { useCallback, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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
    },
    playerStyle: {
        alignItems: 'center',
        paddingVertical: 32,
    },
});

const PlayGround: React.FC<{
    play: boolean,
    getPlayer: (player: number) => string,
}> = ({
    play,
    getPlayer,
}) => {
        const turn = useRef(1);
        const [player1Color, setPlayer1Color] = useState('lightyellow');
        const [player2Color, setPlayer2Color] = useState('lightgrey');
        const [player1FontSize, setPlayer1FontSize] = useState(28);
        const [player2FontSize, setPlayer2FontSize] = useState(16);

        const getTurn = useCallback(() => {
            return turn.current;
        }, []);

        const toggleTurn = useCallback(() => {
            if (turn.current === 1) {
                turn.current = 2;
                setPlayer1Color('lightgrey');
                setPlayer2Color('lightyellow'),
                setPlayer1FontSize(16);
                setPlayer2FontSize(28);
            }
            else {
                turn.current = 1;
                setPlayer1Color('lightyellow');
                setPlayer2Color('lightgrey'),
                setPlayer1FontSize(28);
                setPlayer2FontSize(16);
            }
        }, []);

        return (
            <>
                {
                    play ?
                        <View style={styles.playerStyle} >
                            <Text style={[{ marginBottom: 16, fontSize: player1FontSize, color: player1Color }]} >
                                {
                                    `Its ${getPlayer(1)}'s turn!`
                                }
                            </Text>
                            <Text style={[{ fontSize: player2FontSize, color: player2Color }]} >
                                {
                                    `Its ${getPlayer(2)}'s turn!`
                                }
                            </Text>
                        </View>
                        : null
                }
                <View style={styles.playgroundStyle} >
                    <View style={[styles.rowStyle, styles.marginStyle]} >
                        <Cell customStyles={styles.cellCustomStyle} getTurn={getTurn} toggleTurn={toggleTurn} play={play} />
                        <Cell customStyles={styles.cellCustomStyle} getTurn={getTurn} toggleTurn={toggleTurn} play={play} />
                        <Cell getTurn={getTurn} toggleTurn={toggleTurn} play={play} />
                    </View>
                    <View style={[styles.rowStyle, styles.marginStyle]} >
                        <Cell customStyles={styles.cellCustomStyle} getTurn={getTurn} toggleTurn={toggleTurn} play={play} />
                        <Cell customStyles={styles.cellCustomStyle} getTurn={getTurn} toggleTurn={toggleTurn} play={play} />
                        <Cell getTurn={getTurn} toggleTurn={toggleTurn} play={play} />
                    </View>
                    <View style={styles.rowStyle} >
                        <Cell customStyles={styles.cellCustomStyle} getTurn={getTurn} toggleTurn={toggleTurn} play={play} />
                        <Cell customStyles={styles.cellCustomStyle} getTurn={getTurn} toggleTurn={toggleTurn} play={play} />
                        <Cell getTurn={getTurn} toggleTurn={toggleTurn} play={play} />
                    </View>
                </View>
            </>
        );
    };

export default PlayGround;