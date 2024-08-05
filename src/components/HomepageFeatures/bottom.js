import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';


export default function BottomFeatures() {
  function Feature({ buttonText, onButtonClick}) {
    return (
    //   <div className={clsx('col col--3')}>
        <div className={clsx('button-container', styles.fadeIn)}> 
        {buttonText && (
          <button
          className={clsx('button button--primary', styles.button, 'hvr-shutter-out-horizontal')}
          onClick={onButtonClick}
        >
            {buttonText}
          </button>
          )}
        </div>
    //   </div>
    );
  }

  return (

          <Feature
           buttonText="INTRODUCE"
           onButtonClick={() => alert('Button Clicked!')}
          />

  );
}

