import Input from "../Input";
import DoctorSelect from "../selects/DoctorSelect";
import UrgencySelect from "../selects/UrgencySelect";
import {updateVisit} from "../../../api/Api";
import CancelableForm from "./CancelableForm";

export default class EditVisitForm extends CancelableForm {
    constructor(visit) {
        super({
            className: 'form-edit-visit',
            submitText: 'Сохранить'
        });
        Object.values(visit.contentItems).forEach(contentItem => {
            this.inputs.push(this.toFormInput(contentItem))
        })
        this.onSubmit(data => {
            updateVisit(visit.id, data, (updatedData) => {
                visit.update(updatedData)
                this.remove()
            })
        })
        this.onCancel(() => this.element.remove())
    }

    toFormInput(visitContentItem) {
        const requiredInputs = ['name', 'doctor', 'title', 'urgency']
        const required = requiredInputs.includes(visitContentItem.name)
        switch (visitContentItem.type) {
            case 'select': {
                if (visitContentItem.name === 'doctor') {
                    return new DoctorSelect({
                            name: visitContentItem.name,
                            value: visitContentItem.text,
                            required,
                            disabled: true
                        }
                    )
                } else {
                    return new UrgencySelect({
                        name: visitContentItem.name,
                        value: visitContentItem.text,
                        required
                    })
                }
            }
            default:
                return new Input({
                    id: `visit-edit-${visitContentItem.name}`,
                    name: visitContentItem.name,
                    textContent: visitContentItem.label,
                    value: visitContentItem.text,
                    type: visitContentItem.type,
                    required
                })
        }
    }
}