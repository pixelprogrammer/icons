import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAccessibility = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M14.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
						clipRule="evenodd"
					/>
					<path d="M8.25 9.995a.75.75 0 0 0-.75 1.3 9 9 0 0 0 3.75 1.174v1.522l-2.59 3.296a.75.75 0 0 0 1.18.926l2.16-2.75 2.16 2.75a.75.75 0 0 0 1.18-.926l-2.59-3.296v-1.522a9 9 0 0 0 3.75-1.175.75.75 0 0 0-.75-1.299 7.5 7.5 0 0 1-7.5 0" />
					<path
						fillRule="evenodd"
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
						clipRule="evenodd"
					/>
				</svg>
			);
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M11.062 7.391a.5.5 0 0 0-.383-.924 7 7 0 0 1-5.358 0 .5.5 0 1 0-.382.924c.823.341 1.688.539 2.561.593v.84l-1.89 2.364a.5.5 0 1 0 .78.624L8 9.8l1.61 2.012a.5.5 0 1 0 .78-.624L8.5 8.825v-.84a8 8 0 0 0 2.562-.594M9 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
					<path
						fillRule="evenodd"
						d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-1 0A6 6 0 1 1 2 8a6 6 0 0 1 12 0"
						clipRule="evenodd"
					/>
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
					<path d="M10 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
					<path d="M6.5 8.062a.5.5 0 1 0-.5.866 8 8 0 0 0 3.5 1.056v.835l-2.384 2.86a.5.5 0 0 0 .768.641L10 11.781l2.116 2.54a.5.5 0 0 0 .768-.641L10.5 10.819v-.835A8 8 0 0 0 14 8.928a.5.5 0 0 0-.5-.866 7 7 0 0 1-7 0" />
					<path
						fillRule="evenodd"
						d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-1 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAccessibility.iconName = "accessibility";

export default IconAccessibility;
