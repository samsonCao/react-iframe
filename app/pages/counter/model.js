export const Counter = {
    state: {
        count: 0
    },

    reducers: {
        setCount(state, payload) {
            return { ...state, count: payload };
        }
    },

    effects: dispatch => ({
        increase(payload, rootState) {
            const count = rootState.Counter.count;
            dispatch.Counter.setCount(count + payload);
        },

        decrease(payload, rootState) {
            const count = rootState.Counter.count;
            dispatch.Counter.setCount(count - payload);
        }
    })
};
