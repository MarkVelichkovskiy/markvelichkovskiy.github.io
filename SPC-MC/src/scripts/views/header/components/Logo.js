import BaseComponent from "../../base/BaseComponent";

export default class Logo extends BaseComponent {
    constructor(textContent) {
        super({
            elem: 'a',
            className: 'brand-logo',
            href: './',
            textContent
        })
    }
}