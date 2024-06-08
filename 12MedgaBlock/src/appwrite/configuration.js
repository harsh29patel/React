import { Client,ID , Databases , Storage, Query } from "appwrite";
import conf from "../config/conf";

export class  Service{
client = new Client
databases;
bucket;

constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId); // get method from appwrite docs in website
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client)
}
}


 const service = new Service()
export default service