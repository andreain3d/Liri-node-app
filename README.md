# Liri-node-app

Liri is a CLI application that takes in user commands to look up info about either concerts, songs, or movies as well as search terms for the artist, song title, or movie title. It retrieves the info through calls to several APIs (bands in town, Spotify, and OMDB) and logs the information in an easy-to-read format to the console. It also has a do-what-it-says command that reads a command and search terms from an external .txt file.

## Structure

The app takes in the arguments from the command line, and checks if the command is do-what-it-says. If it is, it extracts the command and search terms from the text file and saves them to variables. If not, it pulls the command and search terms from the command line directly and sets them to variables.

It then runs the main switch function using the input variables of the command and search terms.  
 *If the command is concert-this, it searches the Bands in Town API and returns upcoming concerts based on the search terms as an artist.  
 *If the command is spotify-this-song, it searches the Spotify API and returns track data for based on the search terms as a song title.
\*If the command is movie-this, it searches the OMDB API and returns movie data for a movie based on the search terms as a movie title.

## To Run This App

Liri takes in two parameters seperated by spaces like so:

node liri <command> <search terms>

The valid commands are concert-this, spotify-this-song, and movie-this. The search terms can be as many words as necessary, seperated by spaces. for example:

node liri spotify-this-song hotel california

If no search terms are provided, the app defaults to predefined searches.

To read and execute the command in the external text file titled random.txt, simply call the command do-what-it-says with no search terms:

node liri do-what-it-says

### Technologies Used

Node
JS ES6
Node packages:
fs
moment
axios
node Spotify API
APIs:
Spotify
Bands in Town
OMDB

### Credits

Code by Andrea Nicholson.
