#!/bin/bash

/usr/local/bin/ffmpeg -y -i "http://:8080/video/stream.mjpg" -r 1 -vframes 1 "/var/www/html/frames/$(date +%s).jpg" |& tee -a /home/pi/snapshot.log
