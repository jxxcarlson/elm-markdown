
elm make --optimize Main.elm --output=Main.js
scp index.html  root@138.197.81.6:/var/www/markdown.minilatex.app/html/
scp Main.js  root@138.197.81.6:/var/www/markdown.minilatex.app/html/
