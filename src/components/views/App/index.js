import {connect} from "react-redux";
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {removeRepo} from '../../../modules/search/actions';
import AppComponent from './component';

const mapStateToProps = ({search}) => ({
    releaseNotes: search.releaseNotes,
    releaseLoading: search.loaders.releaseLoading,
    repos: search.repos,
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        push,
        removeRepo,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
