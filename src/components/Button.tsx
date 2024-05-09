import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
	children: string;
};

export function Button({
	children,
	...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			{...rest}
			className="bg-primary hover:bg-primary-900 text-white font-bold py-2 px-4 font-sans rounded-md uppercase italic text-xl"
		>
			{children}
		</button>
	);
}
