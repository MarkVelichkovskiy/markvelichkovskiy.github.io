import BaseComponent from "../../../base/BaseComponent";

export default class VisitCardActions extends BaseComponent {
    constructor(visit) {
        super({
            elem: 'div',
            className: 'card-action'
        });
        this.moreBtn = new BaseComponent({
            elem: 'a',
            className: 'teal-text',
            textContent: 'Показать',
            onclick: () => {
                this.moreBtn.element.textContent = visit.toggle() ? 'Показать' : 'Скрыть'
            }
        })
        this.editBtn = new BaseComponent({
            elem: 'a',
            className: 'dropdown-trigger teal-text',
            textContent: 'Редактировать',
            dataset: {
                target: `actions-dropdown-${visit.id}`
            }
        })
        this.dropDown = new BaseComponent({
            elem: 'ul',
            id: `actions-dropdown-${visit.id}`,
            className: 'dropdown-content'
        }).with(
            new BaseComponent({elem: 'li'})
                .with(new BaseComponent({
                    elem: 'a',
                    className: 'teal-text',
                    textContent: 'Редактировать',
                    onclick: () => visit.edit(true)
                })),
            new BaseComponent({elem: 'li'})
                .with(new BaseComponent({
                    elem: 'a',
                    className: 'teal-text',
                    textContent: 'Удалить',
                    onclick: () => visit.delete()
                }))
        )
        this.append(
            this.moreBtn,
            this.editBtn,
            this.dropDown
        )
    }
}
