let initState = {
    activeModal: '',
    paramsModal: {}
};

export const screenStatusReducers = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return {
                ...state,
                activeModal: action.modalName,
                paramsModal: action.paramsModal
            };
        default:
            return state;
    }
};
