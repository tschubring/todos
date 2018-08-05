import { connect } from 'react-redux'
import PageName from '../components/PageName'
//selector
const mapStateToProps = state => ({
  name: state.page,
  sec: state.seconds
})


/*
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
//,
  mapDispatchToProps
*/

export default connect(
  mapStateToProps
)(PageName)
