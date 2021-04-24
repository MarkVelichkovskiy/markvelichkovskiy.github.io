import BaseComponent from "../base/BaseComponent";

export default class Button extends BaseComponent {
    constructor({className, textContent, onclick}) {
        super({
            elem: 'button',
            className: className ? `waves-effect waves-light btn ${className}` : 'waves-effect waves-light btn',
            textContent,
            onclick
        });
    }
}