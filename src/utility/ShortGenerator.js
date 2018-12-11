import shortid from 'shortid'

class ShortGenerator {
    generate = function() {
        return shortid.generate()
    }
}

export default ShortGenerator