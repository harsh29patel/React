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


    async createPost({title,slug,content,featuredImage , status , userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
         console.log("Appwrite service :: createPost :: error",error);   
        }
    }

    async updatePost(slug,{title,content,featuredImage , status }){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error" , error);
        }
    }

    
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
            )

            return true
        } catch (error) {
    console.log("Appwrite serive :: deletePost :: error",error);
            return false
     }
    }

}


 const service = new Service()
export default service