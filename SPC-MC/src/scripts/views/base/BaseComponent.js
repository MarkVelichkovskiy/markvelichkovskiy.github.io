export default class BaseComponent {
    constructor({elem, ...props}) {
        this.element = document.createElement(elem)
        Object.keys(props).forEach(key => {
            if (key === 'dataset') {
                const dataset = props[key]
                Object.keys(dataset).forEach(dataKey => {
                    const dataValue = dataset[dataKey]
                    if (dataValue) {
                        this.element.dataset[dataKey] = dataValue
                    }
                })
            } else {
                const value = props[key]
                if (value) {
                    this.element[key] = value
                }
            }
        })
    }

    append(...components) {
        this.element.append(...components.map(c => c.render()))
    }

    addClass(token) {
        this.element.classList.add(token)
    }

    removeClass(token) {
        this.element.classList.remove(token)
    }

    toggleClass(token){
        return this.element.classList.toggle(token)
    }

    with(...components) {
        this.append(...components)
        return this
    }

    remove() {
        this.element.remove()
    }

    render() {
        return this.element
    }
}