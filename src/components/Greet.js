import React from 'react'
// using old fasion code for function
function Greet(props)
{
    console.log(props)
    return( //this is coding using JSX
    <div> 
        <h1>Hello { props.name } a.k.a {props.heroname}</h1>
        {props.dum}
        <p>Look forward</p>
    </div>
    )

}

// new es6 arrow functions for function declaration
// export const Greet = () => <h1>Helloe</h1>

// const Greet=() => { //this is coding using javascript
//     return React.createElement('div', null,React.createElement('h2',null, "Hello Haaaa"))
// }

export default Greet