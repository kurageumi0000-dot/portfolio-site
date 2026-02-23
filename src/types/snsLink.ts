export type SNSLink = {
    id: string;
    title: string;
    name?: string; // fallback in case microCMS uses 'name'
    url: string;
    iconType?: string;
    icon?: {
        url: string;
        width: number;
        height: number;
    };
};
