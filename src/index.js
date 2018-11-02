import { combineReducers } from 'redux';
export default function(enter,cr,single){
	if(!single && typeof window['define'] === "function"){
	    window['define']([],function(){
	        return function(param,pr){
	        	if(pr.store && cr.reducers ){
	        		pr.store.replaceReducer(combineReducers({
						...(pr.reducers||{}),
						...cr.reducers
					}));
	        		cr.store = pr.store;
				}
				if(pr.actions && cr.actions){
	        		cr.actions = Object.assign(pr.actions,or.actions);
				}else{
	        		cr.actions = pr.actions || cr.actions || {};
				}
				enter(param, cr);
			}
	    });
	}else {
	    enter(null,cr || {});
	}
}