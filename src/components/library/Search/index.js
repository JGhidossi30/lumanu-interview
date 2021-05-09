import {connect} from "react-redux";
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {addRepo, setQuery} from '../../../modules/search/actions';
import SearchComponent from './component';

const mapStateToProps = ({search}) => ({
    isLoading: search.loaders.queryLoading,
    results: search.results,
    query: search.query,
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        push,
        addRepo,
        setQuery,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
