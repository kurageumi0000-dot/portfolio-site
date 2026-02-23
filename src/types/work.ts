export type Work = {
    id: string;
    title: string;
    main_image: {
        url: string;
        width: number;
        height: number;
    };
    tools: string;
    duration: string;
    client: string;
    description: string;
    kind: string[];
    publishedAt: string;
    updatedAt: string;
};
