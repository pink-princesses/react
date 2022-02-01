import "../../styles/MainCard.css"
import CommonBtn from "../common/CommonBtn"

export default function MainCard (props) {
	return (
		<div className="inner_group">
			<div className="in_card">
				<div className="txt_box">
					<div className="culture_title" style={{background: props.titleUrl}}></div>
					<p className="txt01">{props.txt01}</p>
					<p className="txt02">{props.txt02}</p>
					<p className="txt03">{props.txt03}</p>
				</div>
				<CommonBtn href="" className="btn">
					{props.btn}
				</CommonBtn>
			</div>
		</div>
	)
}