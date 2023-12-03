import { writable } from "svelte/store";

import supabase from "./supabase";

type Email = string;

const userStore = writable();

supabase.auth.getSession().then(({ data }) => {
    userStore.set(data.session?.user)
    console.log(data.session?.user);
});

supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_IN" && session) {
        userStore.set(session.user);
    } else if (event == "SIGNED_OUT") {
        userStore.set(null);
    }
});


const handleUsers = {
    get user() {
        return userStore;
    },
    /**
     * @param {any} email
     */

    signIn(email: Email) {
        return supabase.auth.signInWithOtp({ email }).then((data) => console.log(data));
    },
    signOut() {
        return supabase.auth.signOut();
    }
}
export const mountUser = () => supabase.auth.getSession().then(({ data }) => {
    handleUsers.user.set(data.session?.user);
});

export default handleUsers

