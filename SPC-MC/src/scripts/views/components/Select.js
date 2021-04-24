import BaseComponent from "../base/BaseComponent";

class Option extends BaseComponent {
    constructor({textContent, selected, disabled}) {
        super({elem: 'option', textContent, selected, disabled});
    }
}

export default class Select extends BaseComponent {
    constructor({label, options, name, value, required, disabled}) {
        super({
            elem: 'div',
            className: 'input-field'
        });
        this.required = required
        this.name = name
        this.value = value ? value : ''
        this.select = new BaseComponent({
                elem: 'select',
                disabled,
                onchange: (event) => {
                    if (event.target.value) {
                        this.value = event.target.value
                        this.valid = true
                    }
                }
            }
        ).with(...options.map(option => new Option({textContent: option, selected: option === value})))
        this.label = new BaseComponent({elem: 'label', textContent: label})
    }

    set valid(isValid) {
        const input = this.element.querySelector('input')
        isValid ? input.classList.remove('invalid') : input.classList.add('invalid')
    }

    render() {
        if (!this.value) {
            this.select.element.prepend(
                new Option({textContent: 'Chose your option...', selected: true, disabled: true})
                    .render()
            )
        }
        this.append(
            this.select,
            this.label
        )
        return this.element
    }
}