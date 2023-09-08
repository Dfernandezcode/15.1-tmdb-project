import './Welcome.scss';
import { FormattedMessage } from 'react-intl';
const Welcome = () => {
  return (
    <div className='welcome__wrap'>
      <div className='welcome'>
        <div className='welcome__data'>
          <h3 className='welcome__title'>
            <FormattedMessage id='welcome_title' />
          </h3>
          <p className='welcome__text'>
            {' '}
            <FormattedMessage id='welcome_text' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
