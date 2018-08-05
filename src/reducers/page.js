const page = (state = 'GET_OUT_THE_DOOR', action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return action.page
    default:
      return state
  }
}

export default page
