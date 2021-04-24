import Button from "../../components/Button";
import {isLogin} from "../../../utils/Utils";
import Modal from "../../components/modals/Modal";
import LoginForm from "../../components/forms/LoginForm";
import CreateVisitForm from "../../components/forms/CreateVisitForm";

export default class LoginButton extends Button {
    constructor() {
        super({
            textContent: isLogin() ? 'Создать' : 'Войти'
        })
        this.element.onclick = () => isLogin() ? this.create() : this.login()
    }

    login() {
        const modal = new Modal({
            className: 'modal-login'
        })
        const loginForm = new LoginForm()
        loginForm.onSubmit(
            () => {
                this.element.textContent = 'Создать'
                this.element.onclick = () => this.create()
                modal.close()
            }
        )
        loginForm.onCancel(
            () => modal.close()
        )
        modal.append(loginForm)
        modal.open()
    }

    create() {
        const modal = new Modal({
            className: 'modal-login'
        })
        const createForm = new CreateVisitForm()
        createForm.onSubmit(
            () => modal.close()
        )
        createForm.onCancel(
            () => modal.close()
        )
        modal.append(createForm)
        modal.open()
        M.AutoInit(createForm.element)
    }
}