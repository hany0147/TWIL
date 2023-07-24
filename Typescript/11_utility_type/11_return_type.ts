/**
 * Return Type
 */
type ReturnTypeSample = ReturnType<()=>string>;

type FunctionSign = (x: number, y: number) => number;
type ReturnType2 = ReturnType<FunctionSign>;