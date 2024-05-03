import { createServer } from "http";
import {env} from "./config";

import app from "./app";


export const server = () => {

  
  const server = createServer(app);

  server.listen(env.PORT, () => {
    console.log(`Server running in ${env.NODE_ENV} on port ${env.PORT}`);
  });
};