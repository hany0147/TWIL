/**
 * Template Literal
 */
type CodeFactory = 'Code Factory';

// Uppercase
type codeFactoryUpper = Uppercase<CodeFactory>;

// Lowercase
type codeFactoryLower = Lowercase<codeFactoryUpper>;

// Capitalize
type codeFactoryCapital = Capitalize<codeFactoryLower>;

// Uncapitalize
type codeFactoryUnCapital = Uncapitalize<codeFactoryCapital>;

