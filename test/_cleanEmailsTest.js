const mocha = require("mocha");
const chai = require("chai").should();
const cleanEmails = require("../helpers/_cleanEmails");

describe("Clean Emails: ", function(){
    it("Returns an array", function(){
      cleanEmails(['hello@hello.com']).should.an('array');
    })
    it("Removes all Emails", function(){
      cleanEmails(['qda','hello@hello.com']).should.deep.equal(['qda']);
    })
    it("Doesnt remove other characters", function(){
      cleanEmails(['check@hello123.com']).should.deep.equal([]);
    })
    it("Should check if array remains unaffected", function(){
      cleanEmails(['hello']).should.deep.equal(['hello']);
    })
})