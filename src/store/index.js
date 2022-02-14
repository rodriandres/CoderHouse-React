const { useContext } = require('react');
const { AppContext } = require('./reducer');
const { setCountItem } = require('./actions');

const useComponents = () => {
    const { state, dispatch } = useContext(AppContext);

    const setItemCount = (value) => {
        dispatch(setCountItem(value));
    }

    return {
        setItemCount,
        state,
    };
};

module.exports = useComponents;