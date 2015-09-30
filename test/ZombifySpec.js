define(['Zombify'], function (Zombify) {

    var zombify;

    describe('Zombify', function () {

        beforeEach(function () {

            zombify = new Zombify();

        });

        it("lower-case 'r' at the end of words replaced with 'rh'", function () {
            expect(zombify.zombify('Webber')).toBe('Wrrbbrrrh');
            expect(zombify.zombify('rrr')).toContain('rh');
            expect(zombify.zombify('r')).not.toBe('r');

        });

        it("an 'a' or 'A' is replaced with 'hra'.", function (){
            expect(zombify.zombify('aA')).toBe('Hrahra');
            expect(zombify.zombify('no way!')).toContain('hra');
            expect(zombify.zombify('Aa')).not.toBe('Aa');
        });

        it("should capitalize the starts of sentences", function () {
            expect(zombify.zombify('hello')).toBe('Hello');
            expect(zombify.zombify('r')).toContain('R');
            expect(zombify.zombify('hi')).not.toBe('hi');
        });

        it("should replace 'e' or 'E' with 'rr'", function () {
            expect(zombify.zombify('eE')).toBe('Rrrr');
            expect(zombify.zombify('name')).toContain('rr');
            expect(zombify.zombify('Ee')).not.toBe('Ee');

        });

        it("should replace 'i' or 'I' with 'rrRr'", function () {
            expect(zombify.zombify('iI')).toBe('RrRrrrRr');
            expect(zombify.zombify('found it')).toContain('rrRr');
            expect(zombify.zombify('Ii')).not.toBe('Ii');
        });

        it("should replace 'o' or 'O' with 'rrrRr'", function () {
            expect(zombify.zombify('oO')).toBe('RrrRrrrrRr');
            expect(zombify.zombify('its Ok')).toContain('RrrRr');
            expect(zombify.zombify('Oo')).not.toBe('Oo');
        });

        it("should replace 'u' or 'U' with 'rrrrRr'", function () {
            expect(zombify.zombify('uU')).toBe('RrrrRrrrrrRr');
            expect(zombify.zombify('have fun')).toContain('rrrrRr');
            expect(zombify.zombify('Uu')).not.toBe('Uu');
        });

        it("should replace 'r' or 'R' with 'RR'", function () {
          expect(zombify.zombify('rR')).toBe('RRRR');
          expect(zombify.zombify('zombies! run!')).toContain('RR');
          expect(zombify.zombify('Rr')).not.toBe('Rr');
        });

        it("'f' or 'F' is replaced by 'ph'", function () {
            expect(zombify.zombify('fF')).toBe('Phph');
            expect(zombify.zombify('have fun')).toContain('ph');
            expect(zombify.zombify('Ff')).not.toBe('Ff');
        });

        it("Lowercase 'l' but not Uppercase 'L' is replaced by 'Llll'", function () {
          expect(zombify.zombify('lL')).toBe('LlllL');
          expect(zombify.zombify('I like that')).toContain('Llll');
          expect(zombify.zombify('l')).not.toBe('l');
        });

    });

});
