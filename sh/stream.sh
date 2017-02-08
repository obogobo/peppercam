#!/bin/bash

/usr/bin/cvlc --daemon --file-logging --logfile /home/pi/stream.log --no-audio v4l2:///dev/video0:chroma="MJPG":width=640:height=480:fps=10 --v4l2-fps 10 --v4l2-hflip 1 --v4l2-vflip 1 --sout '#standard{access=http{mime=multipart/x-mixed-replace;boundary=--7b3cc56e5f51db803f790dad720ed50a},mux=mpjpeg,dst=:8080/video/stream.mjpg}'
