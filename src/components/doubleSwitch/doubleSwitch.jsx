import { theme } from "@chakra-ui/react";
import React from "react";

export default function DoubleSwitch({
    rightValue = "",
    leftValue = "",
    value = false,
    onChange,
    theme = "",
}) {
    return (
        <div
            //double-switch
            className={`relative w-40 h-10 flex items-center border border-solid border-black`}
            style={{
                cursor: "pointer",
                borderRadius: "50px",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                color: theme === "light" && "#211B2B",
            }}
        >
            <div
                //element left
                className={`w-6/12 h-full flex items-center justify-center `}
                //TODO: add to config and move to class

                style={{ borderRadius: "50px 0 0 50px" }}
                onClick={() => onChange(false)}
            >
                {leftValue}
            </div>
            <div
                //element right
                className={`w-6/12 h-full flex items-center justify-center `}
                //TODO: add to config and move to class

                style={{ borderRadius: "0 50px 50px 0" }}
                onClick={() => onChange(true)}
            >
                {rightValue}
            </div>
            <div
                //className={`element pivot ${value ? "to-right" : "to-left"}`}
                className={`w-6/12 h-full flex items-center justify-center absolute z-50  bg-primary opacity-30 rounded-50 border border-solid border-black`}
                //TODO: add to config and move to class

                style={{
                    //animation: value ? "0.5s to-right" : "0.5s to-left",
                    animation: value ? "0.5s to-right" : "0.5s to-left",
                    left: value ? "50%" : "0",
                    animationFillMode: "forwards",
                    borderRadius: "50px",
                }}
            />
        </div>
    );
}
