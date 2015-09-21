"use strict";
(function(boplexTest){

  function Point(name, x, y) {
    Boplex.BaseObj.call(this);
    this.name = name;
    var _x = x;
    var _y = y;

    function _getName($t){
      return $t.name;
    }

    Point.prototype.getProductName = function(){
      return _getName.call(this, this);
    };

    Point.prototype.getPosition = function(){
      return {x: _x, y: _y};
    };

  }
  Boplex.inherit(boplexTest, Point, Boplex.BaseObject);

})(boplexTest);
