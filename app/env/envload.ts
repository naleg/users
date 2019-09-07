import { resolve } from "path"
const dotenv = require('dotenv');
dotenv.config({ path: resolve(__dirname, "../../.env") });

export const port = process.env.PORT;