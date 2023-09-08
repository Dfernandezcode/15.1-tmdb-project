import './Crew.scss';
import React from 'react';
import CrewDetail from '../../components/CrewDetail/CrewDetail';

const Crew = ({ personsData }) => {
  const importantJobs = ['Editor', 'Executive Producer', 'Writer', 'Sound', 'Costume & Make-Up', 'Director', 'Screenplay', 'Story', 'Novel', 'Characters'];
  const crew = personsData?.crew?.map((element) => element);
  const crewFilter = crew?.filter((person) => importantJobs.includes(person.job));

  return (
    <div className='item-detail__cast-wrap'>
      <div className='item-detail__crew-container'>
        {crewFilter?.map((person) => (
          <CrewDetail key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};
export default Crew;
