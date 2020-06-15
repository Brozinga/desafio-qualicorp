import { Request, Response, NextFunction  } from "express";
import "express-async-errors";
import Logger from '../../../../CrossCutting/Logger';
import ConfigureLogger from '../../../../CrossCutting/Logger/Config';

export async function GlobalErrorHandler(err: Error, req: Request, res: Response, next: NextFunction): Promise<Response> {
   
  let logger = new Logger(new ConfigureLogger());
  let response = logger.saveError(err, 500);

  return res.status(response.status).json(response);
 }
 