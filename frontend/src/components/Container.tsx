import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({ children, className }: Props) {
    return <div className={`px-10 ${className}`}>{children}</div>;
}
