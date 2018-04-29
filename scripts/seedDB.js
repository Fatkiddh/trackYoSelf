const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Tracks collection and inserts the tracks below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/treatYoSelf"
);

const trackSeed = [
  {
    title: "journal title 1",
    entry: "journal entry 1",
    date: 'Mon Jan 02 2012 00:00:00 GMT+0100 (CET)',
    epoch: 1525040314918,
    anger: 0.5,
    joy: 0.4,
    fear: 0.3,
    sadness: 0.2,
    surprise: 0.1,
    account: "5adeb001dc165d105f0efcf9"
   },
  {
    title: "journal title 2",
    entry: "journal entry 2",
    date: 'Mon Jan 02 2012 00:00:00 GMT+0100 (CET)',
    epoch: 1525040314918,
    anger: 0.1,
    joy: 0.2,
    fear: 0.2,
    sadness: 0.4,
    surprise: 0.5,
    account: "5adeb001dc165d105f0efcf9"
  },
  {
    title: "long journal title",
    entry: "Lorem ipsum dolor amet ennui cold-pressed green juice crucifix salvia stumptown health goth. Godard adaptogen ugh readymade master cleanse keffiyeh vexillologist live-edge lomo meh squid etsy mustache raw denim. Next level succulents selfies keytar, vaporware meditation umami hot chicken. Before they sold out PBR&B four loko, YOLO blue bottle hot chicken actually yuccie hoodie brooklyn asymmetrical tumblr letterpress health goth kogi. Trust fund flexitarian semiotics fam live-edge palo santo. Lumbersexual yr everyday carry tousled PBR&B, master cleanse tacos plaid jean shorts migas pinterest pickled irony. Plaid blog YOLO fam four dollar toast, hammock coloring book trust fund man bun microdosing. Polaroid blue bottle offal microdosing mlkshk, hoodie hell of food truck street art cornhole art party. Fanny pack slow-carb thundercats iPhone glossier direct trade drinking vinegar health goth blue bottle single-origin coffee roof party. Pour-over venmo four dollar toast raclette cold-pressed, marfa brunch green juice gochujang ugh pok pok pinterest lyft. Wolf stumptown authentic, slow-carb venmo prism affogato letterpress chartreuse. Cred yr lomo salvia thundercats post-ironic. Kombucha mixtape asymmetrical chartreuse offal, seitan waistcoat butcher fanny pack hoodie. Fam brunch chia, air plant lyft roof party fanny pack pickled flannel. Offal bitters keffiyeh church-key lo-fi slow-carb listicle banjo. Tousled godard artisan polaroid swag plaid activated charcoal actually. Hell of mlkshk post-ironic migas put a bird on it flannel tousled crucifix woke hoodie microdosing locavore 8-bit retro thundercats. Pok pok iPhone etsy art party flexitarian distillery gastropub shabby chic master cleanse paleo enamel pin humblebrag woke af. Lumbersexual cornhole blog, sustainable yuccie stumptown irony disrupt neutra. Godard intelligentsia craft beer, kitsch sustainable YOLO wayfarers trust fund actually raw denim pinterest vice whatever. Bespoke microdosing la croix ennui flexitarian ethical. Edison bulb keytar fingerstache chambray, gochujang yr scenester. Dreamcatcher pitchfork church-key organic, 8-bit cloud bread single-origin coffee four dollar toast PBR&B pop-up. Hexagon cliche normcore YOLO, prism man braid waistcoat 90's iceland kogi butcher vinyl shaman. PBR&B kombucha activated charcoal kinfolk vape drinking vinegar fashion axe offal tote bag yr post-ironic iceland vaporware selvage etsy.",
    date: "Mon Jan 02 2012 00:00:00 GMT+0100 (CET)",
    epoch: 1525040314918,
    anger: 0.3,
    joy: 0.3,
    fear: 0.3,
    sadness: 0.3,
    surprise: 0.3,
    account: "5adeb001dc165d105f0efcf9"
  }
];

db.Track
  .remove({})
  .then(() => db.Track.collection.insertMany(trackSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });