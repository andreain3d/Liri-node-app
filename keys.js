console.log("this is loaded");

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.bandsintown = process.env.BIT_ID;

[
  {
    album: {
      album_type: "album",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/0ECwFtbIWEVNwjlrfc6xoL"
          },
          href: "https://api.spotify.com/v1/artists/0ECwFtbIWEVNwjlrfc6xoL",
          id: "0ECwFtbIWEVNwjlrfc6xoL",
          name: "Eagles",
          type: "artist",
          uri: "spotify:artist:0ECwFtbIWEVNwjlrfc6xoL"
        }
      ],
      available_markets: [],
      external_urls: {
        spotify: "https://open.spotify.com/album/2widuo17g5CEC66IbzveRu"
      },
      href: "https://api.spotify.com/v1/albums/2widuo17g5CEC66IbzveRu",
      id: "2widuo17g5CEC66IbzveRu",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/a5d370a3ea82efa63784521a1d7352db0a7a4d3a",
          width: 640
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/bbfa72f88af20c15aa7b56e1aea8682221eab243",
          width: 300
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/3cbe9c0160c600e14d5c24696cade21e80048e59",
          width: 64
        }
      ],
      name: "Hotel California (2013 Remaster)",
      release_date: "1976",
      release_date_precision: "year",
      total_tracks: 9,
      type: "album",
      uri: "spotify:album:2widuo17g5CEC66IbzveRu"
    },
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0ECwFtbIWEVNwjlrfc6xoL"
        },
        href: "https://api.spotify.com/v1/artists/0ECwFtbIWEVNwjlrfc6xoL",
        id: "0ECwFtbIWEVNwjlrfc6xoL",
        name: "Eagles",
        type: "artist",
        uri: "spotify:artist:0ECwFtbIWEVNwjlrfc6xoL"
      }
    ],
    available_markets: [],
    disc_number: 1,
    duration_ms: 391376,
    explicit: false,
    external_ids: { isrc: "USEE11300353" },
    external_urls: {
      spotify: "https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv"
    },
    href: "https://api.spotify.com/v1/tracks/40riOy7x9W7GXjyGp4pjAv",
    id: "40riOy7x9W7GXjyGp4pjAv",
    is_local: false,
    name: "Hotel California - 2013 Remaster",
    popularity: 80,
    preview_url:
      "https://p.scdn.co/mp3-preview/50e82c99c20ffa4223e82250605bbd8500cb3928?cid=ca0f55c9a9934314b165a9af30552cf8",
    track_number: 1,
    type: "track",
    uri: "spotify:track:40riOy7x9W7GXjyGp4pjAv"
  }
];
