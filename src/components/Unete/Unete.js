import './Unete.scss';
import { FormattedMessage } from 'react-intl';
const Unete = () => {
  return (
    <div className='unete__wrap'>
      <div className='unete'>
        <div className='unete__data'>
          <h3 className='unete__title'>
            <FormattedMessage id='unete_title' />
          </h3>
          <p className='unete__text'>
            {' '}
            <FormattedMessage id='unete_text' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Unete;
