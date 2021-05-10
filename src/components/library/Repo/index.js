import {connect} from "react-redux";
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {getLatestRelease} from '../../../modules/search/actions/get-latest-release';
import RepoComponent from './component';

const mapStateToProps = ({search}) => ({

});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        push,
        getLatestRelease,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RepoComponent);
