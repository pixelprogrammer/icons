import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber0SquareFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.033 8.993c1.32 0 1.342 2.068 1.342 3.058s-.077 2.937-1.397 2.937c-1.287 0-1.342-1.969-1.342-2.915 0-1.012.011-3.08 1.397-3.08" />
			<path
				fillRule="evenodd"
				d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm8.978 11.143c2.343 0 3.047-2.079 3.047-4.19 0-2.069-.693-4.104-3.014-4.104-2.288 0-3.036 2.035-3.036 4.092 0 2.068.671 4.202 3.003 4.202"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconNumber0SquareFilled.iconName = "number0-square--filled";

export default IconNumber0SquareFilled;
