/**
 * Created by bernhard on 4/11/14.
 */

// 1. naam van uw suite

// 2. js functie met tests
describe("Calculator tests", function(){
    var calc;
    beforeEach(function(){
        calc = new Calculator();
    });

    //of calculator een bestaand bestand is
    it("should be a calculator", function(){
        expect(calc).toBeDefined();
        //expect(calc).toBe("Calculator");
    });

    it("should be able to add 1 + 1", function(){
        expect(calc.add(1,1)).toBe(2);
    });

    it("should be able to divide 8 / 4", function(){
        expect(calc.divide(8,4)).toBe(2);
    });
});