import path from "path";
import dotenvParseVariables from "dotenv-parse-variables";
import * as dotEnv from "dotenv";

class EnvironmentConfiguration {
  public ConvertEnvironmentItems(configurationEnvironment: string | undefined) {
    
    let environmentsLoaded: any;
    let parsed: any;

    try {

     environmentsLoaded = dotEnv.config({
        path: path.resolve(__dirname, `${configurationEnvironment}.env`)
      });

      parsed = dotenvParseVariables(environmentsLoaded.parsed);
      process.env = { ...process.env, ...parsed };
      
    } catch (error) {
      
      environmentsLoaded = dotEnv.config({
        path: path.resolve(__dirname, `development.env`)
      });

      parsed = dotenvParseVariables(environmentsLoaded.parsed);
      process.env = { ...process.env, ...parsed };

    }
  }
}

export default new EnvironmentConfiguration().ConvertEnvironmentItems(process.env.NODE_ENV);



