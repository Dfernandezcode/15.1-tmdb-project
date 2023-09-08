import './Score.scss';

const Score = ({ porcentVote, colorVote }) => {
  return (
    <div className='score__exterior-circle'>
      <div className={`score__interior-circle ${colorVote}`}>
        <p className='score__vote'>
          {porcentVote}
          <span className='score__span'>%</span>
        </p>
      </div>
    </div>
  );
};

export default Score;
