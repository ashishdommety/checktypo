const mocha = require("mocha");
const chai = require("chai").should();
const cleanSymbols = require("../helpers/_cleanSymbols");

// Required packages for function
const Typo = require("typo-js");
const dictionary = new Typo('en_US');

describe("Clean Symbols Test:", function(){
  it("Returns an array", function(){
    cleanSymbols(['?.>,/.,qda/.,b']).should.an('array');
  })
  it("Cleans all symbols", function(){
    cleanSymbols(['?.>,/.,qda/.,b']).should.deep.equal(['       qda   b']);
  })
  it("Doesnt remove any letters or numbers from array", function(){
    cleanSymbols(['qdab123']).should.deep.equal(['qdab123']);
  })
  it("Creates empty array when only symbols exist", function(){
    cleanSymbols(['*&_)(']).should.deep.equal([]);
  })
})