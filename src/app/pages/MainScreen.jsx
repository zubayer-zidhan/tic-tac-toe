import React from "react";
import { Board } from ".";

const MainScreen = () => {
    return (
        <div className="h-screen w-screen bg-[#af4895] flex flex-row justify-center items-center">
            <Board />
        </div>
    );
};

export default MainScreen;
