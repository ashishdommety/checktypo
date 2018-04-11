const mocha = require("mocha");
const chai = require("chai").should();
const spellCheck = require("../helpers/_spellCheck");
 
// using typo-js
const Typo = require("typo-js");
const dictionary = new Typo('en_US');

describe("Check Spelling: ", function(){
    it("Returns an array", function(){
      spellCheck(['hello','yolo']).should.an('array');
    })
    it("Returns all misspelled words", function(){
      spellCheck(['asdas','hello']).should.deep.equal(['asdas']);
    })
    it("Doesnt remove other characters", function(){
      spellCheck(['check','mango','asdasdsad','hello']).should.deep.equal(['asdasdsad']);
    })
    it("Should return 'typo free!' if all spellings are correct", function(){
      spellCheck(['hello']).should.deep.equal('typo free!');
    })
    it("Should check if array remains unaffected", function(){
      spellCheck(['asdj']).should.deep.equal(['asdj']);
    })

})