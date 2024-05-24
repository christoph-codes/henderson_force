import { HForceHorizontalLogo } from "./HForceHorizontalLogo";
import { Navigtion } from "./Navigtion";

export function Header() {
	return (
		<header className="py-3">
			<div className="container">
				<HForceHorizontalLogo className="max-w-[150px]" />
				<Navigtion />
			</div>
		</header>
	);
}
