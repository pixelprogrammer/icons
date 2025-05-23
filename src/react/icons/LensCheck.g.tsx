import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLensCheck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3.5 12a8.5 8.5 0 0 0 8.23 8.496c.281.54.636 1.036 1.05 1.474q-.385.03-.78.03C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q0 .395-.03.78a6.5 6.5 0 0 0-1.474-1.05A8.5 8.5 0 0 0 3.5 12" />
			<path d="M12 6a6 6 0 0 1 5.92 5.013 6.6 6.6 0 0 0-1.512.078A4.502 4.502 0 0 0 7.5 12a4.5 4.5 0 0 0 3.591 4.408 6.6 6.6 0 0 0-.078 1.511A6.002 6.002 0 0 1 12 6" />
			<path d="M11.426 10.614A1.5 1.5 0 0 1 12 10.5.75.75 0 0 0 12 9a3 3 0 0 0-3 3 .75.75 0 0 0 1.5 0 1.5 1.5 0 0 1 .926-1.386" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.854-6.646a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLensCheck.iconName = "lens-check";

export default IconLensCheck;
