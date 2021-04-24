import Select from "../Select";

export default class DoctorSelect extends Select {
    constructor({name, value, onchange, required, disabled}) {
        super({
            label: 'Doctor:',
            options: ['Therapist', 'Dentist', 'Cardiologist'],
            name,
            value,
            required,
            disabled
        });
        this.element.onchange = onchange
    }
}