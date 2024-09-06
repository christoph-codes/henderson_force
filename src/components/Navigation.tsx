import { SanityDocument } from "next-sanity";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navigation({ navItems }: { navItems: SanityDocument[] }) {
  const pathname = usePathname();
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  const handleMouseEnter = (itemId: string) => {
    setHoveredDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };

  return (
    <nav className="flex justify-between items-center gap-5">
      {navItems.map((navItem) => {
        const hasChildren = navItem.children && navItem.children.length > 0;
        const isDropdownOpen = hoveredDropdown === navItem._id;

        const isNavItemActive =
          pathname.split("/")[1] === navItem.link.split("/")[1];

        return (
          <button
            key={navItem._id}
            className="peer/link hover:text-white transition-colors group/hover:text-white group/hover:bg-black group/rounded-md group/p-3 group/hover:bg-gray-900 text-gray-400 relative"
            onMouseEnter={() => handleMouseEnter(navItem._id)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              className={`${isNavItemActive ? "font-bold text-white" : ""}`}
              target={navItem.target}
              href={navItem.link}
            >
              {navItem.name}
            </Link>

            {hasChildren && isDropdownOpen && (
              <div className="bg-gray-900 flex-col gap-2 rounded-md absolute p-3 flex">
                {navItem.children?.map(
                  (child: {
                    label: string;
                    link: string;
                    target: "_self" | "_blank";
                    _key: string;
                    name: string;
                  }) => {
                    return (
                      <Link
                        key={child._key}
                        href={child.link ?? ""}
                        target={child.target}
                        className="hover:text-white transition-colors p-3 hover:bg-gray rounded-md text-gray-400 text-left"
                      >
                        {child.name}
                      </Link>
                    );
                  },
                )}
              </div>
            )}
          </button>
        );
      })}
    </nav>
  );
}
