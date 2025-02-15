import { sendToTelegram } from "./services/telegram";

export default{
    async fetch(request){
        if(request.method!=="POST"){
            return new Response("Este método no funciona", {status:405})
        }

        try {
            const data=await request.json();
            let platform,message,chatID;

            // if(data.message){
            //     platform="telegram";
            //     chatID=data.message.chat.id;
            //     message=data.message.text||"";
            // }else{
                platform=data.platform;
                chatID=data.chatID;
                message=data.message;
            // }

            if(platform==="telegram"){
                await sendToTelegram(chatID,message);
            }else{
                return new Response("Esta plataforma no está disponible",{status:400});
            }

            return new Response(`Mensaje enviado,${message}`,{status:200});

        } catch (error) {
            return new Response(`Algo sucedió,${error.message}`,{status:500});
        }
    }
}