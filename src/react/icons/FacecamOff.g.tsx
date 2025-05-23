import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFacecamOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06L20.06 5c.6.007 1.165.283 1.455.809C22.108 6.88 23 8.992 23 11.99v.018c0 3-.892 5.11-1.485 6.182-.294.532-.869.809-1.476.809H6.06l-2.78 2.78a.75.75 0 0 1-1.061 0m5.34-4.28H20.04a.34.34 0 0 0 .165-.038c.498-.9 1.296-2.763 1.296-5.453v-.018c0-2.69-.798-4.552-1.296-5.453l-.011-.007a.34.34 0 0 0-.154-.031H18.56l-3.252 3.252a4 4 0 0 1-5.557 5.557zm3.284-3.283a2.5 2.5 0 0 0 3.374-3.373z"
				clipRule="evenodd"
			/>
			<path d="m2.54 18.282 1.105-1.106c-.44-.877-1.009-2.375-1.124-4.426H5.25a.75.75 0 0 0 0-1.5H2.52c.13-2.295.826-3.897 1.276-4.713l.011-.006a.34.34 0 0 1 .154-.031h10.36l1.5-1.5H3.96c-.607 0-1.182.277-1.476.809C1.892 6.88 1 8.994 1 12s.892 5.12 1.485 6.191q.026.047.054.09" />
			<path d="m8.07 12.75 1.566-1.565c.25-.725.824-1.3 1.55-1.55L12.75 8.07a4 4 0 0 0-4.68 4.68" />
		</svg>
	);
};

IconFacecamOff.iconName = "facecam-off";

export default IconFacecamOff;
