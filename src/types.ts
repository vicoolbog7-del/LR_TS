export interface NewsSource {
    id: string;
    name: string;
}

export interface NewsArticle {
    source: NewsSource;
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
}

export interface NewsResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

export interface SourcesResponse {
    status: string;
    sources: NewsSource[];
}

export type LoaderOptions = Record<string, string>;

export type Callback<T> = (data: T) => void;

export interface EndpointParams {
    endpoint: string;
    options?: LoaderOptions;
}
