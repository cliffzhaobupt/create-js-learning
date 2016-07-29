window.onload = function() {
  createShapeStage();
  createInteractiveShapeStage();
};

function createShapeStage() {
  var shapeStage = new createjs.Stage('shapeCanvas');

  function drawRectangle() {
    var rect = new createjs.Shape();
    rect.graphics.beginFill('#000').drawRect(10, 10, 100, 100);
    shapeStage.addChild(rect);
  }

  function drawCircle() {
    var circle = new createjs.Shape();
    circle.graphics.setStrokeStyle(1).beginStroke('#000').drawCircle(160, 60, 40);
    shapeStage.addChild(circle);
  }

  function drawLine() {
    var line = new createjs.Shape();
    line.graphics.setStrokeStyle(1).beginStroke('#00ff00').moveTo(220, 60).lineTo(300, 60);
    shapeStage.addChild(line);
  }

  function drawLinearGradient() {
    var gradient = new createjs.Shape();
    gradient.graphics.beginLinearGradientFill(["rgba(255,198,255,1)", "rgba(0,255,0,1)"], [0, 1], 0, 50, 0, 130).drawRoundRect(320, 10, 90, 90, 10);
    shapeStage.addChild(gradient);
  }

  function drawShapes() {
    drawRectangle();
    drawCircle();
    drawLine();
    drawLinearGradient();
    shapeStage.update();
  }

  drawShapes();
}

function createInteractiveShapeStage() {
  var interactiveShapeStage = new createjs.Stage('interactCanvas');

  function drawShapes() {
    for (var i = 0; i < 15; i++) {
      var theShape = new createjs.Shape();
      theShape.graphics.setStrokeStyle(1).beginStroke(createjs.Graphics.getRGB(0, 0, 0)).beginFill(createjs.Graphics.getRGB(255,255,51)).drawCircle(0, 0, 20).moveTo(-20, 0).lineTo
  (20,0);
      theShape.x = Math.floor(Math.random() * 600);
      theShape.y = Math.floor(Math.random() * 300);
      theShape.scaleX = Math.floor(Math.random() * 2) + 1;
      theShape.scaleY = Math.floor(Math.random() * 2) + 1;
      theShape.alpha = Math.random() * 1;
      theShape.rotation = Math.floor(Math.random() * 360);
      theShape.on("click", handleClick, null, false);            
      interactiveShapeStage.addChild(theShape);
    }
    interactiveShapeStage.update();
  }

  function handleClick() {
    alert('clicked!');
  }

  drawShapes();
}
