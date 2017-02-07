ffmpeg -framerate 20 -pattern_type glob -i '/var/www/html/frames/*.jpg' -vcodec h264_omx -b:v 1500k /var/www/html/plantz.mp4

