
'use strict';
var mongoose = require('mongoose');
var db = function () {
    return {
        config: function (conf) {
            mongoose.connect('mongodb://quydx:Gbmktzqh1@@ds141434.mlab.com:41434/blog');
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function callback() {
                console.log('db connection open');
            });
        }
    };
};
module.exports = db();