import axios from "axios";

export const HandlePostRequest = async (url,data) => {
  
        try{
            const response = await axios.post(url,data);
            return response.data;
        }catch(err){
            throw new Error("Server error :" +err);
        }
     
}
 
