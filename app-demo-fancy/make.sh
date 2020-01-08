#!/bin/bash

case $1 in
-d)
  elm make --debug src/Main.elm --output=Main.js
  ;;
*)
  elm make --optimize src/Main.elm --output=Main.js
esac
