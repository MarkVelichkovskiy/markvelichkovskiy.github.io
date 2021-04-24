import BaseComponent from "../base/BaseComponent";
import Container from "../components/Container";
import Logo from "./components/Logo";
import LoginButton from "./components/LoginButton";

class NavMenu extends BaseComponent {
    constructor() {
        super({
            elem: 'ul',
            className: 'right hide-on-small-only'
        })
        this.append(
            new BaseComponent({elem: 'li'})
                .with(new LoginButton())
        )
    }
}

class Nav extends BaseComponent {
    constructor() {
        super({
            elem: 'nav'
        })
    }
}

class NavWrapper extends BaseComponent {
    constructor() {
        super({
            elem: 'div',
            className: 'nav-wrapper'
        })
        this.append(
            new Nav()
                .with(
                    new Container()
                        .with(
                            new Logo('Medical Clinic'),
                            new NavMenu()
                        )
                )
        )
    }
}

export default class Header extends BaseComponent {
    constructor() {
        super({
            elem: 'header'
        })
        this.append(
            new NavWrapper()
        )
    }
}