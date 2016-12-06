Package.describe({
  name: 'nandit:d3piechart',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Makes a configurable d3 pie chart',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/nandit-saini/d3piechart',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.mainModule('nandit:d3piechart.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('nandit:d3piechart');
  api.mainModule('d3piechart-tests.js');
});

Npm.depends({
  d3: '3.5.17'
});