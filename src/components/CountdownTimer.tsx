"use client";

import Countdown, { CountdownRenderProps } from "react-countdown";
import CountdownUnit from "./CountdownUnit";

export type CountdownTimerProps = {
	label?: string;
	expirationDateInSeconds: string;
};

const CountdownTimer = ({
	label,
	expirationDateInSeconds,
}: CountdownTimerProps) => {
	// create a function that converts a timestamp to milliseconds
	const expirationDateInMilliseconds = () => {
		const date = new Date(expirationDateInSeconds);
		return date.getTime();
	};
	const renderer = ({
		days,
		hours,
		minutes,
		seconds,
		completed,
	}: CountdownRenderProps) => {
		if (completed) {
			// Render a completed state
			return <h1>The Time is Now!</h1>;
		} else {
			// Render a countdown
			return (
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
					<CountdownUnit label="Days" value={days} />
					<CountdownUnit label="Hours" value={hours} />
					<CountdownUnit label="Minutes" value={minutes} />
					<CountdownUnit label="Seconds" value={seconds} />
				</div>
			);
		}
	};
	return (
		<div style={{ textAlign: "center", margin: "auto" }}>
			{label && <h2 className="text-center text-gray-400 mb-4">{label}</h2>}
			<Countdown date={expirationDateInMilliseconds()} renderer={renderer} />
		</div>
	);
};

export default CountdownTimer;
