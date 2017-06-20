const {expect} = require('chai')
const query = require('../database')

describe('itemsInSection("bulk")', () => {
    it('should return iterm "Flour", "Pasta", "Rice"', done => {
        query.itemsInSection("bulk")
        .then(data => {
            expect(data[0].name).to.equal('Flour')
            expect(data[1].name).to.equal('Pasta')
            expect(data[2].name).to.equal('Rice')
            done()
        })
        .catch(console.log)
    })
})

describe('cheapItems()', () => {
    it('should return the item "Fish" as the first item and "Honey" as the last item', done => {
        query.cheapItems()
        .then(data => {
            expect(data[0].name).to.equal('Fish')
            expect(data[data.length - 1].name).to.equal('Honey')
            done()
        })
        .catch(console.log)
    })
})

describe('countItemsInSection("bulk")', () => {
    it('should return 5', done => {
        query.countItemsInSection('packaged')
        .then(data => {
            expect(data[0].count).to.equal('5')
            done()
        })
        .catch(console.log)
    })
})