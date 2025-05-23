import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCrossfade = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path d="M21.25 5a.75.75 0 0 1 0 1.5h-1.966a5.25 5.25 0 0 0-4.422 2.42l-4.46 6.969A6.75 6.75 0 0 1 4.716 19H2.75a.75.75 0 0 1 0-1.5h1.966a5.25 5.25 0 0 0 4.422-2.42l4.46-6.969A6.75 6.75 0 0 1 19.284 5zM2.75 5a.75.75 0 0 0 0 1.5h1.966a5.25 5.25 0 0 1 4.422 2.42l.45.702a.75.75 0 0 0 1.263-.809l-.45-.702A6.75 6.75 0 0 0 4.717 5zM14.413 14.378a.75.75 0 0 0-1.264.809l.45.702A6.75 6.75 0 0 0 19.283 19h1.966a.75.75 0 0 0 0-1.5h-1.966a5.25 5.25 0 0 1-4.422-2.42z" />
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M17.5 4a8.27 8.27 0 0 0-7.524 4.845l-.862 1.896A7.27 7.27 0 0 1 2.5 15a.5.5 0 0 0 0 1 8.27 8.27 0 0 0 7.524-4.845l.862-1.896A7.27 7.27 0 0 1 17.5 5a.5.5 0 0 0 0-1M2.5 4a.5.5 0 0 0 0 1 7.27 7.27 0 0 1 5.924 3.059.5.5 0 0 0 .815-.58A8.27 8.27 0 0 0 2.5 4M11.576 11.941a.5.5 0 0 0-.815.58A8.27 8.27 0 0 0 17.5 16a.5.5 0 0 0 0-1 7.27 7.27 0 0 1-5.924-3.059" />
				</svg>
			);
	}
};

IconCrossfade.iconName = "crossfade";

export default IconCrossfade;
