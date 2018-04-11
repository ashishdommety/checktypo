const mocha = require("mocha");
const chai = require("chai").should();
const cleanSpaces = require("../helpers/_cleanSpaces");

describe("Clean Spaces: ", function(){
  it("Returns an array", function(){
    cleanSpaces(['      qda  ']).should.an('array');
  })
  it("Removes all spaces", function(){
    cleanSpaces(['      qda  ']).should.deep.equal(['qda']);
  })
  it("Doesnt remove other characters", function(){
    cleanSpaces(['123qda  ']).should.deep.equal(['123qda']);
  })
  it("splits a spaced word into two words in an array", function(){
    cleanSpaces(['hello world']).should.deep.equal(['hello','world']);
  })
  it("Should check if array remains unaffected", function(){
    cleanSpaces(['hello']).should.deep.equal(['hello']);
  })
})