import React from "react";

function Repolist({repos}){
    return(
        <div>
            <h3 className="REPOSITORIES">Repositeries</h3>
            <ul>
            {repos.slice(0, 5).map((repo) => (
          <li key={repo.id}>
            <a className="LINK" href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
            </ul>
        </div>
    );

};
export default Repolist;