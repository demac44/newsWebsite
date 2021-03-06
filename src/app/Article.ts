export interface Article {
    author: string;
    title: string;
    description: string;
    url: string;
    source: {
        name: string;
    };
    urlToImage: string;
    category: string;
    language: string;
    country: string;
    publishedAt: string;
    articles: any;
    content: string;
}