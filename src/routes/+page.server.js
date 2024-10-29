import { fail } from "@sveltejs/kit";
import { pb } from "../lib/index.js";


export async function load() {
    const records = await pb.collection('waitlist').getFullList({
        sort: '-created',
    })

    return {
        'registered': records.length
    }
}

export const actions = {
    default: async({ request }) => {

        const formData = await request.formData()

        const email = formData.get('email') ?? ''

        const data = {
            "email": email
        };
        console.log(data)
        await pb.collection('waitlist').create(data)
        return fail(200, {success: "email has been added..."})
    }    
};