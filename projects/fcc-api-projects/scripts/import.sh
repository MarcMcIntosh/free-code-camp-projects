#!/usr/bin/bash

_TMP='tmp'
_ACC='https://github.com/MarcMcIntosh'
_SRC=('file-size-api' 'imagesearch-api' 'little-url-api' 'timestamp-api' 'whoami-api')
#_SRC=('file-size-api')
_CWD=$PWD
_DST='fcc-api-projects'

if [ -d $_DST ]; then rm -rf $_DST; fi

git clone "https://git.marcmcintosh.ninja/$_DST";

for repo in ${_SRC[@]};
do
  [ -d $repo ] && rm -rf $repo;
  git clone $_ACC/$repo;
  pushd $repo 2>&1 1>/dev/null;
  mkdir -p src/$repo;
  git mv -k * src/$repo;
  [ -f .gitignore ] && git mv .gitignore src/$repo;
  git commit -m "Prepairing to merge $repo from $_ACC/$repo to https://git.marcmcintosh.ninja/$_DST";
  pushd +1 2>&1 1>/dev/null;
  pushd $_DST 2>&1 1>/dev/null;
  _RDIR=$(dirs -l +2);
  echo "running remote add $repo $_RDIR";
  git remote add $repo $_RDIR;
  git checkout master;
  git pull --no-edit --allow-unrelated-histories $repo master;
  git add -A;
  git commit -m "Pull $repo in to $_DST";
  git remote rm $repo;
  pushd +1 2>&1 1>/dev/null;
  dirs -c;
  rm -rf $repo;
done
