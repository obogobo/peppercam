#!/bin/bash

/usr/local/bin/ffmpeg -y -i "http://:8080/video/stream.mjpg" -r 1 -vframes 1 "/var/www/html/frames/$(date +%s).jpg" > /home/pi/capture.log 2>&1
