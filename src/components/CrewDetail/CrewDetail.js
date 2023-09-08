import './CrewDetail.scss';

const CrewDetail = ({ person }) => {
  return (
    <div className='crew-detail'>
      <p className='crew-detail__name'>{person?.name}</p>
      <p className='crew-detail__job'>{person?.job}</p>
    </div>
  );
};

export default CrewDetail;
