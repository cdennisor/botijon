import { telegram_api, telegram_token } from "../utils/config";

export async function sendToTelegram(chatID, message) {
    return fetch(`${telegram_api}/sendMessage`,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({chat_id:chatID,text:message}),
    });
}