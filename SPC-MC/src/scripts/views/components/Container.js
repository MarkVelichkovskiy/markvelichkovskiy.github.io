import BaseComponent from "../base/BaseComponent";

export default class Container extends BaseComponent {
    constructor() {
        super({
            elem: 'div',
            className: 'container'
        })
    }
}