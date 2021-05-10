import React from 'react';
import Loader from '../../library/Loader';
import Repo from '../../library/Repo';
import Search from '../../library/Search';

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
                <div className="scroll">
                    {releaseNotes?.body}
                </div>
            }
        </div>
    </div>
);

export default App;
