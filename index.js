/**
 * Handlebars Helpers: {{paginate}}
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

'use strict';

// Node.js
var path = require('path');
var fs = require('fs');


// Export helpers
module.exports.register = function (Handlebars, options, params) {

  var opts = options || {};
  var _ = require('lodash');


  /**
   * {{pager}}
   * Adds a pager to enable navigating to prev and next page/post.
   * @param  {Object} context Context to pass to the helper, most likely `pagination`.
   * @param  {Object} options Pass a modifier class to the helper.
   * @return {String}         The pager, HTML.
   */
  exports.pager = function(context, options) {
    options = options || {};
    options.hash = options.hash || {};
    context = _.extend({modifier: ''}, context, opts.data, this, options.hash);

    var template = [
      '<ul class="nav nav-pills nav-stacked">',
      '',
      '  {{#is pagination.currentPage 1}}',
      '    <li class="prev disabled">',
      '      <a unselectable="on" class="unselectable">First</a>',
      '    </li>',
      '    <li class="prev disabled">',
      '      <a unselectable="on" class="unselectable">&larr; Previous</a>',
      '    </li>',
      '  {{/is}}',
      '',
      '  {{#not pagination.currentPage 1}}',
      '    <li class="prev">',
      '      <a href="{{relative page.dest first.dest}}">First</a>',
      '    </li>',
      '    <li class="prev">',
      '      <a href="{{relative page.dest prev.dest}}">&larr; Previous</a>',
      '    </li>',
      '  {{/not}}',
      '',
      '  {{#eachItems pages}}',
      '    <li{{#is ../page.dest this.dest}} class="active"{{/is}}>',
      '      <a href="{{relative ../page.dest this.dest}}">{{@number}}</a>',
      '    </li>',
      '  {{/eachItems}}',
      '',
      '  {{#not pagination.currentPage pagination.totalPages}}',
      '    <li class="next">',
      '      <a href="{{relative page.dest next.dest}}">Next &rarr;</a>',
      '    </li>',
      '    <li class="next">',
      '      <a href="{{relative page.dest last.dest}}">Last</a>',
      '    </li>',
      '  {{/not}}',
      '',
      '  {{#is pagination.currentPage pagination.totalPages}}',
      '    <li class="next disabled">',
      '      <a unselectable="on" class="unselectable">Next &rarr;</a>',
      '    </li>',
      '    <li class="next disabled">',
      '      <a unselectable="on" class="unselectable">Last</a>',
      '    </li>',
      '  {{/is}}',
      '',
      '</ul>'
    ].join('\n');

    var styles = [
      '<style>',
        '.unselectable {',
        '  -webkit-touch-callout: none;',
        '    -webkit-user-select: none;',
        '       -moz-user-select: none;',
        '        -ms-user-select: none;',
        '            user-select: none;',
        '}',
      '</style>'
    ].join('\n');

    return new Handlebars.SafeString(Handlebars.compile(template)(context) + styles);
  };

  /**
   * {{paginate}}
   * Adds a pager to enable navigating to prev and next page/post.
   * @param  {Object} context Context to pass to the helper, most likely `pagination`.
   * @param  {Object} options Pass a modifier class to the helper.
   * @return {String}         The pager, HTML.
   */
  exports.paginate = function(context, options) {
    options = options || {};
    options.hash = options.hash || {};
    context = _.extend({modifier: ''}, context, opts.data, this, options.hash);

    var template = [
      '<ul class="pager{{#if modifier}} {{modifier}}{{/if}}">',
      '',
      '  {{#is pagination.currentPage 1}}',
      '    <li class="previous disabled">',
      '      <a unselectable="on" class="unselectable">&larr; Prev</a>',
      '    </li>',
      '  {{/is}}',
      '',
      '  {{#isnt pagination.currentPage 1}}',
      '    <li class="previous">',
      '      <a href="{{relative page.dest first.dest}}">&larr; Prev</a>',
      '    </li>',
      '  {{/isnt}}',
      '',
      '  {{#eachItems pages}}',
      '    <li{{#is ../page.dest this.dest}} class="active"{{/is}}>',
      '      <a href="{{relative ../page.dest this.dest}}">{{@number}}</a>',
      '    </li>',
      '  {{/eachItems}}',
      '',
      '  {{#isnt pagination.currentPage pagination.totalPages}}',
      '    <li class="next">',
      '      <a href="{{relative page.dest last.dest}}">Next &rarr;</a>',
      '    </li>',
      '  {{/isnt}}',
      '',
      '  {{#is pagination.currentPage pagination.totalPages}}',
      '    <li class="next disabled">',
      '      <a unselectable="on" class="unselectable">Next &rarr;</a>',
      '    </li>',
      '  {{/is}}',
      '',
      '</ul>'
    ].join('\n');

    var styles = [
      '<style>',
        '.unselectable {',
        '  -webkit-touch-callout: none;',
        '    -webkit-user-select: none;',
        '       -moz-user-select: none;',
        '        -ms-user-select: none;',
        '            user-select: none;',
        '}',
      '</style>'
    ].join('\n');
    return new Handlebars.SafeString(Handlebars.compile(template)(context) + styles);
  };


  /**
   * {{pagination}}
   * Adds a pagination to enable navigating to prev and next page/post.
   * @param  {Object} context Context to pass to the helper, most likely `pagination`.
   * @param  {Object} options Pass a modifier class to the helper.
   * @return {String}         The pagination, HTML.
   */
  exports.pagination = function(context, options) {
    options = options || {};
    options.hash = options.hash || {};
    context = _.extend({modifier: ''}, context, opts.data, this, options.hash);

    var template = [
      '<ul class="pagination{{#if modifier}} {{modifier}}{{/if}}">',
      '',
      '  {{#is pagination.currentPage 1}}',
      '    <li class="prev disabled">',
      '      <a unselectable="on" class="unselectable">&laquo;</a>',
      '    </li>',
      '    <li class="prev disabled">',
      '      <a unselectable="on" class="unselectable">&lsaquo;</a>',
      '    </li>',
      '  {{/is}}',
      '',
      '  {{#not pagination.currentPage 1}}',
      '    <li class="prev">',
      '      <a href="{{relative page.dest first.dest}}">&laquo;</a>',
      '    </li>',
      '    <li class="prev">',
      '      <a href="{{relative page.dest prev.dest}}">&lsaquo;</a>',
      '    </li>',
      '  {{/not}}',
      '',
      '  {{#eachItems pages}}',
      '    <li{{#is ../page.dest this.dest}} class="active"{{/is}}>',
      '      <a href="{{relative ../page.dest this.dest}}">{{@number}}</a>',
      '    </li>',
      '  {{/eachItems}}',
      '',
      '  {{#not pagination.currentPage pagination.totalPages}}',
      '    <li class="next">',
      '      <a href="{{relative page.dest next.dest}}">&rsaquo;</a>',
      '    </li>',
      '    <li class="next">',
      '      <a href="{{relative page.dest last.dest}}">&raquo;</a>',
      '    </li>',
      '  {{/not}}',
      '',
      '  {{#is pagination.currentPage pagination.totalPages}}',
      '    <li class="next disabled">',
      '      <a unselectable="on" class="unselectable">&rsaquo;</a>',
      '    </li>',
      '    <li class="next disabled">',
      '      <a unselectable="on" class="unselectable">&raquo;</a>',
      '    </li>',
      '  {{/is}}',
      '',
      '</ul>'
    ].join('\n');

    var styles = [
      '<style>',
        '.unselectable {',
        '  -webkit-touch-callout: none;',
        '    -webkit-user-select: none;',
        '       -moz-user-select: none;',
        '        -ms-user-select: none;',
        '            user-select: none;',
        '}',
      '</style>'
    ].join('\n');

    return new Handlebars.SafeString(Handlebars.compile(template)(context) + styles);
  };


  for (var helper in exports) {
    if (exports.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, exports[helper]);
    }
  }
};
