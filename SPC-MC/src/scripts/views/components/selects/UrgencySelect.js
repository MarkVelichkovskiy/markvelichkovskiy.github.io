import Select from "../Select";

export default class UrgencySelect extends Select {
    constructor({name, value, required}) {
        super({
            label: 'Urgency:',
            options: ['High', 'Normal', 'Low'],
            name,
            value,
            required
        });
    }
}