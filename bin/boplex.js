"use strict";
var Boplex = {};

(function(Boplex){

  var _version = "0.0.1";

  function getFuncName(f){
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec(f);
    return (results && results.length > 1) ? results[1] : "";
  }

  function include($x, child){
    var x = getFuncName(child);
    $x[x] = child;
  }

  function inherit($x, child,parent){
    include($x, child);
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
  }

  function getLogTime(currentdate){
    currentdate = currentdate || (new Date());
    var datetime = currentdate.getFullYear() +
      "." + (currentdate.getMonth()+1)  +
      "." + currentdate.getDate() +
      "_" + currentdate.getHours() +
      ":" + currentdate.getMinutes() +
      ":" + currentdate.getSeconds();
    return datetime;
  }

  function defineConstProp($x, propName, propVal){
    Object.defineProperty($x, propName, {
      writable: false,
      value: propVal,
    });
  }

  function publish($x){
    $x.getFuncName = getFuncName;
    $x.defineConstProp = defineConstProp;
    $x.include = include;
    $x.inherit = inherit;
    $x.getLogTime = getLogTime;
  }

  defineConstProp(Boplex, "Version", _version);
  publish(Boplex);

})(Boplex);

(function(Boplex){
  "use strict";

  function BaseObject() {
    BaseObject.prototype.getClassName = function() {
      return Boplex.getFuncName((this).constructor);
    };
  }

  function publish($x){
    $x.BaseObject = BaseObject;
  }

  publish(Boplex);

})(Boplex);

(function(Boplex){
  "use strict";

  function Logger(name){
    var _name = name;

    Logger.prototype.log = function(txt){
      console.log(Boplex.getLogTime() + " " + _name + " " + txt);
    };
  }

  function publish($x){
    $x.Logger = Logger;
  }

  publish(Boplex);

})(Boplex);
