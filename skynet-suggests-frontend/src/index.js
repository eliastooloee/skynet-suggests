
document.addEventListener("DOMContentLoaded", function(){
    userSignUpForm();
    
})

function userLoginForm(){
  let login = document.getElementById("user-login")
  login.addEventListener("submit", (event) => {
    event.preventDefault()
    let user = {name: event.target.name.value}

  })
}

function userSignUpForm(){
  let signUp = document.getElementById("user-sign-up")
  signUp.addEventListener("submit", (event) => {
    event.preventDefault()
    let user = {name: event.target.name.value}
    persistUser(user)
  })
}

function persistUser(user){
  fetch('http://localhost:3000/users/', {
    method: 'POST',
    headers: {"Content-Type": "application/json",
              Accept: "application/json"
            },
    body: JSON.stringify(user)         
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

function getRepos() {
    fetch('http://localhost:3000/repos/')
    .then(res => res.json())
    .then(repos => renderRepos(repos))
    .catch(err => console.log(err))
}

function renderRepos(repos) {
    repos.forEach(repo => {
        showRepo(repo)
    });
}


function showRepo(repo) {
    let analyzedRepositories = document.getElementById("analyzed-repositories")
    let unanalyzedRepositories = document.getElementById("unanalyzed-repositories")

    let div = document.createElement("div")

    let p = document.createElement("p")
    p.textContent = repo.nickname
    
    let u = document.createElement("p")
    u.textContent = repo.url

    let button = document.createElement("button")
    button.textContent = "See Analysis"

    div.appendChild(p)
    div.appendChild(u)
    div.appendChild(button)

    if (repo.analyzed) {
        analyzedRepositories.appendChild(div)
    } else {
        unanalyzedRepositories.appendChild(div)
    }
}

function newRepoForm(){

    let main = document.getElementById("main")

    let form = document.createElement("form")
    // div.className = "card"

    // div.innerHTML = "";

    let nickname = document.createElement("p")
    nickname.textContent = "Enter the nickname of your repository"

    let nicknameInput = document.createElement("input")
    nicknameInput.type = "text";
    nicknameInput.name = "nickname";
    
    let p = document.createElement("p")
    p.textContent = "Enter the Url of your repository"

    let input = document.createElement("input")
    input.type = "text";
    input.name = "url"

    let button = document.createElement("button")
    button.textContent = "Submit Repository"

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(event.target.nickname.value)
        let repo = {nickname: event.target.nickname.value, url: event.target.url.value, analyzed: false}
        // let repo = {nickname:}
        addRepository(repo)
    })
    

    form.appendChild(nickname)
    form.appendChild(nicknameInput)
    form.appendChild(p)
    form.appendChild(input)
    form.appendChild(button)
    main.appendChild(form)
}

let button = document.getElementById("new-repo-form-button")
button.textContent = "Add a Repository"
button.addEventListener("click", () => {
    newRepoForm()
})