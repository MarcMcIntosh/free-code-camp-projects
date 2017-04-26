#!/bin/bash

if [ ! -d up ]; then
  mkdir up;
  convert Hero.png[16x16+0+0] -resize 32x32 up/0.png;
  convert Hero.png[16x16+16+0] -resize 32x32 up/1.png;
  convert Hero.png[16x16+32+0] -resize 32x32 up/2.png;
  convert Hero.png[16x16+48+0] -resize 32x32 up/3.png;
fi

if [ ! -d down ]; then
  mkdir down;
  convert Hero.png[16x16+64+0] -resize 32x32 down/0.png;
  convert Hero.png[16x16+80+0] -resize 32x32 down/1.png;
  convert Hero.png[16x16+96+0] -resize 32x32 down/2.png;
  convert Hero.png[16x16+112+0] -resize 32x32 down/3.png;
fi

if [ ! -d left ]; then
  mkdir left;
  convert Hero.png[16x16+0+16] -resize 32x32 left/0.png;
  convert Hero.png[16x16+16+16] -resize 32x32 left/1.png;
  convert Hero.png[16x16+32+16] -resize 32x32 left/2.png;
  convert Hero.png[16x16+48+16] -resize 32x32 left/3.png;
fi

if [ ! -d right ]; then
  mkdir right;
  convert Hero.png[16x16+64+16] -resize 32x32 right/0.png;
  convert Hero.png[16x16+80+16] -resize 32x32 right/1.png;
  convert Hero.png[16x16+96+16] -resize 32x32 right/2.png;
  convert Hero.png[16x16+112+16] -resize 32x32 right/3.png;
fi


