import React from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import database from './database'

const Card = (props) => {
  return (
    <div>
      <div id={props.id} className='ml-8 relative bg-white rounded-xl' style={{ width: '380px', height: '320px', paddingTop: '5px' }}>
        <div className='mt-8 ml-6 mr-12'>
          {props.content}
        </div>
        <h2 className='text-2xl font-bold ml-6 mr-12'>{props.title}</h2>
        <h2 className='mt-2 ml-6 mr-12 mb-12'>{props.subtitle}</h2>
        <br />
        <div className='absolute bottom-1 right-4 mb-8'>
          <IoIosAddCircle size={34} />
        </div>
      </div>
    </div>
  );
}

const CardList = () => {
  return (
    <div className='card-flex'>
      {database.map(item => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default CardList; 
