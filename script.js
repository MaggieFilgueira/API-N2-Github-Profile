let APIURL = 'https://api.github.com/users/';
let avatar = document.getElementById("avatar");
let name = document.getElementById("name");
let followers = document.getElementById("followers");
let repos = document.getElementById("repos");
let profileLink = document.getElementById("profileLink");
let main = document.getElementById("main");

document.getElementById('search').addEventListener("input", () => {
    let user = document.getElementById('search').value; 
    APIURL = `https://api.github.com/users/${user}`;

    axios.get(APIURL)
        .then(res => {
            main.style.display= 'block';
            let usuario = res.data;
            avatar.src = usuario.avatar_url;
            name.innerHTML = usuario.login;
            followers.innerHTML = usuario.followers;
            repos.innerHTML = usuario.public_repos;
            profileLink.href = usuario.html_url;
        })
        .catch(err => console.log(err));
    
})
 

