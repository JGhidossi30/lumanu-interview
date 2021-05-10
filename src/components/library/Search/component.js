import React, {useState} from 'react';
import onClickOutside from 'react-onclickoutside'
import Loader from '../Loader';

function Search({addRepo, isLoading, repos, results, getResults, setQuery, query}) {
    const [focused, setFocused] = useState(false);
    Search.handleClickOutside = () => setFocused(false);
    const onSelect = (repo) => {
        addRepo(repo);
        setFocused(false);
    }
    return (
        <div className="search-wrapper">
            <input
                value={query}
                placeholder={"Find a Repository"}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onKeyPress={(e) => e.key === 'Enter' && getResults(query)}
            />
            <button
                className="search-button"
                onClick={() => getResults(query)}
            >
                search
            </button>
            {focused && (isLoading || results.length !== 0) &&
            <div className="dropdown">
                {isLoading ?
                    <Loader/>
                    :
                    results.filter(function (result) {
                        return !repos.includes(result);
                    }).map((result) =>
                        <div
                            className="option"
                            key={result.id}
                            onClick={() => onSelect(result)}
                        >
                            {result.name}
                        </div>
                    )

                }
            </div>
            }
        </div>
    );
}

const clickOutsideConfig = {handleClickOutside: () => Search.handleClickOutside};

export default onClickOutside(Search, clickOutsideConfig);
