import { assert } from 'chai';
import { padNumber } from '../src/utils/transform';

describe('Test padNumber', function() {
    
    it('Numbers < 10 padded.', function() {
        assert.equal(padNumber(-4),"-04");
        assert.equal(padNumber(4),"04");
    });

    it('Numbers >= 10 padded.', function() {
        assert.equal(padNumber(44),"44");
        assert.equal(padNumber(-144),"-144");
    });

});