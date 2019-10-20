
elm make --optimize src/Main.elm --output=Main.js
uglifyjs Main.js --compress "pure_funcs=[F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9],pure_getters,keep_fargs=false,unsafe_comps,unsafe" | uglifyjs --mangle --output=Main.min.js
scp index-remote.html  root@138.197.81.6:/var/www/markdown.minilatex.app/html/index.html
scp Main.min.js  root@138.197.81.6:/var/www/markdown.minilatex.app/html/

scp assets/code-editor.js root@138.197.81.6:/var/www/markdown.minilatex.app/html/assets/
scp assets/custom-element-config.js root@138.197.81.6:/var/www/markdown.minilatex.app/html/assets/
scp assets/math-text.js root@138.197.81.6:/var/www/markdown.minilatex.app/html/assets/
scp assets/style.css root@138.197.81.6:/var/www/markdown.minilatex.app/html/assets/

scp lib/codemirror.css root@138.197.81.6:/var/www/markdown.minilatex.app/html/lib/
scp lib/codemirror.js root@138.197.81.6:/var/www/markdown.minilatex.app/html/lib/
