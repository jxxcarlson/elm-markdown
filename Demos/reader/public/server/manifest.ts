import {Document} from "./document.ts";
import { load, safeDump } from 'https://deno.land/x/js_yaml_port/js-yaml.js'
import {MANIFEST} from './config.ts'

export const getManifest = async (): Promise<Document[]> => {
  const data = await Deno.readFile(MANIFEST);

  const decoder = new TextDecoder();
  const decodedData = decoder.decode(data);

  return load(decodedData);
};

export var manifest = await getManifest();

console.log("MANIFEST", manifest)
