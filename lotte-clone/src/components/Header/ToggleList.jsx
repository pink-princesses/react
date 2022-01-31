import styled from "styled-components"
import { css } from "styled-components";

const StyledUl = styled.ul`
	display: block;
	${props =>
		props.display === "false" && 
		css`
			display: none;
		`
	}
	position: absolute;
	top: 31px;
	left: 0;
	z-index: 31;
	width: 130px;
	padding: 17px 15px;
	background-color: #000;
	
	li + li {
    margin-top: 12px;
	}
	
	li a {
		font-size: 14px;
    color: #fff;
    line-height: 18px;
    opacity: 0.7;
	}
`

export default function ToggleList ({display, inData}) {
	return(
		<StyledUl className="list" display={display.toString()}>
			{inData.map((data, idx) => {
				return (
					<li className="item" key={idx}>
						<a href="#">{data}</a>
					</li>
				)
			})}
		</StyledUl>
	)
}