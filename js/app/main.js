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
    //   'jquery': 'http://code.jquery.com/jquery-1.11.2.min',
    //   'manipulatives': './manipulatives',
    //   'instructions': './instructions',
    // },
    // shim: {
    //   'createjs': {
    //     exports: 'createjs'
    //   }
    // }
  });


  // Start the main app logic.
  require(['canvas-type'], function (canvasType)  {

    // // Setup the question configuration
    // var config = {};
    // config.$el= $('#container');
    // config.question = {
    //   // response_id: "p001",
    //   // type: "custom",
    //   // is_math: true,
    //   // js: "js/manipulatives/pie-type.js",
    //   // css: "css/manipulatives/pie-type.css",
    //   // stimulus: "How many 2 inch parts can fit into this 6 inch part?",
    //   valid_response: "3",
    //   score: 1,

    //   // configs
    //   // bucket_divisions: 6,
    //   piece_height: 100,
    //   snap_threshold: 80,
    //   snap_interval: 0.5, // default is 1
    //   max_piece_instances: 7,

    //   // new configs
    //   bucket_division_intervals: "0-90,90-180,180-270,270-360",
    //   piece_angle: "90", // default is 1.
    //   // piece_division_interval: 0.5, // default is 0.

    //   // text
    //   bucket_label: "1/2",
    //   piece_label: "1/4",


    //   // design-y
    //   // bucket_fill_color: "white",
    //   // bucket_sector_fill_color: "white",
    //   // bucket_stroke_color: "#9ee240",
    //   // piece_fill_color: "#f39121",
    //   // piece_stroke_color: "#007fb3",
    //   // bucket_label_font: "Arial",
    //   // bucket_label_color: "#808080",
    //   // piece_label_font: "Arial",
    //   // piece_label_color: "#808080",
    // };

    // window.addEventListener('next', function(e) {
    //   new pieType.Question(config);
    // });

    // ins001(config.$el);

  });
})();
