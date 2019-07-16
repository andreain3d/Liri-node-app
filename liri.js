require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var moment = require("moment");

var spotify = new Spotify(keys.spotify);

switch (process.argv[2]) {
  case "concert-this":
    var artistName = "";
    if (process.argv[3]) {
      artistName = process.argv[3];
    } else {
      artistName = "Vampire Weekend";
    }

    for (i = 4; i < process.argv.length; i++) {
      artistName = artistName + " " + process.argv[i];
    }

    var bandsQueryUrl =
      "https://rest.bandsintown.com/artists/" +
      artistName +
      "/events?app_id=codingbootcamp";

    axios
      .get(bandsQueryUrl)
      .then(function(response) {
        for (i = 0; i < response.data.length; i++) {
          console.log("----------------------------------");
          console.log("Venue: " + response.data[i].venue.name);
          console.log(
            "Location: " +
              response.data[i].venue.city +
              ", " +
              response.data[i].venue.region
          );
          console.log(
            "Date: " +
              moment(response.data[i].datetime).format("MM/DD/YYYY h:mm a")
          );
        }
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });

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
    var movieTitle = "";
    if (process.argv[3]) {
      movieTitle = process.argv[3];
    } else {
      movieTitle = "Mr. Nobody";
    }

    for (i = 4; i < process.argv.length; i++) {
      movieTitle = movieTitle + " " + process.argv[i];
    }

    var queryUrl =
      "http://www.omdbapi.com/?t=" +
      movieTitle +
      "&y=&plot=short&apikey=trilogy";

    axios
      .get(queryUrl)
      .then(function(response) {
        console.log("Title: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log(
          "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value
        );
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });

    break;
  case "do-what-it-says":
    break;
  default:
    break;
}
