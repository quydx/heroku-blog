
'use strict';
var mongoose = require('mongoose');
var db = function () {
    return {
        config: function (conf) {
            //mongoose.Promise = require('bluebird');
            var Promise = require('bluebird');
	Promise.promisifyAll(mongoose);
            mongoose.connect('mongodb://localhost:27017/blog',{ useMongoClient: true });
            console.log(conf);
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function callback() {
                console.log('db connection open');
            });
        }
    };
};
module.exports = db();
