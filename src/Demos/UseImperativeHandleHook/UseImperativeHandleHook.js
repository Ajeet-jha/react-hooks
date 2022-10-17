import { forwardRef, useImperativeHandle, useState, useRef } from 'react';

const MyInput = forwardRef((props, ref) => {
	const [val, setVal] = useState('');
	const inputRef = useRef();

	useImperativeHandle(ref, () => ({
		blur: () => {
			document.title = val;
			inputRef.current.blur();
		},
		focus: () => {
			document.title = 'Vignesh';
			inputRef.current.focus();
		},
	}));

	return (
		<input
			ref={inputRef}
			val={val}
			onChange={(e) => setVal(e.target.value)}
			{...props}
		/>
	);
});

function Input() {
	const ref = useRef(null);
	const onBlur = () => {
		ref.current.blur();
	};

	const onFocus = () => {
		ref.current.focus();
	};

	return <MyInput ref={ref} onBlur={onBlur} onFocus={onFocus} />;
}

export default Input;
