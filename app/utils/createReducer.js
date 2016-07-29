/**
 * reducer生成器
 */

'use strict'

export default function createReducer(initialState , actionHandlers){
	return (state = initialState , action )=>{
		const reduceFn = actionHandlers[action.type];
		if(!reduceFn) return state;
		return { ...state , ...reduceFn(state,action)}
	}
}