import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.057 5C18 5 16 9 16 9s-2-4-6.058-4C6.645 5 4.034 7.759 4 11.05c-.069 6.834 5.42 11.693 11.437 15.777a1 1 0 001.125 0C22.58 22.743 28.068 17.884 28 11.05 27.966 7.759 25.355 5 22.057 5v0z"
        stroke="#3B3B3B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent

