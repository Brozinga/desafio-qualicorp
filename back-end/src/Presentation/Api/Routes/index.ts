import { Router } from "express";

import { CLIENT, CLIENT_BY_ID, CLIENTS } from '../Constants/routes';

import ClientController from "../Controllers/ClientsController";
import {  inject, injectable } from "inversify";
import { TYPES } from "../../../CrossCutting/IoC/Types";

@injectable()
export default class Routes {
  
  private controller: ClientController;
  
  private routes: Router;

  constructor(@inject(TYPES.ClientController) controller: ClientController) {
    this.controller = controller;
    this.routes = Router();
    this.LoadingDocumentationRoute();
    this.loadingRoutes();
  }

  private LoadingDocumentationRoute() {
    this.routes.get(`/`, (req, res, next) => {
      process.env.NODE_ENV === "development"
        ? res.redirect(`${process.env.DOC_VERSION}/api-docs`)
        : res.json({ status: 200, error: false, message: "API is Running!" });
    })
  }

  private loadingRoutes() {
    this.routes.get(CLIENTS, this.controller.GetAll);
    this.routes.get(CLIENT_BY_ID, this.controller.GetById);
    this.routes.post(CLIENT, this.controller.Post);
    this.routes.put(CLIENT_BY_ID, this.controller.Put);
    this.routes.delete(CLIENT_BY_ID, this.controller.Delete);
  }

  public returnRoutes() {
    return this.routes;
  }
}