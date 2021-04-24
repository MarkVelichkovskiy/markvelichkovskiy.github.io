import BaseComponent from "../../base/BaseComponent";
import EditVisitForm from "../forms/EditVisitForm";
import {deleteVisit} from "../../../api/Api";
import VisitCardActions from "./components/VisitCardActions";

class CardContentItem extends BaseComponent {
    constructor({className, label, text, type, name}) {
        super({
            elem: 'p',
            className,
            textContent: text
        });
        this.label = label
        this.text = text
        this.type = type
        this.name = name
    }

    render() {
        this.element.innerHTML = `<strong>${this.label}</strong> ${this.text}`
        return this.element
    }
}

class VisitCardContent extends BaseComponent {
    constructor(visit) {
        super({
            elem: 'div',
            className: 'card-content'
        });
        this.visit = visit
    }

    edit() {
        const form = new EditVisitForm(this.visit)
        this.visit.append(form)
        M.AutoInit(form.element)
    }

    render() {
        const {name, doctor, ...togglableItems} = this.visit.contentItems
        this.name = name
        this.doctor = doctor
        this.togglable = new BaseComponent({elem: 'div', className: 'hide'})
            .with(...Object.values(togglableItems))
        this.append(
            this.name,
            this.doctor,
            this.togglable
        )
        return this.element
    }
}

export default class Visit extends BaseComponent {
    constructor({id, name, doctor, title, description, urgency}) {
        super({
            elem: 'div',
            className: 'card col xl3'
        });
        this.id = id
        this.name = name
        this.doctor = doctor
        this.title = title
        this.description = description
        this.urgency = urgency
        this.contentItems = {
            name: new CardContentItem({
                className: 'card-title',
                label: 'Name:',
                text: this.name,
                name: 'name'
            }),
            doctor: new CardContentItem({
                label: 'Doctor:',
                text: this.doctor,
                name: 'doctor',
                type: 'select'
            }),
            title: new CardContentItem({
                label: 'Title:',
                text: this.title,
                name: 'title'
            }),
            description: new CardContentItem({
                label: 'Description:',
                text: this.description,
                name: 'description'
            }),
            urgency: new CardContentItem({
                label: 'Urgency:',
                text: this.urgency,
                name: 'urgency',
                type: 'select'
            })
        }
        this.visistContent = new VisitCardContent(this)
        this.visitActions = new VisitCardActions(this)
    }

    static create(data) {
        switch (data.doctor) {
            case 'Therapist':
                return new VisitTherapist(data)
            case 'Dentist':
                return new VisitDentist(data)
            case 'Cardiologist':
                return new VisitCardiologist(data)
        }
    }

    edit() {
        this.visistContent.edit()
    }

    delete() {
        deleteVisit(this.id, () => this.container.remove(this))
    }

    toggle() {
        return this.visistContent.togglable.toggleClass('hide')
    }

    update({id, ...visitData}) {
        Object.keys(visitData).forEach(key => {
            this[key] = visitData[key]
            const contentItem = this.contentItems[key];
            contentItem.text = visitData[key]
            contentItem.element.innerHTML = `<strong>${contentItem.label}</strong> ${visitData[key]}`
        })
    }

    render() {
        this.append(
            this.visistContent,
            this.visitActions
        )
        return this.element
    }
}

class VisitTherapist extends Visit {
    constructor({age, ...data}) {
        super(data);
        this.age = age
        this.contentItems.age = new CardContentItem({
            label: 'Age:',
            text: this.age,
            name: 'age',
            type: 'number',
            required: true
        })
    }
}

class VisitDentist extends Visit {
    constructor({lastVisit, ...data}) {
        super(data);
        this.lastVisit = lastVisit
        this.contentItems.lastVisit = new CardContentItem({
            label: 'Last visit:',
            text: this.lastVisit,
            name: 'lastVisit',
            type: 'date',
            required: true
        })
    }
}

class VisitCardiologist extends Visit {
    constructor({age, bmi, pressure, ...data}) {
        super(data);
        this.age = age
        this.bmi = bmi
        this.pressure = pressure
        this.contentItems.age = new CardContentItem({
            label: 'Age:',
            text: this.age,
            name: 'age',
            type: 'number',
            required: true
        })
        this.contentItems.bmi = new CardContentItem({
            label: 'Body mass index:',
            text: this.bmi,
            name: 'bmi',
            type: 'number',
            required: true
        })
        this.contentItems.pressure = new CardContentItem({
            label: 'Pressure:',
            text: this.pressure,
            name: 'pressure',
            required: true
        })
    }
}