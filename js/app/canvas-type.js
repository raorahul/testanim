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

      this._pixelRatio = window.devicePixelRatio || 1;
      this._screenX = 0;
      this._screenY = 0;
      this._screenWidth = 750 * this._pixelRatio;
      this._screenHeight = 1334 * this._pixelRatio;

      this._stageWidth = 0;
      this._stageHeight = 0;

      this._canvasNode = null;
      this._containerNode = null;

      this._stage = null;


      /*
        SETUP
       */
      this._setup(containerId);
    }

    proto = CanvasDemo.prototype;
    proto._setup = function (containerId) {

      // Add the canvas DOM element.
      this._containerNode = document.getElementById(containerId);
      if (!this._containerNode) {
        return;
      }

      this._stageWidth = this._containerNode.clientWidth * this._pixelRatio;
      this._stageHeight = this._screenHeight + (200 * this._pixelRatio); // random 200 px padding.

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

    yieldmoItems.CanvasDemo = CanvasDemo;
    return yieldmoItems;

  });
})();
