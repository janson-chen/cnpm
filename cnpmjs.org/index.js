/**!
 * Copyright(c) cnpmjs.org and other contributors.
 * MIT Licensed
 *
 * Authors:
 *  dead_horse <dead_horse@qq.com> (http://deadhorse.me)
 */

'use strict';

/**
 * Module dependencies.
 */

var config = require('./config');

exports.loadConfig = config.loadConfig;
exports.config = config;

exports.startWorker = function (customConfig) {
  console.log("*******************startWorker**************************", customConfig);
  config.loadConfig(customConfig);
  require('./worker');
};

exports.startSync = function (customConfig) {
  console.log("*******************startSync**************************", customConfig);
  config.loadConfig(customConfig);
  require('./sync');
};
