import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFolderDownloadFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M4 3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.586a1 1 0 0 1-.707-.293L9.586 3.586A2 2 0 0 0 8.172 3zm4.97 10.22a.75.75 0 0 1 1.06 0l1.22 1.22V9.75a.75.75 0 0 1 1.5 0v4.69l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 0-1.06"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFolderDownloadFilled.iconName = "folder-download--filled";

export default IconFolderDownloadFilled;
