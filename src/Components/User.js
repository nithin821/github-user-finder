import React from "react";

function Usercard({user}){
    return(
        <div className="Card">
            <img src={user.avatar_url} alt="avatar" width="150"/>
            <h2 className="NAME">Profile: {user.name || user.login}</h2>
            <br/>
            <p className="PARA">{user.bio}</p>
            <p className="PARA">Followers: {user.followers}</p>
            <p className="PARA">Following: {user.following}</p>

        </div>
    );
};
export default Usercard;