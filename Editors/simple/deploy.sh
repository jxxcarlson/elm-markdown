date +'%H:%M:%S'
echo

color=`tput setaf 48`
reset=`tput setaf 7`

echo
echo "${color}Compiling ...${reset}"
elm make --optimize src/Main.elm --output=Main.js


echo "${color}Minifiying ...${reset}"
uglifyjs Main.js -mc 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9"' -o dist/Main.min.js
ls -lh dist/Main.min.js

echo "${color}Copying to github_pages/app/miniLatexLive/${reset}"
cp dist/index.html /Users/carlson/dev/github_pages/app/mathMarkdownLive/
cp dist/Main.min.js /Users/carlson/dev/github_pages/app/mathMarkdownLive/
cp assets/custom-element-config.js /Users/carlson/dev/github_pages/app/mathMarkdownLive/assets/
cp assets/math-text.js /Users/carlson/dev/github_pages/app/mathMarkdownLive/assets/

