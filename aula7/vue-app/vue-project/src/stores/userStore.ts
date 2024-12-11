import axios from "axios";
import { defineStore } from "pinia";
import { type User } from "@/models/User";

export const userStore = defineStore('userStore', {
    state: () => ({
        empty: true,
        users: [] as User[],
        page: 0,
        query: "",
        searchIndex: 0
    }),

    actions: {
        async fetch() {
            let url = "http://localhost:3000/user?limit=10&page=" + this.page;

            if (this.query !== "") {
                url += "&query=" + this.query
            }

            let response = await axios.get(url);
            if (response.status !== 200) {
                return;
            }

            this.users = [ ...this.users, ...response.data.users ];
            this.empty = false;
        },

        loadMore() {
            this.page++;
            this.fetch();
        },

        trySearch(query: string) {
            this.searchIndex++;
            let crrIndex = this.searchIndex;
            setTimeout(() => {
                if (crrIndex == this.searchIndex) {
                    return;
                }

                this.page = 0;
                this.empty = true;
                this.users = [];
                this.query = query;
                this.fetch();
            }, 500)
        }
    }
});