#!/usr/bin/bash
## Read: http://acamara.es/blog/2012/12/assembling-sprite-sheets-with-imagemagick/
montage styles/images/torch[0-4].png \
  -tile 5x1 \
  -geometry 32x32+0+0 \
  -background transparent \
  styles/sprites/torch.png
