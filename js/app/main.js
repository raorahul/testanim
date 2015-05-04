/*jshint unused:vars*/
/*jshint undef:true*/
/*global
require
*/
(function () {
  'use strict';

  require.config({
    baseUrl: 'js/app'
    // paths: {
    //   // 'createjs': 'https://code.createjs.com/createjs-2014.12.12.min'
    //   // 'jquery': 'http://code.jquery.com/jquery-1.11.2.min',
    //   // 'manipulatives': './manipulatives',
    //   // 'instructions': './instructions',
    // },
    // shim: {
    //   'createjs': {
    //     exports: 'createjs'
    //   }
    // }
  });


  // Start the main app logic.
  require(['canvas-type'], function (canvasType)  {

    // Setup the canvas.
    new canvasType.CanvasDemo('container');

  });
})();
