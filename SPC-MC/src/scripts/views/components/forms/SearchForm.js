import Form from "./Form";
import Input from "../Input";
import Modal from "../modals/Modal";
import BaseComponent from "../../base/BaseComponent";
import {getVisits} from "../../../api/Api";
import {isLogin} from "../../../utils/Utils";
import {useMainStatement} from "../../../index";
import Select from "../Select";
import Visit from "../visit/Visit";

class SearchData {
    constructor({name, doctor, urgency}) {
        this.name = name
        this.doctor = doctor
        this.urgency = urgency
    }

    isEqual(data) {
        return this.isNameEqual(data.name) && this.isDoctorEqual(data.doctor) && this.isUrgencyEqual(data.urgency)
    }

    isNameEqual(name) {
        return name.toLowerCase().includes(this.name.toLowerCase()) || this.name.length === 0
    }

    isDoctorEqual(doctor) {
        return this.doctor.toLowerCase() === doctor.toLowerCase() || this.doctor.toLowerCase() === 'All'.toLowerCase()
    }

    isUrgencyEqual(urgency) {
        return this.urgency.toLowerCase() === urgency.toLowerCase() || this.urgency.toLowerCase() === 'All'.toLowerCase()
    }
}

export default class SearchForm extends Form {
    constructor() {
        super({className: 'form-search', submitText: 'Поиск'});
        this.appendInputs(
            new Input({
                id: 'search-title',
                textContent: 'Search by name',
                type: 'text',
                name: 'name'
            }),
            new Select({
                name: 'doctor',
                label: 'Doctor',
                options: ['All', 'Therapist', 'Dentist', 'Cardiologist'],
                value: 'All'
            }),
            new Select({
                name: 'urgency',
                label: 'Urgency',
                options: ['All', 'High', 'Normal', 'Low'],
                value: 'All'
            })
        )
        this.onSubmit(data => {
            if (isLogin()) {
                const searchData = new SearchData(data)
                getVisits(visits => {
                    const searchResult = visits
                        .filter(visit => searchData.isEqual(visit))
                        .map(v => Visit.create(v))
                    const main = useMainStatement()
                    main.cardContainer.update(...searchResult)
                })
            } else {
                new Modal({
                    className: 'modal-search-error'
                }).with(
                    new BaseComponent({
                        elem: 'p',
                        textContent: 'You are not login!'
                    })
                ).with(
                    new BaseComponent({
                        elem: 'div',
                        className: 'modal-footer'
                    }).with(new BaseComponent({
                        elem: 'a',
                        className: 'modal-close waves-effect waves-green btn-flat',
                        textContent: 'Ok'
                    }))
                ).open()
            }
        })
    }
}