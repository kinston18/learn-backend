require('dotenv').config()
const express = require('express')
const app = express()
 
const port = 4500

const githubData = 
{
    "login": "kinston18",
    "id": 77458269,
    "node_id": "MDQ6VXNlcjc3NDU4MjY5",
    "avatar_url": "https://avatars.githubusercontent.com/u/77458269?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kinston18",
    "html_url": "https://github.com/kinston18",
    "followers_url": "https://api.github.com/users/kinston18/followers",
    "following_url": "https://api.github.com/users/kinston18/following{/other_user}",
    "gists_url": "https://api.github.com/users/kinston18/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kinston18/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kinston18/subscriptions",
    "organizations_url": "https://api.github.com/users/kinston18/orgs",
    "repos_url": "https://api.github.com/users/kinston18/repos",
    "events_url": "https://api.github.com/users/kinston18/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kinston18/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Prajjwal Goswami",
    "company": "@omskills",
    "blog": "",
    "location": "Prayagraj, India",
    "email": null,
    "hireable": null,
    "bio": "Hi, this is Prajjwal Goswami an aspiring Software Developer.",
    "twitter_username": "kinston_18",
    "public_repos": 72,
    "public_gists": 0,
    "followers": 15,
    "following": 20,
    "created_at": "2021-01-14T18:04:02Z",
    "updated_at": "2024-04-12T14:38:34Z"
  }
  

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('kinston_18')
})

app.get('/login', (req,res) => {
    res.send('<h1>Please login</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})