date +'%H:%M:%S'
echo

elm make --optimize src/Main.elm --output=Main.js
# elm make src/Main.elm --output=Main.js
