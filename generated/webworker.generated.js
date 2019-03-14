/////////////////////////////
/// Worker APIs
/////////////////////////////

declare type AddEventListenerOptions = interface extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
}

declare type AesCbcParams = interface extends Algorithm {
    iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

declare type AesCtrParams = interface extends Algorithm {
    counter: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    length: number;
}

declare type AesDerivedKeyParams = interface extends Algorithm {
    length: number;
}

declare type AesGcmParams = interface extends Algorithm {
    additionalData?: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    tagLength?: number;
}

declare type AesKeyAlgorithm = interface extends KeyAlgorithm {
    length: number;
}

declare type AesKeyGenParams = interface extends Algorithm {
    length: number;
}

declare type Algorithm = interface {
    name: string;
}

declare type BlobPropertyBag = interface {
    endings?: EndingType;
    type?: string;
}

declare type CacheQueryOptions = interface {
    ignoreMethod?: boolean;
    ignoreSearch?: boolean;
    ignoreVary?: boolean;
}

declare type ClientQueryOptions = interface {
    includeUncontrolled?: boolean;
    type?: ClientTypes;
}

declare type CloseEventInit = interface extends EventInit {
    code?: number;
    reason?: string;
    wasClean?: boolean;
}

declare type CryptoKeyPair = interface {
    privateKey?: CryptoKey;
    publicKey?: CryptoKey;
}

declare type CustomEventInit<T = any> = interface extends EventInit {
    detail?: T;
}

declare type DOMMatrix2DInit = interface {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
    m11?: number;
    m12?: number;
    m21?: number;
    m22?: number;
    m41?: number;
    m42?: number;
}

declare type DOMMatrixInit = interface extends DOMMatrix2DInit {
    is2D?: boolean;
    m13?: number;
    m14?: number;
    m23?: number;
    m24?: number;
    m31?: number;
    m32?: number;
    m33?: number;
    m34?: number;
    m43?: number;
    m44?: number;
}

declare type DOMPointInit = interface {
    w?: number;
    x?: number;
    y?: number;
    z?: number;
}

declare type DOMQuadInit = interface {
    p1?: DOMPointInit;
    p2?: DOMPointInit;
    p3?: DOMPointInit;
    p4?: DOMPointInit;
}

declare type DOMRectInit = interface {
    height?: number;
    width?: number;
    x?: number;
    y?: number;
}

declare type EcKeyGenParams = interface extends Algorithm {
    namedCurve: NamedCurve;
}

declare type EcKeyImportParams = interface extends Algorithm {
    namedCurve: NamedCurve;
}

declare type EcdhKeyDeriveParams = interface extends Algorithm {
    public: CryptoKey;
}

declare type EcdsaParams = interface extends Algorithm {
    hash: HashAlgorithmIdentifier;
}

declare type ErrorEventInit = interface extends EventInit {
    colno?: number;
    error?: any;
    filename?: string;
    lineno?: number;
    message?: string;
}

declare type EventInit = interface {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}

declare type EventListenerOptions = interface {
    capture?: boolean;
}

declare type EventSourceInit = interface {
    withCredentials?: boolean;
}

declare type ExtendableEventInit = interface extends EventInit {
}

declare type ExtendableMessageEventInit = interface extends ExtendableEventInit {
    data?: any;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[];
    source?: Client | ServiceWorker | MessagePort | null;
}

declare type FetchEventInit = interface extends ExtendableEventInit {
    clientId?: string;
    preloadResponse?: Promise<any>;
    replacesClientId?: string;
    request: Request;
    resultingClientId?: string;
}

declare type FilePropertyBag = interface extends BlobPropertyBag {
    lastModified?: number;
}

declare type GetNotificationOptions = interface {
    tag?: string;
}

declare type HmacImportParams = interface extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}

declare type HmacKeyGenParams = interface extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}

declare type IDBIndexParameters = interface {
    multiEntry?: boolean;
    unique?: boolean;
}

declare type IDBObjectStoreParameters = interface {
    autoIncrement?: boolean;
    keyPath?: string | string[] | null;
}

declare type IDBVersionChangeEventInit = interface extends EventInit {
    newVersion?: number | null;
    oldVersion?: number;
}

declare type JsonWebKey = interface {
    alg?: string;
    crv?: string;
    d?: string;
    dp?: string;
    dq?: string;
    e?: string;
    ext?: boolean;
    k?: string;
    key_ops?: string[];
    kty?: string;
    n?: string;
    oth?: RsaOtherPrimesInfo[];
    p?: string;
    q?: string;
    qi?: string;
    use?: string;
    x?: string;
    y?: string;
}

declare type KeyAlgorithm = interface {
    name: string;
}

declare type MessageEventInit = interface extends EventInit {
    data?: any;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[];
    source?: MessageEventSource | null;
}

declare type MultiCacheQueryOptions = interface extends CacheQueryOptions {
    cacheName?: string;
}

declare type NavigationPreloadState = interface {
    enabled?: boolean;
    headerValue?: string;
}

declare type NotificationAction = interface {
    action: string;
    icon?: string;
    title: string;
}

declare type NotificationEventInit = interface extends ExtendableEventInit {
    action?: string;
    notification: Notification;
}

declare type NotificationOptions = interface {
    actions?: NotificationAction[];
    badge?: string;
    body?: string;
    data?: any;
    dir?: NotificationDirection;
    icon?: string;
    image?: string;
    lang?: string;
    renotify?: boolean;
    requireInteraction?: boolean;
    silent?: boolean;
    tag?: string;
    timestamp?: number;
    vibrate?: VibratePattern;
}

