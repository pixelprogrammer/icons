import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoMicrosoftWord = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21.17 3.25a.8.8 0 0 1 .586.244.8.8 0 0 1 .244.586v15.84a.8.8 0 0 1-.244.586.8.8 0 0 1-.586.244H7.83a.8.8 0 0 1-.586-.244A.8.8 0 0 1 7 19.92V17H2.83a.8.8 0 0 1-.586-.244A.8.8 0 0 1 2 16.17V7.83a.8.8 0 0 1 .244-.586A.8.8 0 0 1 2.83 7H7V4.08a.8.8 0 0 1 .244-.586.8.8 0 0 1 .586-.244zM7.03 11.336l1.2 3.945h1.368l1.308-6.562H9.53l-.781 3.877-1.103-3.75H6.482l-1.171 3.77-.782-3.897H3.094l1.308 6.562H5.77zM20.75 19.5V17H8.25v2.5zm0-3.75v-3.125H12v3.125zm0-4.375V8.25H12v3.125zm0-4.375V4.5H8.25V7z" />
		</svg>
	);
};

IconLogoMicrosoftWord.iconName = "logo-microsoft-word";

export default IconLogoMicrosoftWord;
