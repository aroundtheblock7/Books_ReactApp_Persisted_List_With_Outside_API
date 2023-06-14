### Installs

`npm create-react-app`
`npm install json-server`
`npm install axios`


### Available Scripts

`npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

In a seperate termimal while still on running npm start on local server run...

`npm run server` 

This starts the .JSON Server which is set to run JSON requests to an external API (JSON Server) on localhost:3001. See package.json 'scripts' to see port (3001) this is running on.Userdata being created/edited/deleted (books) is stored on the API server, requests are sent back and stored in our db.json file in the "books" array.

### Making requests
In the api.http file the various calls that can be made with out rest client are listed (GET, POST, PUT, DELETE). The rest client being used here is the VS code extension "Rest Client" (must install as a VS Code extentsion), but this is simply a representation/outline of the sntax amd types of calls that can be made. Ultimately we use Axios to make the calls, not the RestClient.