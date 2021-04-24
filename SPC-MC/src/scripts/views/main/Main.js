import BaseComponent from "../base/BaseComponent";
import SearchForm from "../components/forms/SearchForm";
import CardsContainer from "./CardsContainer";
import Container from "../components/Container";
import Visit from "../components/visit/Visit";
import {getVisits} from "../../api/Api";
import {isLogin} from "../../utils/Utils";

export default class Main extends BaseComponent {
    constructor() {
        super({elem: 'main'});
        this.searchForm = new SearchForm()
        this.cardContainer = new CardsContainer()
        this.updateCardsContainer()
    }

    updateCardsContainer() {
        if (isLogin()) {
            getVisits(visits => {
                const visitCards = visits.map(visit => Visit.create(visit))
                this.cardContainer.add(...visitCards)
            })
        }
    }

    render() {
        this.append(
            new Container()
                .with(
                    this.searchForm,
                    this.cardContainer
                )
        )
        return this.element
    }
}