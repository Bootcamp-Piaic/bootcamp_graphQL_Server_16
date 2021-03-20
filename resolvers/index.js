let crypto=require('crypto');
let localData={}
const resolver ={
// here we can configure our REST APIS so that data will get,put,post,delete
    
    Query:{
        getMessage:()=>{
            return {message:"oops this is a message"}
        },
        getName:()=>{
            return "Awais Mansha"
        },
        getAllMessages:()=>{
            return [
                {message:"test",id:"123"},
                {message:"test",id:"456"},
                {message:"test",id:"789"}
            ]
        }
    },
    Mutation:{
        createMessage:(_ ,{messageIS})=>{
            console.log(messageIS.message)
            let m = messageIS.message;
            let id = crypto.randomBytes(10).toString('hex');
          //  localData[id]={id,...messageIS.message}
            localData[id]={id,m}
            console.log("Data is",localData);
            return {id,...messageIS}
            }
    }
}

module.exports = resolver