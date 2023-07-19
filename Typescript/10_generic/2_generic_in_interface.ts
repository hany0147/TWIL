/**
 * Generic in Interface
 */

interface Cache<T>{
  date: T[];
  lastUpdate: Date;
}

const cache1: Cache<string> = {
  date: ['date1', 'date2'],
  lastUpdate: new Date(),
}

// const cache2: Cache = {
//   date: [1, 2345, 23],
//   lastUpdate: new Date(),
// }


// default값을 정해줄 수 있음
interface DefaultGeneric<T = string>{
  date: T[];
}

const cache3: DefaultGeneric = {
  date: ['123', '1345']
}