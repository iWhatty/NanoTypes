// index.d.ts

export function is<T>(x: unknown, constructor: new (...args: any[]) => T): x is T;

export namespace is {
    function string(x: unknown): x is string;
    function number(x: unknown): x is number;
    function boolean(x: unknown): x is boolean;
    function defined<T>(x: T | null | undefined): x is T;
    function nullish(x: unknown): x is null | undefined;
    function array(x: unknown): x is any[];
    function object(x: unknown): x is Record<string, any>;
    function func(x: unknown): x is (...args: any[]) => any;
    function textNode(x: unknown): x is Text;
    function element(x: unknown): x is Element;
    function htmlElement(x: unknown): x is HTMLElement;
    function inputEvent(x: unknown): x is InputEvent;
    function event(x: unknown): x is Event;
    function contentEditable(x: unknown): x is HTMLElement;
}

export namespace describe {
    function value(x: unknown): string;
}

export function assertType<T>(x: unknown, constructor: new (...args: any[]) => T): asserts x is T;

export namespace assertType {
    function string(x: unknown): asserts x is string;
    function number(x: unknown): asserts x is number;
    function boolean(x: unknown): asserts x is boolean;
    function array(x: unknown): asserts x is any[];
    function func(x: unknown): asserts x is (...args: any[]) => any; 
    function htmlElement(x: unknown): asserts x is HTMLElement;
    function textNode(x: unknown): asserts x is Text;
}
