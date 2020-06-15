import { driver, auth, Driver, Session } from "neo4j-driver";
import "../../Environment";
import { injectable } from "inversify";

@injectable()
export default class DatabaseContext {

   private protocol?: string;
   private host?: string;
   private port?: string;
   private user: string;
   private password: string;

   private driver!: Driver;
   private session!: Session;

   constructor() {
      this.protocol = process.env.NEO4J_PROTOCOL;
      this.host = process.env.NEO4J_HOST;
      this.port = process.env.NEO4J_PORT;
      this.user = String(process.env.NEO4J_USERNAME);
      this.password = String(process.env.NEO4J_PASSWORD);
      this.SetDatabase();
   }

   private SetDatabase() {
      this.driver = driver(`${this.protocol}://${this.host}:${this.port}`,
         auth.basic(this.user, this.password));
   }

   public GetDatabase() {
      this.session = this.driver.session();

      return this.session;
   }

   public CloseConnection() {
      this.session.close();
   }

}