const assert = require("assert");
const mocha = require("mocha");

const scryfall = require("../build/scryfall");

describe("Scryfall", () => {
    describe("#allSets()", () => {
        it("Return an array of all available sets.", (done) => {
            scryfall.allSets((sets) => {
                assert.ok(sets.length > 0, "No sets were present in the response.");
                done();
            });
        });
    });

    describe("#autocomplete()", () => {
        it("Return an array of matching card names.", (done) => {
            scryfall.autocomplete("Jace", (matches) => {
                assert.ok(matches.length > 0, "No matches were present in the response.");
                done();
            });
        });
    });

    describe("#getCardByCollectorCode(string, number)", () => {
        it("Returns information about a particular card by it's set code and colector number.", (done) => {
            scryfall.getCard("e01", "1★", (err, card) => {
                if (err) {
                    assert.fail(null, err, err.message);
                } else {
                    assert.equal(card.name, "Because I Have Willed It", "The returned card is incorrect.");
                }
                done();
            });
        });
    });

    describe("#getCardByMultiverse(number)", () => {
        it("Returns information about a particular card by it's multiverse id.", (done) => {
            scryfall.getCard(42069, "multiverse", (err, card) => {
                if (err) {
                    assert.fail(null, err, err.message);
                } else {
                    assert.equal(card.name, "Voidmage Apprentice", "The returned card is incorrect.");
                }
                done();
            });
        });
    });

    describe("#getCardByMtgo(number)", () => {
        it("Returns information about a particular card by it's mtgo id.", (done) => {
            scryfall.getCard(54957, "mtgo", (err, card) => {
                if (err) {
                    assert.fail(null, err, err.message);
                } else {
                    assert.equal(card.name, "Ghost Quarter", "The returned card is incorrect.");
                }
                done();
            });
        });
    });

    describe("#getCardByScryfall(string)", () => {
        it("Returns information about a particular card by it's scryfall id.", (done) => {
            scryfall.getCard("44012bb8-17b7-4b50-a796-662ef09bfc29", (err, card) => {
                if (err) {
                    assert.fail(null, err, err.message);
                } else {
                    assert.equal(card.name, "Bamboozle", "The returned card is incorrect.");
                }
                done();
            });
        }).timeout(0);
    });

    describe("#cardVersions()", () => {
        it("Return an array of cards with a specified name.", (done) => {
            scryfall.cardVersions("Forest", (cards) => {
                assert.ok(cards.length > 1, "Multiple versions of the specified card were not returned.");
                done();
            });
        }).timeout(0);
    });

    describe("#fromSet()", () => {
        it("Return an array of cards from the specified set.", (done) => {
            scryfall.fromSet("bfz", (cards) => {
                assert.ok(cards.length > 0, "No cards were found for the specified set.");
                done();
            });
        }).timeout(0);
    });
});
