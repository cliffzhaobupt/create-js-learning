window.onload = function() {
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
};
