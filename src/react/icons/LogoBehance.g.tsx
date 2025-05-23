import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoBehance = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M7.528 5a7 7 0 0 1 1.706.175c.47.103.918.294 1.318.564a2.6 2.6 0 0 1 .847 1.046c.213.512.316 1.064.302 1.62a3.1 3.1 0 0 1-.447 1.733 3.3 3.3 0 0 1-1.33 1.139c.73.197 1.365.648 1.793 1.272.41.66.616 1.428.593 2.206a4.1 4.1 0 0 1-.375 1.798c-.24.491-.593.919-1.028 1.25a4.5 4.5 0 0 1-1.49.713c-.555.154-1.129.231-1.705.23h-6.33V5zm-.365 5.56c.45.018.894-.117 1.258-.383a1.5 1.5 0 0 0 .496-1.25 1.7 1.7 0 0 0-.158-.788 1.14 1.14 0 0 0-.438-.472 1.6 1.6 0 0 0-.629-.243 3.5 3.5 0 0 0-.738-.064H4.25v3.212h2.912zm.157 5.852q.411.005.81-.088c.243-.053.473-.153.678-.293.201-.14.364-.329.472-.548.126-.28.184-.586.17-.893a1.84 1.84 0 0 0-.57-1.517 2.3 2.3 0 0 0-1.5-.447H4.25v3.786zM16.394 16.361a2.26 2.26 0 0 0 1.681.6c.486.012.962-.136 1.355-.421.32-.208.563-.516.69-.876h2.286a4.5 4.5 0 0 1-1.681 2.563 4.68 4.68 0 0 1-2.735.777 5.2 5.2 0 0 1-2.02-.382 4.3 4.3 0 0 1-1.524-1.071 5 5 0 0 1-.956-1.658 6.2 6.2 0 0 1-.338-2.117 6.1 6.1 0 0 1 .35-2.078 4.69 4.69 0 0 1 4.5-3.189 4.3 4.3 0 0 1 2.103.498c.584.32 1.09.77 1.475 1.314.396.57.679 1.21.835 1.887.171.726.233 1.474.181 2.219h-6.81a2.7 2.7 0 0 0 .608 1.934m2.988-5.228a1.89 1.89 0 0 0-1.463-.548 2.07 2.07 0 0 0-1.029.23 2.2 2.2 0 0 0-.653.548c-.16.21-.278.447-.35.7q-.098.319-.121.65h4.219a2.86 2.86 0 0 0-.601-1.579z"
				clipRule="evenodd"
			/>
			<path d="M15.222 5.918h5.286v1.351h-5.286z" />
		</svg>
	);
};

IconLogoBehance.iconName = "logo-behance";

export default IconLogoBehance;
