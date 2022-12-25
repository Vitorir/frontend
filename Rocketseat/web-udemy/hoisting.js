function varvar() {
    console.log('a  = ' + a)
    var a = 2
    console.log('a  = ' + a)    
}

varvar()

function varlet() {
    console.log('a  = ' + a)
    let a = 2
    console.log('a  = ' + a)
}

varlet()

// hoisting is the js property of moving declarations to the top