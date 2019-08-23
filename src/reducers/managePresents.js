export function managePresents(state, action){
	let actionType = action.type

	switch(actionType) {
		case "INCREASE": {
			return {...state, numberOfPresents: state.numberOfPresents + 1}
		}
		default: {
			return state
		}
	}
}
