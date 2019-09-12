import { resolve } from "path"
const dotenv = require('dotenv');
dotenv.config({ path: resolve(__dirname, "../../.env") });

export const port = process.env.PORT;
export const mongourl = process.env.MONGOURL;
export const mongousr = process.env.MONGOUSR;
export const mongopass = process.env.MONGOPASS;
export const loglevel = process.env.LOGLEVEL;



