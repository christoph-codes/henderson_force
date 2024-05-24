import { Header } from "@/components/Header";
import { PropsWithChildren } from "react";

export function PageTemplate({ children }: PropsWithChildren) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<footer>Footer</footer>
		</>
	);
}
