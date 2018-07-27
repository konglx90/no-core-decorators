# no-core-decorators
No Core Decorators

### requiredSelfFields

```js
// demo

class Model {
    constructor() {
        this.table = null
        this.identitytField = null
        /* ... */
    }
    
    query(sql, data) { /* ... */ }

    @requiredSelfFields({
        table: 'string',
    })
    find_by_id(id) {
        const table = this.table;
        const identitytField = this.identitytField || 'id';

        const sql = `select * from ?? where ${identitytField} = ? `

        return this.query(sql, [ table, id ])
    }
}

class Foo extends Model {
    constructor(props) {
        super(props)
        this.table = 'foo_table'
        this.identitytField = 'foo_id'
    }
}

const foo = new Foo()
// we will check some fields [table] in foo
foo.find_by_id(1).then(data => {
    console.log(data, 'find by id')
})

// or use assert
find_by_id() {
    assert.strictEqual(classOf(this.table), 'string')

    // ...
}

// AOP ...

```