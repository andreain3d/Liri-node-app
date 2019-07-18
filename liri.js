require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var moment = require("moment");

var spotify = new Spotify(keys.spotify);
var searchTerms = "";
var cmdToExecute = "";

var cmdOptions = function(cmdToExecute, searchTerms) {
  switch (cmdToExecute) {
    case "concert-this":
      var artistName = "";
      if (searchTerms) {
        artistName = searchTerms;
      } else {
        artistName = "Vampire Weekend";
      }

      var bandsQueryUrl =
        "https://rest.bandsintown.com/artists/" +
        artistName +
        "/events?app_id=" +
        keys.bandsintown.BIT_ID;

      axios
        .get(bandsQueryUrl)
        .then(function(response) {
          for (i = 0; i < response.data.length; i++) {
            console.log("----------------------------------");
            console.log("Venue: " + response.data[i].venue.name);
            var region = "";
            if (response.data[i].venue.region) {
              region = response.data[i].venue.region + ", ";
            }
            console.log(
              "Location: " +
                response.data[i].venue.city +
                ", " +
                region +
                response.data[i].venue.country
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
      if (searchTerms) {
        songTitle = searchTerms;
      } else {
        songTitle = "The Sign Ace of Base";
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
      if (searchTerms) {
        movieTitle = searchTerms;
      } else {
        movieTitle = "Mr. Nobody";
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
    default:
      break;
  }
};

if (process.argv[2] === "do-what-it-says") {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    } else {
      var fileData = data.split(",");
      cmdToExecute = fileData[0];
      searchTerms = fileData[1];
    }
  });
} else {
  cmdToExecute = process.argv[2];
  searchTerms = process.argv[3];

  for (i = 4; i < process.argv.length; i++) {
    searchTerms = searchTerms + " " + process.argv[i];
  }
}

cmdOptions(cmdToExecute, searchTerms);
