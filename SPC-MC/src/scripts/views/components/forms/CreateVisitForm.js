import CancelableForm from "./CancelableForm";
import Input from "../Input";
import DoctorSelect from "../selects/DoctorSelect";
import UrgencySelect from "../selects/UrgencySelect";
import FieldSet from "../FieldSet";
import {createVisit} from "../../../api/Api";
import {useMainStatement} from "../../../index";
import Visit from "../visit/Visit";

class InputsSwitcher {
    static immutableInputs() {
        return [
            new Input({id: 'createVisitTitle', textContent: 'Tile', name: 'title', required: true}),
            new Input({id: 'createVisitDescription', textContent: 'Description', name: 'description'}),
            new UrgencySelect({name: 'urgency', required: true})
        ]
    }

    static getInputs(doctor) {
        switch (doctor) {
            case 'Therapist':
                const inputsTherapist = InputsSwitcher.immutableInputs()
                inputsTherapist.push(new Input({
                    id: 'createVisitAge',
                    textContent: 'Age',
                    name: 'age',
                    type: 'number',
                    required: true
                }))
                return inputsTherapist
            case 'Dentist':
                const inputsDentist = InputsSwitcher.immutableInputs()
                inputsDentist.push(new Input({
                    id: 'createVisitLast',
                    textContent: 'Last visit',
                    type: 'date',
                    name: 'lastVisit',
                    required: true
                }))
                return inputsDentist
            case 'Cardiologist':
                const inputsCardiologist = InputsSwitcher.immutableInputs()
                inputsCardiologist.push(new Input({
                    id: 'createVisitAge',
                    textContent: 'Age',
                    name: 'age',
                    type: 'number',
                    required: true
                }))
                inputsCardiologist.push(new Input({
                    id: 'createVisitBmi',
                    textContent: 'Body mass index',
                    name: 'bmi',
                    type: 'number',
                    required: true
                }))
                inputsCardiologist.push(new Input({
                    id: 'createVisitPressure',
                    textContent: 'Pressure',
                    name: 'pressure',
                    required: true
                }))
                return inputsCardiologist
        }
    }
}

export default class CreateVisitForm extends CancelableForm {
    constructor() {
        super({className: 'form-create-visit', submitText: 'Создать'});
        this.switchableInputs = []
        this.switchableInputsContainer = new FieldSet()
        this.appendInputs(
            new Input({id: 'createVisitName', textContent: 'Name', name: 'name', required: true}),
            new DoctorSelect({
                name: 'doctor',
                onchange: event => this.reloadInputs(event.target.value),
                required: true
            }),
            this.switchableInputsContainer
        )
    }

    onSubmit(callback) {
        super.onSubmit(data => {
            createVisit(data, response => {
                if (response) {
                    const main = useMainStatement()
                    main.cardContainer.add(Visit.create(response))
                    callback()
                }
            })
        })
    }

    reloadInputs(doctor) {
        this.switchableInputs.forEach(e => e.remove())
        this.switchableInputs = InputsSwitcher.getInputs(doctor)
        this.switchableInputsContainer.append(...this.switchableInputs)
        M.AutoInit(this.element)
    }
}