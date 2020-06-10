import {fetchDocument} from "../document.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

// Get a document by file name
export const  getDocument = async ({
  params,
  response,
}: {
  params: {
    fileName: string;
  };
  response: any;
}) => {
  const doc = {fileName: params.fileName}
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.body = await fetchDocument(doc)

  response.status = 200;
  return;
};
