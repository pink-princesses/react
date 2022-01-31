import {TOGGLE} from './actions'

let initialState = { display: "" }

export default function toggle(preState = initialState, action) {
	if(action.type === TOGGLE) {
		if(preState.display === action.text){
			return { display: "" }
		} 
		else{
			return { display: action.text }
		} 
	}

	return preState
}