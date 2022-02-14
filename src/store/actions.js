const actionTypes = {
    SET_ITEM_COUNT: 'SET_ITEM_COUNT',
};

// ACTION TYPES METHODS
const setCountItem = (data) => ({
    type: actionTypes.SET_ITEM_COUNT,
    data,
});


module.exports = {
    actionTypes,
    setCountItem,
};