import BaseComponent from "../../base/BaseComponent";
import Button from "../Button";
import FieldSet from "../FieldSet";

export default class Form extends BaseComponent {
    constructor({className, submitText}) {
        super({elem: 'form', className});
        this.inputs = []
        this.submitBtn = new Button({className: 'right', textContent: submitText})
    }

    onSubmit(callback) {
        this.element.addEventListener('submit', event => {
            event.preventDefault()
            const data = this.getData()
            if (data) {
                callback(data)
            }
        })
    }

    getData() {
        const data = {}
        const requiresCheck = this.inputs.map(input => {
            if (input instanceof FieldSet) {
                const fieldSetData = input.getData()
                if (fieldSetData) {
                    Object.keys(fieldSetData).forEach(key => {
                        data[key] = fieldSetData[key]
                    })
                    return true
                }
            } else {
                if (input.required && input.value === '') {
                    input.valid = false
                } else {
                    if (input.name) {
                        data[input.name] = input.value
                    }
                    return true
                }
            }
        })
        return requiresCheck.every(require => require) ? data : null
    }

    appendInputs(...inputs) {
        this.inputs.push(...inputs)
    }

    render() {
        this.append(...this.inputs, this.submitBtn)
        return this.element
    }
}