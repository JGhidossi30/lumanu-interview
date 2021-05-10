import React from 'react';
import {ReactComponent as Refresh} from '../../../assets/img/refresh.svg';
import Loader from '../../library/Loader';
import Repo from '../../library/Repo';
import Search from '../../library/Search';

const App = ({refreshPage, releaseNotes, releaseLoading, removeRepo, repos}) => {
    refreshPage(repos);
    return (
        <div className="app-container">
            <div className="content-container">
                <Search/>
                <div className="scroll">
                    {repos?.map((repo, key) =>
                        <Repo
                            repo={repo}
                            removeRepo={() => removeRepo(key)}
                            index={key}
                            key={key}
                        />
                    )}
                </div>
                <div className="refresh">
                    <Refresh
                        onClick={() => refreshPage(repos)}
                    />
                </div>
            </div>
            <div className="content-container">
                <h1 className="gradient">
                    Release Notes
                </h1>
                {releaseLoading ?
                    <Loader/>
                    :
                    <div className="scroll">
                        {releaseNotes}
                    </div>
                }
            </div>
        </div>
    );
}

export default App;
