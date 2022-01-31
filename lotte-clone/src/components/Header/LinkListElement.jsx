import styled from "styled-components"
import ToggleList from "./ToggleList"
import { toggle } from "../../redux/actions"
import { connect } from "react-redux"

const StyledLi = styled.li`
	display: inline-block;
	position: relative;
	padding: 0 7px 0 7px;
	::before {
		content: '';
    display: block;
    clear: both;
    position: absolute;
    left: 0;
    top: 3px;
    width: 1px;
    height: 12px;
    background-color: #3c3c3c;
	}
`
const StyledA1 = styled.a`
	font-size: 12px;
	color: #626161;
	font-weight: 400;
	cursor: pointer;
`
function LinkListElement ({data, display, toggle}) {
	function renderToggle () {
		if(data.inData !== null) {
			return (
				<ToggleList display={display === data.title} inData={data.inData}></ToggleList>
			)
		}
	}
	function click() {
		toggle(data.title)
	}

	return (
		<StyledLi>
			<StyledA1 href="#" onClick={click}>
				{data.title}
			</StyledA1>
			{renderToggle()}
		</StyledLi>
	)
}

const mapStateToProps = (state) => {
	return {
		display: state.display
	}
}
const mapStateToDispatch = (dispatch) => {
	return {
		toggle: (text) => {
			dispatch(toggle(text))
		}
	}
}

export default connect(mapStateToProps, mapStateToDispatch)(LinkListElement);