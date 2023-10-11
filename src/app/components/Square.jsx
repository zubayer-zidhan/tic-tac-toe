import React, { useEffect, useState } from "react";
import Symbol from "./Symbol";

const Square = ({ symbol, onClick }) => {

    const [disablePointer, setDisablePointer] = useState(false);

    useEffect(() => {
        if(symbol !== "") {
            setDisablePointer(true);
        }
    }, [symbol])
    

    return (
        <div className={`bg-white w-[10rem] h-[10rem] rounded-xl flex flex-row justify-center items-center ${ disablePointer ? "cursor-not-allowed" : "cursor-pointer"}`}
            onClick={onClick}
        >
            <Symbol symbol={symbol} />
        </div>
    );
};

export default Square;
