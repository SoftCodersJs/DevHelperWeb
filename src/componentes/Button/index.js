export default function A(props){
	return(
		<a href={props.text}>{props.children}</a>
	);
}