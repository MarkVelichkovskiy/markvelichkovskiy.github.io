import BaseComponent from "../base/BaseComponent";
import M from 'materialize-css/dist/js/materialize'

class EmptyContainerMsg extends BaseComponent {
    constructor() {
        super({
            elem: 'p',
            className: 'center-align hide',
            textContent: 'No items have been added'}
            )
    }

    show() {
        this.removeClass('hide')
    }

    hide() {
        this.addClass('hide')
    }
}

class Cards extends BaseComponent {
    constructor() {
        super({
            elem: 'div',
            className: 'cards'
        });
    }

    update(items) {
        items.forEach(item => {
            this.append(item)
            M.Dropdown.init(item.element.querySelectorAll('.dropdown-trigger'), {constrainWidth: false})
        })
    }

    clear() {
        const childElements = [...this.element.children]
        childElements.forEach(el => el.remove())
    }
}

export default class CardsContainer extends BaseComponent {
    constructor() {
        super({
            elem: 'div',
            className: 'cards-container'
        });
        this.emptyContainerMgs = new EmptyContainerMsg()
        this.cards = new Cards()
        this.items = []
    }

    add(...cards) {
        cards.forEach(c => {
            c.container = this
            this.items.push(c)
        })
        this.refreshView()
    }

    update(...cards) {
        this.items = cards
        this.refreshView()
    }

    remove(...cards) {
        this.items = this.items.filter(item => !cards.includes(item))
        this.refreshView()
    }

    refreshView() {
        this.cards.clear()
        this.cards.update(this.items)
        if (this.items.length === 0) {
            this.emptyContainerMgs.show()
        } else {
            this.emptyContainerMgs.hide()
        }
    }

    render() {
        this.append(
            this.emptyContainerMgs,
            this.cards
        )
        return this.element
    }
}