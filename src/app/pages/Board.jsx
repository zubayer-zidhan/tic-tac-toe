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
        // Add your logic to check for a winning condition
        // If a player wins, set the winner
    };

    return (
        <>
            <div className="absolute top-12 flex flex-col items-center justify-center gap-2">
                {currentPlayer === "" ? (
                    <>
                        <button
                            className="bg-green-400 px-2 rounded-lg w-[4.6rem] h-[2.5rem]"
                            onClick={handleCoinToss}
                        >
                            Start
                        </button>
                    </>
                ) : (
                    <p className="text-xl flex gap-3">
                        Current Player:{" "}
                        <span className="text-[1.6rem] font-bold self-center">
                            {currentPlayer}
                        </span>
                    </p>
                )}
            </div>
            {winner ? <p>{winner} wins!</p> : null}
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
