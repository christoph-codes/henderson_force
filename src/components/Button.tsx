import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps = {
	children: string;
	className?: string;
};

export function Button({
	children,
	className,
	...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button {...rest} className={twMerge("btn", className)}>
			{children}
		</button>
	);
}
