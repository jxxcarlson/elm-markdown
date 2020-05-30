module Data exposing (..)


figure =
    """
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   sodipodi:docname="drawing-2.svg"
   inkscape:version="1.0 (4035a4f, 2020-05-01)"
   id="svg1079"
   version="1.1"
   viewBox="0 0 210 297"
   height="80mm"
   width="113mm">
  <defs
     id="defs1073">
    <filter
       id="filter1149"
       style="color-interpolation-filters:sRGB;"
       inkscape:label="Brilliance">
      <feColorMatrix
         id="feColorMatrix1145"
         result="colormatrix"
         in="SourceGraphic"
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1 0.5 0.5 0.9 0 " />
      <feComposite
         id="feComposite1147"
         result="fbSourceGraphic"
         operator="in"
         in2="SourceGraphic"
         in="colormatrix" />
      <feColorMatrix
         id="feColorMatrix2128"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         in="fbSourceGraphic"
         result="fbSourceGraphicAlpha" />
      <feColorMatrix
         in="fbSourceGraphic"
         values="2 -0.5 -0.5 0 0.3 -0.5 2 -0.5 0 0.3 -0.5 -0.5 2 0 0.3 0 0 0 1 0 "
         id="feColorMatrix2130" />
    </filter>
    <filter
       inkscape:label="Channel Transparency"
       style="color-interpolation-filters:sRGB"
       id="filter1149-3">
      <feColorMatrix
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1 0.5 0.5 0.9 0 "
         in="SourceGraphic"
         result="colormatrix"
         id="feColorMatrix1145-6" />
      <feComposite
         in="colormatrix"
         in2="SourceGraphic"
         operator="in"
         result="composite1"
         id="feComposite1147-3" />
    </filter>
    <filter
       id="filter1149-3-8"
       style="color-interpolation-filters:sRGB"
       inkscape:label="Channel Transparency">
      <feColorMatrix
         id="feColorMatrix1145-6-4"
         result="colormatrix"
         in="SourceGraphic"
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1 0.5 0.5 0.9 0 " />
      <feComposite
         id="feComposite1147-3-0"
         result="composite1"
         operator="in"
         in2="SourceGraphic"
         in="colormatrix" />
    </filter>
    <filter
       inkscape:label="Channel Transparency"
       style="color-interpolation-filters:sRGB"
       id="filter1149-3-8-6">
      <feColorMatrix
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1 0.5 0.5 0.9 0 "
         in="SourceGraphic"
         result="colormatrix"
         id="feColorMatrix1145-6-4-4" />
      <feComposite
         in="colormatrix"
         in2="SourceGraphic"
         operator="in"
         result="composite1"
         id="feComposite1147-3-0-6" />
    </filter>
    <filter
       id="filter1149-3-8-6-3"
       style="color-interpolation-filters:sRGB;"
       inkscape:label="Brilliance">
      <feColorMatrix
         id="feColorMatrix1145-6-4-4-8"
         result="colormatrix"
         in="SourceGraphic"
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1 0.5 0.5 0.9 0 " />
      <feComposite
         id="feComposite1147-3-0-6-4"
         result="fbSourceGraphic"
         operator="in"
         in2="SourceGraphic"
         in="colormatrix" />
      <feColorMatrix
         id="feColorMatrix2152"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         in="fbSourceGraphic"
         result="fbSourceGraphicAlpha" />
      <feColorMatrix
         in="fbSourceGraphic"
         values="2 -0.5 -0.5 0 0.8 -0.5 2 -0.5 0 0.8 -0.5 -0.5 2 0 0.8 0 0 0 1 0 "
         id="feColorMatrix2154" />
    </filter>
    <filter
       inkscape:label="Channel Transparency"
       style="color-interpolation-filters:sRGB"
       id="filter1149-3-8-6-3-0">
      <feColorMatrix
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1 0.5 0.5 0.9 0 "
         in="SourceGraphic"
         result="colormatrix"
         id="feColorMatrix1145-6-4-4-8-9" />
      <feComposite
         in="colormatrix"
         in2="SourceGraphic"
         operator="in"
         result="composite1"
         id="feComposite1147-3-0-6-4-3" />
    </filter>
    <filter
       id="filter1905"
       inkscape:label="Solarize"
       style="color-interpolation-filters:sRGB;">
      <feColorMatrix
         id="feColorMatrix1893"
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 1 " />
      <feColorMatrix
         id="feColorMatrix1895"
         result="colormatrix2"
         values="12"
         type="hueRotate" />
      <feColorMatrix
         id="feColorMatrix1897"
         result="colormatrix3"
         values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0 "
         in="colormatrix2" />
      <feBlend
         id="feBlend1899"
         result="blend1"
         mode="darken"
         in2="colormatrix2"
         in="colormatrix3" />
      <feBlend
         id="feBlend1901"
         result="blend2"
         mode="screen"
         in2="blend1" />
      <feComposite
         result="fbSourceGraphic"
         id="feComposite1903"
         operator="in"
         in2="SourceGraphic" />
      <feColorMatrix
         id="feColorMatrix2033"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         in="fbSourceGraphic"
         result="fbSourceGraphicAlpha" />
      <feColorMatrix
         in="fbSourceGraphic"
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 1 "
         id="feColorMatrix2035" />
      <feColorMatrix
         result="colormatrix2"
         values="37"
         type="hueRotate"
         id="feColorMatrix2037" />
      <feColorMatrix
         result="colormatrix3"
         values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0 "
         in="colormatrix2"
         id="feColorMatrix2039" />
      <feBlend
         result="blend1"
         mode="darken"
         in="colormatrix3"
         id="feBlend2041"
         in2="colormatrix2" />
      <feBlend
         result="blend2"
         mode="screen"
         id="feBlend2043"
         in2="blend1" />
      <feComposite
         operator="in"
         id="feComposite2045"
         in2="fbSourceGraphic" />
    </filter>
    <filter
       id="filter1919"
       inkscape:label="Solarize"
       style="color-interpolation-filters:sRGB;">
      <feColorMatrix
         id="feColorMatrix1907"
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 1 " />
      <feColorMatrix
         id="feColorMatrix1909"
         result="colormatrix2"
         values="12"
         type="hueRotate" />
      <feColorMatrix
         id="feColorMatrix1911"
         result="colormatrix3"
         values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0 "
         in="colormatrix2" />
      <feBlend
         id="feBlend1913"
         result="blend1"
         mode="darken"
         in2="colormatrix2"
         in="colormatrix3" />
      <feBlend
         id="feBlend1915"
         result="blend2"
         mode="screen"
         in2="blend1" />
      <feComposite
         result="fbSourceGraphic"
         id="feComposite1917"
         operator="in"
         in2="SourceGraphic" />
      <feColorMatrix
         id="feColorMatrix1935"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         in="fbSourceGraphic"
         result="fbSourceGraphicAlpha" />
      <feColorMatrix
         in="fbSourceGraphic"
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 1 "
         id="feColorMatrix1937" />
      <feColorMatrix
         result="colormatrix2"
         values="29"
         type="hueRotate"
         id="feColorMatrix1939" />
      <feColorMatrix
         result="colormatrix3"
         values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0 "
         in="colormatrix2"
         id="feColorMatrix1941" />
      <feBlend
         result="blend1"
         mode="darken"
         in="colormatrix3"
         id="feBlend1943"
         in2="colormatrix2" />
      <feBlend
         result="blend2"
         mode="screen"
         id="feBlend1945"
         in2="blend1" />
      <feComposite
         operator="in"
         id="feComposite1947"
         in2="fbSourceGraphic" />
    </filter>
    <filter
       style="color-interpolation-filters:sRGB"
       inkscape:label="Solarize"
       id="filter1919-7">
      <feColorMatrix
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 1 "
         id="feColorMatrix1907-2" />
      <feColorMatrix
         type="hueRotate"
         values="12"
         result="colormatrix2"
         id="feColorMatrix1909-9" />
      <feColorMatrix
         in="colormatrix2"
         values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0 "
         result="colormatrix3"
         id="feColorMatrix1911-7" />
      <feBlend
         in="colormatrix3"
         in2="colormatrix2"
         mode="darken"
         result="blend1"
         id="feBlend1913-5" />
      <feBlend
         in2="blend1"
         mode="screen"
         result="blend2"
         id="feBlend1915-6" />
      <feComposite
         in2="SourceGraphic"
         operator="in"
         id="feComposite1917-5"
         result="fbSourceGraphic" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix1935-3" />
      <feColorMatrix
         id="feColorMatrix1937-0"
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 1 "
         in="fbSourceGraphic" />
      <feColorMatrix
         id="feColorMatrix1939-4"
         type="hueRotate"
         values="29"
         result="colormatrix2" />
      <feColorMatrix
         id="feColorMatrix1941-8"
         in="colormatrix2"
         values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0 "
         result="colormatrix3" />
      <feBlend
         in2="colormatrix2"
         id="feBlend1943-5"
         in="colormatrix3"
         mode="darken"
         result="blend1" />
      <feBlend
         in2="blend1"
         id="feBlend1945-5"
         mode="screen"
         result="blend2" />
      <feComposite
         in2="fbSourceGraphic"
         id="feComposite1947-5"
         operator="in" />
    </filter>
    <filter
       inkscape:label="Brilliance"
       style="color-interpolation-filters:sRGB"
       id="filter1149-2">
      <feColorMatrix
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1 0.5 0.5 0.9 0 "
         in="SourceGraphic"
         result="colormatrix"
         id="feColorMatrix1145-1" />
      <feComposite
         in="colormatrix"
         in2="SourceGraphic"
         operator="in"
         result="fbSourceGraphic"
         id="feComposite1147-9" />
      <feColorMatrix
         result="fbSourceGraphicAlpha"
         in="fbSourceGraphic"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         id="feColorMatrix2128-2" />
      <feColorMatrix
         id="feColorMatrix2130-4"
         values="2 -0.5 -0.5 0 0.3 -0.5 2 -0.5 0 0.3 -0.5 -0.5 2 0 0.3 0 0 0 1 0 "
         in="fbSourceGraphic" />
    </filter>
    <filter
       id="filter1149-2-2"
       style="color-interpolation-filters:sRGB"
       inkscape:label="Brilliance">
      <feColorMatrix
         id="feColorMatrix1145-1-5"
         result="colormatrix"
         in="SourceGraphic"
         values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1 0.5 0.5 0.9 0 " />
      <feComposite
         id="feComposite1147-9-1"
         result="fbSourceGraphic"
         operator="in"
         in2="SourceGraphic"
         in="colormatrix" />
      <feColorMatrix
         id="feColorMatrix2128-2-3"
         values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
         in="fbSourceGraphic"
         result="fbSourceGraphicAlpha" />
      <feColorMatrix
         in="fbSourceGraphic"
         values="2 -0.5 -0.5 0 0.3 -0.5 2 -0.5 0 0.3 -0.5 -0.5 2 0 0.3 0 0 0 1 0 "
         id="feColorMatrix2130-4-9" />
    </filter>
  </defs>
  <sodipodi:namedview
     inkscape:window-maximized="0"
     inkscape:window-y="23"
     inkscape:window-x="0"
     inkscape:window-height="755"
     inkscape:window-width="1252"
     showgrid="false"
     inkscape:document-rotation="0"
     inkscape:current-layer="layer1"
     inkscape:document-units="mm"
     inkscape:cy="609.76231"
     inkscape:cx="824.78572"
     inkscape:zoom="0.38431093"
     inkscape:pageshadow="2"
     inkscape:pageopacity="0.0"
     borderopacity="1.0"
     bordercolor="#666666"
     pagecolor="#ffffff"
     id="base" />
  <metadata
     id="metadata1076">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     id="layer1"
     inkscape:groupmode="layer"
     inkscape:label="Layer 1">
    <ellipse
       transform="matrix(0.63471256,0,0,0.57226425,52.221642,122.79635)"
       style="fill:#ff5293;stroke-width:0.264583;filter:url(#filter1149-3-8-6)"
       id="path1113-0-4-4"
       cx="90.188477"
       cy="53.700008"
       rx="40.892532"
       ry="42.839794" />
    <rect
       ry="0"
       y="5.3862162"
       x="41.307697"
       height="208.72534"
       width="23.407696"
       id="rect1096"
       style="fill:#448ce8;stroke-width:0.29966;filter:url(#filter1905)" />
    <rect
       style="fill:#448ce8;stroke-width:0.174486;filter:url(#filter1919)"
       id="rect1096-8"
       width="125.6252"
       height="13.186166"
       x="40.638298"
       y="138.96385"
       ry="0" />
    <ellipse
       ry="42.839794"
       rx="40.892532"
       cy="116.77118"
       cx="69.909966"
       id="path1113"
       style="fill:#ffb2bc;stroke-width:0.264583;filter:url(#filter1149)" />
    <ellipse
       ry="42.839794"
       rx="40.892532"
       cy="53.700008"
       cx="90.188477"
       id="path1113-0-4-4-0"
       style="fill:#ff5293;stroke-width:0.264583;filter:url(#filter1149-3-8-6-3)"
       transform="matrix(0.47356784,0,0,0.42476078,62.968499,154.12498)" />
    <ellipse
       transform="matrix(0.47356784,0,0,0.42476079,104.62043,167.89421)"
       style="fill:#ff5293;stroke-width:0.264583;filter:url(#filter1149-3-8-6-3-0)"
       id="path1113-0-4-4-0-7"
       cx="90.188477"
       cy="53.700008"
       rx="40.892532"
       ry="42.839794" />
    <rect
       transform="matrix(1.0229189,0,0,0.35014296,-2.9228019,138.98811)"
       ry="0"
       y="200.92538"
       x="64.715393"
       height="13.186166"
       width="125.6252"
       id="rect1096-8-4"
       style="fill:#448ce8;stroke-width:0.174486;filter:url(#filter1919-7)" />
    <ellipse
       transform="matrix(0.78637789,0,0,0.74198699,9.6714824,18.318168)"
       style="fill:#ffb2bc;stroke-width:0.264583;filter:url(#filter1149-2)"
       id="path1113-5"
       cx="98.450012"
       cy="73.66539"
       rx="40.892532"
       ry="42.839794" />
    <ellipse
       ry="42.839794"
       rx="40.892532"
       cy="73.66539"
       cx="98.450012"
       id="path1113-5-7"
       style="fill:#ffb2bc;stroke-width:0.264583;filter:url(#filter1149-2-2)"
       transform="matrix(0.55086729,0,0,0.49198173,65.559433,19.179135)" />
  </g>
</svg>
"""


entities =
    """
>> &bbA;   &bbB; &bbC; &bbD; &bbE; &bbF;
&bbG; &bbH; &bbI; &bbJ; &bbK; &bbL; &bbM;
&bbN; &bbO; &bbP; &bbQ; &bbR; &bbS; &bbT;
&bbU; &bbV; &bbW; &bbX; &bbY; &bbZ;

>> &caA;   &caB; &caC; &caD; &caE; &caF;
&caG; &caH; &caI; &caJ; &caK; &caL; &caM;
&caN; &caO; &caP; &caQ; &caR; &caS; &caT;
&caU; &caV; &caW; &caX; &caY; &caZ;

>> &in; &notin; &sub; &nsub; &sup; &nsup;
&equiv; &nequiv; &not; &or; &and;
&forall; &exist; &nexist; &cup; &cap;

>> &rArr; &rarr; &lArr; &larr; &hArr; &harr;
&tilde; &excl; &middot; &amp; &def;

>> &oplus; &top; &bot; &vdash; &vDash; &down; &up;
&nor; &nand; &dagger; &boolzero; &boolone; &empty;
    """
