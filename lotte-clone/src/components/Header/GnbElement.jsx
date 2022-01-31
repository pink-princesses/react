import styled from "styled-components"

const StyledLi = styled.li`
	display: inline-block;
	margin-left: 34px;
	}
`
const StyledA1 = styled.a`
	position: relative;
	font-size: 16px;
	line-height: 23px;
	font-weight: 400;
	color: #626161;
`


export default function GnbElement ({data}) {
	return (
		<StyledLi>
			<StyledA1 href="#">
				{data.title}
			</StyledA1>
		</StyledLi>
	)
}