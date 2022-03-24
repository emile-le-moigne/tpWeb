
	var editingMode = { rect: 0, line: 1 };

	function Pencil(ctx, drawing, canvas) {
		this.currEditingMode = editingMode.line;
		this.currLineWidth = 5;
		this.currColour = '#000000';
		this.currentShape = 0;
		var newId = 0;

		// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
		document.getElementById("butRect").onclick = (_) => this.currEditingMode = editingMode.rect;
		document.getElementById("butLine").onclick = (_) => this.currEditingMode = editingMode.line;
		document.getElementById("spinnerWidth").onchange = (lineWidth) => this.currLineWidth = lineWidth.target.value;
		document.getElementById("colour").onchange = (color) => this.currColour = color.target.value;


		new DnD(canvas, this);

		// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

		this.onInteractionStart = function (dnd) {
			
			//this.currentShape = new Rectangle(dnd.initPosX, dnd.initPosY, dnd.finalPosX-dnd.initPosX, dnd.finalPosY-dnd.initPosY, this.currLineWidth, this.currColour);

		}.bind(this);

		this.onInteractionUpdate = function (dnd) {

			if (this.currEditingMode == editingMode.rect) {
			this.currentShape = new Rectangle(dnd.initPosX, dnd.initPosY, dnd.finalPosX - dnd.initPosX, dnd.finalPosY - dnd.initPosY, this.currLineWidth, this.currColour);
			
		} else {
			this.currentShape = new Line(dnd.initPosX, dnd.initPosY, dnd.finalPosX, dnd.finalPosY, this.currLineWidth, this.currColour);
		}
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
			
		}.bind(this);

		this.onInteractionEnd = function (dnd) {

			drawing.shapeList.set(newId, this.currentShape);
			drawing.paint(ctx);
			updateShapeList(newId, this.currentShape);
			document.getElementById("removeButton" + newId).onclick = (e) => removeShape(e.currentTarget.id.substring(12));
			this.currentShape.paint(ctx);
			newId++;
			
		}.bind(this);

		function removeShape(id){
			document.getElementById("listeShape" + id).remove();
			drawing.shapeList.delete(parseInt(id));
			drawing.paint(ctx, canvas);
		};
	};