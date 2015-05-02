/*jshint unused:vars*/
/*jshint undef:true*/
/*global
define, createjs, document, window
*/

(function (){
  'use strict';

  define(function () {

    // Add canvas type code here.
    var yieldmoItems = {};
    var proto;

    function CanvasDemo (containerId) {

      /*
                PRIVATE VARIABLES
       */

      this._containerId = containerId;
      this._pixelRatio = window.devicePixelRatio || 1;
      this._screenX = 0;
      this._screenY = 0;
      this._screenWidth = 500 * this._pixelRatio;
      this._screenHeight = 667 * this._pixelRatio;

      this._stageWidth = 0;
      this._stageHeight = 0;

      this._canvasNode = null;
      this._containerNode = null;

      this._stage = null;
      this._loader = null;

      this._ground = null;
      this._grant = null;


      /*
        SETUP
       */
      this._loadAssests();
    }

    proto = CanvasDemo.prototype;
    proto._loadAssests = function () {
      var manifest = [
        {src: "spritesheet_grant.png", id: "grant"},
        {src: "ground.png", id: "ground"}
      ];

      var self = this;
      this._loader = new createjs.LoadQueue(false);
      this._loader.addEventListener("complete", function () {
        self._setup();
      });
      this._loader.loadManifest(manifest, true, "/assets/");
    };

    proto._setup = function () {

      // Add the canvas DOM element.
      this._containerNode = document.getElementById(this._containerId);
      if (!this._containerNode) {
        return;
      }

      this._stageWidth = this._containerNode.clientWidth * this._pixelRatio;
      this._stageHeight = this._screenHeight + (10 * this._pixelRatio); // random 200 px padding.

      this._containerNode.innerHTML = '<canvas id="canvas-type" width=" ' + this._stageWidth + '" height="' + this._stageHeight + '"></canvas>';
      this._canvasNode = document.getElementById('canvas-type');

      this._canvasNode.style.width =  (this._stageWidth / this._pixelRatio) + 'px';
      this._canvasNode.style.height =  (this._stageHeight / this._pixelRatio) + 'px';


      // Calculate the screen dimensions and placement.
      this._screenX = Math.min(this._screenWidth, ((this._stageWidth - this._screenWidth) / 2.0));
      this._screenY = Math.min(this._screenHeight, ((this._stageHeight - this._screenHeight) / 2.0));

      // Setup the stage.
      this._stage = new createjs.Stage(this._canvasNode);
      createjs.Touch.enable(this._stage);
      this._stage.enableMouseOver(20);

      // Draw the wrapper container.
      this._setupWrapper();

      this._setupArtwork();

      // Every thing's done drawing - update stage.
      this._stage.update();
    };

    proto._setupWrapper = function () {
      var box = new createjs.Shape();
      box.graphics
      .ss(2)
      .s('#404040')
      .r(0, 0, this._screenWidth, this._screenHeight);
      box.x = this._screenX;
      box.y = this._screenY;

      this._stage.addChild(box);
    };

    proto._setupArtwork = function () {

      // Setup the ground.
      var groundImg = this._loader.getResult("ground");
      this._ground = new createjs.Shape();
      this._ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, this._screenWidth, groundImg.height);
      this._ground.tileW = groundImg.width;
      this._ground.y = this._screenY + (this._screenHeight >> 1) - groundImg.height;
      this._ground.x = this._screenX;

      this._stage.addChild(this._ground);

      // Setup grant.
      var self = this;
      var spriteSheet = new createjs.SpriteSheet({
                                 framerate: 30,
                                 "images": [self._loader.getResult("grant")],
                                 "frames": {"regX": 0, "height": 292, "count": 64, "regY": 0, "width": 165},
                                 // define animation, run (loops, 1.5x speed).
                                 "animations": {
                                   "run": [0, 25, "run", 1.5]
                                 }
                               });
        this._grant = new createjs.Sprite(spriteSheet, "run");
        this._grant.y = this._ground.y - 292;
        this._grant.x = this._screenX;
        this._stage.addChild(this._grant);

        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.addEventListener("tick", function (evt) {
          self._tick(evt);
        });
    };

    proto._tick = function (event) {
      this._stage.update(event);
    };

    yieldmoItems.CanvasDemo = CanvasDemo;
    return yieldmoItems;

  });
})();
