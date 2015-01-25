/* global require, module */
var find = require('broccoli-stew').find;
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var array = [
  require('broccoli-stew').find('app/**/*.js'),
  pickFiles('app/styles', {
    srcDir: '/',
    //destDir: '/app/styles' // doesn't work
    destDir: '/app' // works
  })
];

var tree = mergeTrees(array, {
  overwrite: false,
  description: 'TreeMerger (allTrees)'
});

module.exports = mergeTrees(array);
