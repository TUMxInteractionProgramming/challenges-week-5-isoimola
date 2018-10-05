/**global array for channels */



/** #7 #chlob #new: the new yummy channel */

var yummy = {
    name: "#Yummy",
    createdOn: new Date(2016, 03, 01), /* month 0 is jan. */
    createdBy: "minus.plus.yummy",
    starred: false,
    expiresIn: 100,
    messageCount: 999
};

/** #7 #chlob #fve: the other channels */

var sevencontinents = {
    name: "#SevenContinents",
    createdOn: new Date(2016, 03, 02), /* month 0 is jan. */
    createdBy: "cheeses.yard.applies",
    starred: true,
    expiresIn: 60,
    messageCount: 5
};

var killerapp = {
    name: "#KillerApp",
    createdOn: new Date(2016, 08, 30), /* month 0 is jan. */
    createdBy: "lodge.bits.fake",
    starred: false,
    expiresIn: 1,
    messageCount: 10351
};

var firstpersononmars = {
    name: "#FirstPersonOnMars",
    createdOn: new Date(2016, 08, 28), /* month 0 is jan. */
    createdBy: "snipped.atom.grid",
    starred: true,
    expiresIn: 30003,
    messageCount: 2424
};

var octoberfest = {
    name: "#Octoberfest",
    createdOn: new Date(2016, 08, 25), /* month 0 is jan. */
    createdBy: "vocally.clearly.crawled",
    starred: false,
    expiresIn: 60,
    messageCount: 321
};


var channels = [yummy, sevencontinents, killerapp, firstpersononmars, octoberfest];

//new, favorites descending New above old, more above less, and starred above unstarred.



var byDate = channels.slice(0);
function compareCreatedOn(a,b) {
    if (a.createdOn < b.createdOn) {
        return -1; 
    } else {
        return 1; 
    }
}
channels.sort(compareCreatedOn);
console.log(byDate);

var byFavourite = channels.slice(0);
function compareMessageCount(a, b) {
    if (a.messageCount < b.messageCount) {
        return -1;
    } else {
        return 1;
    }
}
channels.sort(compareMessageCount);
console.log(byFavourite);

var byStarred = channels.slice(0);
function compareStarred(a, b) {
    if (a.starred = true) {
        return -1;
    } else {
        return 1;
    }
}
channels.sort(compareStarred);
console.log(byStarred);