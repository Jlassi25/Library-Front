import axios from "axios";

export const HandlePostRequest = async (url,data) => {
    console.log(data);
        try{
            const response = await axios.post(url,data);
            return response;
        }catch(err){
            throw new Error("Server error :" +err);
        }
     
}
 
