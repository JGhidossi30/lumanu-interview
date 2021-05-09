import React from 'react';
import {ReactComponent as Close} from '../../../assets/img/close.svg'

function Repo({repo, setDescription, removeRepo}) {
    return (
        <div
            className="repo"
        >
            <div
                className="title cursor"
                onClick={() => setDescription(repo.description)}
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
