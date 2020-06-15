import { StreamOptions } from "morgan";
import { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import express from 'express';
export default function MorganLogger(app: express.Application, enabled: string | undefined): any {
    if ( Boolean(enabled)) {
        app.use(morgan("dev"));
    }
}