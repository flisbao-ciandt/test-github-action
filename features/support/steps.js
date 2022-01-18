import { Given, When, Then } from '@cucumber/cucumber'
import assert from 'assert'

const customAssert = assert.strict

Given("a variable set to {int}", function (number) {
    this.setTo(number);
});
  
When("I increment the variable by {int}", function (number) {
    this.incrementBy(number);
});
  
Then("the variable should contain {int}", function (number) {
    customAssert.equal(this.variable, number);
});