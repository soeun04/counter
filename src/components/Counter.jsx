import React, { useState } from 'react';
import styled from 'styled-components';

const Button=styled.button`
background:orange;
border-radius: 10px;
border: 2px solid  #000
color: #f00;
margin: 0 .5em;
padding: 10px 20px;
font-size: 30px;
`

const Container=styled.div`
    width: 400px;
    height: 200px;
    margin: 40px auto;
    padding: 20px 50px;
    border: 4px solid #000;
`
const Counter = () => {
    const [count, setCount]=useState(0)

    const increase= () => {
        setCount(count+1)
    }
    const decrease= () => {
        setCount(count+1)
    }
    return (
        <Container>
            <h2>{count}</h2>
            <Button onClick={decrease}>-</Button>
            <Button onClick={increase}>+</Button>
        </Container>
    );
};

export default Counter;