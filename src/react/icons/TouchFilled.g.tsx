import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTouchFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M8.672 4.672A4 4 0 0 1 15.5 7.5a.75.75 0 0 0 1.5 0 5.5 5.5 0 0 0-11 0 .75.75 0 1 0 1.5 0 4 4 0 0 1 1.172-2.828" />
			<path d="M13 6.5v4.664l5.169 1.722a2 2 0 0 1 1.287 2.462l-1.534 5.216A2 2 0 0 1 16.003 22h-5.107a2 2 0 0 1-1.492-.668l-4.838-5.418a1.496 1.496 0 0 1 1.812-2.32L10 15.5v-9a1.5 1.5 0 0 1 3 0" />
		</svg>
	);
};

IconTouchFilled.iconName = "touch--filled";

export default IconTouchFilled;
