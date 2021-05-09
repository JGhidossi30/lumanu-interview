import React from 'react';
import Repo from '../../library/Repo';
import Search from '../../library/Search';

const App = ({releaseNotes, removeRepo, repos}) => (
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
                Description
            </h1>
            {releaseNotes}
        </div>
    </div>
);

export default App;
