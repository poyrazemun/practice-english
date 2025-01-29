import React from 'react';
import ExerciseTemplate from '../ExerciseTemplate';
import { exerciseData } from '../../data/exerciseData';

function FutureSimpleExercises() {
  return (
    <ExerciseTemplate 
      exercises={exerciseData.futureSimple.exercises}
      tenseName="Future Simple"
    />
  );
}

export default FutureSimpleExercises; 