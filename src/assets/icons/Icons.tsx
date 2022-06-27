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

export const OptionsIcon: FunctionComponent<IconAttributes> = ({ width, height, color, stroke }) =>{
    return(
        <svg width={width || "20"} height={height || "20"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99999 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 9.99999 15C9.53975 15 9.16666 15.3731 9.16666 15.8333C9.16666 16.2936 9.53975 16.6667 9.99999 16.6667Z" fill="#333333" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.99999 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53975 10.4602 9.16666 9.99999 9.16666C9.53975 9.16666 9.16666 9.53975 9.16666 9.99999C9.16666 10.4602 9.53975 10.8333 9.99999 10.8333Z" fill="#333333" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.99999 5.00001C10.4602 5.00001 10.8333 4.62691 10.8333 4.16668C10.8333 3.70644 10.4602 3.33334 9.99999 3.33334C9.53975 3.33334 9.16666 3.70644 9.16666 4.16668C9.16666 4.62691 9.53975 5.00001 9.99999 5.00001Z" fill="#333333" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}