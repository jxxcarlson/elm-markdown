module Strings exposing (initialText)


initialText =
    """
### Operation

This Reader is designed to display
an arbitrary set of documents by
making requests to a small web server, e.g, the one defined
in `./public/server`.  The documents themselves
are stored in `./public/server/data`.  That
directory contains a file `manifest.yaml`
which lists the files served, e.g,

````
    - fileName: example1.md
    - fileName: example2.md
````

To load the contents of `example1.md` into the Reader,
the app makes this request:

````
    http://localhost:4000/api/document/example1.md
````

The two buttons at the bottom of the app give one way
of making such requests, but one can imagine
ways of doing so programmatically,
depending on the purpose at hand.
 """
