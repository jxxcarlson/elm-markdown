date +'%H:%M:%S'
echo

color=`tput setaf 48`
reset=`tput setaf 7`



TARGET=/Users/jxxcarlson/dev/github_pages/app/mathMarkdownLive
DIST=public
SOURCE=src

elm make --optimize ${SOURCE}/Main.elm --output=${DIST}/Main.js

echo "${color}Uglifying ...${reset}"
uglifyjs  ${DIST}/Main.js --compress 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9",pure_getters=true,keep_fargs=false,unsafe_comps=true,unsafe=true,passes=2' --output=${DIST}/Main.min.js && uglifyjs ${DIST}/Main.min.js --mangle --output=${DIST}/Main.min.js

echo "${color}Copying to ~/dev/github_pages/app/mathMarkdownLive/${reset}"

sed 's/Main.js/Main.min.js/' ${DIST}/index.html > ${DIST}/index-min.html
cp ${DIST}/index-min.html ${TARGET}/index.html
cp ${DIST}/Main.min.js ${TARGET}/


cp ${DIST}/assets/custom-element-config.js ${TARGET}/assets/custom-element-config.js
cp ${DIST}/assets/math-text.js ${TARGET}/assets/math-text.js
cp ${DIST}/assets/math-text-delayed.js ${TARGET}/assets/math-text-delayed.js
cp ${DIST}/assets/style.css ${TARGET}/assets/style.css

rm ${DIST}/index-min.html

