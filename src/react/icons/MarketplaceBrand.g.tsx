import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMarketplaceBrand = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16 18.5a2.5 2.5 0 0 0 5 0V3H5.5a2.5 2.5 0 0 0 0 5H13l-8.533 6.4A3.667 3.667 0 1 0 9.6 19.533L16 11zm3.5-14h-14a1 1 0 0 0 0 2H13a1.5 1.5 0 0 1 .9 2.7l-8.533 6.4A2.167 2.167 0 1 0 8.4 18.633l6.4-8.533a1.5 1.5 0 0 1 2.7.9v7.5a1 1 0 1 0 2 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMarketplaceBrand.iconName = "marketplace-brand";

export default IconMarketplaceBrand;
