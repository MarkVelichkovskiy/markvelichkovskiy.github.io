import BaseComponent from "../../base/BaseComponent";
import M from 'materialize-css/dist/js/materialize'

export default class Modal extends BaseComponent {
    constructor({className}) {
        super({elem: 'div', className: `modal ${className}`});
        this.instance = M.Modal.init(this.element, {
            onCloseEnd: () => {
                this.element.remove()
                this.instance.destroy()
            }
        })
    }

    open() {
        document.body.prepend(this.element)
        this.instance.open()
    }

    close() {
        this.instance.close()
    }
}