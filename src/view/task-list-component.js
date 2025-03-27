import {createElement, render} from '../framework/render.js';
import TaskComponent from './task-component.js';

function createTaskListComponentTemplate() {
    return `<div class="taskboard__group">
    <h2 class="taskboard__group-title">Название списка</h2>
    <div class="taskboard__tasks">
      <!-- Здесь будут задачи -->
    </div>
  </div>`;
}

export default class TaskListComponent {
    getTemplate() {
        return createTaskListComponentTemplate();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
            const tasksContainer = this.element.querySelector('.taskboard__tasks');

            // Рендерим 4 задачи в каждом списке
            for (let i = 0; i < 4; i++) {
                render(new TaskComponent(), tasksContainer);
            }
        }
        return this.element;
    }

    removeElement() {
        this.element = null;
    }
}