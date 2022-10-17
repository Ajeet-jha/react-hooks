import { useState } from 'react';

export default function usePosition() {
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	return [position, setPosition];
}
