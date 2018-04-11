const mocha = require("mocha");
const chai = require("chai").should();
const cleanNumbers = require("../helpers/_cleanNumbers");

describe("Clean Numbers:", function(){
    it("Returns an array", function(){
        cleanNumbers(['1234qda']).should.an('array');
      })
      it("Removes all numbers", function(){
        cleanNumbers(['123','hello']).should.deep.equal(['hello']);
      })
      it("Returns empty if all numbers are provided", function(){
        cleanNumbers(['12345']).should.deep.equal([]);
      })
      it("Should check if array remains unaffected", function(){
        cleanNumbers(['hello']).should.deep.equal(['hello']);
      })
})