import {fromJS, Map, OrderedMap, List, Iterable} from 'immutable';
import {expect} from 'chai';

describe('fromJS', ()=> {
    it('without receiver test', ()=> {
        const jsObj = {a:{b:[1,2,3]}, c:12};
        const output = fromJS(jsObj);
        
        expect(output).to.equal(Map({
                a:Map({
                        b:List.of(1,2,3)
                    }), 
                c:12
            }));
    });
    it('receiver test', ()=>{
        const jsObj = {a:{b:[1,2,3]}, c:4};
        const output = fromJS(jsObj, (key, value) => {
            const indexed = Iterable.isIndexed(value);
            console.log(value + " indexed :" + indexed);
            return indexed ? value.toList() : value.toOrderedMap();
        })
        
        expect(output).to.equal(OrderedMap({
            a:OrderedMap({
                b: List.of(1,2,3)
            }),
            c:4
        }));
    })
})