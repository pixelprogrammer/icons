import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDisplayProjectSetFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9 3a2 2 0 0 0-2 2v1.5h8a3.5 3.5 0 0 1 3.5 3.5v1.076a6.5 6.5 0 0 1 2.972 1.278C21.8 11.998 22 11.522 22 11V5a2 2 0 0 0-2-2z" />
			<path d="M17 10v1.019A6.5 6.5 0 0 0 11.019 18H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2M11.25 19.5q.033 0 .064.003.207.634.53 1.204a.75.75 0 0 1-.594.293h-3.5a.75.75 0 0 1 0-1.5z" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-3-2a.5.5 0 0 0-.5-.5h-2.828a.5.5 0 0 0 0 1h1.62l-3.146 3.147a.5.5 0 0 0 .707.707L19 16.707v1.621a.5.5 0 1 0 1 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconDisplayProjectSetFilled.iconName = "display-project-set--filled";

export default IconDisplayProjectSetFilled;
