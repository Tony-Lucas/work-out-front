import React, { FunctionComponent } from "react"

interface IconAttributes {
    width?: string,
    height?: string,
    color?: string,
    stroke?: string
}

export const LoadIcon: FunctionComponent<IconAttributes> = ({ width, height, color, stroke }) => {
    return (
        <svg width={width || "38"} height={height || "38"} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke={color || "#fff"}>
            <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width={stroke || "2"}>
                    <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 18 18"
                            to="360 18 18"
                            dur="1s"
                            repeatCount="indefinite" />
                    </path>
                </g>
            </g>
        </svg>
    )
}