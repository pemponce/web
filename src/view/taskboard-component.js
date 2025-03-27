import {createElement, render} from '../framework/render.js';
import TaskListComponent from './task-list-component.js';

export default class TaskBoardComponent {
    getTemplate() {
        return `<section class="taskboard">
            <div class="taskboard__wrapper"></div>
        </section>`;
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
            const wrapper = this.element.querySelector('.taskboard__wrapper');

            // Render 4 task lists
            render(new TaskListComponent(), wrapper);
            render(new TaskListComponent(), wrapper);
            render(new TaskListComponent(), wrapper);
            render(new TaskListComponent(), wrapper);
        }
        return this.element;
    }
}