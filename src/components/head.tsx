
import React from 'react';

interface Person {
  name:string,
  age:number,
  weight?:number,
  speak:(a:string)=>void
}

const head:React.FC<Person> = (props) =>{

    console.log(props);
    props.speak('is this working?')

    return (
    <div className='container'>
      <h1> {props.name} </h1>
      <p> I am {props.age} years old. </p>
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem iste accusamus eum repudiandae quos harum deserunt libero odit facere omnis, quod, praesentium ut rem accusantium magnam voluptatem obcaecati perferendis ipsa!
      </p>
    </div>
    )
}

export default head;