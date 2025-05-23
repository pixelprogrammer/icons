import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoPinterestColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fill="#fff"
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c1.618 3.563 3.778 5.632 6.437 9.34.244.092.39.136.603.2 1.662-.512 2.123.039 2.96.46"
			/>
			<path
				fill="#E60023"
				fillRule="evenodd"
				d="M9.04 21.54c.949.288 1.926.46 2.96.46 5.517 0 10-4.483 10-10S17.517 2 12 2 2 6.483 2 12c0 4.253 2.672 7.902 6.437 9.34-.086-.777-.173-2.07 0-2.96l1.15-4.943s-.288-.575-.288-1.494c0-1.38.862-2.414 1.839-2.414.862 0 1.264.632 1.264 1.437 0 .862-.574 2.097-.862 3.275-.172.977.518 1.84 1.523 1.84 1.782 0 3.161-1.897 3.161-4.598 0-2.385-1.724-4.023-4.195-4.023-2.816 0-4.483 2.097-4.483 4.31 0 .862.287 1.724.747 2.299.086.057.086.144.058.287l-.288 1.092c0 .173-.115.23-.287.115-1.265-.575-2.012-2.385-2.012-3.85 0-3.161 2.242-6.035 6.552-6.035 3.448 0 6.12 2.471 6.12 5.747 0 3.449-2.126 6.207-5.172 6.207-.977 0-1.925-.517-2.241-1.15l-.69 2.386c-.23.862-.862 1.983-1.293 2.672"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoPinterestColor.iconName = "logo-pinterest--color";

export default IconLogoPinterestColor;
