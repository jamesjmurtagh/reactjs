export const testReducer = (state = '', action) => {
        switch (action.type) {
                case 'UPDATE_TEST':
                        return action.payload
                default:
                        return state
        }
}
