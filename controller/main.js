var MainController = function () {

  this.view = new MainView();
  this.model = new MainModel();
  this.view.buttonPlay.onclick = this.addPlayer.bind(this);
  
};

MainController.prototype.addPlayer = function () {
  console.log(this.view.inputName.value);
};