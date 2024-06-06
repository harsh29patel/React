import conf from '../config/conf.js'
import {Client , Account , ID} from 'appwrite'
export  class AuthService{
    client = new Client()
    account;
                               // get method from appwrite docs in website
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);      // get method from appwrite docs in website
        this.account= new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
           const userAccount =  await this.account.create(ID.unique(),email,password,name);  // First parameter needs to be ID all parameter are lined
           if(userAccount)
            {  // call  another method
                return this.login({email,password})

            }
           else{
            return userAccount;
           }
        } catch (error) {
            console.log(error);
        }
    }

    async login({email,password}){
        try {
            await this.account.createEmailPasswordSession(email,password); // get method from appwrite docs in website
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
             return await this.account.get();
        } catch (error) {
           console.log("Appwrite service :: getCurrentUser :: error",error);       // get method from appwrite docs in website
        }

        return null;  // because if there is problem in  try catch we use return null
    }

    async logout(){
        try {
             return await this.account.deleteSessions()
        } catch (error) {                                                      // get method from appwrite docs in website
         console.log("Appwrite service :: logout :: error" , error);   
        }
    }
     
}

   

const authService = AuthService()

export default authService