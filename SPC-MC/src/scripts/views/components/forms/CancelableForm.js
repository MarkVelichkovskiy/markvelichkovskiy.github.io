import Form from "./Form";
import ButtonCancel from "../ButtonCancel";

export default class CancelableForm extends Form {
    constructor({className, submitText}) {
        super({className, submitText});
        this.cancelBtn = new ButtonCancel({textContent: 'Отмена'})
    }

    onCancel(callback) {
        this.cancelBtn.element.onclick = () => callback()
    }

    render() {
        const element = super.render();
        this.append(this.cancelBtn)
        return element
    }
}