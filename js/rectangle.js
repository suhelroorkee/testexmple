var Rectangle = function(w,l){
	this.w=w;
    this.l=l;
};

 Rectangle.prototype ={
	
	area : function(){
		return this.w*this.l;
		
	},
	
	perimeter : function(){
        return 2 * (this.w+this.l);
    }
};