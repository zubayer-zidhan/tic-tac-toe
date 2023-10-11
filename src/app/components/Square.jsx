import React from "react";
import Symbol from "./Symbol";

const Square = ({ symbol, onClick }) => {
    return (
        <div className="bg-white w-[10rem] h-[10rem] rounded-xl flex flex-row justify-center items-center cursor-pointer"
            onClick={onClick}
        >
            <Symbol symbol={symbol} />
        </div>
    );
};

export default Square;
