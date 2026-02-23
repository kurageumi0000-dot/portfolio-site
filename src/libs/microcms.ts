import { createClient } from "microcms-js-sdk";
import { Work } from "@/types/work";
import { SNSLink } from "@/types/snsLink";
import { Commission } from "@/types/commission";
import { About } from "@/types/about";
import { News } from "@/types/news";

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

export const getWorks = async (kind?: "original" | "fanart"): Promise<Work[]> => {
    try {
        const queries: any = { orders: "-publishedAt" };
        if (kind) {
            // 複数選択（カスタムフィールド等）の場合は[contains]を使用、かつデータ側が小文字のため小文字で検索
            queries.filters = `kind[contains]${kind}`;
        }
        const data = await client.get({
            endpoint: "works",
            queries: queries,
            customRequestInit: {
                cache: "no-store",
            },
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
            customRequestInit: {
                cache: "no-store",
            },
        });
        return data;
    } catch (error) {
        console.error(`Failed to fetch work detail for id ${id}:`, error);
        return undefined;
    }
};

export const getNewsList = async (limit?: number): Promise<News[]> => {
    try {
        const queries: any = { orders: "-date" };
        if (limit) {
            queries.limit = limit;
        }
        const data = await client.get({
            endpoint: "news",
            queries: queries,
            customRequestInit: {
                cache: "no-store",
            },
        });
        return data.contents;
    } catch (error) {
        console.error("Failed to fetch news list:", error);
        return [];
    }
};

export const getNewsDetail = async (id: string): Promise<News | undefined> => {
    try {
        const data = await client.get({
            endpoint: "news",
            contentId: id,
            customRequestInit: {
                cache: "no-store",
            },
        });
        return data;
    } catch (error) {
        console.error(`Failed to fetch news detail for id ${id}:`, error);
        return undefined;
    }
};

export type FeedItem = {
    id: string;
    title: string;
    date: string;
    category: string;
    type: "work" | "news";
};

/**
 * Fetch both works and news, merge them, and sort by date
 */
export const getHybridFeed = async (limit: number = 3): Promise<FeedItem[]> => {
    try {
        const [works, news] = await Promise.all([
            getWorks(),
            getNewsList(limit * 2) // Fetch a bit more to ensure we have enough after merging
        ]);

        const workItems: FeedItem[] = works.map(work => ({
            id: work.id,
            title: work.title,
            date: work.publishedAt || work.date || "",
            category: "New Work",
            type: "work"
        }));

        const newsItems: FeedItem[] = news.map(item => ({
            id: item.id,
            title: item.title,
            date: item.date || item.publishedAt || "",
            category: item.category,
            type: "news"
        }));

        return [...workItems, ...newsItems]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, limit);
    } catch (error) {
        console.error("Failed to fetch hybrid feed:", error);
        return [];
    }
};

/**
 * Fetch links from microCMS 'links' endpoint
 */
export const getLinks = async (): Promise<SNSLink[]> => {
    try {
        const data = await client.get({
            endpoint: "links",
            queries: { orders: "publishedAt" },
            customRequestInit: {
                cache: "no-store",
            },
        });
        return data.contents;
    } catch (error) {
        console.error("Failed to fetch links:", error);
        return [];
    }
};

/**
 * Fetch commission info from microCMS 'commission' endpoint
 * リスト形式（List type）から最初の1件を取得するように修正
 */
export const getCommission = async (): Promise<Commission | undefined> => {
    try {
        const data = await client.get({
            endpoint: "commission",
            customRequestInit: {
                cache: "no-store",
            },
        });
        // データがリスト形式で届くため、contents[0] を返す
        return data.contents[0];
    } catch (error) {
        console.error("Failed to fetch commission info:", error);
        return undefined;
    }
};

/**
 * Fetch about info from microCMS 'about' endpoint (Object type)
 */
export const getAbout = async (): Promise<About | undefined> => {
    try {
        const data = await client.get({
            endpoint: "about",
            customRequestInit: {
                cache: "no-store",
            },
        });
        return data;
    } catch (error) {
        console.error("Failed to fetch about info:", error);
        return undefined;
    }
};