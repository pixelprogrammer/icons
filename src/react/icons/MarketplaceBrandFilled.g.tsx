import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMarketplaceBrandFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21 3H5.5a2.5 2.5 0 0 0 0 5H14l-9.429 6.429a3.598 3.598 0 1 0 5 5L16 10v8.5a2.5 2.5 0 0 0 5 0z" />
		</svg>
	);
};

IconMarketplaceBrandFilled.iconName = "marketplace-brand--filled";

export default IconMarketplaceBrandFilled;
