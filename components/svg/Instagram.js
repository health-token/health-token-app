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
        d="M21.833 4.333a5.851 5.851 0 015.834 5.834v11.666a5.85 5.85 0 01-5.834 5.834H10.167a5.851 5.851 0 01-5.834-5.834V10.167a5.851 5.851 0 015.834-5.834h11.666zm0-2.333H10.167C5.675 2 2 5.675 2 10.167v11.666C2 26.325 5.675 30 10.167 30h11.666C26.325 30 30 26.325 30 21.833V10.167C30 5.675 26.325 2 21.833 2z"
        fill="#353535"
      />
      <Path
        d="M23.583 10.167a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM16 11.333a4.667 4.667 0 110 9.334 4.667 4.667 0 010-9.334zM16 9a7 7 0 100 14 7 7 0 000-14z"
        fill="#353535"
      />
    </Svg>
  )
}

export default SvgComponent
p[
