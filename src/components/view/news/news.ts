import './news.css';
import { NewsArticle } from '../../../types';

class News {
    public draw(data: NewsArticle[]): void {
        const news: NewsArticle[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (!newsItemTemp) return;

        news.forEach((item: NewsArticle, idx: number) => {
            const newsClone: DocumentFragment = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) {
                const newsItem = newsClone.querySelector('.news__item');
                if (newsItem) newsItem.classList.add('alt');
            }

            const photoEl = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            if (photoEl) {
                photoEl.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            const authorEl = newsClone.querySelector('.news__meta-author');
            if (authorEl) authorEl.textContent = item.author || item.source.name;

            const dateEl = newsClone.querySelector('.news__meta-date');
            if (dateEl) {
                dateEl.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const titleEl = newsClone.querySelector('.news__description-title');
            if (titleEl) titleEl.textContent = item.title;

            const sourceEl = newsClone.querySelector('.news__description-source');
            if (sourceEl) sourceEl.textContent = item.source.name;

            const contentEl = newsClone.querySelector('.news__description-content');
            if (contentEl) contentEl.textContent = item.description;

            const linkEl = newsClone.querySelector('.news__read-more a');
            if (linkEl) linkEl.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
