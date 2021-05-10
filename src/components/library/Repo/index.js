import {connect} from "react-redux";
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {setReleaseNotes, updateReleaseNotes} from '../../../modules/search/actions';
import RepoComponent from './component';

const mapStateToProps = ({search}) => ({
    newReleases: search.newReleases,
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        push,
        setReleaseNotes,
        updateReleaseNotes,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RepoComponent);
