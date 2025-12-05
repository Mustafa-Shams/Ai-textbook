import React, {useState} from 'react';
import styles from './styles.module.css';

export default function PersonalizationToggle() {
  const [difficulty, setDifficulty] = useState('beginner');

  return (
    <div className={styles.personalizationContainer}>
      <strong>Difficulty:</strong>
      <div className={styles.toggle}>
        <label>
          <input
            type="radio"
            name="difficulty"
            value="beginner"
            checked={difficulty === 'beginner'}
            onChange={() => setDifficulty('beginner')}
          />
          Beginner
        </label>
        <label>
          <input
            type="radio"
            name="difficulty"
            value="expert"
            checked={difficulty === 'expert'}
            onChange={() => setDifficulty('expert')}
          />
          Expert
        </label>
      </div>
    </div>
  );
}
