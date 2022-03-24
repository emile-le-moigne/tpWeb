
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
  
    this.shapeList = new Map();
};

function Shape(size, color){
    this.size = size;
    this.color = color;
};

function Rectangle(originX, originY, width, height, size, color){
    Shape.call(this, size, color);

    this.originX = originX
    this.originY = originY
    this.width = width
    this.height = height

    this.size = size;
    this.color = color;
};

function Line(startX, startY, endX, endY, size, color){
    Shape.call(this, size, color);

    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;

    this.size = size;
    this.color = color;
};