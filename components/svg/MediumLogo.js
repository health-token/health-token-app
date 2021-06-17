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
      width={102}
      height={102}
      viewBox="0 0 102 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Circle cx={51} cy={47} r={41} fill="url(#prefix__paint0_linear)" />
        <Path
          d="M51.166 54.848c5.208 4.507 8.94 4.529 20.445 6.302M57.54 38.633c-8.258-5.343-17.786-1.596-26.144-10.462-1.947-2.069-.816 23.199 9.646 32.774 7.648 6.994 19.458 6.214 23.44-.583 3.982-6.797 1.798-16.074-6.942-21.73z"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={83.246}
          y1={13.424}
          x2={16.039}
          y2={76.42}
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

