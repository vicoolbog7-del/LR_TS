import './sources.css';
import { NewsSource } from '../../../types';

class Sources {
    public draw(data: NewsSource[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!sourceItemTemp) return;

        data.forEach((item: NewsSource) => {
            const sourceClone: DocumentFragment = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const nameEl = sourceClone.querySelector('.source__item-name');
            if (nameEl) nameEl.textContent = item.name;

            const itemEl = sourceClone.querySelector('.source__item');
            if (itemEl) itemEl.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) sourcesContainer.append(fragment);
    }
}

export default Sources;
