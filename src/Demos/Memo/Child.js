import React, { useEffect } from 'react';
// value of render count persist till refresh page
let renderCount = 1;

function Child() {
	useEffect(() => {
		renderCount += 1;
	});
	return <div> render count : {renderCount} </div>;
}
export default Child;

// pure functional component
// rerender not happen when parent state updates. render will happen only props update.
/** 
    import React, {useEffect, memo} from "react";
    let renderCount = 10;

    function Child(){
    useEffect(()=>{
    renderCount += 1;
    })
    return <div> render count : {renderCount} </div>
    }
    export default memo(Child)
*/
