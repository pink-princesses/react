import "../../styles/Aos.css"

export default function Aos (props) {
	return (
		<div className="aos_wrap">
			<div className="title" style={{background: props.url}}></div>
			<p className="txt01">{props.txt01}</p>
			<p className="txt02">{props.txt02}</p>
		</div>
	)
}