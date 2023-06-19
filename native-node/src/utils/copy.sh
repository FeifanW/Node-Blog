#!/bin/sh
cd /Users/Node-Blog/native-node/logs
cp access.log $(date + %Y-%m-%d).access.log
echo "" > access.log