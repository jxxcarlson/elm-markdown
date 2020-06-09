// https://dev.to/kryz/write-a-small-api-using-deno-1cl0
// DINOSAUR: https://dev.to/nickolasbenakis/create-a-simple-rest-api-with-deno-and-oak-framework-2fna
// CORS: https://github.com/tajpouria/cors


import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import {Document} from "./document.ts";
import {getDocuments} from "./handlers/getDocuments.ts"
import {getDocument} from "./handlers/getDocument.ts"
import { oakCors } from "https://deno.land/x/cors/mod.ts";
//
import { DOCS, MANIFEST } from "./config.ts"


// WEB SERVER

const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || "localhost";

const router = new Router();

router
  .get("/api/documents", getDocuments)
  .get("/api/document/:fileName", getDocument)

const app = new Application();

app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);
console.log(`Files stored in ${DOCS}`);
console.log(`Manifest: ${MANIFEST}`);

await app.listen(`${HOST}:${PORT}`);
