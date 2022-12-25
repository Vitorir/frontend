const funcs = []
const teste = [5, 'joao', true, 2, 'yep']

for (let index = 0; index < 10; index++) {
    funcs.push(function() {
        console.log(index)
    })
}

funcs[2]()
funcs[8]()