// declare your class, pass values to constructor if required
var Square = function(x){
    this.x = x;
};

// Method 1
// declare all the functions one by one inside the class_name.prototype block
Square.prototype = {

    area : function(){
        return this.x * this.x;
    },

    perimeter : function(){
        return 4 * this.x;
    }
};

// Method 2
// define each function separately
/*
Square.prototype.area = function(){
    return this.x * this.x;
};

Square.prototype.perimeter = function(){
    return 4 * this.x;
};
*/