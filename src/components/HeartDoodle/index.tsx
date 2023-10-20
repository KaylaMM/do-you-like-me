import { useContext } from 'react';
import { AppContext } from '@context';
import Image from 'next/image';
import heartDoodle from '@public/noun-heart-doodle-335497.svg';
import styles from '@styles/HeartDoodle.module.scss';
import { Answers } from '@types';

const HeartDoodle = ()  => {

  const { selectedAnswer } = useContext(AppContext);

  const doodleColor = () => (selectedAnswer === Answers.YES) ? 'blue' : (selectedAnswer === Answers.NO) ? 'red' : (selectedAnswer === Answers.MAYBE) ? 'purple' : ''

  return (
    <Image
      className={styles.heartDoodle}
      src={heartDoodle}
      alt="heartDoodle"
      style={{backgroundColor: doodleColor()}}
    />
  );
};

export default HeartDoodle;
