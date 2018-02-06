#!/bin/bash
npm install
./node_modules/bower/bin/bower update
./node_modules/gulp/bin/gulp.js build
cd build
sudo ln -s `pwd` /var/www/vi
