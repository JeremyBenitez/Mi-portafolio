import React from 'react';
import parse from 'html-react-parser';

export const ResumeItem = ({icon, year, title, desc}) => {
  return (
    <div className="resume__item">
        <div className="resume__icon">{icon}</div>

        <span className='resume__date'>{year}</span>
        <h3 className="resume_subtitle">{parse(title)}</h3>
        <p className='resume__descirption'>{desc}</p>
    </div>
  )
}

export default ResumeItem;