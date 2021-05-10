import React from 'react';
import Repo from '../../library/Repo';
import Search from '../../library/Search';
import Loader from '../../library/Loader';

const App = ({releaseNotes, releaseLoading, removeRepo, repos}) => (
    <div className="app-container">
        <div className="content-container">
            <Search/>
            <div className="scroll">
                {repos?.map((repo, key) =>
                    <Repo
                        repo={repo}
                        // setDescription={setDescription}
                        removeRepo={() => removeRepo(key)}
                        key={key}
                    />
                )}
            </div>
        </div>
        <div className="content-container">
            <h1 className="gradient">
                Release Notes
            </h1>
            {releaseLoading ?
                <Loader/>
                :
                releaseNotes?.body
            }
        </div>
    </div>
);

export default App;
