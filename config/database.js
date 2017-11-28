
'use strict';
var mongoose = require('mongoose');
var db = function () {
    return {
        config: function (conf) {
            mongoose.connect('mongodb://quydx:Gbmktzqh1@@35.160.228.57:27017/blog');
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