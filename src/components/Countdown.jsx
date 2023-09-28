import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const Countdown = () => {
	const navigate = useNavigate()

	const [secondsRemaining, setSecondsRemaining] = useState(5);

	useEffect(() => {
		const interval = setInterval(() => {
			setSecondsRemaining(secondsRemaining - 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [secondsRemaining]);

	if (secondsRemaining <= 0) {
		navigate('/summary')
		// return <p>Countdown complete!</p>;
	} else {
		return <div
			className="flex flex-wrap: wrap"
		>
			The bot will exit in {secondsRemaining} seconds.
		</div>;
	}
};

export default Countdown;

