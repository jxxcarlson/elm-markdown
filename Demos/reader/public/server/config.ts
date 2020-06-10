
const env = Deno.env.toObject();

export const DOCS = env.DOCS || "./data"

export const MANIFEST = DOCS + '/manifest.yaml'

