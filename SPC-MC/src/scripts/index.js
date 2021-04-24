import M from 'materialize-css/dist/js/materialize'
import Header from "./views/header/Header";
import Main from "./views/main/Main";

class DomComponent {
    static render(...components) {
        document.body.prepend(...components.map(component => component.render()))
        M.AutoInit(document.body)
    }
}

const header = new Header()
const main = new Main()

export function useMainStatement() {
    return main
}

DomComponent.render(
    header,
    main
)
