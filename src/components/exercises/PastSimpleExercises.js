import React from 'react';
import ExerciseTemplate from '../ExerciseTemplate';
import { exerciseData } from '../../data/exerciseData';

function PastSimpleExercises() {
  return (
    <ExerciseTemplate 
      exercises={exerciseData.pastSimple.exercises}
      tenseName="Past Simple"
    />
  );
}

export default PastSimpleExercises; 