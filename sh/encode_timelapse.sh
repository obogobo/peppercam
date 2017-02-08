#!/bin/bash

/usr/local/bin/ffmpeg -framerate 20 -pattern_type glob -i '/var/www/html/frames/*.jpg' -vcodec h264_omx -b:v 1500k -y /var/www/html/tmp.mp4 |& tee -a /home/pi/encode.log
mv /var/www/html/tmp.mp4 /var/www/html/plantz.mp4
