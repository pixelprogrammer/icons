import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconZoomOutFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M10.5 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M8.25 9.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M16.307 15.247a7.5 7.5 0 1 0-1.06 1.06l4.473 4.473a.75.75 0 1 0 1.06-1.06zM10.5 16.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconZoomOutFilled.iconName = "zoom-out--filled";

export default IconZoomOutFilled;
