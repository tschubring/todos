//src/containers/Views.js
import { connect } from 'react-redux'
import Panes from '../components/Panes'
//selector
const mapStateToProps = state => ({
  name: state.page
})

export default connect(
  mapStateToProps
)(Panes)
