#!/usr/bin/bash
## Read: http://acamara.es/blog/2012/12/assembling-sprite-sheets-with-imagemagick/

# montage styles/images/torch/torch[0-4].png \
#  -tile 5x1 \
#  -geometry 32x32+0+0 \
#  -background transparent \
#  styles/sprites/torch.png

montage \
  styles/images/floor/cobble_blood{1,2,3,4,5,6,7,8,9,10,11,12}.png \
  styles/images/wall/stone_brick{1,2,3,4,5,6,7,8,9,10,11,12}.png \
  styles/images/dark/dngn_unseen.png \
  -tile 4x7 \
  -geometry 32x32+0+0 \
  -background transparent \
  styles/sprites/floors.png


