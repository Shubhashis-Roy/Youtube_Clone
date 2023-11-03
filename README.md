<div align="center">

  <img src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/01/31/0dfe05d1f843d2705c096b93ccb80e54_original.jpg?impolicy=abp_cdn&imwidth=650" alt="logo" width="205" height="auto" />

  <h1>YouTube</h1>
    <p>
 YouTube with React.js, React-Redux, Tailwind Css, YouTube live streaming API
  </p>

</div>

<hr>
<h3> <a href= "https://netflix-gpt-subha.netlify.app/" >View Demo</a> </h3>
<h2>Description</h2>

- This is a simplified version of Netflix, Where user can <b>search</b> a particuler type of movie ( Funny Movies, Action Movies, Horror Movies ) and than some
  movies will be <b>suggest according to the search. </b>
- Developed a <b>multi-language</b> support feature, English, Hindi and Spanish.
- Users can SignUp/Login their account using Gmail and Users can added movies to their favorites list.
- Using the <b>Dynamic loading</b> concept.

### Concepts

#### Basic concepts of Netfix GPT

- Movie Recomendation : User can <b>search</b> a movie type (Funny Movies, Action Movies, Horror Movies) and than some
  movies will be <b>suggest according to the search. </b>

- Categorically Distincted: After login or singup, user can witness the contains are divied into their specific domain.

- Favorite list: User after chose any movie or drama or web series they can added in the favorite list.

<h2>Technologies</h2>
<table>
      <tbody>
        <tr>
          <th>React.js</th>
           <th>React-Redux</th>
           <th>Integrate OpenAI API</th>
        </tr>
          <tr>
           <th>Firebase</th>
           <th>Tailwind Css</th>
           <th>TMDB API</th>
         </tr>
      </tbody>    
</table

### <b> NPM Packages </b>

- react
- openai
- firebase
- react-redux
- react-icons
- react-toastify
- reduxjs/toolkit
- react-router-dom

### Other Applications

- Thunder Client
- Vs Code

## How to setup locally and getting started to improve and add new features.

### 1. Create a new directory, cd into it and run 'git init' .

### 2. Clone this repository

### 3. Create a .gitignore file add node-modules, .env .

### 4. Run 'npm installl' , it will install all npm packages and dependencies .

### 5. Create and setup a app in google developer console and obtain CLIENT_ID and CLIENT_SECRET

### 6. Obtain Refresh token by providing CLIENT_ID, CLIENT_SECRET from google's OAuth 2.0 playground to access Gmail Api

### 7. Setup mongodb cloud database and obtain connection url

### 8. Create a .env in config directory inside projects root directory.

### 9. setupp .env variables

- OPENAI_KEY
- TMDB_KEY
- FIREBASE_APIKEY
- FIREBASE_AUTHDOMAIN
- FIREBASE_PROJECT_ID
- FIREBASE_APP_ID

### 10. Replace baseUrl with your host address (eg:- http://localhost:3000/ ) for Api call in client side scripts present inside root -> public -> js

### 11. Run 'npm run dev' to run the app in development mode

### 12. open host addess to view the website.
