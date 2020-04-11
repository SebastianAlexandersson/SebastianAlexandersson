/* eslint-disable import/extensions */
import { createSelector } from 'reselect';
import { AppState } from '..';
import { IProducerState } from './producer.types';


const selectProducer = (state: AppState) => state.producer;


export const selectProducerProducts = createSelector(
  [selectProducer],
  (producer: IProducerState) => producer.products,
);

export const selectProducerIsLoading = createSelector(
  [selectProducer],
  (producer: IProducerState) => producer.loading,
);
