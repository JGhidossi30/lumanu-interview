import React, {useState} from 'react';
import onClickOutside from 'react-onclickoutside'
import Loader from '../Loader';

function Search({addRepo, isLoading, results, setQuery, query}) {
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
            />
            {focused && query !== '' &&
            <div className="dropdown">
                {isLoading ?
                    <Loader/>
                    :
                    results.map((result) =>
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
