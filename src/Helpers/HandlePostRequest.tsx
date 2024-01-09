import axios from "axios";

export const HandlePostRequest = async (url:string,data:any) => {
    console.log(data);
        try{
            const response = await axios.post(url,data,{headers:{'Content-Type': 'application/json'}});
            return response;
          
        }catch(err){
            throw new Error("Server error :" +err);
        }
     
}
 
