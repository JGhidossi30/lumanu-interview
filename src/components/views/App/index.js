import {connect} from "react-redux";
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {removeRepo} from '../../../modules/search/actions';
import {refreshPage} from '../../../modules/search/actions/refresh-page';
import AppComponent from './component';

const mapStateToProps = ({search}) => ({
    refreshingPage: search.loaders.refreshingPage,
    releaseNotes: search.releaseNotes,
    releaseLoading: search.loaders.releaseLoading,
    repos: search.repos,
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        push,
        refreshPage,
        removeRepo,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
