
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.initPosX = 0;
  this.initPosY = 0;
  this.finalPosX = 0;
  this.finalPosY = 0;
  this.pressed = false;

  this.interactor = interactor;


  // Developper les 3 fonctions gérant les événements
  this.pression = function (evt) {
    res = getMousePosition(canvas, evt);
    this.initPosX = res.x;
    this.initPosY = res.y;
    this.finalPosX = res.x;
    this.finalPosY = res.x;
    this.pressed = true;

    this.interactor.onInteractionStart(this);
  }.bind(this);

  this.moves = function (evt) {
    if (this.pressed) {
      res = getMousePosition(canvas, evt);
      this.finalPosX = res.x;
      this.finalPosY = res.y;
      
      this.interactor.onInteractionUpdate(this);
    }
  }.bind(this);

  this.release = function (evt) {
    if (this.pressed) {
      res = getMousePosition(canvas, evt);
      this.finalPosX = res.x;
      this.finalPosY = res.y;
      this.pressed = 0;
      
      this.interactor.onInteractionEnd(this);
    }
  }.bind(this);


  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.pression, false);
  canvas.addEventListener('mousemove', this.moves, false);
  canvas.addEventListener('mouseup', this.release, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};

