import BaseComponent from "../base/BaseComponent";

export default class FieldSet extends BaseComponent {
    constructor() {
        super({
            elem: 'fieldset'
        })
        this.inputs = []
    }

    append(...components) {
        this.inputs.push(...components)
        super.append(...components)
    }

    getData() {
        const data = {}
        const requiresCheck = this.inputs.map(input => {
            if (input.required && input.value === '') {
                input.valid = false
            } else {
                if (input.name) {
                    data[input.name] = input.value
                }
                return true
            }
        })
        return requiresCheck.every(require => require) ? data : null
    }
}