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
      width={139}
      height={39}
      viewBox="0 0 139 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Circle cx={18} cy={19} r={16} fill="url(#prefix__paint0_linear)" />
        <Path
          d="M18.065 22.063c2.032 1.759 3.489 1.767 7.978 2.459m-5.49-8.787c-3.223-2.085-6.942-.623-10.203-4.083-.76-.807-.319 9.053 3.764 12.79 2.985 2.73 7.593 2.425 9.147-.228 1.554-2.652.702-6.272-2.709-8.48z"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        d="M60.804 7.932a158.42 158.42 0 00-.126 6.534c0 2.328.042 4.506.126 6.534h-4.23v-4.896H49.95V21h-4.23c.096-2.328.144-4.506.144-6.534 0-2.028-.048-4.206-.144-6.534h4.23v4.896h6.624V7.932h4.23zm5.687 9.774c4.56-.024 7.866-.09 9.918-.198a12.444 12.444 0 00-.162 1.53A87.33 87.33 0 0076.23 21H62.243c.096-2.328.144-4.506.144-6.534 0-2.028-.048-4.206-.144-6.534H76.23v3.258h-9.738v1.728a168.027 168.027 0 008.478-.09v3.096a168.027 168.027 0 00-8.478-.09v1.872zM88.138 21a81.986 81.986 0 00-.918-2.574h-5.742l-.9 2.574h-4.517L81.1 7.932h6.624L92.8 21h-4.663zm-1.944-5.382c-.456-1.26-.924-2.52-1.404-3.78l-.431-1.17a439.44 439.44 0 00-1.855 4.95h3.69zm11.608 1.746c3.479-.024 6.359-.084 8.639-.18a9.633 9.633 0 00-.288 1.764 32.958 32.958 0 00-.054 2.052h-12.69c.096-2.328.144-4.506.144-6.534 0-2.028-.047-4.206-.144-6.534h4.392v9.432zM121 11.712c-1.884-.06-3.714-.096-5.49-.108V21h-4.5v-9.396c-1.788.012-3.612.048-5.472.108v-3.78H121v3.78zm16.533-3.78a158.42 158.42 0 00-.126 6.534c0 2.328.042 4.506.126 6.534h-4.23v-4.896h-6.624V21h-4.23c.096-2.328.144-4.506.144-6.534 0-2.028-.048-4.206-.144-6.534h4.23v4.896h6.624V7.932h4.23z"
        fill="#393939"
      />
      <Path
        d="M47.91 33.66v-.625c1.225-.083 2.003-.76 2.003-1.77 0-.897-.523-1.403-1.749-1.71l-.255-.066v-2.39c.747.065 1.297.549 1.319 1.155h.57c-.03-.914-.799-1.6-1.889-1.679v-.602h-.457v.607c-1.13.083-1.872.751-1.872 1.696 0 .826.523 1.349 1.63 1.63l.242.066v2.545c-.83-.075-1.406-.563-1.454-1.235h-.572c.014.98.84 1.683 2.026 1.758v.62h.457zm1.423-2.352c0 .699-.563 1.178-1.424 1.217v-2.46c1.015.228 1.424.588 1.424 1.243zm-3.177-3.063c0-.633.55-1.112 1.296-1.147v2.29c-.896-.198-1.296-.554-1.296-1.143zM58.023 33v-6.341h-.602v2.821h-3.709v-2.821h-.597V33h.597v-2.975h3.71V33h.601zm7.179-.545h-3.23v-2.434h3.067v-.537h-3.067v-2.28h3.23v-.545h-3.828V33h3.828v-.545zm6.959 0h-3.178V26.66h-.597V33h3.775v-.545zM76.43 33v-5.796h2.123v-.545h-4.848v.545h2.123V33h.602zm9.956 0v-6.341h-.602v2.821h-3.71v-2.821h-.597V33h.598v-2.975h3.709V33h.602z"
        fill="#666"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={30.584}
          y1={5.897}
          x2={4.357}
          y2={30.481}
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

