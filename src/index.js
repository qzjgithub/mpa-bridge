import { combineReducers } from 'redux';
export default function(enter,cr,single){
	if(!single && typeof window['define'] === "function"){
	    window['define']([],function(){
	        return function(param,pr, sessionName){
	        	if(pr.store && cr.reducers ){
	        		pr.store.replaceReducer(combineReducers({
						...(pr.reducers||{}),
						...cr.reducers
					}));
				}
				if(pr.actions && cr.actions){
	        		Object.assign(pr.actions,or.actions);
				}else{
	        		pr.actions = pr.actions || cr.actions || {};
				}
				enter(param, Object.assign({}, cr, pr), sessionName);
			}
	    });
	}else {
	    enter({},cr || {});
	}
}