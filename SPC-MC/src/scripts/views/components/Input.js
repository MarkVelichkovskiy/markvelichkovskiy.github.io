import BaseComponent from "../base/BaseComponent";

export default class Input extends BaseComponent {
    constructor({id, textContent, value, name, type, required}) {
        super({
            elem: 'div',
            className: 'input-field'
        })
        this.type = type ? type : 'text'
        this.required = required
        this.input = new BaseComponent({
            elem: 'input',
            id: id,
            name,
            value,
            type: this.type,
        })
        this.label = new BaseComponent({
            elem: 'label',
            for: id,
            className: value ? 'active' : '',
            textContent: textContent
        })
    }

    set valid(isValid) {
        isValid ? this.input.removeClass('invalid') : this.input.addClass('invalid')
    }

    get name() {
        return this.input.element.name
    }

    get value() {
        return this.input.element.value
    }

    render() {
        if (this.required) {
            this.input.element.addEventListener('input', (event) => {
                this.valid = event.target.value.length > 0
            })
        }
        this.append(
            this.input,
            this.label
        )
        return this.element
    }
}