/**
 * Extract Type
 */
type OnlyString = Extract<string | boolean | number, string>

type OnlyFunction = Extract<string | (() => void), Function>