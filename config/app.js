
'use strict';

module.exports = {
    port: 8080,
    database: {
        host: 'localhost',
        port: 27017,
        dbname: 'blog',
        //username: 'quydx',
        //password: 'Gbmktzqh1@'
    },
    dir: {
        root: __dirname.replace('config', ''),
        app: __dirname.replace('config', '')+'app/',
        controller: __dirname.replace('config', '')+'app/controller/',
        model: __dirname.replace('config', '')+'app/model/',
        router: __dirname.replace('config', '')+'app/routes/',
        resources: __dirname.replace('config', '')+'resources/'
    }
};
