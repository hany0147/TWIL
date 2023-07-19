/**
 * Generic in Type
 */
type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = '코드 팩토리';

// interface처럼 자동 유추 안됨
// const genericString2: GenericSimpleType = '코드 팩토리';


interface DoneState<T>{
  date: T[];
}

interface LoadingState{
  requestedAt: Date;
}

interface ErrorState{
  error: string;
}

type State1 = DoneState<string> | LoadingState | ErrorState;
type State2<T> = DoneState<T> | LoadingState | ErrorState;

let state: State2<string> = {
  date: ['12', '4'],
}