import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWebcamFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
			<path
				fillRule="evenodd"
				d="M15.6 19.251a9 9 0 1 0-7.2 0 9 9 0 0 0-2.764 1.885.75.75 0 0 0 1.06 1.06 7.5 7.5 0 0 1 10.607 0 .75.75 0 0 0 1.061-1.06 9 9 0 0 0-2.764-1.885M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconWebcamFilled.iconName = "webcam--filled";

export default IconWebcamFilled;
