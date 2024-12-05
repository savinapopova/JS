import {get} from "../api/request.js";
import {getUrl, render} from "../api/lib.js";

export async function getMembers() {
    try {
        let members = await get(getUrl().members);

       return members;

    } catch (e) {
        console.log(e);
        return;
    }

}
