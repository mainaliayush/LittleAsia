export const searchReducer = (searchInput = "", action) => {
    switch (action.type) {
        case "SEARCH_ITEM":
            return action.payload
        default:
            return ""
    }
}