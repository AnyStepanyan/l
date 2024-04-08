const getters = {
    posts: (state) => {
        return state.posts;
    },
    currentPostComments:(state) => {
        return state.currentPostComments;
    },
    currentPostFromServer:(state) => {
        return state.currentPostFromServer;
    }
};

export default getters;