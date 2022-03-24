
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function (ctx) {
    //Manager color
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.size

    ctx.beginPath()
    //ctx.rect(this.originX, this.originY,
    //   this.originX + this.width, this.originY + this.height);
    //ctx.stroke();
    ctx.strokeRect(this.originX, this.originY, this.width, this.height)
    
};

Line.prototype.paint = function (ctx) {
    //Manager color
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;

    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapeList.forEach((shape, key, map) => shape.paint(ctx));
};

function updateShapeList(id, shape){
    var target = document.getElementById("shapeList");
    target.insertAdjacentHTML('beforeend', htmlToAdd(id, shape));
    //target.innerHTML += '<li id="listeShape${id}">';
};
function htmlToAdd(id, shape){
    if(shape && typeof shape === 'object'){
        let innerHTML = '<li id="listeShape' + id + '">';
        if (shape.constructor === Rectangle){
            innerHTML += '<span style="color:' + shape.color + '"> Rectangle </span>';
        } else {
            innerHTML += '<span style="color:' + shape.color + '"> Line </span>';
        }
        innerHTML += '<button type="button" class="btn btn-default" id=removeButton' + id + '>';
        innerHTML += '<span class="glyphicon glyphicon-remove-sign"></span>';
        innerHTML += '</button>';
        innerHTML += '</li>';
        return innerHTML;
    }
};