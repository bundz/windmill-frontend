var MainView = function () { 

  this.buttonSet = document.getElementById("buttonSet");
  this.buttonStart = document.getElementById("buttonStart");
  this.buttonReset = document.getElementById("buttonReset");
  this.inputName = document.getElementById("inputName");
  this.labelPlayer1 = document.getElementById("player1");
  this.labelPlayer2 = document.getElementById("player2");
  this.spots = [];
  this.spots.push(document.getElementById("spot1"));
  this.spots.push(document.getElementById("spot2"));
  this.spots.push(document.getElementById("spot3"));
  this.spots.push(document.getElementById("spot4"));
  this.spots.push(document.getElementById("spot5"));
  this.spots.push(document.getElementById("spot6"));
  this.spots.push(document.getElementById("spot7"));
  this.spots.push(document.getElementById("spot8"));
  this.spots.push(document.getElementById("spot9"));
  this.spots.push(document.getElementById("spot10"));
  this.spots.push(document.getElementById("spot11"));
  this.spots.push(document.getElementById("spot12"));
  this.spots.push(document.getElementById("spot13"));
  this.spots.push(document.getElementById("spot14"));
  this.spots.push(document.getElementById("spot15"));
  this.spots.push(document.getElementById("spot16"));
  this.spots.push(document.getElementById("spot17"));
  this.spots.push(document.getElementById("spot18"));
  this.spots.push(document.getElementById("spot19"));
  this.spots.push(document.getElementById("spot20"));
  this.spots.push(document.getElementById("spot21"));
  this.spots.push(document.getElementById("spot22"));
  this.spots.push(document.getElementById("spot23"));
  this.spots.push(document.getElementById("spot24"));
  
};

MainView.prototype.updateWindmill = function (windmill) {
  
  var array = windmillToArray(windmill);
  
  console.log(array);
  
  for(var i = 0; i < array.length; i++) {
   
    switch (array[i]) {
      case 0:
        this.spots[i].setAttribute("style", "background-color: white");
        break;
      case 1:
        this.spots[i].setAttribute("style", "background-color: red");
        break;
      case 2:
        this.spots[i].setAttribute("style", "background-color: blue");
        break;
      default:
        break;
    }
    
  }
  
};

function windmillToArray (windmill) {
  
  var array = [];
  var index = 0;

  for(var i = 0; i < windmill.length; i++) {
    
    for(var j = 0; j < windmill.length; j++) {
    
      if(windmill[i][j] != null) {
       
        array[index] = windmill[i][j];
        index++;
      }
      
    }
    
  }
  
  return array;
  
}