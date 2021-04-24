import BaseComponent from "../base/BaseComponent";

export default class ButtonCancel extends BaseComponent {
    constructor({className, textContent, onclick}) {
        super({
            elem: 'a',
            className: className ? `waves-effect waves-light btn-cancel ${className}` : 'waves-effect waves-light btn-cancel',
            textContent,
            onclick
        });
    }
}