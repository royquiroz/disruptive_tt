import postgres from "postgres";
import { appConfig } from "./config";

const connectionString = appConfig.db.url;
const sql = postgres(connectionString);

export default sql;
