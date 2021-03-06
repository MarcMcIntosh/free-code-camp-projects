#!/usr/bin/bash
## Read: http://acamara.es/blog/2012/12/assembling-sprite-sheets-with-imagemagick/

convert \
  styles/images/player/Hero.png[128x32+0+0] \
  +repage \
  -crop 16x16 \
  -resize 32x32 \
  styles/images/player/player.png;

PLAYER_TILES=$(ls styles/images/player/player*.png | sort -t '-' -n -k 2 | tr '\n' ' ');

FLOOR_TILES=$(ls styles/images/floor/cobble*.png | sort -t '-' -n -k 2 | tr '\n' ' ');

montage \
  $FLOOR_TILES \
  styles/images/wall/stone_brick{1,2,3,4,5,6,7,8,9,10,11,12}.png \
  styles/images/dark/dngn_unseen.png \
  styles/images/apple.png \
  styles/images/exit.png \
  styles/images/boss.png \
  styles/images/enemies/*.png \
  $PLAYER_TILES \
  styles/images/weapons/stick.png \
  styles/images/weapons/knife.png \
  styles/images/weapons/axe.png \
  styles/images/weapons/katana.png \
  styles/images/weapons/scythe.png \
  -tile 4x16 \
  -geometry 32x32+0+0 \
  -background transparent \
  styles/sprites/floors.png
