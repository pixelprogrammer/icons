import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconText = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M4 3.75A.75.75 0 0 1 4.75 3h14.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V4.5h-5.75v15h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5v-15H5.5v2.75a.75.75 0 0 1-1.5 0z" />
		</svg>
	);
};

IconText.iconName = "text";

export default IconText;
