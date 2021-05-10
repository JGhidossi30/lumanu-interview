import React, {useState} from 'react';
import onClickOutside from 'react-onclickoutside'
import Loader from '../Loader';

function Search({addRepo, isLoading, repos, results, getLatestRelease, getResults, setQuery, query}) {
    const [focused, setFocused] = useState(false);
    Search.handleClickOutside = () => setFocused(false);
    const onSelect = (repo) => {
        addRepo(repo);
        getLatestRelease(repo.owner.login, repo.name, repos.length);
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
                onFocus={() => setFocused(true)}
            >
                search
            </button>
            {focused && (isLoading || results.length !== 0) &&
            <div className="dropdown">
                {isLoading ?
                    <Loader/>
                    :
                    results.filter((result) => {
                        return !repos.some((repo) => repo.data.id === result.id);
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
