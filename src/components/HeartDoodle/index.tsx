import { useContext } from 'react';
import { AppContext } from '@context';
import Image from 'next/image';
import heartDoodle from '@public/noun-heart-doodle-335497.svg';
import styles from '@styles/HeartDoodle.module.scss';
import { Answers } from '@types';

const HeartDoodle = ()  => {

  const { selectedAnswer } = useContext(AppContext);

  const doodleColor = () => {
    if (selectedAnswer === Answers.YES){
      return 'red'
    } else if (selectedAnswer === Answers.NO){
      return 'blue'
    } else if (selectedAnswer === Answers.MAYBE){
      return 'purple'
    }
  }

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
