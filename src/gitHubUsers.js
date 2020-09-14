import React from "react";
import { connect } from "react-redux";

const GithubUsers = ({ status, githubUsersData, dispatch }) => {
  
React.useEffect(() => {
  dispatch({ type: "request" })  
}, []);  

if (status === "pending") {
  return <div>Loading...</div>;
}

if (status === "rejected") {
  return <div>An error has occurred</div>
}

return (
  <div>
    <ul style={{display:"flex", maxWidth:"100%", flexWrap:"wrap", justifyContent:"center"}}>
      {githubUsersData.map((user) => (
        <li key={user.id} className="gitUser">
          <img style={{width:"100px", 
            height:"100px",
            borderRadius:"50%"}}
            src={user.avatar_url}
            alt="avatar"/>
          <span style={{margin:"10px", fontSize:"20px"}}>{user.login}</span>
          <a style={{textDecoration:"none",
            margin:"10px auto",
            color:"white"}}
            href={user.html_url}
            rel="noopener noreferrer" 
            target="_blank">
              <span style={{
                padding: "10px",
                borderRadius: "5px",
                background:"green"}}>
                Open profile
              </span>
           </a>
        </li>
      ))}
    </ul>
  </div>  
  )
}

const mapStateToProps = (state) => {
  return {
    githubUsersData: state.githubUsers.githubUsersData,
    status: state.githubUsers.status
  };
};
    
export default connect(mapStateToProps)(GithubUsers);