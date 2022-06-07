import type { Article } from './types';

// export async function getAllArticlesTS(uri: string): Promise<Article[]>{

export async function getAllArticlesTS() {
    
    const uri: string = `https://${process.env.firebase_url}`;
    const response = await fetch(uri);
    const data = await response.json();

    const articles = [];

    for (const key in data) {
        articles.push({
            id: key,
            ...data[key]
        });
    };

    return articles;
};

