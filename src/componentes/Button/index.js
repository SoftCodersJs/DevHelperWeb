import React from 'react';

export default function A(props){
	return(
		<a onClick={props.text}>{props.children}</a>
	);
}