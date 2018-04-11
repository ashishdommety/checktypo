const mocha = require("mocha");
const chai = require("chai").should();
const cleanSymbols = require("../helpers/_cleanSpaces");

describe("Clean Spaces: ", function(){
  it("Returns an array", function(){
    cleanSymbols(['      qda  ']).should.an('array');
  })
  it("Removes all spaces", function(){
    cleanSymbols(['      qda  ']).should.deep.equal(['qda']);
  })
})