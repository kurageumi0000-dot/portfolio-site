export type News = {
    id: string;
    title: string;
    content: string;
    category: "Important" | "Update" | "Event" | "Other";
    date: string;
    publishedAt: string;
    updatedAt: string;
};
