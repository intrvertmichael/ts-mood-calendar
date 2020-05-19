
import React from 'react';

const head = (props:any) =>{

    console.log(props);

    return (
    <div className='container'>
      <h1> {props.name} </h1>
      <p> this was written in {props.lang}. </p>
      <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem iste accusamus eum repudiandae quos harum deserunt libero odit facere omnis, quod, praesentium ut rem accusantium magnam voluptatem obcaecati perferendis ipsa!
      </p>
    </div>
    )
}

export default head;