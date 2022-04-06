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
    
    it('Test003_Filter in the list',()=>{
        let name = ["Jackson","Rob","Jack","Wilson","John"]
        let newName = name.filter((fil)=> fil.includes('Jack'))
        let count = newName.length
        console.log(newName)
       assert.equal(count,2)
       // added
    })
})