// ./src/instanceof-map.js

// === Dynamic: "name → instanceof" ===
// This map defines common global and browser-native constructors
// that we expose as is.<type> shorthand guards.

export const instanceofMap = {
    // --- Core DOM Types ---
    element: Element,
    htmlElement: HTMLElement,
    textNode: Text,
    comment: Comment,
    document: Document,
    node: Node,
    window: Window,
  
    // --- UI/Input/Event Types ---
    event: Event,
    inputEvent: InputEvent,
    keyboardEvent: KeyboardEvent,
    mouseEvent: MouseEvent,
    focusEvent: FocusEvent,
    formData: FormData,
  
    // --- Media & File Input ---
    file: File,
    fileList: FileList,
    image: Image,
    blob: Blob,
    canvas: HTMLCanvasElement,
    video: HTMLVideoElement,
    audio: HTMLAudioElement,
    imageBitmap: ImageBitmap,
  
    // --- Core JS Types ---
    date: Date,
    regexp: RegExp,
    map: Map,
    set: Set,
    weakMap: WeakMap,
    weakSet: WeakSet,
    arrayBuffer: ArrayBuffer,
    dataView: DataView,
    promise: Promise,
    error: Error,
  
    // --- Intl API Types ---
    intlDateTimeFormat: Intl.DateTimeFormat,
    intlNumberFormat: Intl.NumberFormat,
    intlCollator: Intl.Collator,
  
    // --- Web Platform Types ---
    url: URL,
    urlSearchParams: URLSearchParams,
    headers: Headers,
    request: Request,
    response: Response,
  
    // --- Background Threads & Channels ---
    worker: Worker,
    sharedWorker: SharedWorker,
    broadcastChannel: BroadcastChannel
  };
  