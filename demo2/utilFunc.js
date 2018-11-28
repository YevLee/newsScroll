function utilFunc(el){
	this.el=this.$(el);
	//console.log(this);
	this.el.onmouseover=this.getFunc(this,'Message')
}
utilFunc.prototype.$=function(element){
	return document.getElementById(element)
}
utilFunc.prototype.Message=function(){
	console.log(111)
}
utilFunc.prototype.getFunc=function(variable, method, param){
	return function(){
		variable[method](param)
	}
}
