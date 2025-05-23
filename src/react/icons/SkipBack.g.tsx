import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSkipBack = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2 3.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0z" />
			<path
				fillRule="evenodd"
				d="M7 10.268c-1.333.77-1.333 2.694 0 3.464l12 6.928c1.333.77 3-.192 3-1.732V5.072c0-1.54-1.667-2.502-3-1.732zm.75 2.165 12 6.928a.5.5 0 0 0 .75-.433V5.072a.5.5 0 0 0-.75-.433l-12 6.928a.5.5 0 0 0 0 .866"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSkipBack.iconName = "skip-back";

export default IconSkipBack;
