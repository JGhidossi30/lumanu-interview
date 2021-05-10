import {connect} from "react-redux";
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {addRepo, setQuery} from '../../../modules/search/actions';
import {getLatestRelease} from '../../../modules/search/actions/get-latest-release';
import {getResults} from '../../../modules/search/actions/get-results';
import SearchComponent from './component';

const mapStateToProps = ({search}) => ({
    isLoading: search.loaders.queryLoading,
    repos: search.repos,
    results: search.results,
    query: search.query,
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        push,
        addRepo,
        getLatestRelease,
        getResults,
        setQuery,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
