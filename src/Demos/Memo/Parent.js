import React, { useState, useMemo } from 'react';
import Child from './Child';
import './style.css';

function Parent() {
	const [number, setNumber] = useState(0);

	function handleOnClick() {
		setNumber(number + 1);
	}

	//  memo child not rendering when state update. only render child props update
	const memoChild = useMemo(() => <Child />, []);

	//  useMemo's second arguments is state variable name . example [number]. if 'number' gets update , child component rerender will be happen.
	// const memoChild = useMemo(() => <Child />, [number]);

	return (
		<div>
			<h1>Use Memo</h1>

			<div className="box">
				<h2>Parent Component</h2>
				<h4>Number : {number}</h4>
				<button onClick={() => handleOnClick()}> Increment </button>
			</div>

			<div className="box">
				<h2>Normal child component </h2>
				<Child /> {/*   Every state update it gets rerendered */}
			</div>

			<div className="box">
				<h2>Memo child Component </h2>
				{memoChild}
			</div>
		</div>
	);
}

export default Parent;
