import{assert} from 'chai'
describe('Scenario_1_Part C assignment',()=>{
    it('Test001_Length of the list',()=>{
        let name = ["Jackson","Rob","Jack","Wilson","John"]
        let len = name.length
        assert.equal(len,5,'Test case 001 pass')
    })

    it('Test002_Daniel in the list',()=>{
        let name = ["Jackson","Rob","Jack","Wilson","John"]
        
        assert.include(name,'Daniel','contains')
    })
})