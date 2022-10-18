import { useState } from 'react';

function usePosition() {
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	return [position, setPosition];
}

export default usePosition;
