import {createElement} from '../framework/render.js';

function createTaskComponentTemplate() {
    return `<div class="task">
    <div class="task__wrapper">
      <div class="task__text">Пример задачи</div>
      <button class="task__delete" type="button">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L13 13M13 1L1 13" stroke-width="2"/>
        </svg>
      </button>
    </div>
  </div>`;
}

export default class TaskComponent {
    getTemplate() {
        return createTaskComponentTemplate();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}