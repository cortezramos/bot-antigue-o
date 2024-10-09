import { getCollection, type CollectionEntry } from "astro:content";

export async function getAllInfo(filterHidden: boolean = false) {
    return await getCollection("information", ({ data }) => {
        if (import.meta.env.PROD) {
            if (filterHidden) {
                return !data.hide;
            }

            // on production: exclude draft posts by default
            return !data.draft;
        }

        return filterHidden ? !data.hide : true;
    });
}

export function getMyInformation(info: Array<CollectionEntry<"information">>) {
    return info;
}