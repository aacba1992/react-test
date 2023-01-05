import React, { useState } from 'react'




export default function Test() {
    const [count, setCount] = useState(0);
    const TestDiv = ({ name, age }) => {
        console.log(name, age);
        return ` name : ${name} age : ${age}.`;
    }

    const CountDiv = ({ count }) => {
        return `count : ${count}`;
    }

    const ButtonDiv = (handlerOnClick) => {
        console.log(handlerOnClick);
        return <button onClick={() => handlerOnClick}>button</button>;
    }

    function handlerOnClick1() {
        console.log('123');
    }

    const handlerOnClick = () => (
        console.log('123'),
        setCount(count + 1)
    );
    return (
        <div>
            <TestDiv
                name='jimmy'
                age="23"
            />

            <br /><br />

            <CountDiv
                count={count}
            />

            <br /><br />

            <ButtonDiv
                handlerOnClick={handlerOnClick1()}
            />

        </div>
    )
}
