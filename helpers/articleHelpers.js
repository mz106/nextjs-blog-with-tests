export const getAllArticles = async () => {
    const response = await fetch('https://udemy-client-side-data-default-rtdb.europe-west1.firebasedatabase.app/articles.json');
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

