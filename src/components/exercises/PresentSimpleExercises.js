import React from 'react';
import ExerciseTemplate from '../ExerciseTemplate';
import { exerciseData } from '../../data/exerciseData';

function PresentSimpleExercises() {
  return (
    <ExerciseTemplate 
      exercises={exerciseData.presentSimple.exercises}
      tenseName="Present Simple"
    />
  );
}

export default PresentSimpleExercises; 