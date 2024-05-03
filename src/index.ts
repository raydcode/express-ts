import { assignEnv } from "./config/env";
import { server } from "./server";

assignEnv();
server();