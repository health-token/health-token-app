import * as React from "react"
import Svg, {
  SvgProps,
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={54}
      height={54}
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Circle cx={27} cy={25} r={25} fill="#fff" />
        <Path
          d="M27.102 29.785c3.175 2.749 5.451 2.762 12.466 3.843m-8.58-13.73c-5.035-3.258-10.845-.973-15.941-6.379-1.187-1.261-.498 14.146 5.881 19.984 4.664 4.265 11.865 3.79 14.293-.355 2.428-4.145 1.096-9.802-4.233-13.25z"
          stroke="url(#prefix__paint0_linear)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={27.068}
          y1={13.446}
          x2={27.068}
          y2={36.486}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5AD710" />
          <Stop offset={1} stopColor="#22E4CD" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent

