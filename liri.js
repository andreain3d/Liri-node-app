require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);

switch (process.argv[2]) {
  case "concert-this":
    break;
  case "spotify-this-song":
    var songTitle = process.argv[3];
    for (i = 4; i < process.argv.length; i++) {
      songTitle = songTitle + " " + process.argv[i];
    }

    spotify.search({ type: "track", query: songTitle, limit: 1 }, function(
      err,
      data
    ) {
      if (err) {
        return console.log("Error occurred: " + err);
      }

      fs.writeFile("log.txt", JSON.stringify(data.tracks.items), function(err) {
        // If the code experiences any errors it will log the error to the console.
        if (err) {
          return console.log(err);
        }

        // Otherwise, it will print: "movies.txt was updated!"
        console.log("movies.txt was updated!");
      });
    });
    break;
  case "movie-this":
    break;
  case "do-what-it-says":
    break;
  default:
    break;
}
