"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
    children: React.ReactNode;
    filterName: string;
    collapsible?: boolean;
};

export default function Filter({
    children,
    filterName,
    collapsible = false,
}: Props) {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="space-y-2 pt-3 pb-1">
            <div
                className={`${
                    collapsible ? "flex items-center justify-between" : ""
                }`}
            >
                <h1 className="font-bold">{filterName}</h1>
                {collapsible && (
                    <div onClick={handleClick} className="p-1 cursor-pointer">
                        <IoIosArrowForward
                            className={`transition-all duration-75 cursor-pointer ${
                                isOpen && "-rotate-90"
                            }`}
                        />
                    </div>
                )}
            </div>
            {collapsible ? (
                <div className={`mb-3 ${isOpen ? "block" : "hidden"}`}>
                    {children}
                </div>
            ) : (
                <div className="mb-3">{children}</div>
            )}
        </div>
    );
}
