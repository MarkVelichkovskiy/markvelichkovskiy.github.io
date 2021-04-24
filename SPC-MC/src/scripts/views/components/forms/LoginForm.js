import CancelableForm from "./CancelableForm";
import Input from "../Input";
import BaseComponent from "../../base/BaseComponent";
import {useMainStatement} from "../../../index";
import {login} from "../../../api/Api";

export default class LoginForm extends CancelableForm {
    constructor() {
        super({className: 'form-login', submitText: 'Войти'});
        this.appendInputs(
            new Input({id: 'login-username', textContent: 'Email', type: 'email', name: 'email'}),
            new Input({id: 'login-password', textContent: 'Password', type: 'password', name: 'password'})
        )
        this.loginFailMessage = new BaseComponent({elem: 'p', className: 'form-login-msg red-text text-accent-4'})
    }

    onSubmit(callback) {
        const main = useMainStatement()
        const onSuccess = (token) => {
            sessionStorage.setItem('token', token)
            main.updateCardsContainer()
            callback()
        }
        const onError = (error) => {
            this.loginFailMessage.element.textContent = error
        }
        super.onSubmit(credentials => login(credentials, onSuccess, onError))
    }

    render() {
        const element = super.render()
        this.append(this.loginFailMessage)
        return element
    }
}