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
        d="M22.418 9h6.911v7"
        stroke="#3B3B3B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.658 23l7.49-7.586a1.973 1.973 0 011.396-.586 1.954 1.954 0 011.397.586l3.13 3.172a1.971 1.971 0 001.397.586 1.954 1.954 0 001.397-.586L28.342 10"
        stroke="#3B3B3B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent

