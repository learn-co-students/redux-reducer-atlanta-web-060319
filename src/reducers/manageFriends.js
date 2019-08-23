export function manageFriends(state, action){
	let actionType = action.type

	switch(actionType) {
		case "ADD_FRIEND": {
			let newFriend = action.friend
			
			return {friends: [...state.friends, newFriend]}
		}
		case "REMOVE_FRIEND": {
			let friendIDToRemove = action.id
			let fTRIndex = state.friends.findIndex( friend => friend.id == friendIDToRemove)
			let newFriends = [...state.friends]
			newFriends.splice(fTRIndex, 1)

			return {friends: [...newFriends]} 
		}
		default: {
			return state
		}
	}
}
