#!/usr/bin/bash
LIST=('wikipedia-viewer' 'tribute-page' 'tic-tac-toe' 'quote-machine' 'twitch'
'pomodoro-clock' 'local-weather' 'calculator' 'simon')
TMP_DIR='.tmp'
for d in ${LIST[@]}; do
  lerna import "$TMP_DIR/$d";
done;
