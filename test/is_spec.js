import {expect, assert} from 'chai';

import {Map, List, is} from 'immutable';

describe('is', ()=>{
    it('Map and List equals test', ()=>{
        const list = List.of(1,2,3);
        const map = Map({a:1,b:2,c:3});
        
        assert.isFalse(is(list, map));
    });
    it('deeply immutable Maps are equal', ()=>{
        const map1 = Map({a:Map({b:1}), c:List.of(1,2)});
        const map2 = Map({a:Map({b:1}), c:List.of(1,2)});
        
        assert.isTrue(is(map1, map2));
    });
    
    it('different immutable and plain js objects are not equal', ()=> {
       const map1 = Map({a:1, b:{c:4}});
        const map2 = Map({a:1,b:Map({c:4})});
        
        assert.isFalse(is(map1, map2));
    });
})