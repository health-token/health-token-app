import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={31}
      height={32}
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24.714 9H6.143c-1.539 0-2.786 1.343-2.786 3v12c0 1.657 1.247 3 2.786 3h18.571c1.539 0 2.786-1.343 2.786-3V12c0-1.657-1.247-3-2.786-3z"
        stroke="#3C3C3C"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M24.445 9V7.125c0-.46-.095-.914-.276-1.33a3.106 3.106 0 00-.776-1.077 2.832 2.832 0 00-1.128-.619A2.7 2.7 0 0021 4.056L5.716 6.866a2.87 2.87 0 00-1.693 1.078 3.275 3.275 0 00-.666 1.994V13"
        stroke="#3C3C3C"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M21.929 20c-.368 0-.727-.117-1.032-.337a1.976 1.976 0 01-.684-.898 2.144 2.144 0 01-.106-1.155c.072-.388.249-.744.509-1.024s.59-.47.95-.548c.36-.077.734-.037 1.073.114.34.152.63.408.834.737.204.329.313.715.313 1.111 0 .53-.196 1.04-.544 1.414-.348.375-.82.586-1.313.586z"
        fill="#3C3C3C"
      />
    </Svg>
  )
}

export default SvgComponent

