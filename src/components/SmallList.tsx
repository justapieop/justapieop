import React from "react";

export default function SmallList(props: React.PropsWithChildren<{ className?: string }>): JSX.Element {
    return (
        <div className={props.className}>
            <div className="flex flex-col">
                <ul>
                    {props.children}
                </ul>
            </div>
        </div>
    );
}