import cluster from "cluster";
import { cpus } from "os";

const numberOfCpus = cpus().length;

export default function ClusterMode(callback: Function, cpusEnabled : Number = 0, enabled : boolean = false) {

    const CPUS = cpusEnabled ? cpusEnabled : numberOfCpus;

    if (enabled) {
        
        if(cluster.isMaster) {
        
            for (let i = 0; i < CPUS; i++) {
                cluster.fork();  
            }
        
        } else {
            callback(cluster.worker.id);
        }

    } else {
        callback();
    }


}