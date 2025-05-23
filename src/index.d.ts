// index.d.ts

// === Generic Guards ===
export function is<T>(x: unknown, constructor: new (...args: any[]) => T): x is T;
export function assertType<T>(x: unknown, constructor: new (...args: any[]) => T): asserts x is T;

// === is namespace ===
export namespace is {
  // typeof-based
  function string(x: unknown): x is string;
  function number(x: unknown): x is number;
  function boolean(x: unknown): x is boolean;
  function bigint(x: unknown): x is bigint;
  function symbol(x: unknown): x is symbol;
  function undefined(x: unknown): x is undefined;
  function func(x: unknown): x is (...args: any[]) => any;

  // instanceof-based
  function textNode(x: unknown): x is Text;
  function element(x: unknown): x is Element;
  function htmlElement(x: unknown): x is HTMLElement;
  function inputEvent(x: unknown): x is InputEvent;
  function keyboardEvent(x: unknown): x is KeyboardEvent;
  function mouseEvent(x: unknown): x is MouseEvent;
  function focusEvent(x: unknown): x is FocusEvent;
  function formData(x: unknown): x is FormData;
  function comment(x: unknown): x is Comment;
  function document(x: unknown): x is Document;
  function node(x: unknown): x is Node;
  function window(x: unknown): x is Window;
  function file(x: unknown): x is File;
  function fileList(x: unknown): x is FileList;
  function image(x: unknown): x is HTMLImageElement;
  function blob(x: unknown): x is Blob;
  function canvas(x: unknown): x is HTMLCanvasElement;
  function video(x: unknown): x is HTMLVideoElement;
  function audio(x: unknown): x is HTMLAudioElement;
  function date(x: unknown): x is Date;
  function regexp(x: unknown): x is RegExp;
  function map(x: unknown): x is Map<any, any>;
  function set(x: unknown): x is Set<any>;
  function weakMap(x: unknown): x is WeakMap<any, any>;
  function weakSet(x: unknown): x is WeakSet<any>;
  function arrayBuffer(x: unknown): x is ArrayBuffer;
  function dataView(x: unknown): x is DataView;
  function promise(x: unknown): x is Promise<any>;
  function error(x: unknown): x is Error;
  function headers(x: unknown): x is Headers;
  function request(x: unknown): x is Request;
  function response(x: unknown): x is Response;
  function url(x: unknown): x is URL;
  function urlSearchParams(x: unknown): x is URLSearchParams;
  function worker(x: unknown): x is Worker;
  function sharedWorker(x: unknown): x is SharedWorker;
  function broadcastChannel(x: unknown): x is BroadcastChannel;
  function intlDateTimeFormat(x: unknown): x is Intl.DateTimeFormat;
  function intlNumberFormat(x: unknown): x is Intl.NumberFormat;
  function intlCollator(x: unknown): x is Intl.Collator;

  // manual guards
  function numberSafe(x: unknown): x is number;
  function array(x: unknown): x is any[];
  function object(x: unknown): x is Record<string, any>;
  function defined<T>(x: T | null | undefined): x is T;
  function nullish(x: unknown): x is null | undefined;
  function contentEditable(x: unknown): x is HTMLElement;

  // derived value checks
  function truthy(x: unknown): boolean;
  function falsy(x: unknown): boolean;
  function emptyString(x: unknown): x is '';
  function nonEmptyString(x: unknown): x is string;
  function positiveNumber(x: unknown): x is number;
  function negativeNumber(x: unknown): x is number;
  function integer(x: unknown): x is number;
  function finite(x: unknown): x is number;
}

// === assertType namespace ===
export namespace assertType {
  function string(x: unknown): asserts x is string;
  function number(x: unknown): asserts x is number;
  function boolean(x: unknown): asserts x is boolean;
  function bigint(x: unknown): asserts x is bigint;
  function symbol(x: unknown): asserts x is symbol;
  function undefined(x: unknown): asserts x is undefined;
  function func(x: unknown): asserts x is (...args: any[]) => any;

  function array(x: unknown): asserts x is any[];
  function numberSafe(x: unknown): asserts x is number;
  function object(x: unknown): asserts x is Record<string, any>;
  function defined<T>(x: T | null | undefined): asserts x is T;
  function nullish(x: unknown): asserts x is null | undefined;

  function promise(x: unknown): asserts x is Promise<any>;
  function date(x: unknown): asserts x is Date;
  function error(x: unknown): asserts x is Error;

  function truthy(x: unknown): asserts x is boolean;
  function falsy(x: unknown): asserts x is boolean;
  function positiveNumber(x: unknown): asserts x is number;
  function negativeNumber(x: unknown): asserts x is number;
  function integer(x: unknown): asserts x is number;
  function finite(x: unknown): asserts x is number;
}

// === describe namespace ===
export namespace describe {
  function value(x: unknown): string;
}
