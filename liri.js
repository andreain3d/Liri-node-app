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
    var songTitle = "";
    if (process.argv[3]) {
      songTitle = process.argv[3];
    } else {
      songTitle = "The Sign Ace of Base";
    }

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

      console.log("Track Name: " + data.tracks.items[0].name);
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Preview: " + data.tracks.items[0].preview_url);
      console.log("Album: " + data.tracks.items[0].album.name);
    });
    break;
  case "movie-this":
    break;
  case "do-what-it-says":
    break;
  default:
    break;
}
