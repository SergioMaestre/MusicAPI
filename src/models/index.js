const Album = require("./Album");
const Artist = require("./Artist");
const Genre = require("./Genre");
const Song = require("./Song");


//1:N
//Album -> Artist
Album.belongsTo(Artist)//? belongsTo: pertenece a
Artist.hasMany(Album)//? hasMany: tiene muchos

Song.belongsTo(Album)
Album.hasMany(Song)




//N:N
Genre.belongsToMany(Artist, {through: "genreArtist"} )
Artist.belongsToMany(Genre, {through: "genreArtist"} )

Song.belongsToMany(Artist, {through: "songArtists"})
Artist.belongsToMany(Song, {through: "songArtists"})

Song.belongsToMany(Genre, {through: "songGenre"})
Genre.belongsToMany(Song, {through: "songGenre"})


