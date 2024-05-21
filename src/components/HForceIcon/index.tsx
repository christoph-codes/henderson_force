import { twJoin } from "tailwind-merge";

export type HForceLogoProps = {
	color?: string;
	className?: string;
};

export function HForceLogo({ color = "#004185", className }: HForceLogoProps) {
	return (
		<svg
			width="511"
			height="639"
			className={twJoin(`text-[${color}] inline`, className)}
			viewBox="0 0 511 639"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M388.13 539.49C389.46 538.03 390.78 536.55 392.1 535.05C390.79 536.55 389.46 538.02 388.13 539.49Z"
				fill={color}
			/>
			<path
				d="M216.28 612.77C217.15 613.3 218.01 613.83 218.86 614.34C241.81 628.22 258.05 635.44 258.05 635.44C258.05 635.44 259.59 634.75 262.37 633.39C262.69 633.23 263.03 633.07 263.38 632.89C263.74 632.71 264.12 632.52 264.52 632.32C264.92 632.12 265.33 631.92 265.76 631.7C267.45 630.85 269.4 629.84 271.57 628.7C273.25 627.81 275.07 626.83 277.02 625.76C277.59 625.45 278.16 625.13 278.75 624.81C279.48 624.4 280.23 623.99 280.99 623.56C284.29 621.7 287.88 619.63 291.7 617.33C295.05 615.32 298.57 613.15 302.25 610.81C302.87 610.41 303.5 610.01 304.14 609.6C305.28 608.87 306.44 608.12 307.61 607.35C308.22 606.95 308.84 606.54 309.46 606.13C312.79 603.92 316.21 601.6 319.72 599.14C321.63 597.8 323.56 596.42 325.52 595.01C326.5 594.3 327.48 593.59 328.46 592.86C335.35 587.78 342.46 582.26 349.62 576.28C355.76 571.16 361.94 565.7 368.07 559.92C370.11 557.99 372.15 556.03 374.18 554.03C377.33 550.92 380.47 547.72 383.56 544.44C385.1 542.81 386.63 541.15 388.14 539.48C389.47 538.02 390.8 536.54 392.11 535.04C393.08 533.93 394.05 532.81 395.01 531.68C396.94 529.42 398.84 527.13 400.72 524.8C401.66 523.64 402.59 522.46 403.52 521.28C405.37 518.92 407.17 516.53 408.91 514.13C462.87 439.7 462.79 349.42 462.79 349.42V94.94L427.7 130.03H285.13L257.28 103.83L229.43 130.03H86.86L51.77 94.94V349.45C51.77 349.45 54.13 411.06 82.72 473.22C83.72 475.4 84.76 477.58 85.83 479.76C86.7 481.53 87.59 483.3 88.5 485.07C92.15 492.14 96.16 499.17 100.57 506.06C103.88 511.23 107.41 516.32 111.18 521.31C115.55 527.09 120.14 532.66 124.89 538.03C126.39 539.72 127.9 541.38 129.42 543.03C134.61 548.64 139.96 554.02 145.39 559.15C148.31 561.9 151.25 564.58 154.2 567.19C154.44 567.4 154.68 567.61 154.92 567.82C157.3 569.91 159.69 571.96 162.07 573.96C165.7 577.01 169.34 579.95 172.96 582.78C173.98 583.58 175 584.37 176.02 585.15C181.11 589.06 186.15 592.74 191.08 596.21C192.07 596.9 193.05 597.59 194.02 598.26C195.97 599.61 197.91 600.93 199.82 602.21C200.78 602.85 201.72 603.48 202.67 604.1C207.39 607.21 211.94 610.1 216.28 612.76V612.77ZM89.5 165.83H425.05V361.21C425.05 361.21 425.12 439.74 376.66 501.51C328.2 563.28 257.91 594.69 257.91 594.69C257.91 594.69 183.43 561.55 138 501.51C92.57 441.47 89.5 361.21 89.5 361.21V165.83Z"
				fill="white"
			/>
			<path
				d="M150.25 490.14C171.49 518.21 199.98 539.47 220.14 552.36L227.92 557.33V387.78H286.63V557.74L294.44 552.66C313.89 540.01 341.81 518.91 364.54 489.94L365.57 488.58V183.52H286.63V308.85H227.92V183.52H148.98V486.74L149.09 488.52L150.25 490.14Z"
				fill={color}
			/>
			<path
				d="M87.08 514.67C82.57 507.62 78.2601 500.13 74.2701 492.4C74.2201 492.31 74.18 492.22 74.14 492.14L35.94 532.67H84.1001L0.550049 635.54L3.28004 638.53L112.55 548.22C107.54 542.54 102.78 536.74 98.41 530.96C94.49 525.78 90.68 520.3 87.08 514.68V514.67Z"
				fill={color}
			/>
			<path
				d="M458.48 76.61L415.28 76.62L491.59 0L411.83 0.15L309.01 103.56L368.87 103.26L357.1 114.03H421.06L458.48 76.61Z"
				fill={color}
			/>
			<path
				d="M510.69 635.53L427.14 532.66H475.3L439.85 495.06C434.59 504.65 428.64 514.2 421.86 523.54C419.99 526.12 418.05 528.69 416.1 531.18C415.13 532.42 414.15 533.65 413.16 534.88C411.22 537.29 409.2 539.71 407.17 542.09C406.16 543.27 405.15 544.44 404.13 545.6C402.92 546.98 401.7 548.34 400.47 549.69L507.96 638.52L510.69 635.53Z"
				fill={color}
			/>
			<path
				d="M157.02 114.03L145.25 103.26L205.12 103.56L102.29 0.15L22.53 0L98.84 76.62L56.07 76.61L93.49 114.03H157.02Z"
				fill={color}
			/>
		</svg>
	);
}