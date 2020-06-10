date +"%H: %M:%S"

PUBLIC=/Users/carlson/dev/elm/mylibraries/elm-markdown/editors/fancy/public
REMOTE=root@138.197.81.6:/var/www


echo "Uglifying ..."
uglifyjs ${PUBLIC}/Main.js --compress "pure_funcs=[F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9],pure_getters,keep_fargs=false,unsafe_comps,unsafe" | uglifyjs --mangle --output=${PUBLIC}/Main.min.js

echo "Copying ..."
scp ${PUBLIC}/index-remote.html  ${REMOTE}/markdown.minilatex.app/html/index.html
scp ${PUBLIC}/Main.min.js  ${REMOTE}/markdown.minilatex.app/html/
scp ${PUBLIC}/assets/custom-element-config.js ${REMOTE}/markdown.minilatex.app/html/assets/
scp ${PUBLIC}/assets/math-text.js ${REMOTE}/markdown.minilatex.app/html/assets/
scp ${PUBLIC}/assets/style.css ${REMOTE}/markdown.minilatex.app/html/assets/
scp ${PUBLIC}/assets/outside.js ${REMOTE}/markdown.minilatex.app/html/assets/

