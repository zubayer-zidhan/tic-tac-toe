import React, { useEffect } from "react";
import Symbol from "./Symbol";

const Square = ({ symbol, onClick }) => {
    // const [disablePointer, setDisablePointer] = useState(false);

    // useEffect(() => {
    //     // if(symbol !== "") {
    //     //     setDisablePointer(true);
    //     // }
    // }, [symbol]);

    return (
        <div
            onClick={onClick}
            className={`bg-white w-[10rem] h-[10rem] rounded-xl flex flex-row justify-center items-center cursor-pointer`}
        >
            <Symbol symbol={symbol} />
        </div>
    );
};

export default Square;
