const mutations = {
    setPostData(state, payload) {
        state.posts = payload
      },
      setCurrentPostComments(state, payload) {
        state.currentPostComments = payload
      },
      setCurrentPostFromServer(state, payload) {
       state.currentPostFromServer = payload
      }
}


export default mutations;