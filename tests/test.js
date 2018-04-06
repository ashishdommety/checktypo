const mocha = require("mocha");
const chai = require("chai").should();

describe("Random tests", function(){
  it("a random test", function(){
    (10).should.be.a.('number');
  })
})