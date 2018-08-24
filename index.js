export default function(enter){
	if(typeof window['define'] === "function"){
	    window['define']([],function(){
	        return enter;
	    });
	}else {
	    enter('',null);
	}
}