import React, { useState } from "react";
import { Square } from "../components";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [currentPlayer, setCurrentPlayer] = useState("");
    const [winner, setWinner] = useState("");

    // Player1 plays "X", Player2 plays "Y"
    const player1Symbol = "X";
    const player2Symbol = "O";

    // Handle Toss(Choose who goes first)
    const handleCoinToss = () => {
        const startingPlayer = Math.random() < 0.5 ? "X" : "O";
        setCurrentPlayer(startingPlayer);
    };

    // Handle clicking on the square
    const handleSquareClick = (index) => {
        if (currentPlayer !== "") {
            if (squares[index] === "") {
                const newSquares = [...squares];
                newSquares[index] = currentPlayer;
                setSquares(newSquares);

                // Check if anyone has won
                checkForWinner(newSquares, currentPlayer);

                // Update the currentPlayer and render the opposite symbol
                setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
            }
        }
    };

    // Handle winning condition
    const checkForWinner = (squares, symbol) => {
        //Defining Win Combinations 
        const winCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (const combination of winCombinations) {
            const [a, b, c] = combination;
            if (squares[a] === symbol && squares[b] === symbol && squares[c] === symbol) {
                setWinner(`${symbol} wins!`); 
                return;
            }
        }
    
        // Check for a draw 
        if (!squares.includes("")) {
            setWinner("It's a draw!");
        }
    };

    return (
        <>
            <div className="absolute top-12 flex flex-col items-center justify-center gap-2">
                {currentPlayer === "" ? (
                    <button
                        className="bg-green-400 px-2 rounded-lg w-[5.2rem] h-[2.5rem] text-xl"
                        onClick={handleCoinToss}
                    >
                        Start
                    </button>
                ) : (
                    <p className="text-xl flex gap-3">
                        Current Player:{" "}
                        <span className="text-[1.6rem] font-bold self-center">
                            {currentPlayer}
                        </span>
                    </p>
                )}
            </div>
            {winner ? <p>{winner} </p> : null}
            <div className="grid grid-cols-3 gap-4">
                {squares.map((symbol, index) => (
                    <Square
                        key={index}
                        symbol={symbol}
                        onClick={() => handleSquareClick(index)}
                    />
                ))}
            </div>
        </>
    );
};

export default Board;
