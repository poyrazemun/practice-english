import React from 'react';
import ExerciseTemplate from '../ExerciseTemplate';
import { exerciseData } from '../../data/exerciseData';

function PresentContinuousExercises() {
  return (
    <ExerciseTemplate 
      exercises={exerciseData.presentContinuous.exercises}
      tenseName="Present Continuous"
    />
  );
}

export default PresentContinuousExercises; 