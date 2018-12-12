import BaseComponent from "./BaseComponent";

export default class BaseModalComponent extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 1,
            isShowModal: false,
        };
    }

    toggleModal = () => this.setState({ isShowModal: !this.state.isShowModal });

    closeModal = () => this.setState({ isShowModal: false });

    openSearch = () => this.refs.search.toggleModal()
}