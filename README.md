# T.ILT - Talk. I Like To

<br>

## Description

An application to listen, follow and upload your favourite podcasts.

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

- **Signup:** As an anon I can sign up in the platform so that I can use its podcast features.

- **Login:** As a user I can login to the platform so that I can use its podcast features.

- **Logout:** As a user I can logout from the platform so no one else can use it

- **Search Podcast:** As a user I can search for a podcast by different categories

- **Search Episode:** As a user I can search for a specific episode of a podcast

- **Random Episode:** As a user I can get a pseudo-random episode of a random podcast

- **Filter Podcast:** As a user I can filter the podcasts I see to a specific language/genres/regions

- **Recommendations:** As a user I can see recommendations for podcasts/episodes depending on what I have been listening to

- **Edit Profile** As a user I can edit my profile

## Backlog

<br>

# Client / Frontend

## React Router Routes (React App)

| Path | Component | Permissions | Behavior |
| ------------------------- | -------------------- | -------------------------- | ------------------------------------------------------------- |
| `/` | SplashPage | public `<Route>` | Home page |
| `/signup` | SignupPage | anon only `<AnonRoute>` | Signup form, link to login, navigate to homepage after signup |
| `/login` | LoginPage | anon only `<AnonRoute>` | Login form, link to signup, navigate to homepage after login |
| `/logout` | n/a | anon only `<AnonRoute>` | Navigate to homepage after logout, expire session |

## Components

- LoginPage

* SplashPage

- Navbar
- Episode
- Podcast
- Recommendation
- Search
- Profile
- AudioPlayer

## Services

- Auth Service

      	- auth.login(user)

      	- auth.signup(user)

      	- auth.logout()

      	- auth.me()

      	- auth.getUser() // synchronous

- Podcast service

- search
- bestPodcast
- onePodcast
- oneEpisode
- allGenres
- randomEpisode
- allLanguages
- recommendations

<br>

# Server / Backend

## Models

User model

```javascript

{

username:  {type:  String,  required:  true,  unique:  true},

email:  {type:  String,  required:  true,  unique:  true},

password:  {type:  String,  required:  true},

listenedEpisodes: [{type:  Schema.Types.ObjectId, ref:"listenedEpisodes"}],  default: []

}

```

ListenedEpisodes Model

```javascript

{

listenedEpisodesID:  {type:  String},  //Store API ID for episode

progress:  {type:  String}  //Time in seconds watched

}
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL | Request Body | Success status | Error Status | Description |
| ----------- | ----------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET | `/auth/profile` | Saved session | 200 | 404 | Check if user is logged in and return profile page |
| POST | `/auth/signup` | {name, email, password} | 201 | 404 | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST | `/auth/login` | {username, password} | 200 | 401 | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST | `/auth/logout` | (empty) | 204 | 400 | Logs out the user |
| GET | `/auth/me` | Saved Session | 200 | 404 | User can see their profile and listening history |
| PUT | `/auth/me` | Saved Session | 200 | 404 | User can edit their profile/preferences/settings|
| GET | `/auth/delete` | Saved Session | 200 | 404 | User can delete their account |
| GET| `/auth/listened` | userID | 200 | 404 | Retrieve listened podcasts/episodes for a specific user |
<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/YMGISPQl/tilt)

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/JuiceDrinker/tilt-client)

[Server repository Link](https://github.com/JuiceDrinker/tilt-server)

[Deployed App Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)

```

```
