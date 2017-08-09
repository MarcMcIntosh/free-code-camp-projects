#!/usr/bin/bash

SRC_PKGS=(
'fcc-api-projects'
'fcc-dv-data-globe'
'fcc-dv-force-directed'
'fcc-dv-heat-map'
'fcc-dv-scatterplot-graph'
'fcc-dv-bar-chart'
'fcc-dv-dungeon-crawler'
'fcc-dv-game-of-life'
'mdc-range-slider'
'fcc-dv-recipe-box'
'fcc-dv-leaderboard'
#'fcc-dv-markdown-previewer'
)
SRC_URL="https://git.marcmcintosh.ninja/";
TMP_DIR='.tmp';
DST_DIR='projects';

if [ -d $TMP_DIR ]; then
  echo "removing old $TMP_DIR";
  rm -rf $TMP_DIR;
  echo "creating new $TMP_DIR";
  mkdir $TMP_DIR;
else 
  echo "creating $TMP_DIR";
  mkdir $TMP_DIR;
fi

if [ ! -d $DST_DIR ]; then
  mkdir $DST_DIR;
fi

echo "$TMP_DIR created";

for repo in ${SRC_PKGS[1]};
do
  [ -d $TMP_DIR/$repo ] && rm -rf $TMP_DIR/$repo;
  git clone $SRC_URL/$repo $TMP_DIR/$repo;
  pushd $TMP_DIR/$repo 2>&1 1>/dev/null;
  mkdir -p $DST_DIR/$repo;
  git mv -k *  $DST_DIR/$repo;
  if [ -f .gitignore ]; then
    mv .gitignore $DST_DIR/$repo;
  fi
  git commit -am "Prepairing to merge $repo";
  pushd +1 2>&1 1>/dev/null;
  echo $( dirs -l );
done
#for repo in ${_SRC[@]};
#do
#  [ -d $repo ] && rm -rf $repo;
#  git clone $_ACC/$repo;
#  pushd $repo 2>&1 1>/dev/null;
#  mkdir -p src/$repo;
#  git mv -k * src/$repo;
#  [ -f .gitignore ] && git mv .gitignore src/$repo;
#  git commit -m "Prepairing to merge $repo from $_ACC/$repo to https://git.marcmcintosh.ninja/$_DST";
#  pushd +1 2>&1 1>/dev/null;
#  pushd $_DST 2>&1 1>/dev/null;
#  _RDIR=$(dirs -l +2);
#  echo "running remote add $repo $_RDIR";
#  git remote add $repo $_RDIR;
#  git checkout master;
#  git pull --no-edit --allow-unrelated-histories $repo master;
#  git add -A;
#  git commit -m "Pull $repo in to $_DST";
#  git remote rm $repo;
#  pushd +1 2>&1 1>/dev/null;
#  dirs -c;
#  rm -rf $repo;
#done

