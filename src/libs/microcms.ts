import { createClient } from "microcms-js-sdk";
import { Work } from "@/types/work";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getWorks = async (): Promise<Work[]> => {
    try {
        const data = await client.get({
            endpoint: "works",
            queries: { orders: "-publishedAt" },
        });
        return data.contents;
    } catch (error) {
        console.error("Failed to fetch works:", error);
        return [];
    }
};

export const getWorkDetail = async (id: string): Promise<Work | undefined> => {
    try {
        const data = await client.get({
            endpoint: "works",
            contentId: id,
        });
        return data;
    } catch (error) {
        console.error(`Failed to fetch work detail for id ${id}:`, error);
        return undefined;
    }
};