declare type Pbkdf2Params = interface extends Algorithm {
    hash: HashAlgorithmIdentifier;
    iterations: number;
    salt: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

declare type PerformanceObserverInit = interface {
    buffered?: boolean;
    entryTypes: string[];
}

declare type PipeOptions = interface {
    preventAbort?: boolean;
    preventCancel?: boolean;
    preventClose?: boolean;
}

declare type ProgressEventInit = interface extends EventInit {
    lengthComputable?: boolean;
    loaded?: number;
    total?: number;
}

declare type PromiseRejectionEventInit = interface extends EventInit {
    promise: Promise<any>;
    reason?: any;
}

declare type PushEventInit = interface extends ExtendableEventInit {
    data?: PushMessageDataInit;
}

declare type PushSubscriptionChangeInit = interface extends ExtendableEventInit {
    newSubscription?: PushSubscription;
    oldSubscription?: PushSubscription;
}

declare type PushSubscriptionJSON = interface {
    endpoint?: string;
    expirationTime?: number | null;
    keys?: Record<string, string>;
}

declare type PushSubscriptionOptionsInit = interface {
    applicationServerKey?: BufferSource | string | null;
    userVisibleOnly?: boolean;
}

declare type QueuingStrategy<T = any> = interface {
    highWaterMark?: number;
    +size?: QueuingStrategySizeCallback<T>;
}

declare type RegistrationOptions = interface {
    scope?: string;
    type?: WorkerType;
    updateViaCache?: ServiceWorkerUpdateViaCache;
}

declare type RequestInit = interface {
    body?: BodyInit | null;
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    signal?: AbortSignal | null;
    window?: any;
}

declare type ResponseInit = interface {
    headers?: HeadersInit;
    status?: number;
    statusText?: string;
}

declare type RsaHashedImportParams = interface extends Algorithm {
    hash: HashAlgorithmIdentifier;
}

declare type RsaHashedKeyGenParams = interface extends RsaKeyGenParams {
    hash: HashAlgorithmIdentifier;
}

declare type RsaKeyGenParams = interface extends Algorithm {
    modulusLength: number;
    publicExponent: BigInteger;
}

declare type RsaOaepParams = interface extends Algorithm {
    label?: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

declare type RsaOtherPrimesInfo = interface {
    d?: string;
    r?: string;
    t?: string;
}

declare type RsaPssParams = interface extends Algorithm {
    saltLength: number;
}

declare type StorageEstimate = interface {
    quota?: number;
    usage?: number;
}

declare type SyncEventInit = interface extends ExtendableEventInit {
    lastChance?: boolean;
    tag: string;
}

declare type TextDecodeOptions = interface {
    stream?: boolean;
}

declare type TextDecoderOptions = interface {
    fatal?: boolean;
    ignoreBOM?: boolean;
}

declare type Transformer<I = any, O = any> = interface {
    flush?: TransformStreamDefaultControllerCallback<O>;
    readableType?: void;
    start?: TransformStreamDefaultControllerCallback<O>;
    transform?: TransformStreamDefaultControllerTransformCallback<I, O>;
    writableType?: void;
}

declare type UnderlyingByteSource = interface {
    autoAllocateChunkSize?: number;
    cancel?: ReadableStreamErrorCallback;
    pull?: ReadableByteStreamControllerCallback;
    start?: ReadableByteStreamControllerCallback;
    type: "bytes";
}

declare type UnderlyingSink<W = any> = interface {
    abort?: WritableStreamErrorCallback;
    close?: WritableStreamDefaultControllerCloseCallback;
    start?: WritableStreamDefaultControllerStartCallback;
    type?: void;
    write?: WritableStreamDefaultControllerWriteCallback<W>;
}

declare type UnderlyingSource<R = any> = interface {
    cancel?: ReadableStreamErrorCallback;
    pull?: ReadableStreamDefaultControllerCallback<R>;
    start?: ReadableStreamDefaultControllerCallback<R>;
    type?: void;
}

declare type WebGLContextAttributes = interface {
    alpha?: GLboolean;
    antialias?: GLboolean;
    depth?: GLboolean;
    failIfMajorPerformanceCaveat?: boolean;
    powerPreference?: WebGLPowerPreference;
    premultipliedAlpha?: GLboolean;
    preserveDrawingBuffer?: GLboolean;
    stencil?: GLboolean;
}

declare type WebGLContextEventInit = interface extends EventInit {
    statusMessage?: string;
}

declare type WorkerOptions = interface {
    credentials?: RequestCredentials;
    name?: string;
    type?: WorkerType;
}

interface EventListener {
    (evt: Event): void;
}

declare type ANGLE_instanced_arrays = interface {
    drawArraysInstancedANGLE(mode: GLenum, first: GLint, count: GLsizei, primcount: GLsizei): void;
    drawElementsInstancedANGLE(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, primcount: GLsizei): void;
    vertexAttribDivisorANGLE(index: GLuint, divisor: GLuint): void;
    +VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: GLenum;
}

declare class AbortController {
    constructor(): this;
    /**
     * Returns the AbortSignal object associated with this object.
     */
    +signal: AbortSignal;
    /**
     * Invoking this method will set this object's AbortSignal's aborted flag and
     * signal to any observers that the associated activity is to be aborted.
     */
    abort(): void;
}

type AbortSignalEventMap = & {
    "abort": Event,
    [key: string]: Event,
}

declare class AbortSignal mixins EventTarget {
    constructor(): this;
    /**
     * Returns true if this AbortSignal's AbortController has signaled to abort, and false
     * otherwise.
     */
    +aborted: boolean;
    onabort: ((/*this: AbortSignal, */ev: Event) => any) | null;
    addEventListener<K: $Keys<AbortSignalEventMap>>(type: K, listener: (/*this: AbortSignal, */ev: $ElementType<AbortSignalEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<AbortSignalEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<AbortSignalEventMap>>(type: K, listener: (/*this: AbortSignal, */ev: $ElementType<AbortSignalEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<AbortSignalEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

type AbstractWorkerEventMap = & {
    "error": ErrorEvent,
    [key: string]: Event,
}

declare type AbstractWorker = interface {
    onerror: ((/*this: AbstractWorker, */ev: ErrorEvent) => any) | null;
    addEventListener<K: $Keys<AbstractWorkerEventMap>>(type: K, listener: (/*this: AbstractWorker, */ev: $ElementType<AbstractWorkerEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<AbstractWorkerEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<AbstractWorkerEventMap>>(type: K, listener: (/*this: AbstractWorker, */ev: $ElementType<AbstractWorkerEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<AbstractWorkerEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare type AesCfbParams = interface extends Algorithm {
    iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

declare type AesCmacParams = interface extends Algorithm {
    length: number;
}

declare class Blob {
    constructor(blobParts?: BlobPart[], options?: BlobPropertyBag): this;
    +size: number;
    +type: string;
    slice(start?: number, end?: number, contentType?: string): Blob;
}

declare type Body = interface {
    +body: ReadableStream<Uint8Array> | null;
    +bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}

type BroadcastChannelEventMap = & {
    "message": MessageEvent,
    "messageerror": MessageEvent,
    [key: string]: Event,
}

declare class BroadcastChannel mixins EventTarget {
    constructor(name: string): this;
    /**
     * Returns the channel name (as passed to the constructor).
     */
    +name: string;
    onmessage: ((/*this: BroadcastChannel, */ev: MessageEvent) => any) | null;
    onmessageerror: ((/*this: BroadcastChannel, */ev: MessageEvent) => any) | null;
    /**
     * Closes the BroadcastChannel object, opening it up to garbage collection.
     */
    close(): void;
    /**
     * Sends the given message to other BroadcastChannel objects set up for this channel. Messages can be structured objects, e.g. nested objects and arrays.
     */
    postMessage(message: any): void;
    addEventListener<K: $Keys<BroadcastChannelEventMap>>(type: K, listener: (/*this: BroadcastChannel, */ev: $ElementType<BroadcastChannelEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<BroadcastChannelEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<BroadcastChannelEventMap>>(type: K, listener: (/*this: BroadcastChannel, */ev: $ElementType<BroadcastChannelEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<BroadcastChannelEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare class ByteLengthQueuingStrategy implements QueuingStrategy<ArrayBufferView> {
    constructor(options: { highWaterMark: number }): ByteLengthQueuingStrategy;
    highWaterMark: number;
    size(chunk: ArrayBufferView): number;
}

declare class Cache {
    constructor(): this;
    add(request: RequestInfo): Promise<void>;
    addAll(requests: RequestInfo[]): Promise<void>;
    delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
    keys(request?: RequestInfo, options?: CacheQueryOptions): Promise<ReadonlyArray<Request>>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response | void>;
    matchAll(request?: RequestInfo, options?: CacheQueryOptions): Promise<ReadonlyArray<Response>>;
    put(request: RequestInfo, response: Response): Promise<void>;
}

declare class CacheStorage {
    constructor(): this;
    delete(cacheName: string): Promise<boolean>;
    has(cacheName: string): Promise<boolean>;
    keys(): Promise<string[]>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response | void>;
    open(cacheName: string): Promise<Cache>;
}

declare class CanvasGradient {
    constructor(): this;
    /**
     * Adds a color stop with the given color to the gradient at the given offset. 0.0 is the offset
     * at one end of the gradient, 1.0 is the offset at the other end.
     * Throws an "IndexSizeError" DOMException if the offset
     * is out of range. Throws a "SyntaxError" DOMException if
     * the color cannot be parsed.
     */
    addColorStop(offset: number, color: string): void;
}

declare type CanvasPath = interface {
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    closePath(): void;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
}

declare class CanvasPattern {
    constructor(): this;
    /**
     * Sets the transformation matrix that will be used when rendering the pattern during a fill or
     * stroke painting operation.
     */
    setTransform(transform?: DOMMatrix2DInit): void;
}

declare class Client {
    constructor(): this;
    +frameType: FrameType;
    +id: string;
    +type: ClientTypes;
    +url: string;
    postMessage(message: any, transfer?: Transferable[]): void;
}

declare class Clients {
    constructor(): this;
    claim(): Promise<void>;
    get(id: string): Promise<any>;
    matchAll(options?: ClientQueryOptions): Promise<ReadonlyArray<Client>>;
    openWindow(url: string): Promise<WindowClient | null>;
}

declare class CloseEvent mixins Event {
    constructor(type: string, eventInitDict?: CloseEventInit): this;
    +code: number;
    +reason: string;
    +wasClean: boolean;
    /** @deprecated */
    initCloseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, wasCleanArg: boolean, codeArg: number, reasonArg: string): void;
}

declare type ConcatParams = interface extends Algorithm {
    algorithmId: Uint8Array;
    hash?: string | Algorithm;
    partyUInfo: Uint8Array;
    partyVInfo: Uint8Array;
    privateInfo?: Uint8Array;
    publicInfo?: Uint8Array;
}

declare class Console {
    constructor(): this;
    memory: any;
    assert(condition?: boolean, message?: string, ...data: any[]): void;
    clear(): void;
    count(label?: string): void;
    debug(message?: any, ...optionalParams: any[]): void;
    dir(value?: any, ...optionalParams: any[]): void;
    dirxml(value: any): void;
    error(message?: any, ...optionalParams: any[]): void;
    exception(message?: string, ...optionalParams: any[]): void;
    group(groupTitle?: string, ...optionalParams: any[]): void;
    groupCollapsed(groupTitle?: string, ...optionalParams: any[]): void;
    groupEnd(): void;
    info(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    markTimeline(label?: string): void;
    profile(reportName?: string): void;
    profileEnd(reportName?: string): void;
    table(...tabularData: any[]): void;
    time(label?: string): void;
    timeEnd(label?: string): void;
    timeStamp(label?: string): void;
    timeline(label?: string): void;
    timelineEnd(label?: string): void;
    trace(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
}

declare class CountQueuingStrategy implements QueuingStrategy {
    constructor(options: { highWaterMark: number }): CountQueuingStrategy;
    highWaterMark: number;
    size(chunk: any): 1;
}

declare class Crypto {
    constructor(): this;
    +subtle: SubtleCrypto;
    getRandomValues<T: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | null>(array: T): T;
}

declare class CryptoKey {
    constructor(): this;
    +algorithm: KeyAlgorithm;
    +extractable: boolean;
    +type: KeyType;
    +usages: KeyUsage[];
}

declare class CustomEvent<T = any> mixins Event {
    constructror<T>(typeArg: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
    /**
     * Returns any custom data event was created with.
     * Typically used for synthetic events.
     */
    +detail: T;
    initCustomEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, detailArg: T): void;
}

declare class DOMException {
    constructor(message?: string, name?: string): DOMException;
    +ABORT_ERR: number;
    +DATA_CLONE_ERR: number;
    +DOMSTRING_SIZE_ERR: number;
    +HIERARCHY_REQUEST_ERR: number;
    +INDEX_SIZE_ERR: number;
    +INUSE_ATTRIBUTE_ERR: number;
    +INVALID_ACCESS_ERR: number;
    +INVALID_CHARACTER_ERR: number;
    +INVALID_MODIFICATION_ERR: number;
    +INVALID_NODE_TYPE_ERR: number;
    +INVALID_STATE_ERR: number;
    +NAMESPACE_ERR: number;
    +NETWORK_ERR: number;
    +NOT_FOUND_ERR: number;
    +NOT_SUPPORTED_ERR: number;
    +NO_DATA_ALLOWED_ERR: number;
    +NO_MODIFICATION_ALLOWED_ERR: number;
    +QUOTA_EXCEEDED_ERR: number;
    +SECURITY_ERR: number;
    +SYNTAX_ERR: number;
    +TIMEOUT_ERR: number;
    +TYPE_MISMATCH_ERR: number;
    +URL_MISMATCH_ERR: number;
    +VALIDATION_ERR: number;
    +WRONG_DOCUMENT_ERR: number;
    +code: number;
    +message: string;
    +name: string;
    +ABORT_ERR: number;
    +DATA_CLONE_ERR: number;
    +DOMSTRING_SIZE_ERR: number;
    +HIERARCHY_REQUEST_ERR: number;
    +INDEX_SIZE_ERR: number;
    +INUSE_ATTRIBUTE_ERR: number;
    +INVALID_ACCESS_ERR: number;
    +INVALID_CHARACTER_ERR: number;
    +INVALID_MODIFICATION_ERR: number;
    +INVALID_NODE_TYPE_ERR: number;
    +INVALID_STATE_ERR: number;
    +NAMESPACE_ERR: number;
    +NETWORK_ERR: number;
    +NOT_FOUND_ERR: number;
    +NOT_SUPPORTED_ERR: number;
    +NO_DATA_ALLOWED_ERR: number;
    +NO_MODIFICATION_ALLOWED_ERR: number;
    +QUOTA_EXCEEDED_ERR: number;
    +SECURITY_ERR: number;
    +SYNTAX_ERR: number;
    +TIMEOUT_ERR: number;
    +TYPE_MISMATCH_ERR: number;
    +URL_MISMATCH_ERR: number;
    +VALIDATION_ERR: number;
    +WRONG_DOCUMENT_ERR: number;
}

declare class DOMMatrix mixins DOMMatrixReadOnly {
    constructor(init?: string | number[]): this;
    fromFloat32Array(array32: Float32Array): DOMMatrix;
    fromFloat64Array(array64: Float64Array): DOMMatrix;
    fromMatrix(other?: DOMMatrixInit): DOMMatrix;
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    m11: number;
    m12: number;
    m13: number;
    m14: number;
    m21: number;
    m22: number;
    m23: number;
    m24: number;
    m31: number;
    m32: number;
    m33: number;
    m34: number;
    m41: number;
    m42: number;
    m43: number;
    m44: number;
    invertSelf(): DOMMatrix;
    multiplySelf(other?: DOMMatrixInit): DOMMatrix;
    preMultiplySelf(other?: DOMMatrixInit): DOMMatrix;
    rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVectorSelf(x?: number, y?: number): DOMMatrix;
    rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    skewXSelf(sx?: number): DOMMatrix;
    skewYSelf(sy?: number): DOMMatrix;
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare class DOMMatrixReadOnly {
    constructor(init?: string | number[]): this;
    fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
    fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
    fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
    +a: number;
    +b: number;
    +c: number;
    +d: number;
    +e: number;
    +f: number;
    +is2D: boolean;
    +isIdentity: boolean;
    +m11: number;
    +m12: number;
    +m13: number;
    +m14: number;
    +m21: number;
    +m22: number;
    +m23: number;
    +m24: number;
    +m31: number;
    +m32: number;
    +m33: number;
    +m34: number;
    +m41: number;
    +m42: number;
    +m43: number;
    +m44: number;
    flipX(): DOMMatrix;
    flipY(): DOMMatrix;
    inverse(): DOMMatrix;
    multiply(other?: DOMMatrixInit): DOMMatrix;
    rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix;
    rotateFromVector(x?: number, y?: number): DOMMatrix;
    scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    /** @deprecated */
    scaleNonUniform(scaleX?: number, scaleY?: number): DOMMatrix;
    skewX(sx?: number): DOMMatrix;
    skewY(sy?: number): DOMMatrix;
    toFloat32Array(): Float32Array;
    toFloat64Array(): Float64Array;
    toJSON(): any;
    transformPoint(point?: DOMPointInit): DOMPoint;
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare class DOMPoint mixins DOMPointReadOnly {
    constructor(x?: number, y?: number, z?: number, w?: number): this;
    fromPoint(other?: DOMPointInit): DOMPoint;
    w: number;
    x: number;
    y: number;
    z: number;
}

declare class DOMPointReadOnly {
    constructor(x?: number, y?: number, z?: number, w?: number): this;
    fromPoint(other?: DOMPointInit): DOMPointReadOnly;
    +w: number;
    +x: number;
    +y: number;
    +z: number;
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
    toJSON(): any;
}

declare class DOMQuad {
    constructor(p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): this;
    fromQuad(other?: DOMQuadInit): DOMQuad;
    fromRect(other?: DOMRectInit): DOMQuad;
    +p1: DOMPoint;
    +p2: DOMPoint;
    +p3: DOMPoint;
    +p4: DOMPoint;
    getBounds(): DOMRect;
    toJSON(): any;
}

declare class DOMRect mixins DOMRectReadOnly {
    constructor(x?: number, y?: number, width?: number, height?: number): this;
    fromRect(other?: DOMRectInit): DOMRect;
    height: number;
    width: number;
    x: number;
    y: number;
}

declare class DOMRectReadOnly {
    constructor(x?: number, y?: number, width?: number, height?: number): this;
    fromRect(other?: DOMRectInit): DOMRectReadOnly;
    +bottom: number;
    +height: number;
    +left: number;
    +right: number;
    +top: number;
    +width: number;
    +x: number;
    +y: number;
    toJSON(): any;
}

declare class DOMStringList {
    constructor(): this;
    /**
     * Returns the number of strings in strings.
     */
    +length: number;
    /**
     * Returns true if strings contains string, and false
     * otherwise.
     */
    contains(string: string): boolean;
    /**
     * Returns the string with index index from strings.
     */
    item(index: number): string | null;
    [index: number]: string;
}

type DedicatedWorkerGlobalScopeEventMap = WorkerGlobalScopeEventMap & {
    "message": MessageEvent,
    [key: string]: Event,
}

declare class DedicatedWorkerGlobalScope mixins WorkerGlobalScope {
    constructor(): this;
    onmessage: ((/*this: DedicatedWorkerGlobalScope, */ev: MessageEvent) => any) | null;
    close(): void;
    postMessage(message: any, transfer?: Transferable[]): void;
    addEventListener<K: $Keys<DedicatedWorkerGlobalScopeEventMap>>(type: K, listener: (/*this: DedicatedWorkerGlobalScope, */ev: $ElementType<DedicatedWorkerGlobalScopeEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<DedicatedWorkerGlobalScopeEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<DedicatedWorkerGlobalScopeEventMap>>(type: K, listener: (/*this: DedicatedWorkerGlobalScope, */ev: $ElementType<DedicatedWorkerGlobalScopeEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<DedicatedWorkerGlobalScopeEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare type DhImportKeyParams = interface extends Algorithm {
    generator: Uint8Array;
    prime: Uint8Array;
}

declare type DhKeyAlgorithm = interface extends KeyAlgorithm {
    generator: Uint8Array;
    prime: Uint8Array;
}

declare type DhKeyDeriveParams = interface extends Algorithm {
    public: CryptoKey;
}

declare type DhKeyGenParams = interface extends Algorithm {
    generator: Uint8Array;
    prime: Uint8Array;
}

declare type EXT_blend_minmax = interface {
    +MAX_EXT: GLenum;
    +MIN_EXT: GLenum;
}

declare type EXT_frag_depth = interface {
}

declare type EXT_sRGB = interface {
    +FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: GLenum;
    +SRGB8_ALPHA8_EXT: GLenum;
    +SRGB_ALPHA_EXT: GLenum;
    +SRGB_EXT: GLenum;
}

declare type EXT_shader_texture_lod = interface {
}

declare type EXT_texture_filter_anisotropic = interface {
    +MAX_TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
    +TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
}

declare class ErrorEvent mixins Event {
    constructor(type: string, eventInitDict?: ErrorEventInit): this;
    +colno: number;
    +error: any;
    +filename: string;
    +lineno: number;
    +message: string;
}

declare class Event {
    constructor(type: string, eventInitDict?: EventInit): this;
    +AT_TARGET: number;
    +BUBBLING_PHASE: number;
    +CAPTURING_PHASE: number;
    +NONE: number;
    /**
     * Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.
     */
    +bubbles: boolean;
    cancelBubble: boolean;
    +cancelable: boolean;
    /**
     * Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.
     */
    +composed: boolean;
    /**
     * Returns the object whose event listener's callback is currently being
     * invoked.
     */
    +currentTarget: EventTarget | null;
    +defaultPrevented: boolean;
    +eventPhase: number;
    /**
     * Returns true if event was dispatched by the user agent, and
     * false otherwise.
     */
    +isTrusted: boolean;
    returnValue: boolean;
    /** @deprecated */
    +srcElement: EventTarget | null;
    /**
     * Returns the object to which event is dispatched (its target).
     */
    +target: EventTarget | null;
    /**
     * Returns the event's timestamp as the number of milliseconds measured relative to
     * the time origin.
     */
    +timeStamp: number;
    /**
     * Returns the type of event, e.g.
     * "click", "hashchange", or
     * "submit".
     */
    +type: string;
    composedPath(): EventTarget[];
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    preventDefault(): void;
    /**
     * Invoking this method prevents event from reaching
     * any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any
     * other objects.
     */
    stopImmediatePropagation(): void;
    /**
     * When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.
     */
    stopPropagation(): void;
    +AT_TARGET: number;
    +BUBBLING_PHASE: number;
    +CAPTURING_PHASE: number;
    +NONE: number;
}

declare type EventListenerObject = interface {
    handleEvent(evt: Event): void;
}

type EventSourceEventMap = & {
    "error": Event,
    "message": MessageEvent,
    "open": Event,
    [key: string]: Event,
}

declare class EventSource mixins EventTarget {
    constructor(url: string, eventSourceInitDict?: EventSourceInit): this;
    +CLOSED: number;
    +CONNECTING: number;
    +OPEN: number;
    onerror: ((/*this: EventSource, */ev: Event) => any) | null;
    onmessage: ((/*this: EventSource, */ev: MessageEvent) => any) | null;
    onopen: ((/*this: EventSource, */ev: Event) => any) | null;
    /**
     * Returns the state of this EventSource object's connection. It can have the
     * values described below.
     */
    +readyState: number;
    /**
     * Returns the URL providing the event stream.
     */
    +url: string;
    /**
     * Returns true if the credentials mode
     * for connection requests to the URL providing the
     * event stream is set to "include", and false otherwise.
     */
    +withCredentials: boolean;
    close(): void;
    +CLOSED: number;
    +CONNECTING: number;
    +OPEN: number;
    addEventListener<K: $Keys<EventSourceEventMap>>(type: K, listener: (/*this: EventSource, */ev: $ElementType<EventSourceEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<EventSourceEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<EventSourceEventMap>>(type: K, listener: (/*this: EventSource, */ev: $ElementType<EventSourceEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<EventSourceEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare class EventTarget {
    constructor(): this;
    /**
     * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
     * The options argument sets listener-specific options. For compatibility this can be a
     * boolean, in which case the method behaves exactly as if the value was specified as options's capture.
     * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
     * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in §2.8 Observing event listeners.
     * When set to true, options's once indicates that the callback will only be invoked once after which the event listener will
     * be removed.
     * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
     */
    addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    /**
     * Dispatches a synthetic event event to target and returns true
     * if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
     */
    dispatchEvent(event: Event): boolean;
    /**
     * Removes the event listener in target's event listener list with the same type, callback, and options.
     */
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}

declare class ExtendableEvent mixins Event {
    constructor(type: string, eventInitDict?: ExtendableEventInit): this;
    waitUntil(f: Promise<any>): void;
}

declare class ExtendableMessageEvent mixins ExtendableEvent {
    constructor(type: string, eventInitDict?: ExtendableMessageEventInit): this;
    +data: any;
    +lastEventId: string;
    +origin: string;
    +ports: ReadonlyArray<MessagePort>;
    +source: Client | ServiceWorker | MessagePort | null;
}

declare class FetchEvent mixins ExtendableEvent {
    constructor(type: string, eventInitDict: FetchEventInit): this;
    +clientId: string;
    +preloadResponse: Promise<any>;
    +replacesClientId: string;
    +request: Request;
    +resultingClientId: string;
    respondWith(r: Promise<Response>): void;
}

declare class File mixins Blob {
    constructor(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): this;
    +lastModified: number;
    +name: string;
}

declare class FileList {
    constructor(): this;
    +length: number;
    item(index: number): File | null;
    [index: number]: File;
}

type FileReaderEventMap = & {
    "abort": ProgressEvent,
    "error": ProgressEvent,
    "load": ProgressEvent,
    "loadend": ProgressEvent,
    "loadstart": ProgressEvent,
    "progress": ProgressEvent,
    [key: string]: Event,
}

declare class FileReader mixins EventTarget {
    constructor(): this;
    +DONE: number;
    +EMPTY: number;
    +LOADING: number;
    +error: DOMException | null;
    onabort: ((/*this: FileReader, */ev: ProgressEvent) => any) | null;
    onerror: ((/*this: FileReader, */ev: ProgressEvent) => any) | null;
    onload: ((/*this: FileReader, */ev: ProgressEvent) => any) | null;
    onloadend: ((/*this: FileReader, */ev: ProgressEvent) => any) | null;
    onloadstart: ((/*this: FileReader, */ev: ProgressEvent) => any) | null;
    onprogress: ((/*this: FileReader, */ev: ProgressEvent) => any) | null;
    +readyState: number;
    +result: string | ArrayBuffer | null;
    abort(): void;
    readAsArrayBuffer(blob: Blob): void;
    readAsBinaryString(blob: Blob): void;
    readAsDataURL(blob: Blob): void;
    readAsText(blob: Blob, encoding?: string): void;
    +DONE: number;
    +EMPTY: number;
    +LOADING: number;
    addEventListener<K: $Keys<FileReaderEventMap>>(type: K, listener: (/*this: FileReader, */ev: $ElementType<FileReaderEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<FileReaderEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<FileReaderEventMap>>(type: K, listener: (/*this: FileReader, */ev: $ElementType<FileReaderEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<FileReaderEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare class FileReaderSync {
    constructor(): this;
    readAsArrayBuffer(blob: Blob): ArrayBuffer;
    readAsBinaryString(blob: Blob): string;
    readAsDataURL(blob: Blob): string;
    readAsText(blob: Blob, encoding?: string): string;
}

declare class FormData {
    constructor(): this;
    append(name: string, value: string | Blob, fileName?: string): void;
    delete(name: string): void;
    get(name: string): FormDataEntryValue | null;
    getAll(name: string): FormDataEntryValue[];
    has(name: string): boolean;
    set(name: string, value: string | Blob, fileName?: string): void;
    forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}

declare type GlobalFetch = interface {
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}

declare class Headers {
    constructor(init?: HeadersInit): this;
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
    forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
}

declare type HkdfCtrParams = interface extends Algorithm {
    context: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    hash: string | Algorithm;
    label: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

declare type IDBArrayKey = interface extends Array<IDBValidKey> {
}

declare class IDBCursor {
    constructor(): this;
    /**
     * Returns the direction ("next", "nextunique", "prev" or "prevunique")
     * of the cursor.
     */
    +direction: IDBCursorDirection;
    /**
     * Returns the key of the cursor.
     * Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
     */
    +key: IDBValidKey;
    /**
     * Returns the effective key of the cursor.
     * Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
     */
    +primaryKey: IDBValidKey;
    /**
     * Returns the IDBObjectStore or IDBIndex the cursor was opened from.
     */
    +source: IDBObjectStore | IDBIndex;
    /**
     * Advances the cursor through the next count records in
     * range.
     */
    advance(count: number): void;
    /**
     * Advances the cursor to the next record in range matching or
     * after key.
     */
    continue(key?: IDBValidKey): void;
    /**
     * Advances the cursor to the next record in range matching
     * or after key and primaryKey. Throws an "InvalidAccessError" DOMException if the source is not an index.
     */
    continuePrimaryKey(key: IDBValidKey, primaryKey: IDBValidKey): void;
    /**
     * Delete the record pointed at by the cursor with a new value.
     * If successful, request's result will be undefined.
     */
    delete(): IDBRequest<void>;
    /**
     * Updated the record pointed at by the cursor with a new value.
     * Throws a "DataError" DOMException if the effective object store uses in-line keys and the key would have changed.
     * If successful, request's result will be the record's key.
     */
    update(value: any): IDBRequest<IDBValidKey>;
}

declare class IDBCursorWithValue mixins IDBCursor {
    constructor(): this;
    /**
     * Returns the cursor's current value.
     */
    +value: any;
}

type IDBDatabaseEventMap = & {
    "abort": Event,
    "close": Event,
    "error": Event,
    "versionchange": IDBVersionChangeEvent,
    [key: string]: Event,
}

declare class IDBDatabase mixins EventTarget {
    constructor(): this;
    /**
     * Returns the name of the database.
     */
    +name: string;
    /**
     * Returns a list of the names of object stores in the database.
     */
    +objectStoreNames: DOMStringList;
    onabort: ((/*this: IDBDatabase, */ev: Event) => any) | null;
    onclose: ((/*this: IDBDatabase, */ev: Event) => any) | null;
    onerror: ((/*this: IDBDatabase, */ev: Event) => any) | null;
    onversionchange: ((/*this: IDBDatabase, */ev: IDBVersionChangeEvent) => any) | null;
    /**
     * Returns the version of the database.
     */
    +version: number;
    /**
     * Closes the connection once all running transactions have finished.
     */
    close(): void;
    /**
     * Creates a new object store with the given name and options and returns a new IDBObjectStore.
     * Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    createObjectStore(name: string, optionalParameters?: IDBObjectStoreParameters): IDBObjectStore;
    /**
     * Deletes the object store with the given name.
     * Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    deleteObjectStore(name: string): void;
    /**
     * Returns a new transaction with the given mode ("readonly" or "readwrite")
     * and scope which can be a single object store name or an array of names.
     */
    transaction(storeNames: string | string[], mode?: IDBTransactionMode): IDBTransaction;
    addEventListener<K: $Keys<IDBDatabaseEventMap>>(type: K, listener: (/*this: IDBDatabase, */ev: $ElementType<IDBDatabaseEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<IDBDatabaseEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<IDBDatabaseEventMap>>(type: K, listener: (/*this: IDBDatabase, */ev: $ElementType<IDBDatabaseEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<IDBDatabaseEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare class IDBFactory {
    constructor(): this;
    /**
     * Compares two values as keys. Returns -1 if key1 precedes key2, 1 if key2 precedes key1, and 0 if
     * the keys are equal.
     * Throws a "DataError" DOMException if either input is not a valid key.
     */
    cmp(first: any, second: any): number;
    /**
     * Attempts to delete the named database. If the
     * database already exists and there are open connections that don't close in response to a versionchange event, the request will be blocked until all they close. If the request
     * is successful request's result will be null.
     */
    deleteDatabase(name: string): IDBOpenDBRequest;
    /**
     * Attempts to open a connection to the named database with the specified version. If the database already exists
     * with a lower version and there are open connections that don't close in response to a versionchange event, the request will be blocked until all they close, then an upgrade
     * will occur. If the database already exists with a higher
     * version the request will fail. If the request is
     * successful request's result will
     * be the connection.
     */
    open(name: string, version?: number): IDBOpenDBRequest;
}

declare class IDBIndex {
    constructor(): this;
    +keyPath: string | string[];
    +multiEntry: boolean;
    /**
     * Updates the name of the store to newName.
     * Throws an "InvalidStateError" DOMException if not called within an upgrade
     * transaction.
     */
    name: string;
    /**
     * Returns the IDBObjectStore the index belongs to.
     */
    +objectStore: IDBObjectStore;
    +unique: boolean;
    /**
     * Retrieves the number of records matching the given key or key range in query.
     * If successful, request's result will be the
     * count.
     */
    count(key?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    /**
     * Retrieves the value of the first record matching the
     * given key or key range in query.
     * If successful, request's result will be the value, or undefined if there was no matching record.
     */
    get(key: IDBValidKey | IDBKeyRange): IDBRequest<any | void>;
    /**
     * Retrieves the values of the records matching the given key or key range in query (up to count if given).
     * If successful, request's result will be an Array of the values.
     */
    getAll(query?: IDBValidKey | IDBKeyRange, count?: number): IDBRequest<any[]>;
    /**
     * Retrieves the keys of records matching the given key or key range in query (up to count if given).
     * If successful, request's result will be an Array of the keys.
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange, count?: number): IDBRequest<IDBValidKey[]>;
    /**
     * Retrieves the key of the first record matching the
     * given key or key range in query.
     * If successful, request's result will be the key, or undefined if there was no matching record.
     */
    getKey(key: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | void>;
    /**
     * Opens a cursor over the records matching query,
     * ordered by direction. If query is null, all records in index are matched.
     * If successful, request's result will be an IDBCursorWithValue, or null if there were no matching records.
     */
    openCursor(range?: IDBValidKey | IDBKeyRange, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    /**
     * Opens a cursor with key only flag set over the records matching query, ordered by direction. If query is null, all records in index are matched.
     * If successful, request's result will be an IDBCursor, or null if there were no matching records.
     */
    openKeyCursor(range?: IDBValidKey | IDBKeyRange, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
}

declare class IDBKeyRange {
    constructor(): this;
    /**
     * Returns a new IDBKeyRange spanning from lower to upper.
     * If lowerOpen is true, lower is not included in the range.
     * If upperOpen is true, upper is not included in the range.
     */
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange starting at key with no
     * upper bound. If open is true, key is not included in the
     * range.
     */
    lowerBound(lower: any, open?: boolean): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange spanning only key.
     */
    only(value: any): IDBKeyRange;
    /**
     * Returns a new IDBKeyRange with no lower bound and ending at key. If open is true, key is not included in the range.
     */
    upperBound(upper: any, open?: boolean): IDBKeyRange;
    /**
     * Returns lower bound, or undefined if none.
     */
    +lower: any;
    /**
     * Returns true if the lower open flag is set, and false otherwise.
     */
    +lowerOpen: boolean;
    /**
     * Returns upper bound, or undefined if none.
     */
    +upper: any;
    /**
     * Returns true if the upper open flag is set, and false otherwise.
     */
    +upperOpen: boolean;
    /**
     * Returns true if key is included in the range, and false otherwise.
     */
    includes(key: any): boolean;
}

declare class IDBObjectStore {
    constructor(): this;
    /**
     * Returns true if the store has a key generator, and false otherwise.
     */
    +autoIncrement: boolean;
    /**
     * Returns a list of the names of indexes in the store.
     */
    +indexNames: DOMStringList;
    /**
     * Returns the key path of the store, or null if none.
     */
    +keyPath: string | string[];
    /**
     * Updates the name of the store to newName.
     * Throws "InvalidStateError" DOMException if not called within an upgrade
     * transaction.
     */
    name: string;
    /**
     * Returns the associated transaction.
     */
    +transaction: IDBTransaction;
    add(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
    /**
     * Deletes all records in store.
     * If successful, request's result will
     * be undefined.
     */
    clear(): IDBRequest<void>;
    /**
     * Retrieves the number of records matching the
     * given key or key range in query.
     * If successful, request's result will be the count.
     */
    count(key?: IDBValidKey | IDBKeyRange): IDBRequest<number>;
    /**
     * Creates a new index in store with the given name, keyPath and options and returns a new IDBIndex. If the keyPath and options define constraints that cannot be
     * satisfied with the data already in store the upgrade
     * transaction will abort with
     * a "ConstraintError" DOMException.
     * Throws an "InvalidStateError" DOMException if not called within an upgrade
     * transaction.
     */
    createIndex(name: string, keyPath: string | string[], options?: IDBIndexParameters): IDBIndex;
    /**
     * Deletes records in store with the given key or in the given key range in query.
     * If successful, request's result will
     * be undefined.
     */
    delete(key: IDBValidKey | IDBKeyRange): IDBRequest<void>;
    /**
     * Deletes the index in store with the given name.
     * Throws an "InvalidStateError" DOMException if not called within an upgrade
     * transaction.
     */
    deleteIndex(name: string): void;
    /**
     * Retrieves the value of the first record matching the
     * given key or key range in query.
     * If successful, request's result will be the value, or undefined if there was no matching record.
     */
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any | void>;
    /**
     * Retrieves the values of the records matching the
     * given key or key range in query (up to count if given).
     * If successful, request's result will
     * be an Array of the values.
     */
    getAll(query?: IDBValidKey | IDBKeyRange, count?: number): IDBRequest<any[]>;
    /**
     * Retrieves the keys of records matching the
     * given key or key range in query (up to count if given).
     * If successful, request's result will
     * be an Array of the keys.
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange, count?: number): IDBRequest<IDBValidKey[]>;
    /**
     * Retrieves the key of the first record matching the
     * given key or key range in query.
     * If successful, request's result will be the key, or undefined if there was no matching record.
     */
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | void>;
    index(name: string): IDBIndex;
    /**
     * Opens a cursor over the records matching query,
     * ordered by direction. If query is null, all records in store are matched.
     * If successful, request's result will be an IDBCursorWithValue pointing at the first matching record, or null if there were no matching records.
     */
    openCursor(range?: IDBValidKey | IDBKeyRange, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    /**
     * Opens a cursor with key only flag set over the records matching query, ordered by direction. If query is null, all records in store are matched.
     * If successful, request's result will be an IDBCursor pointing at the first matching record, or
     * null if there were no matching records.
     */
    openKeyCursor(query?: IDBValidKey | IDBKeyRange, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>;
    put(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
}

type IDBOpenDBRequestEventMap = IDBRequestEventMap & {
    "blocked": Event,
    "upgradeneeded": IDBVersionChangeEvent,
    [key: string]: Event,
}

declare class IDBOpenDBRequest mixins IDBRequest<IDBDatabase> {
    constructor(): this;
    onblocked: ((/*this: IDBOpenDBRequest, */ev: Event) => any) | null;
    onupgradeneeded: ((/*this: IDBOpenDBRequest, */ev: IDBVersionChangeEvent) => any) | null;
    addEventListener<K: $Keys<IDBOpenDBRequestEventMap>>(type: K, listener: (/*this: IDBOpenDBRequest, */ev: $ElementType<IDBOpenDBRequestEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<IDBOpenDBRequestEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<IDBOpenDBRequestEventMap>>(type: K, listener: (/*this: IDBOpenDBRequest, */ev: $ElementType<IDBOpenDBRequestEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<IDBOpenDBRequestEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

type IDBRequestEventMap = & {
    "error": Event,
    "success": Event,
    [key: string]: Event,
}

declare class IDBRequest<T = any> mixins EventTarget {
    constructor(): this;
    /**
     * When a request is completed, returns the error (a DOMException), or null if the request succeeded. Throws
     * a "InvalidStateError" DOMException if the request is still pending.
     */
    +error: DOMException | null;
    onerror: ((/*this: IDBRequest<T>, */ev: Event) => any) | null;
    onsuccess: ((/*this: IDBRequest<T>, */ev: Event) => any) | null;
    /**
     * Returns "pending" until a request is complete,
     * then returns "done".
     */
    +readyState: IDBRequestReadyState;
    /**
     * When a request is completed, returns the result,
     * or undefined if the request failed. Throws a
     * "InvalidStateError" DOMException if the request is still pending.
     */
    +result: T;
    /**
     * Returns the IDBObjectStore, IDBIndex, or IDBCursor the request was made against, or null if is was an open
     * request.
     */
    +source: IDBObjectStore | IDBIndex | IDBCursor;
    /**
     * Returns the IDBTransaction the request was made within.
     * If this as an open request, then it returns an upgrade transaction while it is running, or null otherwise.
     */
    +transaction: IDBTransaction | null;
    addEventListener<K: $Keys<IDBRequestEventMap>>(type: K, listener: (/*this: IDBRequest<T>, */ev: $ElementType<IDBRequestEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<IDBRequestEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<IDBRequestEventMap>>(type: K, listener: (/*this: IDBRequest<T>, */ev: $ElementType<IDBRequestEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<IDBRequestEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

type IDBTransactionEventMap = & {
    "abort": Event,
    "complete": Event,
    "error": Event,
    [key: string]: Event,
}

declare class IDBTransaction mixins EventTarget {
    constructor(): this;
    /**
     * Returns the transaction's connection.
     */
    +db: IDBDatabase;
    /**
     * If the transaction was aborted, returns the
     * error (a DOMException) providing the reason.
     */
    +error: DOMException;
    /**
     * Returns the mode the transaction was created with
     * ("readonly" or "readwrite"), or "versionchange" for
     * an upgrade transaction.
     */
    +mode: IDBTransactionMode;
    /**
     * Returns a list of the names of object stores in the
     * transaction's scope. For an upgrade transaction this is all object stores in the database.
     */
    +objectStoreNames: DOMStringList;
    onabort: ((/*this: IDBTransaction, */ev: Event) => any) | null;
    oncomplete: ((/*this: IDBTransaction, */ev: Event) => any) | null;
    onerror: ((/*this: IDBTransaction, */ev: Event) => any) | null;
    /**
     * Aborts the transaction. All pending requests will fail with
     * a "AbortError" DOMException and all changes made to the database will be
     * reverted.
     */
    abort(): void;
    /**
     * Returns an IDBObjectStore in the transaction's scope.
     */
    objectStore(name: string): IDBObjectStore;
    addEventListener<K: $Keys<IDBTransactionEventMap>>(type: K, listener: (/*this: IDBTransaction, */ev: $ElementType<IDBTransactionEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<IDBTransactionEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<IDBTransactionEventMap>>(type: K, listener: (/*this: IDBTransaction, */ev: $ElementType<IDBTransactionEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<IDBTransactionEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare class IDBVersionChangeEvent mixins Event {
    constructor(type: string, eventInitDict?: IDBVersionChangeEventInit): this;
    +newVersion: number | null;
    +oldVersion: number;
}

declare class ImageBitmap {
    constructor(): this;
    /**
     * Returns the intrinsic height of the image, in CSS
     * pixels.
     */
    +height: number;
    /**
     * Returns the intrinsic width of the image, in CSS
     * pixels.
     */
    +width: number;
    /**
     * Releases imageBitmap's underlying bitmap data.
     */
    close(): void;
}

declare type ImageBitmapOptions = interface {
    colorSpaceConversion?: "none" | "default";
    imageOrientation?: "none" | "flipY";
    premultiplyAlpha?: "none" | "premultiply" | "default";
    resizeHeight?: number;
    resizeQuality?: "pixelated" | "low" | "medium" | "high";
    resizeWidth?: number;
}

declare class ImageData {
    constructor(width: number, height: number): ImageData;
    constructor(array: Uint8ClampedArray, width: number, height: number): ImageData;
    /**
     * Returns the one-dimensional array containing the data in RGBA order, as integers in the
     * range 0 to 255.
     */
    +data: Uint8ClampedArray;
    /**
     * Returns the actual dimensions of the data in the ImageData object, in
     * pixels.
     */
    +height: number;
    +width: number;
}

declare class MessageChannel {
    constructor(): this;
    +port1: MessagePort;
    +port2: MessagePort;
}

declare class MessageEvent mixins Event {
    constructor(type: string, eventInitDict?: MessageEventInit): this;
    /**
     * Returns the data of the message.
     */
    +data: any;
    /**
     * Returns the last event ID string, for
     * server-sent events.
     */
    +lastEventId: string;
    /**
     * Returns the origin of the message, for server-sent events and
     * cross-document messaging.
     */
    +origin: string;
    /**
     * Returns the MessagePort array sent with the message, for cross-document
     * messaging and channel messaging.
     */
    +ports: ReadonlyArray<MessagePort>;
    /**
     * Returns the WindowProxy of the source window, for cross-document
     * messaging, and the MessagePort being attached, in the connect event fired at
     * SharedWorkerGlobalScope objects.
     */
    +source: MessageEventSource | null;
}

type MessagePortEventMap = & {
    "message": MessageEvent,
    "messageerror": MessageEvent,
    [key: string]: Event,
}

declare class MessagePort mixins EventTarget {
    constructor(): this;
    onmessage: ((/*this: MessagePort, */ev: MessageEvent) => any) | null;
    onmessageerror: ((/*this: MessagePort, */ev: MessageEvent) => any) | null;
    /**
     * Disconnects the port, so that it is no longer active.
     */
    close(): void;
    /**
     * Posts a message through the channel. Objects listed in transfer are
     * transferred, not just cloned, meaning that they are no longer usable on the sending side.
     * Throws a "DataCloneError" DOMException if
     * transfer contains duplicate objects or port, or if message
     * could not be cloned.
     */
    postMessage(message: any, transfer?: Transferable[]): void;
    /**
     * Begins dispatching messages received on the port.
     */
    start(): void;
    addEventListener<K: $Keys<MessagePortEventMap>>(type: K, listener: (/*this: MessagePort, */ev: $ElementType<MessagePortEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<MessagePortEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<MessagePortEventMap>>(type: K, listener: (/*this: MessagePort, */ev: $ElementType<MessagePortEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<MessagePortEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare class NavigationPreloadManager {
    constructor(): this;
    disable(): Promise<void>;
    enable(): Promise<void>;
    getState(): Promise<NavigationPreloadState>;
    setHeaderValue(value: string): Promise<void>;
}

declare type NavigatorBeacon = interface {
    sendBeacon(url: string, data?: Blob | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | FormData | string | null): boolean;
}

declare type NavigatorConcurrentHardware = interface {
    +hardwareConcurrency: number;
}

declare type NavigatorID = interface {
    +appCodeName: string;
    +appName: string;
    +appVersion: string;
    +platform: string;
    +product: string;
    +productSub: string;
    +userAgent: string;
    +vendor: string;
    +vendorSub: string;
}

declare type NavigatorOnLine = interface {
    +onLine: boolean;
}

declare type NavigatorStorage = interface {
    +storage: StorageManager;
}

type NotificationEventMap = & {
    "click": Event,
    "close": Event,
    "error": Event,
    "show": Event,
    [key: string]: Event,
}

declare class Notification mixins EventTarget {
    constructor(title: string, options?: NotificationOptions): this;
    +maxActions: number;
    +permission: NotificationPermission;
    +actions: ReadonlyArray<NotificationAction>;
    +badge: string;
    +body: string;
    +data: any;
    +dir: NotificationDirection;
    +icon: string;
    +image: string;
    +lang: string;
    onclick: ((/*this: Notification, */ev: Event) => any) | null;
    onclose: ((/*this: Notification, */ev: Event) => any) | null;
    onerror: ((/*this: Notification, */ev: Event) => any) | null;
    onshow: ((/*this: Notification, */ev: Event) => any) | null;
    +renotify: boolean;
    +requireInteraction: boolean;
    +silent: boolean;
    +tag: string;
    +timestamp: number;
    +title: string;
    +vibrate: ReadonlyArray<number>;
    close(): void;
    addEventListener<K: $Keys<NotificationEventMap>>(type: K, listener: (/*this: Notification, */ev: $ElementType<NotificationEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<NotificationEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<NotificationEventMap>>(type: K, listener: (/*this: Notification, */ev: $ElementType<NotificationEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<NotificationEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare class NotificationEvent mixins ExtendableEvent {
    constructor(type: string, eventInitDict: NotificationEventInit): this;
    +action: string;
    +notification: Notification;
}

declare type OES_element_index_uint = interface {
}

declare type OES_standard_derivatives = interface {
    +FRAGMENT_SHADER_DERIVATIVE_HINT_OES: GLenum;
}

declare type OES_texture_float = interface {
}

declare type OES_texture_float_linear = interface {
}

declare type OES_texture_half_float = interface {
    +HALF_FLOAT_OES: GLenum;
}

declare type OES_texture_half_float_linear = interface {
}

declare type OES_vertex_array_object = interface {
    bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    createVertexArrayOES(): WebGLVertexArrayObjectOES | null;
    deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): GLboolean;
    +VERTEX_ARRAY_BINDING_OES: GLenum;
}

declare class Path2D implements CanvasPath {
    constructor(path?: Path2D | string): this;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    closePath(): void;
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    lineTo(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
    addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
}

type PerformanceEventMap = & {
    "resourcetimingbufferfull": Event,
    [key: string]: Event,
}

declare class Performance mixins EventTarget {
    constructor(): this;
    onresourcetimingbufferfull: ((/*this: Performance, */ev: Event) => any) | null;
    +timeOrigin: number;
    clearMarks(markName?: string): void;
    clearMeasures(measureName?: string): void;
    clearResourceTimings(): void;
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
    mark(markName: string): void;
    measure(measureName: string, startMark?: string, endMark?: string): void;
    now(): number;
    setResourceTimingBufferSize(maxSize: number): void;
    toJSON(): any;
    addEventListener<K: $Keys<PerformanceEventMap>>(type: K, listener: (/*this: Performance, */ev: $ElementType<PerformanceEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<PerformanceEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<PerformanceEventMap>>(type: K, listener: (/*this: Performance, */ev: $ElementType<PerformanceEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<PerformanceEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare class PerformanceEntry {
    constructor(): this;
    +duration: number;
    +entryType: string;
    +name: string;
    +startTime: number;
    toJSON(): any;
}

declare class PerformanceMark mixins PerformanceEntry {
    constructor(): this;
}

declare class PerformanceMeasure mixins PerformanceEntry {
    constructor(): this;
}

declare class PerformanceObserver {
    constructor(callback: PerformanceObserverCallback): this;
    +supportedEntryTypes: ReadonlyArray<string>;
    disconnect(): void;
    observe(options: PerformanceObserverInit): void;
    takeRecords(): PerformanceEntryList;
}

declare class PerformanceObserverEntryList {
    constructor(): this;
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
}

declare class PerformanceResourceTiming mixins PerformanceEntry {
    constructor(): this;
    +connectEnd: number;
    +connectStart: number;
    +decodedBodySize: number;
    +domainLookupEnd: number;
    +domainLookupStart: number;
    +encodedBodySize: number;
    +fetchStart: number;
    +initiatorType: string;
    +nextHopProtocol: string;
    +redirectEnd: number;
    +redirectStart: number;
    +requestStart: number;
    +responseEnd: number;
    +responseStart: number;
    +secureConnectionStart: number;
    +transferSize: number;
    +workerStart: number;
    toJSON(): any;
}

declare class ProgressEvent mixins Event {
    constructor(type: string, eventInitDict?: ProgressEventInit): this;
    +lengthComputable: boolean;
    +loaded: number;
    +total: number;
}

declare class PromiseRejectionEvent mixins Event {
    constructor(type: string, eventInitDict: PromiseRejectionEventInit): this;
    +promise: Promise<any>;
    +reason: any;
}

declare class PushEvent mixins ExtendableEvent {
    constructor(type: string, eventInitDict?: PushEventInit): this;
    +data: PushMessageData | null;
}

declare class PushManager {
    constructor(): this;
    +supportedContentEncodings: ReadonlyArray<string>;
    getSubscription(): Promise<PushSubscription | null>;
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PushPermissionState>;
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
}

declare class PushMessageData {
    constructor(): this;
    arrayBuffer(): ArrayBuffer;
    blob(): Blob;
    json(): any;
    text(): string;
}

declare class PushSubscription {
    constructor(): this;
    +endpoint: string;
    +expirationTime: number | null;
    +options: PushSubscriptionOptions;
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
    toJSON(): PushSubscriptionJSON;
    unsubscribe(): Promise<boolean>;
}

declare class PushSubscriptionChangeEvent mixins ExtendableEvent {
    constructor(type: string, eventInitDict?: PushSubscriptionChangeInit): this;
    +newSubscription: PushSubscription | null;
    +oldSubscription: PushSubscription | null;
}

declare class PushSubscriptionOptions {
    constructor(): this;
    +applicationServerKey: ArrayBuffer | null;
    +userVisibleOnly: boolean;
}

declare type ReadableByteStreamController = interface {
    +byobRequest: ReadableStreamBYOBRequest | void;
    +desiredSize: number | null;
    close(): void;
    enqueue(chunk: ArrayBufferView): void;
    error(error?: any): void;
}

declare class ReadableStream<R = any> {
    constructor(underlyingSource: UnderlyingByteSource, strategy?: { highWaterMark?: number, size?: void }): ReadableStream<Uint8Array>;
    constructror<R>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
    +locked: boolean;
    cancel(reason?: any): Promise<void>;
    getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
    getReader(): ReadableStreamDefaultReader<R>;
    pipeThrough<T>(options: { writable: WritableStream<R>, readable: ReadableStream<T> }, options?: PipeOptions): ReadableStream<T>;
    pipeTo(dest: WritableStream<R>, options?: PipeOptions): Promise<void>;
    tee(): [ReadableStream<R>, ReadableStream<R>];
}

declare class ReadableStreamBYOBReader {
    constructor(stream: ReadableStream<Uint8Array>): ReadableStreamBYOBReader;
    +closed: Promise<void>;
    cancel(reason?: any): Promise<void>;
    read<T: ArrayBufferView>(view: T): Promise<ReadableStreamReadResult<T>>;
    releaseLock(): void;
}

declare type ReadableStreamBYOBRequest = interface {
    +view: ArrayBufferView;
    respond(bytesWritten: number): void;
    respondWithNewView(view: ArrayBufferView): void;
}

declare type ReadableStreamDefaultController<R = any> = interface {
    +desiredSize: number | null;
    close(): void;
    enqueue(chunk: R): void;
    error(error?: any): void;
}

declare type ReadableStreamDefaultReader<R = any> = interface {
    +closed: Promise<void>;
    cancel(reason?: any): Promise<void>;
    read(): Promise<ReadableStreamReadResult<R>>;
    releaseLock(): void;
}

declare type ReadableStreamReadResult<T> = interface {
    done: boolean;
    value: T;
}

declare class ReadableStreamReader<R = any> {
    constructor(): this;
    cancel(): Promise<void>;
    read(): Promise<ReadableStreamReadResult<R>>;
    releaseLock(): void;
}

declare class Request implements Body {
    constructor(input: RequestInfo, init?: RequestInit): this;
    +body: ReadableStream<Uint8Array> | null;
    +bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
    /**
     * Returns the cache mode associated with request, which is a string indicating
     * how the request will interact with the browser's cache when fetching.
     */
    +cache: RequestCache;
    /**
     * Returns the credentials mode associated with request, which is a string
     * indicating whether credentials will be sent with the request always, never, or only when sent to a
     * same-origin URL.
     */
    +credentials: RequestCredentials;
    /**
     * Returns the kind of resource requested by request, e.g., "document" or
     * "script".
     */
    +destination: RequestDestination;
    /**
     * Returns a Headers object consisting of the headers associated with request.
     * Note that headers added in the network layer by the user agent will not be accounted for in this
     * object, e.g., the "Host" header.
     */
    +headers: Headers;
    /**
     * Returns request's subresource integrity metadata, which is a cryptographic hash of
     * the resource being fetched. Its value consists of multiple hashes separated by whitespace. [SRI]
     */
    +integrity: string;
    /**
     * Returns a boolean indicating whether or not request is for a history
     * navigation (a.k.a. back-foward navigation).
     */
    +isHistoryNavigation: boolean;
    /**
     * Returns a boolean indicating whether or not request is for a reload navigation.
     */
    +isReloadNavigation: boolean;
    /**
     * Returns a boolean indicating whether or not request can outlive the global in which
     * it was created.
     */
    +keepalive: boolean;
    /**
     * Returns request's HTTP method, which is "GET" by default.
     */
    +method: string;
    /**
     * Returns the mode associated with request, which is a string indicating
     * whether the request will use CORS, or will be restricted to same-origin URLs.
     */
    +mode: RequestMode;
    /**
     * Returns the redirect mode associated with request, which is a string
     * indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.
     */
    +redirect: RequestRedirect;
    /**
     * Returns the referrer of request. Its value can be a same-origin URL if
     * explicitly set in init, the empty string to indicate no referrer, and
     * "about:client" when defaulting to the global's default. This is used during
     * fetching to determine the value of the `Referer` header of the request being made.
     */
    +referrer: string;
    /**
     * Returns the referrer policy associated with request. This is used during
     * fetching to compute the value of the request's referrer.
     */
    +referrerPolicy: ReferrerPolicy;
    /**
     * Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort
     * event handler.
     */
    +signal: AbortSignal;
    /**
     * Returns the URL of request as a string.
     */
    +url: string;
    clone(): Request;
}

declare class Response implements Body {
    constructor(body?: BodyInit | null, init?: ResponseInit): this;
    error(): Response;
    redirect(url: string, status?: number): Response;
    +body: ReadableStream<Uint8Array> | null;
    +bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
    +headers: Headers;
    +ok: boolean;
    +redirected: boolean;
    +status: number;
    +statusText: string;
    +trailer: Promise<Headers>;
    +type: ResponseType;
    +url: string;
    clone(): Response;
}

type ServiceWorkerEventMap = AbstractWorkerEventMap & {
    "statechange": Event,
    [key: string]: Event,
}

declare class ServiceWorker mixins EventTarget implements AbstractWorker {
    constructor(): this;
    onerror: ((/*this: AbstractWorker, */ev: ErrorEvent) => any) | null;
    onstatechange: ((/*this: ServiceWorker, */ev: Event) => any) | null;
    +scriptURL: string;
    +state: ServiceWorkerState;
    postMessage(message: any, transfer?: Transferable[]): void;
    addEventListener<K: $Keys<ServiceWorkerEventMap>>(type: K, listener: (/*this: ServiceWorker, */ev: $ElementType<ServiceWorkerEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<ServiceWorkerEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<ServiceWorkerEventMap>>(type: K, listener: (/*this: ServiceWorker, */ev: $ElementType<ServiceWorkerEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<ServiceWorkerEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

type ServiceWorkerContainerEventMap = & {
    "controllerchange": Event,
    "message": MessageEvent,
    "messageerror": MessageEvent,
    [key: string]: Event,
}

declare class ServiceWorkerContainer mixins EventTarget {
    constructor(): this;
    +controller: ServiceWorker | null;
    oncontrollerchange: ((/*this: ServiceWorkerContainer, */ev: Event) => any) | null;
    onmessage: ((/*this: ServiceWorkerContainer, */ev: MessageEvent) => any) | null;
    onmessageerror: ((/*this: ServiceWorkerContainer, */ev: MessageEvent) => any) | null;
    +ready: Promise<ServiceWorkerRegistration>;
    getRegistration(clientURL?: string): Promise<ServiceWorkerRegistration | void>;
    getRegistrations(): Promise<ReadonlyArray<ServiceWorkerRegistration>>;
    register(scriptURL: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
    startMessages(): void;
    addEventListener<K: $Keys<ServiceWorkerContainerEventMap>>(type: K, listener: (/*this: ServiceWorkerContainer, */ev: $ElementType<ServiceWorkerContainerEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<ServiceWorkerContainerEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<ServiceWorkerContainerEventMap>>(type: K, listener: (/*this: ServiceWorkerContainer, */ev: $ElementType<ServiceWorkerContainerEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<ServiceWorkerContainerEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

type ServiceWorkerGlobalScopeEventMap = WorkerGlobalScopeEventMap & {
    "activate": ExtendableEvent,
    "fetch": FetchEvent,
    "install": ExtendableEvent,
    "message": ExtendableMessageEvent,
    "messageerror": MessageEvent,
    "notificationclick": NotificationEvent,
    "notificationclose": NotificationEvent,
    "push": PushEvent,
    "pushsubscriptionchange": PushSubscriptionChangeEvent,
    "sync": SyncEvent,
    [key: string]: Event,
}

declare class ServiceWorkerGlobalScope mixins WorkerGlobalScope {
    constructor(): this;
    +clients: Clients;
    onactivate: ((/*this: ServiceWorkerGlobalScope, */ev: ExtendableEvent) => any) | null;
    onfetch: ((/*this: ServiceWorkerGlobalScope, */ev: FetchEvent) => any) | null;
    oninstall: ((/*this: ServiceWorkerGlobalScope, */ev: ExtendableEvent) => any) | null;
    onmessage: ((/*this: ServiceWorkerGlobalScope, */ev: ExtendableMessageEvent) => any) | null;
    onmessageerror: ((/*this: ServiceWorkerGlobalScope, */ev: MessageEvent) => any) | null;
    onnotificationclick: ((/*this: ServiceWorkerGlobalScope, */ev: NotificationEvent) => any) | null;
    onnotificationclose: ((/*this: ServiceWorkerGlobalScope, */ev: NotificationEvent) => any) | null;
    onpush: ((/*this: ServiceWorkerGlobalScope, */ev: PushEvent) => any) | null;
    onpushsubscriptionchange: ((/*this: ServiceWorkerGlobalScope, */ev: PushSubscriptionChangeEvent) => any) | null;
    onsync: ((/*this: ServiceWorkerGlobalScope, */ev: SyncEvent) => any) | null;
    +registration: ServiceWorkerRegistration;
    skipWaiting(): Promise<void>;
    addEventListener<K: $Keys<ServiceWorkerGlobalScopeEventMap>>(type: K, listener: (/*this: ServiceWorkerGlobalScope, */ev: $ElementType<ServiceWorkerGlobalScopeEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<ServiceWorkerGlobalScopeEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<ServiceWorkerGlobalScopeEventMap>>(type: K, listener: (/*this: ServiceWorkerGlobalScope, */ev: $ElementType<ServiceWorkerGlobalScopeEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<ServiceWorkerGlobalScopeEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

type ServiceWorkerRegistrationEventMap = & {
    "updatefound": Event,
    [key: string]: Event,
}

declare class ServiceWorkerRegistration mixins EventTarget {
    constructor(): this;
    +active: ServiceWorker | null;
    +installing: ServiceWorker | null;
    +navigationPreload: NavigationPreloadManager;
    onupdatefound: ((/*this: ServiceWorkerRegistration, */ev: Event) => any) | null;
    +pushManager: PushManager;
    +scope: string;
    +sync: SyncManager;
    +updateViaCache: ServiceWorkerUpdateViaCache;
    +waiting: ServiceWorker | null;
    getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>;
    showNotification(title: string, options?: NotificationOptions): Promise<void>;
    unregister(): Promise<boolean>;
    update(): Promise<void>;
    addEventListener<K: $Keys<ServiceWorkerRegistrationEventMap>>(type: K, listener: (/*this: ServiceWorkerRegistration, */ev: $ElementType<ServiceWorkerRegistrationEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<ServiceWorkerRegistrationEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<ServiceWorkerRegistrationEventMap>>(type: K, listener: (/*this: ServiceWorkerRegistration, */ev: $ElementType<ServiceWorkerRegistrationEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<ServiceWorkerRegistrationEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare class StorageManager {
    constructor(): this;
    estimate(): Promise<StorageEstimate>;
    persisted(): Promise<boolean>;
}

declare class SubtleCrypto {
    constructor(): this;
    decrypt(algorithm: string | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<ArrayBuffer>;
    deriveBits(algorithm: string | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, length: number): PromiseLike<ArrayBuffer>;
    deriveKey(algorithm: string | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: string | AesDerivedKeyParams | HmacImportParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    digest(algorithm: string | Algorithm, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<ArrayBuffer>;
    encrypt(algorithm: string | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<ArrayBuffer>;
    exportKey(format: "jwk", key: CryptoKey): PromiseLike<JsonWebKey>;
    exportKey(format: "raw" | "pkcs8" | "spki", key: CryptoKey): PromiseLike<ArrayBuffer>;
    exportKey(format: string, key: CryptoKey): PromiseLike<JsonWebKey | ArrayBuffer>;
    generateKey(algorithm: string, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKeyPair | CryptoKey>;
    generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams | DhKeyGenParams, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKeyPair>;
    generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    importKey(format: "jwk", keyData: JsonWebKey, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    importKey(format: "raw" | "pkcs8" | "spki", keyData: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    importKey(format: string, keyData: JsonWebKey | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, algorithm: string | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    sign(algorithm: string | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<ArrayBuffer>;
    unwrapKey(format: string, wrappedKey: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, unwrappingKey: CryptoKey, unwrapAlgorithm: string | Algorithm, unwrappedKeyAlgorithm: string | Algorithm, extractable: boolean, keyUsages: string[]): PromiseLike<CryptoKey>;
    verify(algorithm: string | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, signature: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<boolean>;
    wrapKey(format: string, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: string | Algorithm): PromiseLike<ArrayBuffer>;
}

declare class SyncEvent mixins ExtendableEvent {
    constructor(type: string, init: SyncEventInit): this;
    +lastChance: boolean;
    +tag: string;
}

declare class SyncManager {
    constructor(): this;
    getTags(): Promise<string[]>;
    register(tag: string): Promise<void>;
}

declare class TextDecoder {
    constructor(label?: string, options?: TextDecoderOptions): this;
    /**
     * Returns encoding's name, lowercased.
     */
    +encoding: string;
    /**
     * Returns true if error mode is "fatal", and false
     * otherwise.
     */
    +fatal: boolean;
    /**
     * Returns true if ignore BOM flag is set, and false otherwise.
     */
    +ignoreBOM: boolean;
    /**
     * Returns the result of running encoding's decoder. The
     * method can be invoked zero or more times with options's stream set to
     * true, and then once without options's stream (or set to false), to process
     * a fragmented stream. If the invocation without options's stream (or set to
     * false) has no input, it's clearest to omit both arguments.
     * var string = "", decoder = new TextDecoder(encoding), buffer;
     * while(buffer = next_chunk()) {
     * string += decoder.decode(buffer, {stream:true});
     * }
     * string += decoder.decode(); // end-of-stream
     * If the error mode is "fatal" and encoding's decoder returns error, throws a TypeError.
     */
    decode(input?: BufferSource, options?: TextDecodeOptions): string;
}

declare class TextEncoder {
    constructor(): this;
    /**
     * Returns "utf-8".
     */
    +encoding: string;
    /**
     * Returns the result of running UTF-8's encoder.
     */
    encode(input?: string): Uint8Array;
}

declare class TextMetrics {
    constructor(): this;
    +actualBoundingBoxAscent: number;
    +actualBoundingBoxDescent: number;
    +actualBoundingBoxLeft: number;
    +actualBoundingBoxRight: number;
    +alphabeticBaseline: number;
    +emHeightAscent: number;
    +emHeightDescent: number;
    +fontBoundingBoxAscent: number;
    +fontBoundingBoxDescent: number;
    +hangingBaseline: number;
    /**
     * Returns the measurement described below.
     */
    +ideographicBaseline: number;
    +width: number;
}

declare class TransformStream<I = any, O = any> {
    constructror<I, O>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>;
    +readable: ReadableStream<O>;
    +writable: WritableStream<I>;
}

declare type TransformStreamDefaultController<O = any> = interface {
    +desiredSize: number | null;
    enqueue(chunk: O): void;
    error(reason?: any): void;
    terminate(): void;
}

declare class URL {
    constructor(url: string, base?: string | URL): URL;
    createObjectURL(object: any): string;
    revokeObjectURL(url: string): void;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    +origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    +searchParams: URLSearchParams;
    username: string;
    toJSON(): string;
}

declare class URLSearchParams {
    constructor(init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
    /**
     * Appends a specified key/value pair as a new search parameter.
     */
    append(name: string, value: string): void;
    /**
     * Deletes the given search parameter, and its associated value, from the list of all search parameters.
     */
    delete(name: string): void;
    /**
     * Returns the first value associated to the given search parameter.
     */
    get(name: string): string | null;
    /**
     * Returns all the values association with a given search parameter.
     */
    getAll(name: string): string[];
    /**
     * Returns a Boolean indicating if such a search parameter exists.
     */
    has(name: string): boolean;
    /**
     * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
     */
    set(name: string, value: string): void;
    sort(): void;
    forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
}

declare type WEBGL_color_buffer_float = interface {
    +FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: GLenum;
    +RGBA32F_EXT: GLenum;
    +UNSIGNED_NORMALIZED_EXT: GLenum;
}

declare type WEBGL_compressed_texture_astc = interface {
    getSupportedProfiles(): string[];
    +COMPRESSED_RGBA_ASTC_10x10_KHR: GLenum;
    +COMPRESSED_RGBA_ASTC_10x5_KHR: GLenum;
    +COMPRESSED_RGBA_ASTC_10x6_KHR: GLenum;
    +COMPRESSED_RGBA_ASTC_10x8_KHR: GLenum;
    +COMPRESSED_RGBA_ASTC_12x10_KHR: GLenum;
    +COMPRESSED_RGBA_ASTC_12x12_KHR: GLenum;
    +COMPRESSED_RGBA_ASTC_4x4_KHR: GLenum;
    +COMPRESSED_RGBA_ASTC_5x4_KHR: GLenum;
    +COMPRESSED_RGBA_ASTC_5x5_KHR: GLenum;
    +COMPRESSED_RGBA_ASTC_6x5_KHR: GLenum;
    +COMPRESSED_RGBA_ASTC_6x6_KHR: GLenum;
    +COMPRESSED_RGBA_ASTC_8x5_KHR: GLenum;
    +COMPRESSED_RGBA_ASTC_8x6_KHR: GLenum;
    +COMPRESSED_RGBA_ASTC_8x8_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: GLenum;
    +COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: GLenum;
}

declare type WEBGL_compressed_texture_s3tc = interface {
    +COMPRESSED_RGBA_S3TC_DXT1_EXT: GLenum;
    +COMPRESSED_RGBA_S3TC_DXT3_EXT: GLenum;
    +COMPRESSED_RGBA_S3TC_DXT5_EXT: GLenum;
    +COMPRESSED_RGB_S3TC_DXT1_EXT: GLenum;
}

declare type WEBGL_compressed_texture_s3tc_srgb = interface {
    +COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: GLenum;
    +COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: GLenum;
    +COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: GLenum;
    +COMPRESSED_SRGB_S3TC_DXT1_EXT: GLenum;
}

declare type WEBGL_debug_renderer_info = interface {
    +UNMASKED_RENDERER_WEBGL: GLenum;
    +UNMASKED_VENDOR_WEBGL: GLenum;
}

declare type WEBGL_debug_shaders = interface {
    getTranslatedShaderSource(shader: WebGLShader): string;
}

declare type WEBGL_depth_texture = interface {
    +UNSIGNED_INT_24_8_WEBGL: GLenum;
}

declare type WEBGL_draw_buffers = interface {
    drawBuffersWEBGL(buffers: GLenum[]): void;
    +COLOR_ATTACHMENT0_WEBGL: GLenum;
    +COLOR_ATTACHMENT10_WEBGL: GLenum;
    +COLOR_ATTACHMENT11_WEBGL: GLenum;
    +COLOR_ATTACHMENT12_WEBGL: GLenum;
    +COLOR_ATTACHMENT13_WEBGL: GLenum;
    +COLOR_ATTACHMENT14_WEBGL: GLenum;
    +COLOR_ATTACHMENT15_WEBGL: GLenum;
    +COLOR_ATTACHMENT1_WEBGL: GLenum;
    +COLOR_ATTACHMENT2_WEBGL: GLenum;
    +COLOR_ATTACHMENT3_WEBGL: GLenum;
    +COLOR_ATTACHMENT4_WEBGL: GLenum;
    +COLOR_ATTACHMENT5_WEBGL: GLenum;
    +COLOR_ATTACHMENT6_WEBGL: GLenum;
    +COLOR_ATTACHMENT7_WEBGL: GLenum;
    +COLOR_ATTACHMENT8_WEBGL: GLenum;
    +COLOR_ATTACHMENT9_WEBGL: GLenum;
    +DRAW_BUFFER0_WEBGL: GLenum;
    +DRAW_BUFFER10_WEBGL: GLenum;
    +DRAW_BUFFER11_WEBGL: GLenum;
    +DRAW_BUFFER12_WEBGL: GLenum;
    +DRAW_BUFFER13_WEBGL: GLenum;
    +DRAW_BUFFER14_WEBGL: GLenum;
    +DRAW_BUFFER15_WEBGL: GLenum;
    +DRAW_BUFFER1_WEBGL: GLenum;
    +DRAW_BUFFER2_WEBGL: GLenum;
    +DRAW_BUFFER3_WEBGL: GLenum;
    +DRAW_BUFFER4_WEBGL: GLenum;
    +DRAW_BUFFER5_WEBGL: GLenum;
    +DRAW_BUFFER6_WEBGL: GLenum;
    +DRAW_BUFFER7_WEBGL: GLenum;
    +DRAW_BUFFER8_WEBGL: GLenum;
    +DRAW_BUFFER9_WEBGL: GLenum;
    +MAX_COLOR_ATTACHMENTS_WEBGL: GLenum;
    +MAX_DRAW_BUFFERS_WEBGL: GLenum;
}

declare type WEBGL_lose_context = interface {
    loseContext(): void;
    restoreContext(): void;
}

declare class WebGLActiveInfo {
    constructor(): this;
    +name: string;
    +size: GLint;
    +type: GLenum;
}

declare class WebGLBuffer mixins WebGLObject {
    constructor(): this;
}

declare class WebGLContextEvent mixins Event {
    constructor(type: string, eventInit?: WebGLContextEventInit): this;
    +statusMessage: string;
}

declare class WebGLFramebuffer mixins WebGLObject {
    constructor(): this;
}

declare class WebGLObject {
    constructor(): this;
}

declare class WebGLProgram mixins WebGLObject {
    constructor(): this;
}

declare class WebGLRenderbuffer mixins WebGLObject {
    constructor(): this;
}

declare class WebGLRenderingContext implements WebGLRenderingContextBase {
    constructor(): this;
    +ACTIVE_ATTRIBUTES: GLenum;
    +ACTIVE_TEXTURE: GLenum;
    +ACTIVE_UNIFORMS: GLenum;
    +ALIASED_LINE_WIDTH_RANGE: GLenum;
    +ALIASED_POINT_SIZE_RANGE: GLenum;
    +ALPHA: GLenum;
    +ALPHA_BITS: GLenum;
    +ALWAYS: GLenum;
    +ARRAY_BUFFER: GLenum;
    +ARRAY_BUFFER_BINDING: GLenum;
    +ATTACHED_SHADERS: GLenum;
    +BACK: GLenum;
    +BLEND: GLenum;
    +BLEND_COLOR: GLenum;
    +BLEND_DST_ALPHA: GLenum;
    +BLEND_DST_RGB: GLenum;
    +BLEND_EQUATION: GLenum;
    +BLEND_EQUATION_ALPHA: GLenum;
    +BLEND_EQUATION_RGB: GLenum;
    +BLEND_SRC_ALPHA: GLenum;
    +BLEND_SRC_RGB: GLenum;
    +BLUE_BITS: GLenum;
    +BOOL: GLenum;
    +BOOL_VEC2: GLenum;
    +BOOL_VEC3: GLenum;
    +BOOL_VEC4: GLenum;
    +BROWSER_DEFAULT_WEBGL: GLenum;
    +BUFFER_SIZE: GLenum;
    +BUFFER_USAGE: GLenum;
    +BYTE: GLenum;
    +CCW: GLenum;
    +CLAMP_TO_EDGE: GLenum;
    +COLOR_ATTACHMENT0: GLenum;
    +COLOR_BUFFER_BIT: GLenum;
    +COLOR_CLEAR_VALUE: GLenum;
    +COLOR_WRITEMASK: GLenum;
    +COMPILE_STATUS: GLenum;
    +COMPRESSED_TEXTURE_FORMATS: GLenum;
    +CONSTANT_ALPHA: GLenum;
    +CONSTANT_COLOR: GLenum;
    +CONTEXT_LOST_WEBGL: GLenum;
    +CULL_FACE: GLenum;
    +CULL_FACE_MODE: GLenum;
    +CURRENT_PROGRAM: GLenum;
    +CURRENT_VERTEX_ATTRIB: GLenum;
    +CW: GLenum;
    +DECR: GLenum;
    +DECR_WRAP: GLenum;
    +DELETE_STATUS: GLenum;
    +DEPTH_ATTACHMENT: GLenum;
    +DEPTH_BITS: GLenum;
    +DEPTH_BUFFER_BIT: GLenum;
    +DEPTH_CLEAR_VALUE: GLenum;
    +DEPTH_COMPONENT: GLenum;
    +DEPTH_COMPONENT16: GLenum;
    +DEPTH_FUNC: GLenum;
    +DEPTH_RANGE: GLenum;
    +DEPTH_STENCIL: GLenum;
    +DEPTH_STENCIL_ATTACHMENT: GLenum;
    +DEPTH_TEST: GLenum;
    +DEPTH_WRITEMASK: GLenum;
    +DITHER: GLenum;
    +DONT_CARE: GLenum;
    +DST_ALPHA: GLenum;
    +DST_COLOR: GLenum;
    +DYNAMIC_DRAW: GLenum;
    +ELEMENT_ARRAY_BUFFER: GLenum;
    +ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    +EQUAL: GLenum;
    +FASTEST: GLenum;
    +FLOAT: GLenum;
    +FLOAT_MAT2: GLenum;
    +FLOAT_MAT3: GLenum;
    +FLOAT_MAT4: GLenum;
    +FLOAT_VEC2: GLenum;
    +FLOAT_VEC3: GLenum;
    +FLOAT_VEC4: GLenum;
    +FRAGMENT_SHADER: GLenum;
    +FRAMEBUFFER: GLenum;
    +FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    +FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    +FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    +FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    +FRAMEBUFFER_BINDING: GLenum;
    +FRAMEBUFFER_COMPLETE: GLenum;
    +FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    +FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    +FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    +FRAMEBUFFER_UNSUPPORTED: GLenum;
    +FRONT: GLenum;
    +FRONT_AND_BACK: GLenum;
    +FRONT_FACE: GLenum;
    +FUNC_ADD: GLenum;
    +FUNC_REVERSE_SUBTRACT: GLenum;
    +FUNC_SUBTRACT: GLenum;
    +GENERATE_MIPMAP_HINT: GLenum;
    +GEQUAL: GLenum;
    +GREATER: GLenum;
    +GREEN_BITS: GLenum;
    +HIGH_FLOAT: GLenum;
    +HIGH_INT: GLenum;
    +IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    +IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    +INCR: GLenum;
    +INCR_WRAP: GLenum;
    +INT: GLenum;
    +INT_VEC2: GLenum;
    +INT_VEC3: GLenum;
    +INT_VEC4: GLenum;
    +INVALID_ENUM: GLenum;
    +INVALID_FRAMEBUFFER_OPERATION: GLenum;
    +INVALID_OPERATION: GLenum;
    +INVALID_VALUE: GLenum;
    +INVERT: GLenum;
    +KEEP: GLenum;
    +LEQUAL: GLenum;
    +LESS: GLenum;
    +LINEAR: GLenum;
    +LINEAR_MIPMAP_LINEAR: GLenum;
    +LINEAR_MIPMAP_NEAREST: GLenum;
    +LINES: GLenum;
    +LINE_LOOP: GLenum;
    +LINE_STRIP: GLenum;
    +LINE_WIDTH: GLenum;
    +LINK_STATUS: GLenum;
    +LOW_FLOAT: GLenum;
    +LOW_INT: GLenum;
    +LUMINANCE: GLenum;
    +LUMINANCE_ALPHA: GLenum;
    +MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    +MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    +MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    +MAX_RENDERBUFFER_SIZE: GLenum;
    +MAX_TEXTURE_IMAGE_UNITS: GLenum;
    +MAX_TEXTURE_SIZE: GLenum;
    +MAX_VARYING_VECTORS: GLenum;
    +MAX_VERTEX_ATTRIBS: GLenum;
    +MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    +MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    +MAX_VIEWPORT_DIMS: GLenum;
    +MEDIUM_FLOAT: GLenum;
    +MEDIUM_INT: GLenum;
    +MIRRORED_REPEAT: GLenum;
    +NEAREST: GLenum;
    +NEAREST_MIPMAP_LINEAR: GLenum;
    +NEAREST_MIPMAP_NEAREST: GLenum;
    +NEVER: GLenum;
    +NICEST: GLenum;
    +NONE: GLenum;
    +NOTEQUAL: GLenum;
    +NO_ERROR: GLenum;
    +ONE: GLenum;
    +ONE_MINUS_CONSTANT_ALPHA: GLenum;
    +ONE_MINUS_CONSTANT_COLOR: GLenum;
    +ONE_MINUS_DST_ALPHA: GLenum;
    +ONE_MINUS_DST_COLOR: GLenum;
    +ONE_MINUS_SRC_ALPHA: GLenum;
    +ONE_MINUS_SRC_COLOR: GLenum;
    +OUT_OF_MEMORY: GLenum;
    +PACK_ALIGNMENT: GLenum;
    +POINTS: GLenum;
    +POLYGON_OFFSET_FACTOR: GLenum;
    +POLYGON_OFFSET_FILL: GLenum;
    +POLYGON_OFFSET_UNITS: GLenum;
    +RED_BITS: GLenum;
    +RENDERBUFFER: GLenum;
    +RENDERBUFFER_ALPHA_SIZE: GLenum;
    +RENDERBUFFER_BINDING: GLenum;
    +RENDERBUFFER_BLUE_SIZE: GLenum;
    +RENDERBUFFER_DEPTH_SIZE: GLenum;
    +RENDERBUFFER_GREEN_SIZE: GLenum;
    +RENDERBUFFER_HEIGHT: GLenum;
    +RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    +RENDERBUFFER_RED_SIZE: GLenum;
    +RENDERBUFFER_STENCIL_SIZE: GLenum;
    +RENDERBUFFER_WIDTH: GLenum;
    +RENDERER: GLenum;
    +REPEAT: GLenum;
    +REPLACE: GLenum;
    +RGB: GLenum;
    +RGB565: GLenum;
    +RGB5_A1: GLenum;
    +RGBA: GLenum;
    +RGBA4: GLenum;
    +SAMPLER_2D: GLenum;
    +SAMPLER_CUBE: GLenum;
    +SAMPLES: GLenum;
    +SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    +SAMPLE_BUFFERS: GLenum;
    +SAMPLE_COVERAGE: GLenum;
    +SAMPLE_COVERAGE_INVERT: GLenum;
    +SAMPLE_COVERAGE_VALUE: GLenum;
    +SCISSOR_BOX: GLenum;
    +SCISSOR_TEST: GLenum;
    +SHADER_TYPE: GLenum;
    +SHADING_LANGUAGE_VERSION: GLenum;
    +SHORT: GLenum;
    +SRC_ALPHA: GLenum;
    +SRC_ALPHA_SATURATE: GLenum;
    +SRC_COLOR: GLenum;
    +STATIC_DRAW: GLenum;
    +STENCIL_ATTACHMENT: GLenum;
    +STENCIL_BACK_FAIL: GLenum;
    +STENCIL_BACK_FUNC: GLenum;
    +STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    +STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    +STENCIL_BACK_REF: GLenum;
    +STENCIL_BACK_VALUE_MASK: GLenum;
    +STENCIL_BACK_WRITEMASK: GLenum;
    +STENCIL_BITS: GLenum;
    +STENCIL_BUFFER_BIT: GLenum;
    +STENCIL_CLEAR_VALUE: GLenum;
    +STENCIL_FAIL: GLenum;
    +STENCIL_FUNC: GLenum;
    +STENCIL_INDEX8: GLenum;
    +STENCIL_PASS_DEPTH_FAIL: GLenum;
    +STENCIL_PASS_DEPTH_PASS: GLenum;
    +STENCIL_REF: GLenum;
    +STENCIL_TEST: GLenum;
    +STENCIL_VALUE_MASK: GLenum;
    +STENCIL_WRITEMASK: GLenum;
    +STREAM_DRAW: GLenum;
    +SUBPIXEL_BITS: GLenum;
    +TEXTURE: GLenum;
    +TEXTURE0: GLenum;
    +TEXTURE1: GLenum;
    +TEXTURE10: GLenum;
    +TEXTURE11: GLenum;
    +TEXTURE12: GLenum;
    +TEXTURE13: GLenum;
    +TEXTURE14: GLenum;
    +TEXTURE15: GLenum;
    +TEXTURE16: GLenum;
    +TEXTURE17: GLenum;
    +TEXTURE18: GLenum;
    +TEXTURE19: GLenum;
    +TEXTURE2: GLenum;
    +TEXTURE20: GLenum;
    +TEXTURE21: GLenum;
    +TEXTURE22: GLenum;
    +TEXTURE23: GLenum;
    +TEXTURE24: GLenum;
    +TEXTURE25: GLenum;
    +TEXTURE26: GLenum;
    +TEXTURE27: GLenum;
    +TEXTURE28: GLenum;
    +TEXTURE29: GLenum;
    +TEXTURE3: GLenum;
    +TEXTURE30: GLenum;
    +TEXTURE31: GLenum;
    +TEXTURE4: GLenum;
    +TEXTURE5: GLenum;
    +TEXTURE6: GLenum;
    +TEXTURE7: GLenum;
    +TEXTURE8: GLenum;
    +TEXTURE9: GLenum;
    +TEXTURE_2D: GLenum;
    +TEXTURE_BINDING_2D: GLenum;
    +TEXTURE_BINDING_CUBE_MAP: GLenum;
    +TEXTURE_CUBE_MAP: GLenum;
    +TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    +TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    +TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    +TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    +TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    +TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    +TEXTURE_MAG_FILTER: GLenum;
    +TEXTURE_MIN_FILTER: GLenum;
    +TEXTURE_WRAP_S: GLenum;
    +TEXTURE_WRAP_T: GLenum;
    +TRIANGLES: GLenum;
    +TRIANGLE_FAN: GLenum;
    +TRIANGLE_STRIP: GLenum;
    +UNPACK_ALIGNMENT: GLenum;
    +UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    +UNPACK_FLIP_Y_WEBGL: GLenum;
    +UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    +UNSIGNED_BYTE: GLenum;
    +UNSIGNED_INT: GLenum;
    +UNSIGNED_SHORT: GLenum;
    +UNSIGNED_SHORT_4_4_4_4: GLenum;
    +UNSIGNED_SHORT_5_5_5_1: GLenum;
    +UNSIGNED_SHORT_5_6_5: GLenum;
    +VALIDATE_STATUS: GLenum;
    +VENDOR: GLenum;
    +VERSION: GLenum;
    +VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    +VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    +VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    +VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    +VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    +VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    +VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    +VERTEX_SHADER: GLenum;
    +VIEWPORT: GLenum;
    +ZERO: GLenum;
    +drawingBufferHeight: GLsizei;
    +drawingBufferWidth: GLsizei;
    activeTexture(texture: GLenum): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    bindTexture(target: GLenum, texture: WebGLTexture | null): void;
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    blendEquation(mode: GLenum): void;
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, data: BufferSource | null, usage: GLenum): void;
    bufferSubData(target: GLenum, offset: GLintptr, data: BufferSource): void;
    checkFramebufferStatus(target: GLenum): GLenum;
    clear(mask: GLbitfield): void;
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    clearDepth(depth: GLclampf): void;
    clearStencil(s: GLint): void;
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    compileShader(shader: WebGLShader): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView): void;
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    createBuffer(): WebGLBuffer | null;
    createFramebuffer(): WebGLFramebuffer | null;
    createProgram(): WebGLProgram | null;
    createRenderbuffer(): WebGLRenderbuffer | null;
    createShader(type: GLenum): WebGLShader | null;
    createTexture(): WebGLTexture | null;
    cullFace(mode: GLenum): void;
    deleteBuffer(buffer: WebGLBuffer | null): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    deleteProgram(program: WebGLProgram | null): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    deleteShader(shader: WebGLShader | null): void;
    deleteTexture(texture: WebGLTexture | null): void;
    depthFunc(func: GLenum): void;
    depthMask(flag: GLboolean): void;
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    disable(cap: GLenum): void;
    disableVertexAttribArray(index: GLuint): void;
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    enable(cap: GLenum): void;
    enableVertexAttribArray(index: GLuint): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture | null, level: GLint): void;
    frontFace(mode: GLenum): void;
    generateMipmap(target: GLenum): void;
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    getBufferParameter(target: GLenum, pname: GLenum): any;
    getContextAttributes(): WebGLContextAttributes | null;
    getError(): GLenum;
    getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
    getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
    getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
    getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
    getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
    getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
    getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
    getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
    getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
    getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
    getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    getExtension(extensionName: string): any;
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    getParameter(pname: GLenum): any;
    getProgramInfoLog(program: WebGLProgram): string | null;
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    getShaderInfoLog(shader: WebGLShader): string | null;
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null;
    getShaderSource(shader: WebGLShader): string | null;
    getSupportedExtensions(): string[] | null;
    getTexParameter(target: GLenum, pname: GLenum): any;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
    hint(target: GLenum, mode: GLenum): void;
    isBuffer(buffer: WebGLBuffer | null): GLboolean;
    isContextLost(): boolean;
    isEnabled(cap: GLenum): GLboolean;
    isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
    isProgram(program: WebGLProgram | null): GLboolean;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
    isShader(shader: WebGLShader | null): GLboolean;
    isTexture(texture: WebGLTexture | null): GLboolean;
    lineWidth(width: GLfloat): void;
    linkProgram(program: WebGLProgram): void;
    pixelStorei(pname: GLenum, param: GLint | GLboolean): void;
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    shaderSource(shader: WebGLShader, source: string): void;
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    stencilMask(mask: GLuint): void;
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    useProgram(program: WebGLProgram | null): void;
    validateProgram(program: WebGLProgram): void;
    vertexAttrib1f(index: GLuint, x: GLfloat): void;
    vertexAttrib1fv(index: GLuint, values: Float32List): void;
    vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
    vertexAttrib2fv(index: GLuint, values: Float32List): void;
    vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    vertexAttrib3fv(index: GLuint, values: Float32List): void;
    vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    vertexAttrib4fv(index: GLuint, values: Float32List): void;
    vertexAttribPointer(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
}

declare type WebGLRenderingContextBase = interface {
    +drawingBufferHeight: GLsizei;
    +drawingBufferWidth: GLsizei;
    activeTexture(texture: GLenum): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void;
    bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void;
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    bindTexture(target: GLenum, texture: WebGLTexture | null): void;
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    blendEquation(mode: GLenum): void;
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void;
    blendFunc(sfactor: GLenum, dfactor: GLenum): void;
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void;
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    bufferData(target: GLenum, data: BufferSource | null, usage: GLenum): void;
    bufferSubData(target: GLenum, offset: GLintptr, data: BufferSource): void;
    checkFramebufferStatus(target: GLenum): GLenum;
    clear(mask: GLbitfield): void;
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    clearDepth(depth: GLclampf): void;
    clearStencil(s: GLint): void;
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    compileShader(shader: WebGLShader): void;
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView): void;
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView): void;
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void;
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    createBuffer(): WebGLBuffer | null;
    createFramebuffer(): WebGLFramebuffer | null;
    createProgram(): WebGLProgram | null;
    createRenderbuffer(): WebGLRenderbuffer | null;
    createShader(type: GLenum): WebGLShader | null;
    createTexture(): WebGLTexture | null;
    cullFace(mode: GLenum): void;
    deleteBuffer(buffer: WebGLBuffer | null): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void;
    deleteProgram(program: WebGLProgram | null): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void;
    deleteShader(shader: WebGLShader | null): void;
    deleteTexture(texture: WebGLTexture | null): void;
    depthFunc(func: GLenum): void;
    depthMask(flag: GLboolean): void;
    depthRange(zNear: GLclampf, zFar: GLclampf): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    disable(cap: GLenum): void;
    disableVertexAttribArray(index: GLuint): void;
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void;
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    enable(cap: GLenum): void;
    enableVertexAttribArray(index: GLuint): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture | null, level: GLint): void;
    frontFace(mode: GLenum): void;
    generateMipmap(target: GLenum): void;
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null;
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null;
    getAttribLocation(program: WebGLProgram, name: string): GLint;
    getBufferParameter(target: GLenum, pname: GLenum): any;
    getContextAttributes(): WebGLContextAttributes | null;
    getError(): GLenum;
    getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
    getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
    getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
    getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
    getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
    getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
    getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
    getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
    getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
    getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
    getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    getExtension(extensionName: string): any;
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any;
    getParameter(pname: GLenum): any;
    getProgramInfoLog(program: WebGLProgram): string | null;
    getProgramParameter(program: WebGLProgram, pname: GLenum): any;
    getRenderbufferParameter(target: GLenum, pname: GLenum): any;
    getShaderInfoLog(shader: WebGLShader): string | null;
    getShaderParameter(shader: WebGLShader, pname: GLenum): any;
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null;
    getShaderSource(shader: WebGLShader): string | null;
    getSupportedExtensions(): string[] | null;
    getTexParameter(target: GLenum, pname: GLenum): any;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    getVertexAttrib(index: GLuint, pname: GLenum): any;
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr;
    hint(target: GLenum, mode: GLenum): void;
    isBuffer(buffer: WebGLBuffer | null): GLboolean;
    isContextLost(): boolean;
    isEnabled(cap: GLenum): GLboolean;
    isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean;
    isProgram(program: WebGLProgram | null): GLboolean;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean;
    isShader(shader: WebGLShader | null): GLboolean;
    isTexture(texture: WebGLTexture | null): GLboolean;
    lineWidth(width: GLfloat): void;
    linkProgram(program: WebGLProgram): void;
    pixelStorei(pname: GLenum, param: GLint | GLboolean): void;
    polygonOffset(factor: GLfloat, units: GLfloat): void;
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void;
    sampleCoverage(value: GLclampf, invert: GLboolean): void;
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    shaderSource(shader: WebGLShader, source: string): void;
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void;
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void;
    stencilMask(mask: GLuint): void;
    stencilMaskSeparate(face: GLenum, mask: GLuint): void;
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void;
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void;
    uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void;
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform1i(location: WebGLUniformLocation | null, x: GLint): void;
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void;
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void;
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void;
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void;
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void;
    uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void;
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void;
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void;
    useProgram(program: WebGLProgram | null): void;
    validateProgram(program: WebGLProgram): void;
    vertexAttrib1f(index: GLuint, x: GLfloat): void;
    vertexAttrib1fv(index: GLuint, values: Float32List): void;
    vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void;
    vertexAttrib2fv(index: GLuint, values: Float32List): void;
    vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void;
    vertexAttrib3fv(index: GLuint, values: Float32List): void;
    vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void;
    vertexAttrib4fv(index: GLuint, values: Float32List): void;
    vertexAttribPointer(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    +ACTIVE_ATTRIBUTES: GLenum;
    +ACTIVE_TEXTURE: GLenum;
    +ACTIVE_UNIFORMS: GLenum;
    +ALIASED_LINE_WIDTH_RANGE: GLenum;
    +ALIASED_POINT_SIZE_RANGE: GLenum;
    +ALPHA: GLenum;
    +ALPHA_BITS: GLenum;
    +ALWAYS: GLenum;
    +ARRAY_BUFFER: GLenum;
    +ARRAY_BUFFER_BINDING: GLenum;
    +ATTACHED_SHADERS: GLenum;
    +BACK: GLenum;
    +BLEND: GLenum;
    +BLEND_COLOR: GLenum;
    +BLEND_DST_ALPHA: GLenum;
    +BLEND_DST_RGB: GLenum;
    +BLEND_EQUATION: GLenum;
    +BLEND_EQUATION_ALPHA: GLenum;
    +BLEND_EQUATION_RGB: GLenum;
    +BLEND_SRC_ALPHA: GLenum;
    +BLEND_SRC_RGB: GLenum;
    +BLUE_BITS: GLenum;
    +BOOL: GLenum;
    +BOOL_VEC2: GLenum;
    +BOOL_VEC3: GLenum;
    +BOOL_VEC4: GLenum;
    +BROWSER_DEFAULT_WEBGL: GLenum;
    +BUFFER_SIZE: GLenum;
    +BUFFER_USAGE: GLenum;
    +BYTE: GLenum;
    +CCW: GLenum;
    +CLAMP_TO_EDGE: GLenum;
    +COLOR_ATTACHMENT0: GLenum;
    +COLOR_BUFFER_BIT: GLenum;
    +COLOR_CLEAR_VALUE: GLenum;
    +COLOR_WRITEMASK: GLenum;
    +COMPILE_STATUS: GLenum;
    +COMPRESSED_TEXTURE_FORMATS: GLenum;
    +CONSTANT_ALPHA: GLenum;
    +CONSTANT_COLOR: GLenum;
    +CONTEXT_LOST_WEBGL: GLenum;
    +CULL_FACE: GLenum;
    +CULL_FACE_MODE: GLenum;
    +CURRENT_PROGRAM: GLenum;
    +CURRENT_VERTEX_ATTRIB: GLenum;
    +CW: GLenum;
    +DECR: GLenum;
    +DECR_WRAP: GLenum;
    +DELETE_STATUS: GLenum;
    +DEPTH_ATTACHMENT: GLenum;
    +DEPTH_BITS: GLenum;
    +DEPTH_BUFFER_BIT: GLenum;
    +DEPTH_CLEAR_VALUE: GLenum;
    +DEPTH_COMPONENT: GLenum;
    +DEPTH_COMPONENT16: GLenum;
    +DEPTH_FUNC: GLenum;
    +DEPTH_RANGE: GLenum;
    +DEPTH_STENCIL: GLenum;
    +DEPTH_STENCIL_ATTACHMENT: GLenum;
    +DEPTH_TEST: GLenum;
    +DEPTH_WRITEMASK: GLenum;
    +DITHER: GLenum;
    +DONT_CARE: GLenum;
    +DST_ALPHA: GLenum;
    +DST_COLOR: GLenum;
    +DYNAMIC_DRAW: GLenum;
    +ELEMENT_ARRAY_BUFFER: GLenum;
    +ELEMENT_ARRAY_BUFFER_BINDING: GLenum;
    +EQUAL: GLenum;
    +FASTEST: GLenum;
    +FLOAT: GLenum;
    +FLOAT_MAT2: GLenum;
    +FLOAT_MAT3: GLenum;
    +FLOAT_MAT4: GLenum;
    +FLOAT_VEC2: GLenum;
    +FLOAT_VEC3: GLenum;
    +FLOAT_VEC4: GLenum;
    +FRAGMENT_SHADER: GLenum;
    +FRAMEBUFFER: GLenum;
    +FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum;
    +FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum;
    +FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum;
    +FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum;
    +FRAMEBUFFER_BINDING: GLenum;
    +FRAMEBUFFER_COMPLETE: GLenum;
    +FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum;
    +FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum;
    +FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum;
    +FRAMEBUFFER_UNSUPPORTED: GLenum;
    +FRONT: GLenum;
    +FRONT_AND_BACK: GLenum;
    +FRONT_FACE: GLenum;
    +FUNC_ADD: GLenum;
    +FUNC_REVERSE_SUBTRACT: GLenum;
    +FUNC_SUBTRACT: GLenum;
    +GENERATE_MIPMAP_HINT: GLenum;
    +GEQUAL: GLenum;
    +GREATER: GLenum;
    +GREEN_BITS: GLenum;
    +HIGH_FLOAT: GLenum;
    +HIGH_INT: GLenum;
    +IMPLEMENTATION_COLOR_READ_FORMAT: GLenum;
    +IMPLEMENTATION_COLOR_READ_TYPE: GLenum;
    +INCR: GLenum;
    +INCR_WRAP: GLenum;
    +INT: GLenum;
    +INT_VEC2: GLenum;
    +INT_VEC3: GLenum;
    +INT_VEC4: GLenum;
    +INVALID_ENUM: GLenum;
    +INVALID_FRAMEBUFFER_OPERATION: GLenum;
    +INVALID_OPERATION: GLenum;
    +INVALID_VALUE: GLenum;
    +INVERT: GLenum;
    +KEEP: GLenum;
    +LEQUAL: GLenum;
    +LESS: GLenum;
    +LINEAR: GLenum;
    +LINEAR_MIPMAP_LINEAR: GLenum;
    +LINEAR_MIPMAP_NEAREST: GLenum;
    +LINES: GLenum;
    +LINE_LOOP: GLenum;
    +LINE_STRIP: GLenum;
    +LINE_WIDTH: GLenum;
    +LINK_STATUS: GLenum;
    +LOW_FLOAT: GLenum;
    +LOW_INT: GLenum;
    +LUMINANCE: GLenum;
    +LUMINANCE_ALPHA: GLenum;
    +MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum;
    +MAX_CUBE_MAP_TEXTURE_SIZE: GLenum;
    +MAX_FRAGMENT_UNIFORM_VECTORS: GLenum;
    +MAX_RENDERBUFFER_SIZE: GLenum;
    +MAX_TEXTURE_IMAGE_UNITS: GLenum;
    +MAX_TEXTURE_SIZE: GLenum;
    +MAX_VARYING_VECTORS: GLenum;
    +MAX_VERTEX_ATTRIBS: GLenum;
    +MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum;
    +MAX_VERTEX_UNIFORM_VECTORS: GLenum;
    +MAX_VIEWPORT_DIMS: GLenum;
    +MEDIUM_FLOAT: GLenum;
    +MEDIUM_INT: GLenum;
    +MIRRORED_REPEAT: GLenum;
    +NEAREST: GLenum;
    +NEAREST_MIPMAP_LINEAR: GLenum;
    +NEAREST_MIPMAP_NEAREST: GLenum;
    +NEVER: GLenum;
    +NICEST: GLenum;
    +NONE: GLenum;
    +NOTEQUAL: GLenum;
    +NO_ERROR: GLenum;
    +ONE: GLenum;
    +ONE_MINUS_CONSTANT_ALPHA: GLenum;
    +ONE_MINUS_CONSTANT_COLOR: GLenum;
    +ONE_MINUS_DST_ALPHA: GLenum;
    +ONE_MINUS_DST_COLOR: GLenum;
    +ONE_MINUS_SRC_ALPHA: GLenum;
    +ONE_MINUS_SRC_COLOR: GLenum;
    +OUT_OF_MEMORY: GLenum;
    +PACK_ALIGNMENT: GLenum;
    +POINTS: GLenum;
    +POLYGON_OFFSET_FACTOR: GLenum;
    +POLYGON_OFFSET_FILL: GLenum;
    +POLYGON_OFFSET_UNITS: GLenum;
    +RED_BITS: GLenum;
    +RENDERBUFFER: GLenum;
    +RENDERBUFFER_ALPHA_SIZE: GLenum;
    +RENDERBUFFER_BINDING: GLenum;
    +RENDERBUFFER_BLUE_SIZE: GLenum;
    +RENDERBUFFER_DEPTH_SIZE: GLenum;
    +RENDERBUFFER_GREEN_SIZE: GLenum;
    +RENDERBUFFER_HEIGHT: GLenum;
    +RENDERBUFFER_INTERNAL_FORMAT: GLenum;
    +RENDERBUFFER_RED_SIZE: GLenum;
    +RENDERBUFFER_STENCIL_SIZE: GLenum;
    +RENDERBUFFER_WIDTH: GLenum;
    +RENDERER: GLenum;
    +REPEAT: GLenum;
    +REPLACE: GLenum;
    +RGB: GLenum;
    +RGB565: GLenum;
    +RGB5_A1: GLenum;
    +RGBA: GLenum;
    +RGBA4: GLenum;
    +SAMPLER_2D: GLenum;
    +SAMPLER_CUBE: GLenum;
    +SAMPLES: GLenum;
    +SAMPLE_ALPHA_TO_COVERAGE: GLenum;
    +SAMPLE_BUFFERS: GLenum;
    +SAMPLE_COVERAGE: GLenum;
    +SAMPLE_COVERAGE_INVERT: GLenum;
    +SAMPLE_COVERAGE_VALUE: GLenum;
    +SCISSOR_BOX: GLenum;
    +SCISSOR_TEST: GLenum;
    +SHADER_TYPE: GLenum;
    +SHADING_LANGUAGE_VERSION: GLenum;
    +SHORT: GLenum;
    +SRC_ALPHA: GLenum;
    +SRC_ALPHA_SATURATE: GLenum;
    +SRC_COLOR: GLenum;
    +STATIC_DRAW: GLenum;
    +STENCIL_ATTACHMENT: GLenum;
    +STENCIL_BACK_FAIL: GLenum;
    +STENCIL_BACK_FUNC: GLenum;
    +STENCIL_BACK_PASS_DEPTH_FAIL: GLenum;
    +STENCIL_BACK_PASS_DEPTH_PASS: GLenum;
    +STENCIL_BACK_REF: GLenum;
    +STENCIL_BACK_VALUE_MASK: GLenum;
    +STENCIL_BACK_WRITEMASK: GLenum;
    +STENCIL_BITS: GLenum;
    +STENCIL_BUFFER_BIT: GLenum;
    +STENCIL_CLEAR_VALUE: GLenum;
    +STENCIL_FAIL: GLenum;
    +STENCIL_FUNC: GLenum;
    +STENCIL_INDEX8: GLenum;
    +STENCIL_PASS_DEPTH_FAIL: GLenum;
    +STENCIL_PASS_DEPTH_PASS: GLenum;
    +STENCIL_REF: GLenum;
    +STENCIL_TEST: GLenum;
    +STENCIL_VALUE_MASK: GLenum;
    +STENCIL_WRITEMASK: GLenum;
    +STREAM_DRAW: GLenum;
    +SUBPIXEL_BITS: GLenum;
    +TEXTURE: GLenum;
    +TEXTURE0: GLenum;
    +TEXTURE1: GLenum;
    +TEXTURE10: GLenum;
    +TEXTURE11: GLenum;
    +TEXTURE12: GLenum;
    +TEXTURE13: GLenum;
    +TEXTURE14: GLenum;
    +TEXTURE15: GLenum;
    +TEXTURE16: GLenum;
    +TEXTURE17: GLenum;
    +TEXTURE18: GLenum;
    +TEXTURE19: GLenum;
    +TEXTURE2: GLenum;
    +TEXTURE20: GLenum;
    +TEXTURE21: GLenum;
    +TEXTURE22: GLenum;
    +TEXTURE23: GLenum;
    +TEXTURE24: GLenum;
    +TEXTURE25: GLenum;
    +TEXTURE26: GLenum;
    +TEXTURE27: GLenum;
    +TEXTURE28: GLenum;
    +TEXTURE29: GLenum;
    +TEXTURE3: GLenum;
    +TEXTURE30: GLenum;
    +TEXTURE31: GLenum;
    +TEXTURE4: GLenum;
    +TEXTURE5: GLenum;
    +TEXTURE6: GLenum;
    +TEXTURE7: GLenum;
    +TEXTURE8: GLenum;
    +TEXTURE9: GLenum;
    +TEXTURE_2D: GLenum;
    +TEXTURE_BINDING_2D: GLenum;
    +TEXTURE_BINDING_CUBE_MAP: GLenum;
    +TEXTURE_CUBE_MAP: GLenum;
    +TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum;
    +TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum;
    +TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum;
    +TEXTURE_CUBE_MAP_POSITIVE_X: GLenum;
    +TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum;
    +TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum;
    +TEXTURE_MAG_FILTER: GLenum;
    +TEXTURE_MIN_FILTER: GLenum;
    +TEXTURE_WRAP_S: GLenum;
    +TEXTURE_WRAP_T: GLenum;
    +TRIANGLES: GLenum;
    +TRIANGLE_FAN: GLenum;
    +TRIANGLE_STRIP: GLenum;
    +UNPACK_ALIGNMENT: GLenum;
    +UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum;
    +UNPACK_FLIP_Y_WEBGL: GLenum;
    +UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum;
    +UNSIGNED_BYTE: GLenum;
    +UNSIGNED_INT: GLenum;
    +UNSIGNED_SHORT: GLenum;
    +UNSIGNED_SHORT_4_4_4_4: GLenum;
    +UNSIGNED_SHORT_5_5_5_1: GLenum;
    +UNSIGNED_SHORT_5_6_5: GLenum;
    +VALIDATE_STATUS: GLenum;
    +VENDOR: GLenum;
    +VERSION: GLenum;
    +VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum;
    +VERTEX_ATTRIB_ARRAY_ENABLED: GLenum;
    +VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum;
    +VERTEX_ATTRIB_ARRAY_POINTER: GLenum;
    +VERTEX_ATTRIB_ARRAY_SIZE: GLenum;
    +VERTEX_ATTRIB_ARRAY_STRIDE: GLenum;
    +VERTEX_ATTRIB_ARRAY_TYPE: GLenum;
    +VERTEX_SHADER: GLenum;
    +VIEWPORT: GLenum;
    +ZERO: GLenum;
}

declare class WebGLShader mixins WebGLObject {
    constructor(): this;
}

declare class WebGLShaderPrecisionFormat {
    constructor(): this;
    +precision: GLint;
    +rangeMax: GLint;
    +rangeMin: GLint;
}

declare class WebGLTexture mixins WebGLObject {
    constructor(): this;
}

declare class WebGLUniformLocation {
    constructor(): this;
}

declare type WebGLVertexArrayObjectOES = interface extends WebGLObject {
}

type WebSocketEventMap = & {
    "close": CloseEvent,
    "error": Event,
    "message": MessageEvent,
    "open": Event,
    [key: string]: Event,
}

declare class WebSocket mixins EventTarget {
    constructor(url: string, protocols?: string | string[]): this;
    +CLOSED: number;
    +CLOSING: number;
    +CONNECTING: number;
    +OPEN: number;
    binaryType: BinaryType;
    +bufferedAmount: number;
    +extensions: string;
    onclose: ((/*this: WebSocket, */ev: CloseEvent) => any) | null;
    onerror: ((/*this: WebSocket, */ev: Event) => any) | null;
    onmessage: ((/*this: WebSocket, */ev: MessageEvent) => any) | null;
    onopen: ((/*this: WebSocket, */ev: Event) => any) | null;
    +protocol: string;
    +readyState: number;
    +url: string;
    close(code?: number, reason?: string): void;
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    +CLOSED: number;
    +CLOSING: number;
    +CONNECTING: number;
    +OPEN: number;
    addEventListener<K: $Keys<WebSocketEventMap>>(type: K, listener: (/*this: WebSocket, */ev: $ElementType<WebSocketEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<WebSocketEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<WebSocketEventMap>>(type: K, listener: (/*this: WebSocket, */ev: $ElementType<WebSocketEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<WebSocketEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare type WindowBase64 = interface {
    atob(encodedString: string): string;
    btoa(rawString: string): string;
}

declare class WindowClient mixins Client {
    constructor(): this;
    +ancestorOrigins: ReadonlyArray<string>;
    +focused: boolean;
    +visibilityState: VisibilityState;
    focus(): Promise<WindowClient>;
    navigate(url: string): Promise<WindowClient | null>;
}

declare type WindowConsole = interface {
    +console: Console;
}

declare type WindowOrWorkerGlobalScope = interface {
    +caches: CacheStorage;
    +crypto: Crypto;
    +indexedDB: IDBFactory;
    +origin: string;
    +performance: Performance;
    atob(data: string): string;
    btoa(data: string): string;
    clearInterval(handle?: number): void;
    clearTimeout(handle?: number): void;
    createImageBitmap(image: ImageBitmapSource): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number): Promise<ImageBitmap>;
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
    queueMicrotask(callback: Function): void;
    setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
}

type WorkerEventMap = AbstractWorkerEventMap & {
    "message": MessageEvent,
    [key: string]: Event,
}

declare class Worker mixins EventTarget implements AbstractWorker {
    constructor(stringUrl: string | URL, options?: WorkerOptions): Worker;
    onerror: ((/*this: AbstractWorker, */ev: ErrorEvent) => any) | null;
    onmessage: ((/*this: Worker, */ev: MessageEvent) => any) | null;
    postMessage(message: any, transfer?: Transferable[]): void;
    terminate(): void;
    addEventListener<K: $Keys<WorkerEventMap>>(type: K, listener: (/*this: Worker, */ev: $ElementType<WorkerEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<WorkerEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<WorkerEventMap>>(type: K, listener: (/*this: Worker, */ev: $ElementType<WorkerEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<WorkerEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

type WorkerGlobalScopeEventMap = & {
    "error": ErrorEvent,
    [key: string]: Event,
}

declare class WorkerGlobalScope mixins EventTarget implements WorkerUtils, WindowConsole, GlobalFetch, WindowOrWorkerGlobalScope {
    constructor(): this;
    +indexedDB: IDBFactory;
    +msIndexedDB: IDBFactory;
    +navigator: WorkerNavigator;
    importScripts(...urls: string[]): void;
    +console: Console;
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
    +caches: CacheStorage;
    +crypto: Crypto;
    +indexedDB: IDBFactory;
    +origin: string;
    +performance: Performance;
    atob(data: string): string;
    btoa(data: string): string;
    clearInterval(handle?: number): void;
    clearTimeout(handle?: number): void;
    createImageBitmap(image: ImageBitmapSource): Promise<ImageBitmap>;
    createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number): Promise<ImageBitmap>;
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
    queueMicrotask(callback: Function): void;
    setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
    +caches: CacheStorage;
    +isSecureContext: boolean;
    +location: WorkerLocation;
    onerror: ((/*this: WorkerGlobalScope, */ev: ErrorEvent) => any) | null;
    +performance: Performance;
    +self: WorkerGlobalScope;
    msWriteProfilerMark(profilerMarkName: string): void;
    addEventListener<K: $Keys<WorkerGlobalScopeEventMap>>(type: K, listener: (/*this: WorkerGlobalScope, */ev: $ElementType<WorkerGlobalScopeEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<WorkerGlobalScopeEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<WorkerGlobalScopeEventMap>>(type: K, listener: (/*this: WorkerGlobalScope, */ev: $ElementType<WorkerGlobalScopeEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<WorkerGlobalScopeEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare class WorkerLocation {
    constructor(): this;
    +hash: string;
    +host: string;
    +hostname: string;
    +href: string;
    +origin: string;
    +pathname: string;
    +port: string;
    +protocol: string;
    +search: string;
    toString(): string;
}

declare class WorkerNavigator implements NavigatorID, NavigatorOnLine, NavigatorBeacon, NavigatorConcurrentHardware, NavigatorStorage {
    constructor(): this;
    +appCodeName: string;
    +appName: string;
    +appVersion: string;
    +platform: string;
    +product: string;
    +productSub: string;
    +userAgent: string;
    +vendor: string;
    +vendorSub: string;
    +onLine: boolean;
    sendBeacon(url: string, data?: Blob | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | FormData | string | null): boolean;
    +hardwareConcurrency: number;
    +storage: StorageManager;
    +serviceWorker: ServiceWorkerContainer;
}

declare type WorkerUtils = interface extends WindowBase64 {
    +indexedDB: IDBFactory;
    +msIndexedDB: IDBFactory;
    +navigator: WorkerNavigator;
    importScripts(...urls: string[]): void;
}

declare class WritableStream<W = any> {
    constructror<W>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
    +locked: boolean;
    abort(reason?: any): Promise<void>;
    getWriter(): WritableStreamDefaultWriter<W>;
}

declare type WritableStreamDefaultController = interface {
    error(error?: any): void;
}

declare type WritableStreamDefaultWriter<W = any> = interface {
    +closed: Promise<void>;
    +desiredSize: number | null;
    +ready: Promise<void>;
    abort(reason?: any): Promise<void>;
    close(): Promise<void>;
    releaseLock(): void;
    write(chunk: W): Promise<void>;
}

type XMLHttpRequestEventMap = XMLHttpRequestEventTargetEventMap & {
    "readystatechange": Event,
    [key: string]: Event,
}

declare class XMLHttpRequest mixins XMLHttpRequestEventTarget {
    constructor(): this;
    +DONE: number;
    +HEADERS_RECEIVED: number;
    +LOADING: number;
    +OPENED: number;
    +UNSENT: number;
    onreadystatechange: ((/*this: XMLHttpRequest, */ev: Event) => any) | null;
    /**
     * Returns client's state.
     */
    +readyState: number;
    /**
     * Returns the response's body.
     */
    +response: any;
    /**
     * Returns the text response.
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "text".
     */
    +responseText: string;
    /**
     * Returns the response type.
     * Can be set to change the response type. Values are:
     * the empty string (default),
     * "arraybuffer",
     * "blob",
     * "document",
     * "json", and
     * "text".
     * When set: setting to "document" is ignored if current global object is not a Window object.
     * When set: throws an "InvalidStateError" DOMException if state is loading or done.
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     */
    responseType: XMLHttpRequestResponseType;
    +responseURL: string;
    +status: number;
    +statusText: string;
    /**
     * Can be set to a time in milliseconds. When set to a non-zero value will cause fetching to terminate after the given time has passed. When the time has passed, the
     * request has not yet completed, and the synchronous flag is unset, a timeout event will then be dispatched, or a
     * "TimeoutError" DOMException will be thrown otherwise (for the send() method).
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     */
    timeout: number;
    /**
     * Returns the associated XMLHttpRequestUpload object. It can be used to gather transmission information when data is
     * transferred to a server.
     */
    +upload: XMLHttpRequestUpload;
    /**
     * True when credentials are to be included in a cross-origin request. False when they are
     * to be excluded in a cross-origin request and when cookies are to be ignored in its response.
     * Initially false.
     * When set: throws an "InvalidStateError" DOMException if state is not unsent or opened, or if the send() flag is set.
     */
    withCredentials: boolean;
    /**
     * Cancels any network activity.
     */
    abort(): void;
    getAllResponseHeaders(): string;
    getResponseHeader(name: string): string | null;
    /**
     * Sets the request method, request URL, and synchronous flag.
     * Throws a "SyntaxError" DOMException if either method is not a
     * valid HTTP method or url cannot be parsed.
     * Throws a "SecurityError" DOMException if method is a
     * case-insensitive match for `CONNECT`, `TRACE`, or `TRACK`.
     * Throws an "InvalidAccessError" DOMException if async is false, current global object is a Window object, and the timeout attribute is not zero or the responseType attribute is not the empty string.
     */
    open(method: string, url: string): void;
    open(method: string, url: string, async: boolean, username?: string | null, password?: string | null): void;
    /**
     * Acts as if the `Content-Type` header value for response is mime.
     * (It does not actually change the header though.)
     * Throws an "InvalidStateError" DOMException if state is loading or done.
     */
    overrideMimeType(mime: string): void;
    /**
     * Initiates the request. The body argument provides the request body, if any,
     * and is ignored if the request method is GET or HEAD.
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     */
    send(body?: BodyInit | null): void;
    /**
     * Combines a header in author request headers.
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     * Throws a "SyntaxError" DOMException if name is not a header name
     * or if value is not a header value.
     */
    setRequestHeader(name: string, value: string): void;
    +DONE: number;
    +HEADERS_RECEIVED: number;
    +LOADING: number;
    +OPENED: number;
    +UNSENT: number;
    addEventListener<K: $Keys<XMLHttpRequestEventMap>>(type: K, listener: (/*this: XMLHttpRequest, */ev: $ElementType<XMLHttpRequestEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<XMLHttpRequestEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<XMLHttpRequestEventMap>>(type: K, listener: (/*this: XMLHttpRequest, */ev: $ElementType<XMLHttpRequestEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<XMLHttpRequestEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

type XMLHttpRequestEventTargetEventMap = & {
    "abort": ProgressEvent,
    "error": ProgressEvent,
    "load": ProgressEvent,
    "loadend": ProgressEvent,
    "loadstart": ProgressEvent,
    "progress": ProgressEvent,
    "timeout": ProgressEvent,
    [key: string]: Event,
}

declare class XMLHttpRequestEventTarget mixins EventTarget {
    constructor(): this;
    onabort: ((/*this: XMLHttpRequest,*/ ev: ProgressEvent) => any) | null;
    onerror: ((/*this: XMLHttpRequest,*/ ev: ProgressEvent) => any) | null;
    onload: ((/*this: XMLHttpRequest,*/ ev: ProgressEvent) => any) | null;
    onloadend: ((/*this: XMLHttpRequest,*/ ev: ProgressEvent) => any) | null;
    onloadstart: ((/*this: XMLHttpRequest,*/ ev: ProgressEvent) => any) | null;
    onprogress: ((/*this: XMLHttpRequest,*/ ev: ProgressEvent) => any) | null;
    ontimeout: ((/*this: XMLHttpRequest,*/ ev: ProgressEvent) => any) | null;
    addEventListener<K: $Keys<XMLHttpRequestEventTargetEventMap>>(type: K, listener: (/*this: XMLHttpRequestEventTarget, */ev: $ElementType<XMLHttpRequestEventTargetEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<XMLHttpRequestEventTargetEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<XMLHttpRequestEventTargetEventMap>>(type: K, listener: (/*this: XMLHttpRequestEventTarget, */ev: $ElementType<XMLHttpRequestEventTargetEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<XMLHttpRequestEventTargetEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare class XMLHttpRequestUpload mixins XMLHttpRequestEventTarget {
    constructor(): this;
    addEventListener<K: $Keys<XMLHttpRequestEventTargetEventMap>>(type: K, listener: (/*this: XMLHttpRequestUpload, */ev: $ElementType<XMLHttpRequestEventTargetEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener<K: $Keys<XMLHttpRequestEventTargetEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K: $Keys<XMLHttpRequestEventTargetEventMap>>(type: K, listener: (/*this: XMLHttpRequestUpload, */ev: $ElementType<XMLHttpRequestEventTargetEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener<K: $Keys<XMLHttpRequestEventTargetEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
}

declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;

interface EventHandlerNonNull {
    (event: Event): any;
}

interface PerformanceObserverCallback {
    (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
}

interface QueuingStrategySizeCallback<T = any> {
    (chunk: T): number;
}

interface ReadableByteStreamControllerCallback {
    (controller: ReadableByteStreamController): void | PromiseLike<void>;
}

interface ReadableStreamDefaultControllerCallback<R> {
    (controller: ReadableStreamDefaultController<R>): void | PromiseLike<void>;
}

interface ReadableStreamErrorCallback {
    (reason: any): void | PromiseLike<void>;
}

interface TransformStreamDefaultControllerCallback<O> {
    (controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}

interface TransformStreamDefaultControllerTransformCallback<I, O> {
    (chunk: I, controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}

interface WritableStreamDefaultControllerCloseCallback {
    (): void | PromiseLike<void>;
}

interface WritableStreamDefaultControllerStartCallback {
    (controller: WritableStreamDefaultController): void | PromiseLike<void>;
}

interface WritableStreamDefaultControllerWriteCallback<W> {
    (chunk: W, controller: WritableStreamDefaultController): void | PromiseLike<void>;
}

interface WritableStreamErrorCallback {
    (reason: any): void | PromiseLike<void>;
}

declare var onmessage: ((/*this: DedicatedWorkerGlobalScope, */ev: MessageEvent) => any) | null;
declare function close(): void;
declare function postMessage(message: any, transfer?: Transferable[]): void;
/**
 * Dispatches a synthetic event event to target and returns true
 * if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
 */
declare function dispatchEvent(event: Event): boolean;
declare var caches: CacheStorage;
declare var isSecureContext: boolean;
declare var location: WorkerLocation;
declare var onerror: ((/*this: DedicatedWorkerGlobalScope, */ev: ErrorEvent) => any) | null;
declare var performance: Performance;
declare var self: WorkerGlobalScope;
declare function msWriteProfilerMark(profilerMarkName: string): void;
/**
 * Dispatches a synthetic event event to target and returns true
 * if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
 */
declare function dispatchEvent(event: Event): boolean;
declare var indexedDB: IDBFactory;
declare var msIndexedDB: IDBFactory;
declare var navigator: WorkerNavigator;
declare function importScripts(...urls: string[]): void;
declare function atob(encodedString: string): string;
declare function btoa(rawString: string): string;
declare var console: Console;
declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
declare var caches: CacheStorage;
declare var crypto: Crypto;
declare var indexedDB: IDBFactory;
declare var origin: string;
declare var performance: Performance;
declare function atob(data: string): string;
declare function btoa(data: string): string;
declare function clearInterval(handle?: number): void;
declare function clearTimeout(handle?: number): void;
declare function createImageBitmap(image: ImageBitmapSource): Promise<ImageBitmap>;
declare function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number): Promise<ImageBitmap>;
declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
declare function queueMicrotask(callback: Function): void;
declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
declare function addEventListener<K: $Keys<DedicatedWorkerGlobalScopeEventMap>>(type: K, listener: (/*this: DedicatedWorkerGlobalScope, */ev: $ElementType<DedicatedWorkerGlobalScopeEventMap, K>) => any, options?: boolean | AddEventListenerOptions): void;
declare function addEventListener<K: $Keys<DedicatedWorkerGlobalScopeEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
declare function removeEventListener<K: $Keys<DedicatedWorkerGlobalScopeEventMap>>(type: K, listener: (/*this: DedicatedWorkerGlobalScope, */ev: $ElementType<DedicatedWorkerGlobalScopeEventMap, K>) => any, options?: boolean | EventListenerOptions): void;
declare function removeEventListener<K: $Keys<DedicatedWorkerGlobalScopeEventMap>>(type: K, listener: EventListenerObject | null, options?: boolean | EventListenerOptions): void;
type BlobPart = BufferSource | Blob | string;
type HeadersInit = Headers | string[][] | Record<string, string>;
type BodyInit = Blob | BufferSource | FormData | URLSearchParams | ReadableStream<Uint8Array> | string;
type RequestInfo = Request | string;
type DOMHighResTimeStamp = number;
type CanvasImageSource = ImageBitmap;
type MessageEventSource = MessagePort | ServiceWorker;
type ImageBitmapSource = CanvasImageSource | Blob | ImageData;
type TimerHandler = string | Function;
type PerformanceEntryList = PerformanceEntry[];
type PushMessageDataInit = BufferSource | string;
type VibratePattern = number | number[];
type AlgorithmIdentifier = string | Algorithm;
type HashAlgorithmIdentifier = AlgorithmIdentifier;
type BigInteger = Uint8Array;
type NamedCurve = string;
type GLenum = number;
type GLboolean = boolean;
type GLbitfield = number;
type GLint = number;
type GLsizei = number;
type GLintptr = number;
type GLsizeiptr = number;
type GLuint = number;
type GLfloat = number;
type GLclampf = number;
type TexImageSource = ImageBitmap | ImageData;
type Float32List = Float32Array | GLfloat[];
type Int32List = Int32Array | GLint[];
type BufferSource = ArrayBufferView | ArrayBuffer;
type DOMTimeStamp = number;
type FormDataEntryValue = File | string;
type IDBValidKey = number | string | Date | BufferSource | IDBArrayKey;
type Transferable = ArrayBuffer | MessagePort | ImageBitmap;
type BinaryType = "blob" | "arraybuffer";
type ClientTypes = "window" | "worker" | "sharedworker" | "all";
type EndingType = "transparent" | "native";
type FrameType = "auxiliary" | "top-level" | "nested" | "none";
type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
type IDBRequestReadyState = "pending" | "done";
type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
type KeyFormat = "raw" | "spki" | "pkcs8" | "jwk";
type KeyType = "public" | "private" | "secret";
type KeyUsage = "encrypt" | "decrypt" | "sign" | "verify" | "deriveKey" | "deriveBits" | "wrapKey" | "unwrapKey";
type NotificationDirection = "auto" | "ltr" | "rtl";
type NotificationPermission = "default" | "denied" | "granted";
type PushEncryptionKeyName = "p256dh" | "auth";
type PushPermissionState = "denied" | "granted" | "prompt";
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
type RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
type RequestCredentials = "omit" | "same-origin" | "include";
type RequestDestination = "" | "audio" | "audioworklet" | "document" | "embed" | "font" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt";
type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
type RequestRedirect = "follow" | "error" | "manual";
type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
type ServiceWorkerState = "installing" | "installed" | "activating" | "activated" | "redundant";
type ServiceWorkerUpdateViaCache = "imports" | "all" | "none";
type VisibilityState = "hidden" | "visible" | "prerender";
type WebGLPowerPreference = "default" | "low-power" | "high-performance";
type WorkerType = "classic" | "module";
type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";
