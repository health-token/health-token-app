import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={39}
      height={39}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.75 23.156a3.656 3.656 0 100-7.312 3.656 3.656 0 000 7.312zM29.25 12.188a3.656 3.656 0 100-7.313 3.656 3.656 0 000 7.313zM29.25 34.125a3.656 3.656 0 100-7.312 3.656 3.656 0 000 7.312zM26.064 10.324l-13.128 7.384m0 3.584l13.128 7.384-13.128-7.384z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent

