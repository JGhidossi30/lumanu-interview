import React from 'react';
import {ReactComponent as Close} from '../../../assets/img/close.svg'

function Repo({repo, removeRepo, getLatestRelease}) {
    return (
        <div
            className="repo"
        >
            <div
                className="title cursor"
                onClick={() => getLatestRelease({owner: repo.owner.login, repo: repo.name})}
            >
                {repo.name}
            </div>
            <Close
                className="close cursor"
                onClick={removeRepo}
            />
        </div>
    );
}

export default Repo;
