import usePosition from './UsePostion';

function MovingDot() {
	const [position, setPosition] = usePosition();

	return (
		<div
			onPointerMove={(e) => {
				setPosition({
					x: e.clientX - 80,
					y: e.clientY - 400,
				});
			}}
			style={{
				position: 'relative',
				width: '400px',
				height: '400px',
				border: '1px solid black',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: `${position.x} px`,
					buttom: `${position.y}px`,
					transform: `translate(${position.x}px, ${position.y}px)`,
					backgroundColor: 'red',
					borderRadius: '50%',
					width: 20,
					height: 20,
				}}
			/>
		</div>
	);
}

export default MovingDot;
