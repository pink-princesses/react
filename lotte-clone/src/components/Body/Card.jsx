import styled from "styled-components"
const StyledLi = styled.li`
position: relative;
display: inline-block;
width: 289px;
height: 464px;
`

const StyledImg = styled.img`
	display: block;
	width: 100%;
	height: auto;
`
const StyledP = styled.p`
	font-size: 20px;
	line-height: 20px;
	padding: 20px 0 10px 0
`

export default function MagazinCard ({data, child}) {
	return (
		<StyledLi>
			<StyledImg src={data.url} alt="" />
			<StyledP>{data.title}</StyledP>
			{child}
		</StyledLi>
	)	
}