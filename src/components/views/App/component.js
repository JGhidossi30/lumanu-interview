import React, {useEffect} from 'react';
import {ReactComponent as Refresh} from '../../../assets/img/refresh.svg';
import Loader from '../../library/Loader';
import Repo from '../../library/Repo';
import Search from '../../library/Search';

const App = ({refreshingPage, refreshPage, releaseNotes, removeRepo, repos}) => {
    useEffect(() => {
        refreshPage(repos)
    }, []);
    
    return (
        <div className="app-container">
            <div className="content-container">
                <Search/>
                <div className="scroll">
                    {refreshingPage &&
                    <div className="loading-overlay">
                        <Loader/>
                    </div>
                    }
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
                <div className="scroll">
                    {releaseNotes}
                </div>
            </div>
        </div>
    );
}

export default App;
