const apiKey = '0f1e3ae41aac47b1a0f8357b201a5023';
const newsContainer = document.getElementById('news-container');

async function getNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function displayNews(articles) {
    newsContainer.innerHTML = articles.map(article => createNewsCard(article)).join('');
}

function createNewsCard(article) {
    return `
        <div class="news-card">
            <img src="${article.urlToImage || 'https://via.placeholder.com/300'}" alt="${article.title}">
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        </div>
    `;
}

// Fetch and display news on page load
getNews();
