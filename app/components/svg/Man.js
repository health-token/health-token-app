import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={33}
      height={32}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.044 9c-.251 3.304-2.82 6-5.64 6-2.819 0-5.392-2.695-5.638-6-.257-3.438 2.242-6 5.639-6 3.396 0 5.895 2.625 5.64 6z"
        stroke="#3B3B3B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.405 19c-5.575 0-11.234 3-12.28 8.663-.127.682.27 1.337 1.002 1.337h22.556c.734 0 1.13-.655 1.003-1.337C27.64 22 21.98 19 16.405 19z"
        stroke="#3B3B3B"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}

export default SvgComponent

