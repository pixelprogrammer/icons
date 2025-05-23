import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCloudFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M18.494 10.227A5 5 0 0 1 17 20H7a5 5 0 0 1-1.494-9.773 6.5 6.5 0 0 1 12.988 0" />
		</svg>
	);
};

IconCloudFilled.iconName = "cloud--filled";

export default IconCloudFilled;
