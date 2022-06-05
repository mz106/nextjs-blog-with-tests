export const getAllArticles = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_FIREBASE_URI);
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

export const getAllArticlesLocal = async () => {
    const articles = [
        {
            id: 'a1',
            body: 'f;kushgushdg',
            date: '2022-03-12',
            description: 'uh;iuh;ihu',
            image: 'images/articles/article-three.jpg',
            isFeatures: false,
            title: 'my article three'
        }
    ]
    return articles
}

