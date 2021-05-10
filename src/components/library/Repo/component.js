import React, {useState} from 'react';
import {ReactComponent as Close} from '../../../assets/img/close.svg'

function Repo({newReleases, repo, removeRepo, setReleaseNotes, updateReleaseNotes, index}) {
    const [newRelease, setNewRelease] = useState('New Release');
    return (
        <div
            className="repo"
        >
            <div
                className="title cursor"
                onClick={() => setReleaseNotes(index)}
            >
                {repo.data.name}
            </div>
            <div className="flex align-items-center">
                {newReleases[index] !== undefined &&
                <div className="new"
                     onClick={() => updateReleaseNotes(index)}
                     onMouseEnter={() => setNewRelease(newReleases[index].tag_name)}
                     onMouseLeave={() => setNewRelease('New Release!')}
                >
                    {newRelease}
                </div>
                }
                {repo.notes &&
                <div className="version">
                    {repo.notes?.tag_name}
                </div>
                }
                <Close
                    className="close cursor"
                    onClick={removeRepo}
                />
            </div>
        </div>
    );
}

export default Repo;
