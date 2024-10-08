"use client";
import {
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

const SideNavContext = createContext({
	isSideNavOpen: false,
	toggleSideNav: () => {},
});

const SideNavProvider = ({ children }: PropsWithChildren) => {
	const [isSideNavOpen, setIsSideNavOpen] = useState(false);
	const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen);
	useEffect(() => {
		if (isSideNavOpen) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [isSideNavOpen]);
	return (
		<SideNavContext.Provider value={{ isSideNavOpen, toggleSideNav }}>
			{children}
		</SideNavContext.Provider>
	);
};

export const useSideNav = () => useContext(SideNavContext);

export default SideNavProvider;
