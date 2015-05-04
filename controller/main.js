var MainController = function () {

  this.view = new MainView();
  this.model = new MainModel();
  this.view.buttonStart.onclick = this.startGame.bind(this);
  this.view.buttonSet.onclick = this.setGame.bind(this);
  this.view.buttonReset.onclick = this.resetGame.bind(this);
  this.updateStatusLoop();
  
};

MainController.prototype.addPlayer = function () {
  console.log(this.view.inputName.value);
};

MainController.prototype.updateStatusLoop = function () {
  
  var that = this;
  
  var getState = function () {
    
    $.ajax({
      url: "http://localhost:3001/game/state",
      method: "GET"
    }).done(updateState);
    
    setTimeout(getState, 1000);
    
  };
  
  var updateState = function (body) {
    
    if (body.players[1]) {
      that.view.labelPlayer1.innerHTML = body.players[1];
    }
    
    if (body.players[2]) {
      that.view.labelPlayer2.innerHTML = body.players[2];
    }
    
    that.view.updateWindmill(body.windmill.state);
    
  };
  
  getState();
  
};

MainController.prototype.setGame = function () {
  $.ajax({url: "http://localhost:3001/game/set",
          method: "POST",
          crossDomain: true,
          headers: {"admin": "#wind"}}).done(function(response) {
    console.log(response);
  });
  
  //$.post({url: "http://localhost:3001/game/set", headers: {"admin": "#wind"}});
  
};

MainController.prototype.startGame = function () {
  $.ajax({url: "http://localhost:3001/game/start",
          method: "POST",
          crossDomain: true,
          headers: {"admin": "#wind"}}).done(function(response) {
    console.log(response);
  });
};

MainController.prototype.resetGame = function () {
  
};