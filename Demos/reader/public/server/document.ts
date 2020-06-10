

// DATA STRUCTURES

export interface Document {
  fileName: string;
}


import {DOCS} from './config.ts'


export const fetchDocument = async (doc: Document): Promise<String> => {
  const path = DOCS + '/' + doc.fileName
  console.log("path", path)
  const data = await Deno.readFile(path);

  const decoder = new TextDecoder();
  const decodedData = decoder.decode(data);

  return decodedData;
};


// const decodedData = await fetchDocument({fileName: "example1.md"})
//
// console.log(decodedData)
