import Server from "./bin/server";
import "reflect-metadata";
import { TYPES } from "../../CrossCutting/IoC/Types";
import DiContainer from '../../CrossCutting/IoC/Container';

DiContainer.get<Server>(TYPES.Server).ListenClusterMod();

