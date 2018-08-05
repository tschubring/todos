

import { connect } from 'react-redux'
import { setPage } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.page === state.page
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setPage(ownProps.page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
