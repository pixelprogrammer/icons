import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDialStack = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8 19A7 7 0 1 0 8 5a7 7 0 0 0 0 14m0-1.5a5.5 5.5 0 1 0-3.323-9.883L7.78 10.72a.75.75 0 1 1-1.06 1.06L3.617 8.677A5.5 5.5 0 0 0 8 17.5"
				clipRule="evenodd"
			/>
			<path d="M15.5 5.938a.75.75 0 0 0-.75 1.299 5.5 5.5 0 0 1 0 9.526.75.75 0 0 0 .75 1.3 7 7 0 0 0 0-12.125" />
			<path d="M19.5 5.938a.75.75 0 0 0-.75 1.299 5.5 5.5 0 0 1 0 9.526.75.75 0 0 0 .75 1.3 7 7 0 0 0 0-12.125" />
		</svg>
	);
};

IconDialStack.iconName = "dial-stack";

export default IconDialStack;
