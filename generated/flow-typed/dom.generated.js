/////////////////////////////
/// DOM APIs
/////////////////////////////

declare class Account {
    displayName: string;
    id: string;
    imageURL?: string;
    name?: string;
    rpDisplayName: string;
}

declare class AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
}

declare class AesCbcParams extends Algorithm {
    iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

declare class AesCtrParams extends Algorithm {
    counter: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    length: number;
}

declare class AesDerivedKeyParams extends Algorithm {
    length: number;
}

declare class AesGcmParams extends Algorithm {
    additionalData?: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    tagLength?: number;
}

declare class AesKeyAlgorithm extends KeyAlgorithm {
    length: number;
}

declare class AesKeyGenParams extends Algorithm {
    length: number;
}

declare class Algorithm {
    name: string;
}

declare class AnalyserOptions extends AudioNodeOptions {
    fftSize?: number;
    maxDecibels?: number;
    minDecibels?: number;
    smoothingTimeConstant?: number;
}

declare class AnimationEventInit extends EventInit {
    animationName?: string;
    elapsedTime?: number;
    pseudoElement?: string;
}

declare class AnimationPlaybackEventInit extends EventInit {
    currentTime?: number | null;
    timelineTime?: number | null;
}

declare class AssertionOptions {
    allowList?: ScopedCredentialDescriptor[];
    extensions?: WebAuthnExtensions;
    rpId?: string;
    timeoutSeconds?: number;
}

declare class AssignedNodesOptions {
    flatten?: boolean;
}

declare class AudioBufferOptions {
    length: number;
    numberOfChannels?: number;
    sampleRate: number;
}

declare class AudioBufferSourceOptions {
    buffer?: AudioBuffer | null;
    detune?: number;
    loop?: boolean;
    loopEnd?: number;
    loopStart?: number;
    playbackRate?: number;
}

declare class AudioContextInfo {
    currentTime?: number;
    sampleRate?: number;
}

declare class AudioContextOptions {
    latencyHint?: AudioContextLatencyCategory | number;
    sampleRate?: number;
}

declare class AudioNodeOptions {
    channelCount?: number;
    channelCountMode?: ChannelCountMode;
    channelInterpretation?: ChannelInterpretation;
}

declare class AudioParamDescriptor {
    automationRate?: AutomationRate;
    defaultValue?: number;
    maxValue?: number;
    minValue?: number;
    name: string;
}

declare class AudioProcessingEventInit extends EventInit {
    inputBuffer: AudioBuffer;
    outputBuffer: AudioBuffer;
    playbackTime: number;
}

declare class AudioTimestamp {
    contextTime?: number;
    performanceTime?: number;
}

declare class AudioWorkletNodeOptions extends AudioNodeOptions {
    numberOfInputs?: number;
    numberOfOutputs?: number;
    outputChannelCount?: number[];
    parameterData?: Record<string, number>;
    processorOptions?: any;
}

declare class BiquadFilterOptions extends AudioNodeOptions {
    Q?: number;
    detune?: number;
    frequency?: number;
    gain?: number;
    type?: BiquadFilterType;
}

declare class BlobPropertyBag {
    endings?: EndingType;
    type?: string;
}

declare class ByteLengthChunk {
    byteLength?: number;
}

declare class CacheQueryOptions {
    cacheName?: string;
    ignoreMethod?: boolean;
    ignoreSearch?: boolean;
    ignoreVary?: boolean;
}

declare class CanvasRenderingContext2DSettings {
    alpha?: boolean;
}

declare class ChannelMergerOptions extends AudioNodeOptions {
    numberOfInputs?: number;
}

declare class ChannelSplitterOptions extends AudioNodeOptions {
    numberOfOutputs?: number;
}

declare class ClientData {
    challenge: string;
    extensions?: WebAuthnExtensions;
    hashAlg: string | Algorithm;
    origin: string;
    rpId: string;
    tokenBinding?: string;
}

declare class ClientQueryOptions {
    includeUncontrolled?: boolean;
    type?: ClientTypes;
}

declare class CloseEventInit extends EventInit {
    code?: number;
    reason?: string;
    wasClean?: boolean;
}

declare class CompositionEventInit extends UIEventInit {
    data?: string;
}

declare class ComputedEffectTiming extends EffectTiming {
    activeDuration?: number;
    currentIteration?: number | null;
    endTime?: number;
    localTime?: number | null;
    progress?: number | null;
}

declare class ComputedKeyframe {
    composite: CompositeOperationOrAuto;
    computedOffset: number;
    easing: string;
    offset: number | null;
    [property: string]: string | number | null | undefined;
}

declare class ConfirmSiteSpecificExceptionsInformation extends ExceptionInformation {
    arrayOfDomainStrings?: string[];
}

declare class ConstantSourceOptions {
    offset?: number;
}

declare class ConstrainBooleanParameters {
    exact?: boolean;
    ideal?: boolean;
}

declare class ConstrainDOMStringParameters {
    exact?: string | string[];
    ideal?: string | string[];
}

declare class ConstrainDoubleRange extends DoubleRange {
    exact?: number;
    ideal?: number;
}

declare class ConstrainLongRange extends LongRange {
    exact?: number;
    ideal?: number;
}

declare class ConstrainVideoFacingModeParameters {
    exact?: VideoFacingModeEnum | VideoFacingModeEnum[];
    ideal?: VideoFacingModeEnum | VideoFacingModeEnum[];
}

declare class ConvolverOptions extends AudioNodeOptions {
    buffer?: AudioBuffer | null;
    disableNormalization?: boolean;
}

declare class CustomEventInit<T = any> extends EventInit {
    detail?: T;
}

declare class DOMMatrix2DInit {
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

declare class DOMMatrixInit extends DOMMatrix2DInit {
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

declare class DOMPointInit {
    w?: number;
    x?: number;
    y?: number;
    z?: number;
}

declare class DOMQuadInit {
    p1?: DOMPointInit;
    p2?: DOMPointInit;
    p3?: DOMPointInit;
    p4?: DOMPointInit;
}

declare class DOMRectInit {
    height?: number;
    width?: number;
    x?: number;
    y?: number;
}

declare class DelayOptions extends AudioNodeOptions {
    delayTime?: number;
    maxDelayTime?: number;
}

declare class DeviceAccelerationDict {
    x?: number | null;
    y?: number | null;
    z?: number | null;
}

declare class DeviceLightEventInit extends EventInit {
    value?: number;
}

declare class DeviceMotionEventInit extends EventInit {
    acceleration?: DeviceAccelerationDict | null;
    accelerationIncludingGravity?: DeviceAccelerationDict | null;
    interval?: number | null;
    rotationRate?: DeviceRotationRateDict | null;
}

declare class DeviceOrientationEventInit extends EventInit {
    absolute?: boolean;
    alpha?: number | null;
    beta?: number | null;
    gamma?: number | null;
}

declare class DeviceRotationRateDict {
    alpha?: number | null;
    beta?: number | null;
    gamma?: number | null;
}

declare class DocumentTimelineOptions {
    originTime?: number;
}

declare class DoubleRange {
    max?: number;
    min?: number;
}

declare class DragEventInit extends MouseEventInit {
    dataTransfer?: DataTransfer | null;
}

declare class DynamicsCompressorOptions extends AudioNodeOptions {
    attack?: number;
    knee?: number;
    ratio?: number;
    release?: number;
    threshold?: number;
}

declare class EcKeyAlgorithm extends KeyAlgorithm {
    namedCurve: NamedCurve;
}

declare class EcKeyGenParams extends Algorithm {
    namedCurve: NamedCurve;
}

declare class EcKeyImportParams extends Algorithm {
    namedCurve: NamedCurve;
}

declare class EcdhKeyDeriveParams extends Algorithm {
    public: CryptoKey;
}

declare class EcdsaParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
}

declare class EffectTiming {
    delay?: number;
    direction?: PlaybackDirection;
    duration?: number | string;
    easing?: string;
    endDelay?: number;
    fill?: FillMode;
    iterationStart?: number;
    iterations?: number;
}

declare class ElementDefinitionOptions {
    extends?: string;
}

declare class ErrorEventInit extends EventInit {
    colno?: number;
    error?: any;
    filename?: string;
    lineno?: number;
    message?: string;
}

declare class EventInit {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}

declare class EventListenerOptions {
    capture?: boolean;
}

declare class EventModifierInit extends UIEventInit {
    altKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
    modifierAltGraph?: boolean;
    modifierCapsLock?: boolean;
    modifierFn?: boolean;
    modifierFnLock?: boolean;
    modifierHyper?: boolean;
    modifierNumLock?: boolean;
    modifierOS?: boolean;
    modifierScrollLock?: boolean;
    modifierSuper?: boolean;
    modifierSymbol?: boolean;
    modifierSymbolLock?: boolean;
    shiftKey?: boolean;
}

declare class ExceptionInformation {
    domain?: string | null;
}

declare class FilePropertyBag extends BlobPropertyBag {
    lastModified?: number;
}

declare class FocusEventInit extends UIEventInit {
    relatedTarget?: EventTarget | null;
}

declare class FocusNavigationEventInit extends EventInit {
    navigationReason?: string | null;
    originHeight?: number;
    originLeft?: number;
    originTop?: number;
    originWidth?: number;
}

declare class FocusNavigationOrigin {
    originHeight?: number;
    originLeft?: number;
    originTop?: number;
    originWidth?: number;
}

declare class FocusOptions {
    preventScroll?: boolean;
}

declare class GainOptions extends AudioNodeOptions {
    gain?: number;
}

declare class GamepadEventInit extends EventInit {
    gamepad?: Gamepad;
}

declare class GetNotificationOptions {
    tag?: string;
}

declare class GetRootNodeOptions {
    composed?: boolean;
}

declare class HashChangeEventInit extends EventInit {
    newURL?: string;
    oldURL?: string;
}

declare class HkdfParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    info: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    salt: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

declare class HmacImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}

declare class HmacKeyAlgorithm extends KeyAlgorithm {
    hash: KeyAlgorithm;
    length: number;
}

declare class HmacKeyGenParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
    length?: number;
}

declare class IDBIndexParameters {
    multiEntry?: boolean;
    unique?: boolean;
}

declare class IDBObjectStoreParameters {
    autoIncrement?: boolean;
    keyPath?: string | string[] | null;
}

declare class IDBVersionChangeEventInit extends EventInit {
    newVersion?: number | null;
    oldVersion?: number;
}

declare class IIRFilterOptions extends AudioNodeOptions {
    feedback: number[];
    feedforward: number[];
}

declare class IntersectionObserverEntryInit {
    boundingClientRect: DOMRectInit;
    intersectionRect: DOMRectInit;
    isIntersecting: boolean;
    rootBounds: DOMRectInit;
    target: Element;
    time: number;
}

declare class IntersectionObserverInit {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
}

declare class JsonWebKey {
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

declare class KeyAlgorithm {
    name: string;
}

declare class KeyboardEventInit extends EventModifierInit {
    code?: string;
    key?: string;
    location?: number;
    repeat?: boolean;
}

declare class Keyframe {
    composite?: CompositeOperationOrAuto;
    easing?: string;
    offset?: number | null;
    [property: string]: string | number | null | undefined;
}

declare class KeyframeAnimationOptions extends KeyframeEffectOptions {
    id?: string;
}

declare class KeyframeEffectOptions extends EffectTiming {
    composite?: CompositeOperation;
    iterationComposite?: IterationCompositeOperation;
}

declare class LongRange {
    max?: number;
    min?: number;
}

declare class MediaElementAudioSourceOptions {
    mediaElement: HTMLMediaElement;
}

declare class MediaEncryptedEventInit extends EventInit {
    initData?: ArrayBuffer | null;
    initDataType?: string;
}

declare class MediaKeyMessageEventInit extends EventInit {
    message?: ArrayBuffer | null;
    messageType?: MediaKeyMessageType;
}

declare class MediaKeySystemConfiguration {
    audioCapabilities?: MediaKeySystemMediaCapability[];
    distinctiveIdentifier?: MediaKeysRequirement;
    initDataTypes?: string[];
    persistentState?: MediaKeysRequirement;
    videoCapabilities?: MediaKeySystemMediaCapability[];
}

declare class MediaKeySystemMediaCapability {
    contentType?: string;
    robustness?: string;
}

declare class MediaQueryListEventInit extends EventInit {
    matches?: boolean;
    media?: string;
}

declare class MediaStreamAudioSourceOptions {
    mediaStream: MediaStream;
}

declare class MediaStreamConstraints {
    audio?: boolean | MediaTrackConstraints;
    peerIdentity?: string;
    video?: boolean | MediaTrackConstraints;
}

declare class MediaStreamErrorEventInit extends EventInit {
    error?: MediaStreamError | null;
}

declare class MediaStreamEventInit extends EventInit {
    stream?: MediaStream;
}

declare class MediaStreamTrackAudioSourceOptions {
    mediaStreamTrack: MediaStreamTrack;
}

declare class MediaStreamTrackEventInit extends EventInit {
    track?: MediaStreamTrack | null;
}

declare class MediaTrackCapabilities {
    aspectRatio?: number | DoubleRange;
    deviceId?: string;
    echoCancellation?: boolean[];
    facingMode?: string;
    frameRate?: number | DoubleRange;
    groupId?: string;
    height?: number | LongRange;
    sampleRate?: number | LongRange;
    sampleSize?: number | LongRange;
    volume?: number | DoubleRange;
    width?: number | LongRange;
}

declare class MediaTrackConstraintSet {
    aspectRatio?: number | ConstrainDoubleRange;
    channelCount?: number | ConstrainLongRange;
    deviceId?: string | string[] | ConstrainDOMStringParameters;
    displaySurface?: string | string[] | ConstrainDOMStringParameters;
    echoCancellation?: boolean | ConstrainBooleanParameters;
    facingMode?: string | string[] | ConstrainDOMStringParameters;
    frameRate?: number | ConstrainDoubleRange;
    groupId?: string | string[] | ConstrainDOMStringParameters;
    height?: number | ConstrainLongRange;
    latency?: number | ConstrainDoubleRange;
    logicalSurface?: boolean | ConstrainBooleanParameters;
    sampleRate?: number | ConstrainLongRange;
    sampleSize?: number | ConstrainLongRange;
    volume?: number | ConstrainDoubleRange;
    width?: number | ConstrainLongRange;
}

declare class MediaTrackConstraints extends MediaTrackConstraintSet {
    advanced?: MediaTrackConstraintSet[];
}

declare class MediaTrackSettings {
    aspectRatio?: number;
    deviceId?: string;
    echoCancellation?: boolean;
    facingMode?: string;
    frameRate?: number;
    groupId?: string;
    height?: number;
    sampleRate?: number;
    sampleSize?: number;
    volume?: number;
    width?: number;
}

declare class MediaTrackSupportedConstraints {
    aspectRatio?: boolean;
    deviceId?: boolean;
    echoCancellation?: boolean;
    facingMode?: boolean;
    frameRate?: boolean;
    groupId?: boolean;
    height?: boolean;
    sampleRate?: boolean;
    sampleSize?: boolean;
    volume?: boolean;
    width?: boolean;
}

declare class MessageEventInit extends EventInit {
    data?: any;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[];
    source?: MessageEventSource | null;
}

declare class MouseEventInit extends EventModifierInit {
    button?: number;
    buttons?: number;
    clientX?: number;
    clientY?: number;
    relatedTarget?: EventTarget | null;
    screenX?: number;
    screenY?: number;
}

declare class MutationObserverInit {
    attributeFilter?: string[];
    attributeOldValue?: boolean;
    attributes?: boolean;
    characterData?: boolean;
    characterDataOldValue?: boolean;
    childList?: boolean;
    subtree?: boolean;
}

declare class NavigationPreloadState {
    enabled?: boolean;
    headerValue?: string;
}

declare class NotificationAction {
    action: string;
    icon?: string;
    title: string;
}

declare class NotificationOptions {
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

declare class OfflineAudioCompletionEventInit extends EventInit {
    renderedBuffer: AudioBuffer;
}

declare class OfflineAudioContextOptions {
    length: number;
    numberOfChannels?: number;
    sampleRate: number;
}

declare class OptionalEffectTiming {
    delay?: number;
    direction?: PlaybackDirection;
    duration?: number | string;
    easing?: string;
    endDelay?: number;
    fill?: FillMode;
    iterationStart?: number;
    iterations?: number;
}

declare class OscillatorOptions extends AudioNodeOptions {
    detune?: number;
    frequency?: number;
    periodicWave?: PeriodicWave;
    type?: OscillatorType;
}

declare class PannerOptions extends AudioNodeOptions {
    coneInnerAngle?: number;
    coneOuterAngle?: number;
    coneOuterGain?: number;
    distanceModel?: DistanceModelType;
    maxDistance?: number;
    orientationX?: number;
    orientationY?: number;
    orientationZ?: number;
    panningModel?: PanningModelType;
    positionX?: number;
    positionY?: number;
    positionZ?: number;
    refDistance?: number;
    rolloffFactor?: number;
}

declare class PaymentCurrencyAmount {
    currency: string;
    currencySystem?: string;
    value: string;
}

declare class PaymentDetailsBase {
    displayItems?: PaymentItem[];
    modifiers?: PaymentDetailsModifier[];
    shippingOptions?: PaymentShippingOption[];
}

declare class PaymentDetailsInit extends PaymentDetailsBase {
    id?: string;
    total: PaymentItem;
}

declare class PaymentDetailsModifier {
    additionalDisplayItems?: PaymentItem[];
    data?: any;
    supportedMethods: string | string[];
    total?: PaymentItem;
}

declare class PaymentDetailsUpdate extends PaymentDetailsBase {
    error?: string;
    total?: PaymentItem;
}

declare class PaymentItem {
    amount: PaymentCurrencyAmount;
    label: string;
    pending?: boolean;
}

declare class PaymentMethodData {
    data?: any;
    supportedMethods: string | string[];
}

declare class PaymentOptions {
    requestPayerEmail?: boolean;
    requestPayerName?: boolean;
    requestPayerPhone?: boolean;
    requestShipping?: boolean;
    shippingType?: string;
}

declare class PaymentRequestUpdateEventInit extends EventInit {
}

declare class PaymentShippingOption {
    amount: PaymentCurrencyAmount;
    id: string;
    label: string;
    selected?: boolean;
}

declare class Pbkdf2Params extends Algorithm {
    hash: HashAlgorithmIdentifier;
    iterations: number;
    salt: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

declare class PerformanceObserverInit {
    buffered?: boolean;
    entryTypes: string[];
}

declare class PeriodicWaveConstraints {
    disableNormalization?: boolean;
}

declare class PeriodicWaveOptions extends PeriodicWaveConstraints {
    imag?: number[] | Float32Array;
    real?: number[] | Float32Array;
}

declare class PipeOptions {
    preventAbort?: boolean;
    preventCancel?: boolean;
    preventClose?: boolean;
}

declare class PointerEventInit extends MouseEventInit {
    height?: number;
    isPrimary?: boolean;
    pointerId?: number;
    pointerType?: string;
    pressure?: number;
    tangentialPressure?: number;
    tiltX?: number;
    tiltY?: number;
    twist?: number;
    width?: number;
}

declare class PopStateEventInit extends EventInit {
    state?: any;
}

declare class PositionOptions {
    enableHighAccuracy?: boolean;
    maximumAge?: number;
    timeout?: number;
}

declare class ProgressEventInit extends EventInit {
    lengthComputable?: boolean;
    loaded?: number;
    total?: number;
}

declare class PromiseRejectionEventInit extends EventInit {
    promise: Promise<any>;
    reason?: any;
}

declare class PropertyIndexedKeyframes {
    composite?: CompositeOperationOrAuto | CompositeOperationOrAuto[];
    easing?: string | string[];
    offset?: number | (number | null)[];
    [property: string]: string | string[] | number | null | (number | null)[] | undefined;
}

declare class PushSubscriptionJSON {
    endpoint?: string;
    expirationTime?: number | null;
    keys?: Record<string, string>;
}

declare class PushSubscriptionOptionsInit {
    applicationServerKey?: BufferSource | string | null;
    userVisibleOnly?: boolean;
}

declare class QueuingStrategy<T = any> {
    highWaterMark?: number;
    size?: QueuingStrategySizeCallback<T>;
}

declare class RTCAnswerOptions extends RTCOfferAnswerOptions {
}

declare class RTCCertificateExpiration {
    expires?: number;
}

declare class RTCConfiguration {
    bundlePolicy?: RTCBundlePolicy;
    certificates?: RTCCertificate[];
    iceCandidatePoolSize?: number;
    iceServers?: RTCIceServer[];
    iceTransportPolicy?: RTCIceTransportPolicy;
    peerIdentity?: string;
    rtcpMuxPolicy?: RTCRtcpMuxPolicy;
}

declare class RTCDTMFToneChangeEventInit extends EventInit {
    tone: string;
}

declare class RTCDataChannelEventInit extends EventInit {
    channel: RTCDataChannel;
}

declare class RTCDataChannelInit {
    id?: number;
    maxPacketLifeTime?: number;
    maxRetransmits?: number;
    negotiated?: boolean;
    ordered?: boolean;
    priority?: RTCPriorityType;
    protocol?: string;
}

declare class RTCDtlsFingerprint {
    algorithm?: string;
    value?: string;
}

declare class RTCDtlsParameters {
    fingerprints?: RTCDtlsFingerprint[];
    role?: RTCDtlsRole;
}

declare class RTCErrorEventInit extends EventInit {
    error?: RTCError | null;
}

declare class RTCIceCandidateAttributes extends RTCStats {
    addressSourceUrl?: string;
    candidateType?: RTCStatsIceCandidateType;
    ipAddress?: string;
    portNumber?: number;
    priority?: number;
    transport?: string;
}

declare class RTCIceCandidateComplete {
}

declare class RTCIceCandidateDictionary {
    foundation?: string;
    ip?: string;
    msMTurnSessionId?: string;
    port?: number;
    priority?: number;
    protocol?: RTCIceProtocol;
    relatedAddress?: string;
    relatedPort?: number;
    tcpType?: RTCIceTcpCandidateType;
    type?: RTCIceCandidateType;
}

declare class RTCIceCandidateInit {
    candidate?: string;
    sdpMLineIndex?: number | null;
    sdpMid?: string | null;
    usernameFragment?: string;
}

declare class RTCIceCandidatePair {
    local?: RTCIceCandidate;
    remote?: RTCIceCandidate;
}

declare class RTCIceCandidatePairStats extends RTCStats {
    availableIncomingBitrate?: number;
    availableOutgoingBitrate?: number;
    bytesReceived?: number;
    bytesSent?: number;
    localCandidateId?: string;
    nominated?: boolean;
    priority?: number;
    readable?: boolean;
    remoteCandidateId?: string;
    roundTripTime?: number;
    state?: RTCStatsIceCandidatePairState;
    transportId?: string;
    writable?: boolean;
}

declare class RTCIceGatherOptions {
    gatherPolicy?: RTCIceGatherPolicy;
    iceservers?: RTCIceServer[];
}

declare class RTCIceParameters {
    password?: string;
    usernameFragment?: string;
}

declare class RTCIceServer {
    credential?: string | RTCOAuthCredential;
    credentialType?: RTCIceCredentialType;
    urls: string | string[];
    username?: string;
}

declare class RTCIdentityProviderOptions {
    peerIdentity?: string;
    protocol?: string;
    usernameHint?: string;
}

declare class RTCInboundRTPStreamStats extends RTCRTPStreamStats {
    bytesReceived?: number;
    fractionLost?: number;
    jitter?: number;
    packetsLost?: number;
    packetsReceived?: number;
}

declare class RTCMediaStreamTrackStats extends RTCStats {
    audioLevel?: number;
    echoReturnLoss?: number;
    echoReturnLossEnhancement?: number;
    frameHeight?: number;
    frameWidth?: number;
    framesCorrupted?: number;
    framesDecoded?: number;
    framesDropped?: number;
    framesPerSecond?: number;
    framesReceived?: number;
    framesSent?: number;
    remoteSource?: boolean;
    ssrcIds?: string[];
    trackIdentifier?: string;
}

declare class RTCOAuthCredential {
    accessToken: string;
    macKey: string;
}

declare class RTCOfferAnswerOptions {
    voiceActivityDetection?: boolean;
}

declare class RTCOfferOptions extends RTCOfferAnswerOptions {
    iceRestart?: boolean;
    offerToReceiveAudio?: boolean;
    offerToReceiveVideo?: boolean;
}

declare class RTCOutboundRTPStreamStats extends RTCRTPStreamStats {
    bytesSent?: number;
    packetsSent?: number;
    roundTripTime?: number;
    targetBitrate?: number;
}

declare class RTCPeerConnectionIceErrorEventInit extends EventInit {
    errorCode: number;
    hostCandidate?: string;
    statusText?: string;
    url?: string;
}

declare class RTCPeerConnectionIceEventInit extends EventInit {
    candidate?: RTCIceCandidate | null;
    url?: string | null;
}

declare class RTCRTPStreamStats extends RTCStats {
    associateStatsId?: string;
    codecId?: string;
    firCount?: number;
    isRemote?: boolean;
    mediaTrackId?: string;
    mediaType?: string;
    nackCount?: number;
    pliCount?: number;
    sliCount?: number;
    ssrc?: string;
    transportId?: string;
}

declare class RTCRtcpFeedback {
    parameter?: string;
    type?: string;
}

declare class RTCRtcpParameters {
    cname?: string;
    reducedSize?: boolean;
}

declare class RTCRtpCapabilities {
    codecs: RTCRtpCodecCapability[];
    headerExtensions: RTCRtpHeaderExtensionCapability[];
}

declare class RTCRtpCodecCapability {
    channels?: number;
    clockRate: number;
    mimeType: string;
    sdpFmtpLine?: string;
}

declare class RTCRtpCodecParameters {
    channels?: number;
    clockRate: number;
    mimeType: string;
    payloadType: number;
    sdpFmtpLine?: string;
}

declare class RTCRtpCodingParameters {
    rid?: string;
}

declare class RTCRtpContributingSource {
    audioLevel?: number;
    source: number;
    timestamp: number;
}

declare class RTCRtpDecodingParameters extends RTCRtpCodingParameters {
}

declare class RTCRtpEncodingParameters extends RTCRtpCodingParameters {
    active?: boolean;
    codecPayloadType?: number;
    dtx?: RTCDtxStatus;
    maxBitrate?: number;
    maxFramerate?: number;
    priority?: RTCPriorityType;
    ptime?: number;
    scaleResolutionDownBy?: number;
}

declare class RTCRtpFecParameters {
    mechanism?: string;
    ssrc?: number;
}

declare class RTCRtpHeaderExtension {
    kind?: string;
    preferredEncrypt?: boolean;
    preferredId?: number;
    uri?: string;
}

declare class RTCRtpHeaderExtensionCapability {
    uri?: string;
}

declare class RTCRtpHeaderExtensionParameters {
    encrypted?: boolean;
    id: number;
    uri: string;
}

declare class RTCRtpParameters {
    codecs: RTCRtpCodecParameters[];
    headerExtensions: RTCRtpHeaderExtensionParameters[];
    rtcp: RTCRtcpParameters;
}

declare class RTCRtpReceiveParameters extends RTCRtpParameters {
    encodings: RTCRtpDecodingParameters[];
}

declare class RTCRtpRtxParameters {
    ssrc?: number;
}

declare class RTCRtpSendParameters extends RTCRtpParameters {
    degradationPreference?: RTCDegradationPreference;
    encodings: RTCRtpEncodingParameters[];
    transactionId: string;
}

declare class RTCRtpSynchronizationSource extends RTCRtpContributingSource {
    voiceActivityFlag?: boolean;
}

declare class RTCRtpTransceiverInit {
    direction?: RTCRtpTransceiverDirection;
    sendEncodings?: RTCRtpEncodingParameters[];
    streams?: MediaStream[];
}

declare class RTCRtpUnhandled {
    muxId?: string;
    payloadType?: number;
    ssrc?: number;
}

declare class RTCSessionDescriptionInit {
    sdp?: string;
    type: RTCSdpType;
}

declare class RTCSrtpKeyParam {
    keyMethod?: string;
    keySalt?: string;
    lifetime?: string;
    mkiLength?: number;
    mkiValue?: number;
}

declare class RTCSrtpSdesParameters {
    cryptoSuite?: string;
    keyParams?: RTCSrtpKeyParam[];
    sessionParams?: string[];
    tag?: number;
}

declare class RTCSsrcRange {
    max?: number;
    min?: number;
}

declare class RTCStats {
    id: string;
    timestamp: number;
    type: RTCStatsType;
}

declare class RTCStatsEventInit extends EventInit {
    report: RTCStatsReport;
}

declare class RTCStatsReport {
}

declare class RTCTrackEventInit extends EventInit {
    receiver: RTCRtpReceiver;
    streams?: MediaStream[];
    track: MediaStreamTrack;
    transceiver: RTCRtpTransceiver;
}

declare class RTCTransportStats extends RTCStats {
    activeConnection?: boolean;
    bytesReceived?: number;
    bytesSent?: number;
    localCertificateId?: string;
    remoteCertificateId?: string;
    rtcpTransportStatsId?: string;
    selectedCandidatePairId?: string;
}

declare class RegistrationOptions {
    scope?: string;
    type?: WorkerType;
    updateViaCache?: ServiceWorkerUpdateViaCache;
}

declare class RequestInit {
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

declare class ResponseInit {
    headers?: HeadersInit;
    status?: number;
    statusText?: string;
}

declare class RsaHashedImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier;
}

declare class RsaHashedKeyAlgorithm extends RsaKeyAlgorithm {
    hash: KeyAlgorithm;
}

declare class RsaHashedKeyGenParams extends RsaKeyGenParams {
    hash: HashAlgorithmIdentifier;
}

declare class RsaKeyAlgorithm extends KeyAlgorithm {
    modulusLength: number;
    publicExponent: BigInteger;
}

declare class RsaKeyGenParams extends Algorithm {
    modulusLength: number;
    publicExponent: BigInteger;
}

declare class RsaOaepParams extends Algorithm {
    label?: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

declare class RsaOtherPrimesInfo {
    d?: string;
    r?: string;
    t?: string;
}

declare class RsaPssParams extends Algorithm {
    saltLength: number;
}

declare class SVGBoundingBoxOptions {
    clipped?: boolean;
    fill?: boolean;
    markers?: boolean;
    stroke?: boolean;
}

declare class ScopedCredentialDescriptor {
    id: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null;
    transports?: Transport[];
    type: ScopedCredentialType;
}

declare class ScopedCredentialOptions {
    excludeList?: ScopedCredentialDescriptor[];
    extensions?: WebAuthnExtensions;
    rpId?: string;
    timeoutSeconds?: number;
}

declare class ScopedCredentialParameters {
    algorithm: string | Algorithm;
    type: ScopedCredentialType;
}

declare class ScrollIntoViewOptions extends ScrollOptions {
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
}

declare class ScrollOptions {
    behavior?: ScrollBehavior;
}

declare class ScrollToOptions extends ScrollOptions {
    left?: number;
    top?: number;
}

declare class SecurityPolicyViolationEventInit extends EventInit {
    blockedURI?: string;
    columnNumber?: number;
    documentURI?: string;
    effectiveDirective?: string;
    lineNumber?: number;
    originalPolicy?: string;
    referrer?: string;
    sourceFile?: string;
    statusCode?: number;
    violatedDirective?: string;
}

declare class ServiceWorkerMessageEventInit extends EventInit {
    data?: any;
    lastEventId?: string;
    origin?: string;
    ports?: MessagePort[] | null;
    source?: ServiceWorker | MessagePort | null;
}

declare class StereoPannerOptions extends AudioNodeOptions {
    pan?: number;
}

declare class StorageEstimate {
    quota?: number;
    usage?: number;
}

declare class StorageEventInit extends EventInit {
    key?: string | null;
    newValue?: string | null;
    oldValue?: string | null;
    storageArea?: Storage | null;
    url?: string;
}

declare class StoreExceptionsInformation extends ExceptionInformation {
    detailURI?: string | null;
    explanationString?: string | null;
    siteName?: string | null;
}

declare class StoreSiteSpecificExceptionsInformation extends StoreExceptionsInformation {
    arrayOfDomainStrings?: string[];
}

declare class TextDecodeOptions {
    stream?: boolean;
}

declare class TextDecoderOptions {
    fatal?: boolean;
    ignoreBOM?: boolean;
}

declare class TouchEventInit extends EventModifierInit {
    changedTouches?: Touch[];
    targetTouches?: Touch[];
    touches?: Touch[];
}

declare class TouchInit {
    altitudeAngle?: number;
    azimuthAngle?: number;
    clientX?: number;
    clientY?: number;
    force?: number;
    identifier: number;
    pageX?: number;
    pageY?: number;
    radiusX?: number;
    radiusY?: number;
    rotationAngle?: number;
    screenX?: number;
    screenY?: number;
    target: EventTarget;
    touchType?: TouchType;
}

declare class TrackEventInit extends EventInit {
    track?: VideoTrack | AudioTrack | TextTrack | null;
}

declare class Transformer<I = any, O = any> {
    flush?: TransformStreamDefaultControllerCallback<O>;
    readableType?: undefined;
    start?: TransformStreamDefaultControllerCallback<O>;
    transform?: TransformStreamDefaultControllerTransformCallback<I, O>;
    writableType?: undefined;
}

declare class TransitionEventInit extends EventInit {
    elapsedTime?: number;
    propertyName?: string;
    pseudoElement?: string;
}

declare class UIEventInit extends EventInit {
    detail?: number;
    view?: Window | null;
}

declare class UnderlyingByteSource {
    autoAllocateChunkSize?: number;
    cancel?: ReadableStreamErrorCallback;
    pull?: ReadableByteStreamControllerCallback;
    start?: ReadableByteStreamControllerCallback;
    type: "bytes";
}

declare class UnderlyingSink<W = any> {
    abort?: WritableStreamErrorCallback;
    close?: WritableStreamDefaultControllerCloseCallback;
    start?: WritableStreamDefaultControllerStartCallback;
    type?: undefined;
    write?: WritableStreamDefaultControllerWriteCallback<W>;
}

declare class UnderlyingSource<R = any> {
    cancel?: ReadableStreamErrorCallback;
    pull?: ReadableStreamDefaultControllerCallback<R>;
    start?: ReadableStreamDefaultControllerCallback<R>;
    type?: undefined;
}

declare class VRDisplayEventInit extends EventInit {
    display: VRDisplay;
    reason?: VRDisplayEventReason;
}

declare class VRLayer {
    leftBounds?: number[] | Float32Array | null;
    rightBounds?: number[] | Float32Array | null;
    source?: HTMLCanvasElement | null;
}

declare class VRStageParameters {
    sittingToStandingTransform?: Float32Array;
    sizeX?: number;
    sizeY?: number;
}

declare class WaveShaperOptions extends AudioNodeOptions {
    curve?: number[] | Float32Array;
    oversample?: OverSampleType;
}

declare class WebAuthnExtensions {
}

declare class WebGLContextAttributes {
    alpha?: GLboolean;
    antialias?: GLboolean;
    depth?: GLboolean;
    failIfMajorPerformanceCaveat?: boolean;
    powerPreference?: WebGLPowerPreference;
    premultipliedAlpha?: GLboolean;
    preserveDrawingBuffer?: GLboolean;
    stencil?: GLboolean;
}

declare class WebGLContextEventInit extends EventInit {
    statusMessage?: string;
}

declare class WheelEventInit extends MouseEventInit {
    deltaMode?: number;
    deltaX?: number;
    deltaY?: number;
    deltaZ?: number;
}

declare class WorkerOptions {
    credentials?: RequestCredentials;
    name?: string;
    type?: WorkerType;
}

declare class WorkletOptions {
    credentials?: RequestCredentials;
}

interface EventListener {
    (evt: Event): void;
}

declare class ANGLE_instanced_arrays {
    drawArraysInstancedANGLE(mode: GLenum, first: GLint, count: GLsizei, primcount: GLsizei): void;
    drawElementsInstancedANGLE(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, primcount: GLsizei): void;
    vertexAttribDivisorANGLE(index: GLuint, divisor: GLuint): void;
    +VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: GLenum;
}

declare class AbortController {
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

declare var AbortController: {
    prototype: AbortController;
    new(): AbortController;
};

interface AbortSignalEventMap {
    "abort": ProgressEvent;
}

declare class AbortSignal extends EventTarget {
    /**
     * Returns true if this AbortSignal's AbortController has signaled to abort, and false
     * otherwise.
     */
    +aborted: boolean;
    onabort: ((this: AbortSignal, ev: ProgressEvent) => any) | null;
    addEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AbortSignal: {
    prototype: AbortSignal;
    new(): AbortSignal;
};

declare class AbstractRange {
    +collapsed: boolean;
    +endContainer: Node;
    +endOffset: number;
    +startContainer: Node;
    +startOffset: number;
}

declare var AbstractRange: {
    prototype: AbstractRange;
    new(): AbstractRange;
};

interface AbstractWorkerEventMap {
    "error": ErrorEvent;
}

declare class AbstractWorker {
    onerror: ((this: AbstractWorker, ev: ErrorEvent) => any) | null;
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare class AesCfbParams extends Algorithm {
    iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

declare class AesCmacParams extends Algorithm {
    length: number;
}

declare class AnalyserNode extends AudioNode {
    fftSize: number;
    +frequencyBinCount: number;
    maxDecibels: number;
    minDecibels: number;
    smoothingTimeConstant: number;
    getByteFrequencyData(array: Uint8Array): void;
    getByteTimeDomainData(array: Uint8Array): void;
    getFloatFrequencyData(array: Float32Array): void;
    getFloatTimeDomainData(array: Float32Array): void;
}

declare var AnalyserNode: {
    prototype: AnalyserNode;
    new(context: BaseAudioContext, options?: AnalyserOptions): AnalyserNode;
};

declare class Animatable {
    animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions): Animation;
    getAnimations(): Animation[];
}

interface AnimationEventMap {
    "cancel": AnimationPlaybackEvent;
    "finish": AnimationPlaybackEvent;
}

declare class Animation extends EventTarget {
    currentTime: number | null;
    effect: AnimationEffect | null;
    +finished: Promise<Animation>;
    id: string;
    oncancel: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    onfinish: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    +pending: boolean;
    +playState: AnimationPlayState;
    playbackRate: number;
    +ready: Promise<Animation>;
    startTime: number | null;
    timeline: AnimationTimeline | null;
    cancel(): void;
    finish(): void;
    pause(): void;
    play(): void;
    reverse(): void;
    updatePlaybackRate(playbackRate: number): void;
    addEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Animation: {
    prototype: Animation;
    new(effect?: AnimationEffect | null, timeline?: AnimationTimeline | null): Animation;
};

declare class AnimationEffect {
    getComputedTiming(): ComputedEffectTiming;
    getTiming(): EffectTiming;
    updateTiming(timing?: OptionalEffectTiming): void;
}

declare var AnimationEffect: {
    prototype: AnimationEffect;
    new(): AnimationEffect;
};

declare class AnimationEvent extends Event {
    +animationName: string;
    +elapsedTime: number;
    +pseudoElement: string;
}

declare var AnimationEvent: {
    prototype: AnimationEvent;
    new(type: string, animationEventInitDict?: AnimationEventInit): AnimationEvent;
};

declare class AnimationPlaybackEvent extends Event {
    +currentTime: number | null;
    +timelineTime: number | null;
}

declare var AnimationPlaybackEvent: {
    prototype: AnimationPlaybackEvent;
    new(type: string, eventInitDict?: AnimationPlaybackEventInit): AnimationPlaybackEvent;
};

declare class AnimationTimeline {
    +currentTime: number | null;
}

declare var AnimationTimeline: {
    prototype: AnimationTimeline;
    new(): AnimationTimeline;
};

interface ApplicationCacheEventMap {
    "cached": Event;
    "checking": Event;
    "downloading": Event;
    "error": Event;
    "noupdate": Event;
    "obsolete": Event;
    "progress": ProgressEvent;
    "updateready": Event;
}

declare class ApplicationCache extends EventTarget {
    /** @deprecated */
    oncached: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    onchecking: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    ondownloading: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    onerror: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    onnoupdate: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    onobsolete: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    onprogress: ((this: ApplicationCache, ev: ProgressEvent) => any) | null;
    /** @deprecated */
    onupdateready: ((this: ApplicationCache, ev: Event) => any) | null;
    /** @deprecated */
    +status: number;
    /** @deprecated */
    abort(): void;
    /** @deprecated */
    swapCache(): void;
    /** @deprecated */
    update(): void;
    +CHECKING: number;
    +DOWNLOADING: number;
    +IDLE: number;
    +OBSOLETE: number;
    +UNCACHED: number;
    +UPDATEREADY: number;
    addEventListener<K extends keyof ApplicationCacheEventMap>(type: K, listener: (this: ApplicationCache, ev: ApplicationCacheEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ApplicationCacheEventMap>(type: K, listener: (this: ApplicationCache, ev: ApplicationCacheEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ApplicationCache: {
    prototype: ApplicationCache;
    new(): ApplicationCache;
    +CHECKING: number;
    +DOWNLOADING: number;
    +IDLE: number;
    +OBSOLETE: number;
    +UNCACHED: number;
    +UPDATEREADY: number;
};

declare class Attr extends Node {
    +localName: string;
    +name: string;
    +namespaceURI: string | null;
    +ownerElement: Element | null;
    +prefix: string | null;
    +specified: boolean;
    value: string;
}

declare var Attr: {
    prototype: Attr;
    new(): Attr;
};

declare class AudioBuffer {
    +duration: number;
    +length: number;
    +numberOfChannels: number;
    +sampleRate: number;
    copyFromChannel(destination: Float32Array, channelNumber: number, startInChannel?: number): void;
    copyToChannel(source: Float32Array, channelNumber: number, startInChannel?: number): void;
    getChannelData(channel: number): Float32Array;
}

declare var AudioBuffer: {
    prototype: AudioBuffer;
    new(options: AudioBufferOptions): AudioBuffer;
};

declare class AudioBufferSourceNode extends AudioScheduledSourceNode {
    buffer: AudioBuffer | null;
    +detune: AudioParam;
    loop: boolean;
    loopEnd: number;
    loopStart: number;
    +playbackRate: AudioParam;
    start(when?: number, offset?: number, duration?: number): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AudioBufferSourceNode: {
    prototype: AudioBufferSourceNode;
    new(context: BaseAudioContext, options?: AudioBufferSourceOptions): AudioBufferSourceNode;
};

declare class AudioContext extends BaseAudioContext {
    +baseLatency: number;
    +outputLatency: number;
    close(): Promise<void>;
    createMediaElementSource(mediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
    createMediaStreamDestination(): MediaStreamAudioDestinationNode;
    createMediaStreamSource(mediaStream: MediaStream): MediaStreamAudioSourceNode;
    createMediaStreamTrackSource(mediaStreamTrack: MediaStreamTrack): MediaStreamTrackAudioSourceNode;
    getOutputTimestamp(): AudioTimestamp;
    suspend(): Promise<void>;
    addEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AudioContext: {
    prototype: AudioContext;
    new(contextOptions?: AudioContextOptions): AudioContext;
};

declare class AudioDestinationNode extends AudioNode {
    +maxChannelCount: number;
}

declare var AudioDestinationNode: {
    prototype: AudioDestinationNode;
    new(): AudioDestinationNode;
};

declare class AudioListener {
    +forwardX: AudioParam;
    +forwardY: AudioParam;
    +forwardZ: AudioParam;
    +positionX: AudioParam;
    +positionY: AudioParam;
    +positionZ: AudioParam;
    +upX: AudioParam;
    +upY: AudioParam;
    +upZ: AudioParam;
    /** @deprecated */
    setOrientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): void;
    /** @deprecated */
    setPosition(x: number, y: number, z: number): void;
}

declare var AudioListener: {
    prototype: AudioListener;
    new(): AudioListener;
};

declare class AudioNode extends EventTarget {
    channelCount: number;
    channelCountMode: ChannelCountMode;
    channelInterpretation: ChannelInterpretation;
    +context: BaseAudioContext;
    +numberOfInputs: number;
    +numberOfOutputs: number;
    connect(destinationNode: AudioNode, output?: number, input?: number): AudioNode;
    connect(destinationParam: AudioParam, output?: number): void;
    disconnect(): void;
    disconnect(output: number): void;
    disconnect(destinationNode: AudioNode): void;
    disconnect(destinationNode: AudioNode, output: number): void;
    disconnect(destinationNode: AudioNode, output: number, input: number): void;
    disconnect(destinationParam: AudioParam): void;
    disconnect(destinationParam: AudioParam, output: number): void;
}

declare var AudioNode: {
    prototype: AudioNode;
    new(): AudioNode;
};

declare class AudioParam {
    automationRate: AutomationRate;
    +defaultValue: number;
    +maxValue: number;
    +minValue: number;
    value: number;
    cancelAndHoldAtTime(cancelTime: number): AudioParam;
    cancelScheduledValues(cancelTime: number): AudioParam;
    exponentialRampToValueAtTime(value: number, endTime: number): AudioParam;
    linearRampToValueAtTime(value: number, endTime: number): AudioParam;
    setTargetAtTime(target: number, startTime: number, timeConstant: number): AudioParam;
    setValueAtTime(value: number, startTime: number): AudioParam;
    setValueCurveAtTime(values: number[] | Float32Array, startTime: number, duration: number): AudioParam;
}

declare var AudioParam: {
    prototype: AudioParam;
    new(): AudioParam;
};

declare class AudioParamMap {
    forEach(callbackfn: (value: AudioParam, key: string, parent: AudioParamMap) => void, thisArg?: any): void;
}

declare var AudioParamMap: {
    prototype: AudioParamMap;
    new(): AudioParamMap;
};

declare class AudioProcessingEvent extends Event {
    +inputBuffer: AudioBuffer;
    +outputBuffer: AudioBuffer;
    +playbackTime: number;
}

declare var AudioProcessingEvent: {
    prototype: AudioProcessingEvent;
    new(type: string, eventInitDict: AudioProcessingEventInit): AudioProcessingEvent;
};

interface AudioScheduledSourceNodeEventMap {
    "ended": Event;
}

declare class AudioScheduledSourceNode extends AudioNode {
    onended: ((this: AudioScheduledSourceNode, ev: Event) => any) | null;
    start(when?: number): void;
    stop(when?: number): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AudioScheduledSourceNode: {
    prototype: AudioScheduledSourceNode;
    new(): AudioScheduledSourceNode;
};

declare class AudioTrack {
    enabled: boolean;
    +id: string;
    kind: string;
    +label: string;
    language: string;
    +sourceBuffer: SourceBuffer;
}

declare var AudioTrack: {
    prototype: AudioTrack;
    new(): AudioTrack;
};

interface AudioTrackListEventMap {
    "addtrack": TrackEvent;
    "change": Event;
    "removetrack": TrackEvent;
}

declare class AudioTrackList extends EventTarget {
    +length: number;
    onaddtrack: ((this: AudioTrackList, ev: TrackEvent) => any) | null;
    onchange: ((this: AudioTrackList, ev: Event) => any) | null;
    onremovetrack: ((this: AudioTrackList, ev: TrackEvent) => any) | null;
    getTrackById(id: string): AudioTrack | null;
    item(index: number): AudioTrack;
    addEventListener<K extends keyof AudioTrackListEventMap>(type: K, listener: (this: AudioTrackList, ev: AudioTrackListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioTrackListEventMap>(type: K, listener: (this: AudioTrackList, ev: AudioTrackListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: AudioTrack;
}

declare var AudioTrackList: {
    prototype: AudioTrackList;
    new(): AudioTrackList;
};

declare class AudioWorklet extends Worklet {
}

declare var AudioWorklet: {
    prototype: AudioWorklet;
    new(): AudioWorklet;
};

interface AudioWorkletNodeEventMap {
    "processorerror": Event;
}

declare class AudioWorkletNode extends AudioNode {
    onprocessorerror: ((this: AudioWorkletNode, ev: Event) => any) | null;
    +parameters: AudioParamMap;
    +port: MessagePort;
    addEventListener<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var AudioWorkletNode: {
    prototype: AudioWorkletNode;
    new(context: BaseAudioContext, name: string, options?: AudioWorkletNodeOptions): AudioWorkletNode;
};

declare class BarProp {
    +visible: boolean;
}

declare var BarProp: {
    prototype: BarProp;
    new(): BarProp;
};

interface BaseAudioContextEventMap {
    "statechange": Event;
}

declare class BaseAudioContext extends EventTarget {
    +audioWorklet: AudioWorklet;
    +currentTime: number;
    +destination: AudioDestinationNode;
    +listener: AudioListener;
    onstatechange: ((this: BaseAudioContext, ev: Event) => any) | null;
    +sampleRate: number;
    +state: AudioContextState;
    createAnalyser(): AnalyserNode;
    createBiquadFilter(): BiquadFilterNode;
    createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    createBufferSource(): AudioBufferSourceNode;
    createChannelMerger(numberOfInputs?: number): ChannelMergerNode;
    createChannelSplitter(numberOfOutputs?: number): ChannelSplitterNode;
    createConstantSource(): ConstantSourceNode;
    createConvolver(): ConvolverNode;
    createDelay(maxDelayTime?: number): DelayNode;
    createDynamicsCompressor(): DynamicsCompressorNode;
    createGain(): GainNode;
    createIIRFilter(feedforward: number[], feedback: number[]): IIRFilterNode;
    createOscillator(): OscillatorNode;
    createPanner(): PannerNode;
    createPeriodicWave(real: number[] | Float32Array, imag: number[] | Float32Array, constraints?: PeriodicWaveConstraints): PeriodicWave;
    createScriptProcessor(bufferSize?: number, numberOfInputChannels?: number, numberOfOutputChannels?: number): ScriptProcessorNode;
    createStereoPanner(): StereoPannerNode;
    createWaveShaper(): WaveShaperNode;
    decodeAudioData(audioData: ArrayBuffer, successCallback?: DecodeSuccessCallback | null, errorCallback?: DecodeErrorCallback | null): Promise<AudioBuffer>;
    resume(): Promise<void>;
    addEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var BaseAudioContext: {
    prototype: BaseAudioContext;
    new(): BaseAudioContext;
};

declare class BeforeUnloadEvent extends Event {
    returnValue: any;
}

declare var BeforeUnloadEvent: {
    prototype: BeforeUnloadEvent;
    new(): BeforeUnloadEvent;
};

declare class BhxBrowser {
    +lastError: DOMException;
    checkMatchesGlobExpression(pattern: string, value: string): boolean;
    checkMatchesUriExpression(pattern: string, value: string): boolean;
    clearLastError(): void;
    currentWindowId(): number;
    fireExtensionApiTelemetry(functionName: string, isSucceeded: boolean, isSupported: boolean, errorString: string): void;
    genericFunction(functionId: number, destination: any, parameters?: string, callbackId?: number): void;
    genericSynchronousFunction(functionId: number, parameters?: string): string;
    getExtensionId(): string;
    getThisAddress(): any;
    registerGenericFunctionCallbackHandler(callbackHandler: Function): void;
    registerGenericListenerHandler(eventHandler: Function): void;
    setLastError(parameters: string): void;
    webPlatformGenericFunction(destination: any, parameters?: string, callbackId?: number): void;
}

declare var BhxBrowser: {
    prototype: BhxBrowser;
    new(): BhxBrowser;
};

declare class BiquadFilterNode extends AudioNode {
    +Q: AudioParam;
    +detune: AudioParam;
    +frequency: AudioParam;
    +gain: AudioParam;
    type: BiquadFilterType;
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}

declare var BiquadFilterNode: {
    prototype: BiquadFilterNode;
    new(context: BaseAudioContext, options?: BiquadFilterOptions): BiquadFilterNode;
};

declare class Blob {
    +size: number;
    +type: string;
    slice(start?: number, end?: number, contentType?: string): Blob;
}

declare var Blob: {
    prototype: Blob;
    new(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob;
};

declare class Body {
    +body: ReadableStream<Uint8Array> | null;
    +bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    text(): Promise<string>;
}

interface BroadcastChannelEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

declare class BroadcastChannel extends EventTarget {
    /**
     * Returns the channel name (as passed to the constructor).
     */
    +name: string;
    onmessage: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    /**
     * Closes the BroadcastChannel object, opening it up to garbage collection.
     */
    close(): void;
    /**
     * Sends the given message to other BroadcastChannel objects set up for this channel. Messages can be structured objects, e.g. nested objects and arrays.
     */
    postMessage(message: any): void;
    addEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var BroadcastChannel: {
    prototype: BroadcastChannel;
    new(name: string): BroadcastChannel;
};

declare class BroadcastChannelEventMap {
    message: MessageEvent;
    messageerror: MessageEvent;
}

declare class ByteLengthQueuingStrategy extends QueuingStrategy<ArrayBufferView> {
    highWaterMark: number;
    size(chunk: ArrayBufferView): number;
}

declare var ByteLengthQueuingStrategy: {
    prototype: ByteLengthQueuingStrategy;
    new(options: { highWaterMark: number }): ByteLengthQueuingStrategy;
};

declare class CDATASection extends Text {
}

declare var CDATASection: {
    prototype: CDATASection;
    new(): CDATASection;
};

declare class CSS {
    escape(value: string): string;
    supports(property: string, value?: string): boolean;
}
declare var CSS: CSS;

declare class CSSConditionRule extends CSSGroupingRule {
    conditionText: string;
}

declare var CSSConditionRule: {
    prototype: CSSConditionRule;
    new(): CSSConditionRule;
};

declare class CSSFontFaceRule extends CSSRule {
    +style: CSSStyleDeclaration;
}

declare var CSSFontFaceRule: {
    prototype: CSSFontFaceRule;
    new(): CSSFontFaceRule;
};

declare class CSSGroupingRule extends CSSRule {
    +cssRules: CSSRuleList;
    deleteRule(index: number): void;
    insertRule(rule: string, index: number): number;
}

declare var CSSGroupingRule: {
    prototype: CSSGroupingRule;
    new(): CSSGroupingRule;
};

declare class CSSImportRule extends CSSRule {
    +href: string;
    +media: MediaList;
    +styleSheet: CSSStyleSheet;
}

declare var CSSImportRule: {
    prototype: CSSImportRule;
    new(): CSSImportRule;
};

declare class CSSKeyframeRule extends CSSRule {
    keyText: string;
    +style: CSSStyleDeclaration;
}

declare var CSSKeyframeRule: {
    prototype: CSSKeyframeRule;
    new(): CSSKeyframeRule;
};

declare class CSSKeyframesRule extends CSSRule {
    +cssRules: CSSRuleList;
    name: string;
    appendRule(rule: string): void;
    deleteRule(select: string): void;
    findRule(select: string): CSSKeyframeRule | null;
}

declare var CSSKeyframesRule: {
    prototype: CSSKeyframesRule;
    new(): CSSKeyframesRule;
};

declare class CSSMediaRule extends CSSConditionRule {
    +media: MediaList;
}

declare var CSSMediaRule: {
    prototype: CSSMediaRule;
    new(): CSSMediaRule;
};

declare class CSSNamespaceRule extends CSSRule {
    +namespaceURI: string;
    +prefix: string;
}

declare var CSSNamespaceRule: {
    prototype: CSSNamespaceRule;
    new(): CSSNamespaceRule;
};

declare class CSSPageRule extends CSSRule {
    +pseudoClass: string;
    +selector: string;
    selectorText: string;
    +style: CSSStyleDeclaration;
}

declare var CSSPageRule: {
    prototype: CSSPageRule;
    new(): CSSPageRule;
};

declare class CSSRule {
    cssText: string;
    +parentRule: CSSRule | null;
    +parentStyleSheet: CSSStyleSheet | null;
    +type: number;
    +CHARSET_RULE: number;
    +FONT_FACE_RULE: number;
    +IMPORT_RULE: number;
    +KEYFRAMES_RULE: number;
    +KEYFRAME_RULE: number;
    +MEDIA_RULE: number;
    +NAMESPACE_RULE: number;
    +PAGE_RULE: number;
    +STYLE_RULE: number;
    +SUPPORTS_RULE: number;
    +UNKNOWN_RULE: number;
    +VIEWPORT_RULE: number;
}

declare var CSSRule: {
    prototype: CSSRule;
    new(): CSSRule;
    +CHARSET_RULE: number;
    +FONT_FACE_RULE: number;
    +IMPORT_RULE: number;
    +KEYFRAMES_RULE: number;
    +KEYFRAME_RULE: number;
    +MEDIA_RULE: number;
    +NAMESPACE_RULE: number;
    +PAGE_RULE: number;
    +STYLE_RULE: number;
    +SUPPORTS_RULE: number;
    +UNKNOWN_RULE: number;
    +VIEWPORT_RULE: number;
};

declare class CSSRuleList {
    +length: number;
    item(index: number): CSSRule | null;
    [index: number]: CSSRule;
}

declare var CSSRuleList: {
    prototype: CSSRuleList;
    new(): CSSRuleList;
};

declare class CSSStyleDeclaration {
    alignContent: string | null;
    alignItems: string | null;
    alignSelf: string | null;
    alignmentBaseline: string | null;
    animation: string;
    animationDelay: string;
    animationDirection: string;
    animationDuration: string;
    animationFillMode: string;
    animationIterationCount: string;
    animationName: string;
    animationPlayState: string;
    animationTimingFunction: string;
    backfaceVisibility: string | null;
    background: string | null;
    backgroundAttachment: string | null;
    backgroundClip: string | null;
    backgroundColor: string | null;
    backgroundImage: string | null;
    backgroundOrigin: string | null;
    backgroundPosition: string | null;
    backgroundPositionX: string | null;
    backgroundPositionY: string | null;
    backgroundRepeat: string | null;
    backgroundSize: string | null;
    baselineShift: string | null;
    border: string | null;
    borderBottom: string | null;
    borderBottomColor: string | null;
    borderBottomLeftRadius: string | null;
    borderBottomRightRadius: string | null;
    borderBottomStyle: string | null;
    borderBottomWidth: string | null;
    borderCollapse: string | null;
    borderColor: string | null;
    borderImage: string | null;
    borderImageOutset: string | null;
    borderImageRepeat: string | null;
    borderImageSlice: string | null;
    borderImageSource: string | null;
    borderImageWidth: string | null;
    borderLeft: string | null;
    borderLeftColor: string | null;
    borderLeftStyle: string | null;
    borderLeftWidth: string | null;
    borderRadius: string | null;
    borderRight: string | null;
    borderRightColor: string | null;
    borderRightStyle: string | null;
    borderRightWidth: string | null;
    borderSpacing: string | null;
    borderStyle: string | null;
    borderTop: string | null;
    borderTopColor: string | null;
    borderTopLeftRadius: string | null;
    borderTopRightRadius: string | null;
    borderTopStyle: string | null;
    borderTopWidth: string | null;
    borderWidth: string | null;
    bottom: string | null;
    boxShadow: string | null;
    boxSizing: string | null;
    breakAfter: string | null;
    breakBefore: string | null;
    breakInside: string | null;
    captionSide: string | null;
    clear: string | null;
    clip: string | null;
    clipPath: string | null;
    clipRule: string | null;
    color: string | null;
    colorInterpolationFilters: string | null;
    columnCount: any;
    columnFill: string | null;
    columnGap: any;
    columnRule: string | null;
    columnRuleColor: any;
    columnRuleStyle: string | null;
    columnRuleWidth: any;
    columnSpan: string | null;
    columnWidth: any;
    columns: string | null;
    content: string | null;
    counterIncrement: string | null;
    counterReset: string | null;
    cssFloat: string | null;
    cssText: string;
    cursor: string | null;
    direction: string | null;
    display: string | null;
    dominantBaseline: string | null;
    emptyCells: string | null;
    enableBackground: string | null;
    fill: string | null;
    fillOpacity: string | null;
    fillRule: string | null;
    filter: string | null;
    flex: string | null;
    flexBasis: string | null;
    flexDirection: string | null;
    flexFlow: string | null;
    flexGrow: string | null;
    flexShrink: string | null;
    flexWrap: string | null;
    floodColor: string | null;
    floodOpacity: string | null;
    font: string | null;
    fontFamily: string | null;
    fontFeatureSettings: string | null;
    fontSize: string | null;
    fontSizeAdjust: string | null;
    fontStretch: string | null;
    fontStyle: string | null;
    fontVariant: string | null;
    fontWeight: string | null;
    gap: string | null;
    glyphOrientationHorizontal: string | null;
    glyphOrientationVertical: string | null;
    grid: string | null;
    gridArea: string | null;
    gridAutoColumns: string | null;
    gridAutoFlow: string | null;
    gridAutoRows: string | null;
    gridColumn: string | null;
    gridColumnEnd: string | null;
    gridColumnGap: string | null;
    gridColumnStart: string | null;
    gridGap: string | null;
    gridRow: string | null;
    gridRowEnd: string | null;
    gridRowGap: string | null;
    gridRowStart: string | null;
    gridTemplate: string | null;
    gridTemplateAreas: string | null;
    gridTemplateColumns: string | null;
    gridTemplateRows: string | null;
    height: string | null;
    imeMode: string | null;
    justifyContent: string | null;
    justifyItems: string | null;
    justifySelf: string | null;
    kerning: string | null;
    layoutGrid: string | null;
    layoutGridChar: string | null;
    layoutGridLine: string | null;
    layoutGridMode: string | null;
    layoutGridType: string | null;
    left: string | null;
    +length: number;
    letterSpacing: string | null;
    lightingColor: string | null;
    lineBreak: string | null;
    lineHeight: string | null;
    listStyle: string | null;
    listStyleImage: string | null;
    listStylePosition: string | null;
    listStyleType: string | null;
    margin: string | null;
    marginBottom: string | null;
    marginLeft: string | null;
    marginRight: string | null;
    marginTop: string | null;
    marker: string | null;
    markerEnd: string | null;
    markerMid: string | null;
    markerStart: string | null;
    mask: string | null;
    maskImage: string | null;
    maxHeight: string | null;
    maxWidth: string | null;
    minHeight: string | null;
    minWidth: string | null;
    msContentZoomChaining: string | null;
    msContentZoomLimit: string | null;
    msContentZoomLimitMax: any;
    msContentZoomLimitMin: any;
    msContentZoomSnap: string | null;
    msContentZoomSnapPoints: string | null;
    msContentZoomSnapType: string | null;
    msContentZooming: string | null;
    msFlowFrom: string | null;
    msFlowInto: string | null;
    msFontFeatureSettings: string | null;
    msGridColumn: any;
    msGridColumnAlign: string | null;
    msGridColumnSpan: any;
    msGridColumns: string | null;
    msGridRow: any;
    msGridRowAlign: string | null;
    msGridRowSpan: any;
    msGridRows: string | null;
    msHighContrastAdjust: string | null;
    msHyphenateLimitChars: string | null;
    msHyphenateLimitLines: any;
    msHyphenateLimitZone: any;
    msHyphens: string | null;
    msImeAlign: string | null;
    msOverflowStyle: string | null;
    msScrollChaining: string | null;
    msScrollLimit: string | null;
    msScrollLimitXMax: any;
    msScrollLimitXMin: any;
    msScrollLimitYMax: any;
    msScrollLimitYMin: any;
    msScrollRails: string | null;
    msScrollSnapPointsX: string | null;
    msScrollSnapPointsY: string | null;
    msScrollSnapType: string | null;
    msScrollSnapX: string | null;
    msScrollSnapY: string | null;
    msScrollTranslation: string | null;
    msTextCombineHorizontal: string | null;
    msTextSizeAdjust: any;
    msTouchAction: string | null;
    msTouchSelect: string | null;
    msUserSelect: string | null;
    msWrapFlow: string;
    msWrapMargin: any;
    msWrapThrough: string;
    objectFit: string | null;
    objectPosition: string | null;
    opacity: string | null;
    order: string | null;
    orphans: string | null;
    outline: string | null;
    outlineColor: string | null;
    outlineOffset: string | null;
    outlineStyle: string | null;
    outlineWidth: string | null;
    overflow: string | null;
    overflowX: string | null;
    overflowY: string | null;
    padding: string | null;
    paddingBottom: string | null;
    paddingLeft: string | null;
    paddingRight: string | null;
    paddingTop: string | null;
    pageBreakAfter: string | null;
    pageBreakBefore: string | null;
    pageBreakInside: string | null;
    +parentRule: CSSRule;
    penAction: string | null;
    perspective: string | null;
    perspectiveOrigin: string | null;
    pointerEvents: string | null;
    position: string | null;
    quotes: string | null;
    resize: string | null;
    right: string | null;
    rotate: string | null;
    rowGap: string | null;
    rubyAlign: string | null;
    rubyOverhang: string | null;
    rubyPosition: string | null;
    scale: string | null;
    scrollBehavior: string;
    stopColor: string | null;
    stopOpacity: string | null;
    stroke: string | null;
    strokeDasharray: string | null;
    strokeDashoffset: string | null;
    strokeLinecap: string | null;
    strokeLinejoin: string | null;
    strokeMiterlimit: string | null;
    strokeOpacity: string | null;
    strokeWidth: string | null;
    tableLayout: string | null;
    textAlign: string | null;
    textAlignLast: string | null;
    textAnchor: string | null;
    textCombineUpright: string | null;
    textDecoration: string | null;
    textIndent: string | null;
    textJustify: string | null;
    textKashida: string | null;
    textKashidaSpace: string | null;
    textOverflow: string | null;
    textShadow: string | null;
    textTransform: string | null;
    textUnderlinePosition: string | null;
    top: string | null;
    touchAction: string;
    transform: string | null;
    transformOrigin: string | null;
    transformStyle: string | null;
    transition: string;
    transitionDelay: string;
    transitionDuration: string;
    transitionProperty: string;
    transitionTimingFunction: string;
    translate: string | null;
    unicodeBidi: string | null;
    userSelect: string | null;
    verticalAlign: string | null;
    visibility: string | null;
    /** @deprecated */
    webkitAlignContent: string;
    /** @deprecated */
    webkitAlignItems: string;
    /** @deprecated */
    webkitAlignSelf: string;
    /** @deprecated */
    webkitAnimation: string;
    /** @deprecated */
    webkitAnimationDelay: string;
    /** @deprecated */
    webkitAnimationDirection: string;
    /** @deprecated */
    webkitAnimationDuration: string;
    /** @deprecated */
    webkitAnimationFillMode: string;
    /** @deprecated */
    webkitAnimationIterationCount: string;
    /** @deprecated */
    webkitAnimationName: string;
    /** @deprecated */
    webkitAnimationPlayState: string;
    /** @deprecated */
    webkitAnimationTimingFunction: string;
    /** @deprecated */
    webkitAppearance: string;
    /** @deprecated */
    webkitBackfaceVisibility: string;
    /** @deprecated */
    webkitBackgroundClip: string;
    /** @deprecated */
    webkitBackgroundOrigin: string;
    /** @deprecated */
    webkitBackgroundSize: string;
    /** @deprecated */
    webkitBorderBottomLeftRadius: string;
    /** @deprecated */
    webkitBorderBottomRightRadius: string;
    webkitBorderImage: string | null;
    /** @deprecated */
    webkitBorderRadius: string;
    /** @deprecated */
    webkitBorderTopLeftRadius: string;
    /** @deprecated */
    webkitBorderTopRightRadius: string;
    /** @deprecated */
    webkitBoxAlign: string;
    webkitBoxDirection: string | null;
    /** @deprecated */
    webkitBoxFlex: string;
    /** @deprecated */
    webkitBoxOrdinalGroup: string;
    webkitBoxOrient: string | null;
    /** @deprecated */
    webkitBoxPack: string;
    /** @deprecated */
    webkitBoxShadow: string;
    /** @deprecated */
    webkitBoxSizing: string;
    webkitColumnBreakAfter: string | null;
    webkitColumnBreakBefore: string | null;
    webkitColumnBreakInside: string | null;
    webkitColumnCount: any;
    webkitColumnGap: any;
    webkitColumnRule: string | null;
    webkitColumnRuleColor: any;
    webkitColumnRuleStyle: string | null;
    webkitColumnRuleWidth: any;
    webkitColumnSpan: string | null;
    webkitColumnWidth: any;
    webkitColumns: string | null;
    /** @deprecated */
    webkitFilter: string;
    /** @deprecated */
    webkitFlex: string;
    /** @deprecated */
    webkitFlexBasis: string;
    /** @deprecated */
    webkitFlexDirection: string;
    /** @deprecated */
    webkitFlexFlow: string;
    /** @deprecated */
    webkitFlexGrow: string;
    /** @deprecated */
    webkitFlexShrink: string;
    /** @deprecated */
    webkitFlexWrap: string;
    /** @deprecated */
    webkitJustifyContent: string;
    /** @deprecated */
    webkitMask: string;
    /** @deprecated */
    webkitMaskBoxImage: string;
    /** @deprecated */
    webkitMaskBoxImageOutset: string;
    /** @deprecated */
    webkitMaskBoxImageRepeat: string;
    /** @deprecated */
    webkitMaskBoxImageSlice: string;
    /** @deprecated */
    webkitMaskBoxImageSource: string;
    /** @deprecated */
    webkitMaskBoxImageWidth: string;
    /** @deprecated */
    webkitMaskClip: string;
    /** @deprecated */
    webkitMaskComposite: string;
    /** @deprecated */
    webkitMaskImage: string;
    /** @deprecated */
    webkitMaskOrigin: string;
    /** @deprecated */
    webkitMaskPosition: string;
    /** @deprecated */
    webkitMaskRepeat: string;
    /** @deprecated */
    webkitMaskSize: string;
    /** @deprecated */
    webkitOrder: string;
    /** @deprecated */
    webkitPerspective: string;
    /** @deprecated */
    webkitPerspectiveOrigin: string;
    webkitTapHighlightColor: string | null;
    /** @deprecated */
    webkitTextFillColor: string;
    /** @deprecated */
    webkitTextSizeAdjust: string;
    /** @deprecated */
    webkitTextStroke: string;
    /** @deprecated */
    webkitTextStrokeColor: string;
    /** @deprecated */
    webkitTextStrokeWidth: string;
    /** @deprecated */
    webkitTransform: string;
    /** @deprecated */
    webkitTransformOrigin: string;
    /** @deprecated */
    webkitTransformStyle: string;
    /** @deprecated */
    webkitTransition: string;
    /** @deprecated */
    webkitTransitionDelay: string;
    /** @deprecated */
    webkitTransitionDuration: string;
    /** @deprecated */
    webkitTransitionProperty: string;
    /** @deprecated */
    webkitTransitionTimingFunction: string;
    webkitUserModify: string | null;
    webkitUserSelect: string | null;
    webkitWritingMode: string | null;
    whiteSpace: string | null;
    widows: string | null;
    width: string | null;
    wordBreak: string | null;
    wordSpacing: string | null;
    wordWrap: string | null;
    writingMode: string | null;
    zIndex: string | null;
    zoom: string | null;
    getPropertyPriority(propertyName: string): string;
    getPropertyValue(propertyName: string): string;
    item(index: number): string;
    removeProperty(propertyName: string): string;
    setProperty(propertyName: string, value: string | null, priority?: string | null): void;
    [index: number]: string;
}

declare var CSSStyleDeclaration: {
    prototype: CSSStyleDeclaration;
    new(): CSSStyleDeclaration;
};

declare class CSSStyleRule extends CSSRule {
    selectorText: string;
    +style: CSSStyleDeclaration;
}

declare var CSSStyleRule: {
    prototype: CSSStyleRule;
    new(): CSSStyleRule;
};

declare class CSSStyleSheet extends StyleSheet {
    +cssRules: CSSRuleList;
    /** @deprecated */
    cssText: string;
    /** @deprecated */
    +id: string;
    /** @deprecated */
    +imports: StyleSheetList;
    /** @deprecated */
    +isAlternate: boolean;
    /** @deprecated */
    +isPrefAlternate: boolean;
    +ownerRule: CSSRule | null;
    /** @deprecated */
    +owningElement: Element;
    /** @deprecated */
    +pages: any;
    /** @deprecated */
    +readOnly: boolean;
    +rules: CSSRuleList;
    /** @deprecated */
    addImport(bstrURL: string, lIndex?: number): number;
    /** @deprecated */
    addPageRule(bstrSelector: string, bstrStyle: string, lIndex?: number): number;
    addRule(bstrSelector: string, bstrStyle?: string, lIndex?: number): number;
    deleteRule(index?: number): void;
    insertRule(rule: string, index?: number): number;
    /** @deprecated */
    removeImport(lIndex: number): void;
    removeRule(lIndex: number): void;
}

declare var CSSStyleSheet: {
    prototype: CSSStyleSheet;
    new(): CSSStyleSheet;
};

declare class CSSSupportsRule extends CSSConditionRule {
}

declare var CSSSupportsRule: {
    prototype: CSSSupportsRule;
    new(): CSSSupportsRule;
};

declare class Cache {
    add(request: RequestInfo): Promise<void>;
    addAll(requests: RequestInfo[]): Promise<void>;
    delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
    keys(request?: RequestInfo, options?: CacheQueryOptions): Promise<ReadonlyArray<Request>>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response | undefined>;
    matchAll(request?: RequestInfo, options?: CacheQueryOptions): Promise<ReadonlyArray<Response>>;
    put(request: RequestInfo, response: Response): Promise<void>;
}

declare var Cache: {
    prototype: Cache;
    new(): Cache;
};

declare class CacheStorage {
    delete(cacheName: string): Promise<boolean>;
    has(cacheName: string): Promise<boolean>;
    keys(): Promise<string[]>;
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response | undefined>;
    open(cacheName: string): Promise<Cache>;
}

declare var CacheStorage: {
    prototype: CacheStorage;
    new(): CacheStorage;
};

declare class CanvasCompositing {
    globalAlpha: number;
    globalCompositeOperation: string;
}

declare class CanvasDrawImage {
    drawImage(image: CanvasImageSource, dx: number, dy: number): void;
    drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
}

declare class CanvasDrawPath {
    beginPath(): void;
    clip(fillRule?: CanvasFillRule): void;
    clip(path: Path2D, fillRule?: CanvasFillRule): void;
    fill(fillRule?: CanvasFillRule): void;
    fill(path: Path2D, fillRule?: CanvasFillRule): void;
    isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
    isPointInStroke(x: number, y: number): boolean;
    isPointInStroke(path: Path2D, x: number, y: number): boolean;
    stroke(): void;
    stroke(path: Path2D): void;
}

declare class CanvasFillStrokeStyles {
    fillStyle: string | CanvasGradient | CanvasPattern;
    strokeStyle: string | CanvasGradient | CanvasPattern;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createPattern(image: CanvasImageSource, repetition: string): CanvasPattern | null;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
}

declare class CanvasFilters {
    filter: string;
}

declare class CanvasGradient {
    /**
     * Adds a color stop with the given color to the gradient at the given offset. 0.0 is the offset
     * at one end of the gradient, 1.0 is the offset at the other end.
     * Throws an "IndexSizeError" DOMException if the offset
     * is out of range. Throws a "SyntaxError" DOMException if
     * the color cannot be parsed.
     */
    addColorStop(offset: number, color: string): void;
}

declare var CanvasGradient: {
    prototype: CanvasGradient;
    new(): CanvasGradient;
};

declare class CanvasImageData {
    createImageData(sw: number, sh: number): ImageData;
    createImageData(imagedata: ImageData): ImageData;
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    putImageData(imagedata: ImageData, dx: number, dy: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
}

declare class CanvasImageSmoothing {
    imageSmoothingEnabled: boolean;
    imageSmoothingQuality: ImageSmoothingQuality;
}

declare class CanvasPath {
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

declare class CanvasPathDrawingStyles {
    lineCap: CanvasLineCap;
    lineDashOffset: number;
    lineJoin: CanvasLineJoin;
    lineWidth: number;
    miterLimit: number;
    getLineDash(): number[];
    setLineDash(segments: number[]): void;
}

declare class CanvasPattern {
    /**
     * Sets the transformation matrix that will be used when rendering the pattern during a fill or
     * stroke painting operation.
     */
    setTransform(transform?: DOMMatrix2DInit): void;
}

declare var CanvasPattern: {
    prototype: CanvasPattern;
    new(): CanvasPattern;
};

declare class CanvasRect {
    clearRect(x: number, y: number, w: number, h: number): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
}

declare class CanvasRenderingContext2D extends CanvasState, CanvasTransform, CanvasCompositing, CanvasImageSmoothing, CanvasFillStrokeStyles, CanvasShadowStyles, CanvasFilters, CanvasRect, CanvasDrawPath, CanvasUserInterface, CanvasText, CanvasDrawImage, CanvasImageData, CanvasPathDrawingStyles, CanvasTextDrawingStyles, CanvasPath {
    +canvas: HTMLCanvasElement;
}

declare var CanvasRenderingContext2D: {
    prototype: CanvasRenderingContext2D;
    new(): CanvasRenderingContext2D;
};

declare class CanvasShadowStyles {
    shadowBlur: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
}

declare class CanvasState {
    restore(): void;
    save(): void;
}

declare class CanvasText {
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    measureText(text: string): TextMetrics;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
}

declare class CanvasTextDrawingStyles {
    direction: CanvasDirection;
    font: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
}

declare class CanvasTransform {
    getTransform(): DOMMatrix;
    resetTransform(): void;
    rotate(angle: number): void;
    scale(x: number, y: number): void;
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setTransform(transform?: DOMMatrix2DInit): void;
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    translate(x: number, y: number): void;
}

declare class CanvasUserInterface {
    drawFocusIfNeeded(element: Element): void;
    drawFocusIfNeeded(path: Path2D, element: Element): void;
    scrollPathIntoView(): void;
    scrollPathIntoView(path: Path2D): void;
}

declare class CaretPosition {
    +offset: number;
    +offsetNode: Node;
    getClientRect(): DOMRect | null;
}

declare var CaretPosition: {
    prototype: CaretPosition;
    new(): CaretPosition;
};

declare class ChannelMergerNode extends AudioNode {
}

declare var ChannelMergerNode: {
    prototype: ChannelMergerNode;
    new(context: BaseAudioContext, options?: ChannelMergerOptions): ChannelMergerNode;
};

declare class ChannelSplitterNode extends AudioNode {
}

declare var ChannelSplitterNode: {
    prototype: ChannelSplitterNode;
    new(context: BaseAudioContext, options?: ChannelSplitterOptions): ChannelSplitterNode;
};

declare class CharacterData extends Node, NonDocumentTypeChildNode, ChildNode {
    data: string;
    +length: number;
    appendData(data: string): void;
    deleteData(offset: number, count: number): void;
    insertData(offset: number, data: string): void;
    replaceData(offset: number, count: number, data: string): void;
    substringData(offset: number, count: number): string;
}

declare var CharacterData: {
    prototype: CharacterData;
    new(): CharacterData;
};

declare class ChildNode extends Node {
    /**
     * Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.
     * Throws a "HierarchyRequestError" DOMException if the constraints of
     * the node tree are violated.
     */
    after(...nodes: (Node | string)[]): void;
    /**
     * Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.
     * Throws a "HierarchyRequestError" DOMException if the constraints of
     * the node tree are violated.
     */
    before(...nodes: (Node | string)[]): void;
    /**
     * Removes node.
     */
    remove(): void;
    /**
     * Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.
     * Throws a "HierarchyRequestError" DOMException if the constraints of
     * the node tree are violated.
     */
    replaceWith(...nodes: (Node | string)[]): void;
}

declare class ClientRect {
    bottom: number;
    +height: number;
    left: number;
    right: number;
    top: number;
    +width: number;
}

declare var ClientRect: {
    prototype: ClientRect;
    new(): ClientRect;
};

declare class ClientRectList {
    +length: number;
    item(index: number): ClientRect;
    [index: number]: ClientRect;
}

declare var ClientRectList: {
    prototype: ClientRectList;
    new(): ClientRectList;
};

declare class ClipboardEvent extends Event {
    +clipboardData: DataTransfer;
}

declare var ClipboardEvent: {
    prototype: ClipboardEvent;
    new(type: string, eventInitDict?: ClipboardEventInit): ClipboardEvent;
};

declare class ClipboardEventInit extends EventInit {
    data?: string;
    dataType?: string;
}

declare class CloseEvent extends Event {
    +code: number;
    +reason: string;
    +wasClean: boolean;
    /** @deprecated */
    initCloseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, wasCleanArg: boolean, codeArg: number, reasonArg: string): void;
}

declare var CloseEvent: {
    prototype: CloseEvent;
    new(type: string, eventInitDict?: CloseEventInit): CloseEvent;
};

declare class Comment extends CharacterData {
}

declare var Comment: {
    prototype: Comment;
    new(data?: string): Comment;
};

declare class CompositionEvent extends UIEvent {
    +data: string;
    +locale: string;
    initCompositionEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, locale: string): void;
}

declare var CompositionEvent: {
    prototype: CompositionEvent;
    new(typeArg: string, eventInitDict?: CompositionEventInit): CompositionEvent;
};

declare class ConcatParams extends Algorithm {
    algorithmId: Uint8Array;
    hash?: string | Algorithm;
    partyUInfo: Uint8Array;
    partyVInfo: Uint8Array;
    privateInfo?: Uint8Array;
    publicInfo?: Uint8Array;
}

declare class Console {
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

declare var Console: {
    prototype: Console;
    new(): Console;
};

declare class ConstantSourceNode extends AudioScheduledSourceNode {
    +offset: AudioParam;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ConstantSourceNode: {
    prototype: ConstantSourceNode;
    new(context: BaseAudioContext, options?: ConstantSourceOptions): ConstantSourceNode;
};

declare class ConvolverNode extends AudioNode {
    buffer: AudioBuffer | null;
    normalize: boolean;
}

declare var ConvolverNode: {
    prototype: ConvolverNode;
    new(context: BaseAudioContext, options?: ConvolverOptions): ConvolverNode;
};

declare class Coordinates {
    +accuracy: number;
    +altitude: number | null;
    +altitudeAccuracy: number | null;
    +heading: number | null;
    +latitude: number;
    +longitude: number;
    +speed: number | null;
}

declare class CountQueuingStrategy extends QueuingStrategy {
    highWaterMark: number;
    size(chunk: any): 1;
}

declare var CountQueuingStrategy: {
    prototype: CountQueuingStrategy;
    new(options: { highWaterMark: number }): CountQueuingStrategy;
};

declare class Crypto {
    +subtle: SubtleCrypto;
    getRandomValues<T extends Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | null>(array: T): T;
}

declare var Crypto: {
    prototype: Crypto;
    new(): Crypto;
};

declare class CryptoKey {
    +algorithm: KeyAlgorithm;
    +extractable: boolean;
    +type: KeyType;
    +usages: KeyUsage[];
}

declare var CryptoKey: {
    prototype: CryptoKey;
    new(): CryptoKey;
};

declare class CryptoKeyPair {
    privateKey: CryptoKey;
    publicKey: CryptoKey;
}

declare var CryptoKeyPair: {
    prototype: CryptoKeyPair;
    new(): CryptoKeyPair;
};

declare class CustomElementRegistry {
    define(name: string, constructor: Function, options?: ElementDefinitionOptions): void;
    get(name: string): any;
    upgrade(root: Node): void;
    whenDefined(name: string): Promise<void>;
}

declare var CustomElementRegistry: {
    prototype: CustomElementRegistry;
    new(): CustomElementRegistry;
};

declare class CustomEvent<T = any> extends Event {
    /**
     * Returns any custom data event was created with.
     * Typically used for synthetic events.
     */
    +detail: T;
    initCustomEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, detailArg: T): void;
}

declare var CustomEvent: {
    prototype: CustomEvent;
    new<T>(typeArg: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>;
};

declare class DOMError {
    +name: string;
    toString(): string;
}

declare var DOMError: {
    prototype: DOMError;
    new(): DOMError;
};

declare class DOMException {
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

declare var DOMException: {
    prototype: DOMException;
    new(message?: string, name?: string): DOMException;
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
};

declare class DOMImplementation {
    createDocument(namespaceURI: string | null, qualifiedName: string | null, doctype: DocumentType | null): Document;
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
    createHTMLDocument(title?: string): Document;
    /** @deprecated */
    hasFeature(...args: any[]): true;
}

declare var DOMImplementation: {
    prototype: DOMImplementation;
    new(): DOMImplementation;
};

declare class DOML2DeprecatedColorProperty {
    color: string;
}

declare class DOMMatrix extends DOMMatrixReadOnly {
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
    setMatrixValue(transformList: string): DOMMatrix;
    skewXSelf(sx?: number): DOMMatrix;
    skewYSelf(sy?: number): DOMMatrix;
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrix: {
    prototype: DOMMatrix;
    new(init?: string | number[]): DOMMatrix;
    fromFloat32Array(array32: Float32Array): DOMMatrix;
    fromFloat64Array(array64: Float64Array): DOMMatrix;
    fromMatrix(other?: DOMMatrixInit): DOMMatrix;
};

type SVGMatrix = DOMMatrix;
declare var SVGMatrix: typeof DOMMatrix;

type WebKitCSSMatrix = DOMMatrix;
declare var WebKitCSSMatrix: typeof DOMMatrix;

declare class DOMMatrixReadOnly {
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
    skewX(sx?: number): DOMMatrix;
    skewY(sy?: number): DOMMatrix;
    toFloat32Array(): Float32Array;
    toFloat64Array(): Float64Array;
    toJSON(): any;
    transformPoint(point?: DOMPointInit): DOMPoint;
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix;
}

declare var DOMMatrixReadOnly: {
    prototype: DOMMatrixReadOnly;
    new(init?: string | number[]): DOMMatrixReadOnly;
    fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly;
    fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly;
    fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly;
};

declare class DOMParser {
    parseFromString(str: string, type: SupportedType): Document;
}

declare var DOMParser: {
    prototype: DOMParser;
    new(): DOMParser;
};

declare class DOMPoint extends DOMPointReadOnly {
    w: number;
    x: number;
    y: number;
    z: number;
}

declare var DOMPoint: {
    prototype: DOMPoint;
    new(x?: number, y?: number, z?: number, w?: number): DOMPoint;
    fromPoint(other?: DOMPointInit): DOMPoint;
};

type SVGPoint = DOMPoint;
declare var SVGPoint: typeof DOMPoint;

declare class DOMPointReadOnly {
    +w: number;
    +x: number;
    +y: number;
    +z: number;
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint;
    toJSON(): any;
}

declare var DOMPointReadOnly: {
    prototype: DOMPointReadOnly;
    new(x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly;
    fromPoint(other?: DOMPointInit): DOMPointReadOnly;
};

declare class DOMQuad {
    +p1: DOMPoint;
    +p2: DOMPoint;
    +p3: DOMPoint;
    +p4: DOMPoint;
    getBounds(): DOMRect;
    toJSON(): any;
}

declare var DOMQuad: {
    prototype: DOMQuad;
    new(p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): DOMQuad;
    fromQuad(other?: DOMQuadInit): DOMQuad;
    fromRect(other?: DOMRectInit): DOMQuad;
};

declare class DOMRect extends DOMRectReadOnly {
    height: number;
    width: number;
    x: number;
    y: number;
}

declare var DOMRect: {
    prototype: DOMRect;
    new(x?: number, y?: number, width?: number, height?: number): DOMRect;
    fromRect(other?: DOMRectInit): DOMRect;
};

type SVGRect = DOMRect;
declare var SVGRect: typeof DOMRect;

declare class DOMRectList {
    +length: number;
    item(index: number): DOMRect | null;
    [index: number]: DOMRect;
}

declare var DOMRectList: {
    prototype: DOMRectList;
    new(): DOMRectList;
};

declare class DOMRectReadOnly {
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

declare var DOMRectReadOnly: {
    prototype: DOMRectReadOnly;
    new(x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly;
    fromRect(other?: DOMRectInit): DOMRectReadOnly;
};

declare class DOMSettableTokenList extends DOMTokenList {
    value: string;
}

declare var DOMSettableTokenList: {
    prototype: DOMSettableTokenList;
    new(): DOMSettableTokenList;
};

declare class DOMStringList {
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

declare var DOMStringList: {
    prototype: DOMStringList;
    new(): DOMStringList;
};

declare class DOMStringMap {
    [name: string]: string | undefined;
}

declare var DOMStringMap: {
    prototype: DOMStringMap;
    new(): DOMStringMap;
};

declare class DOMTokenList {
    /**
     * Returns the number of tokens.
     */
    +length: number;
    /**
     * Returns the associated set as string.
     * Can be set, to change the associated attribute.
     */
    value: string;
    /**
     * Adds all arguments passed, except those already present.
     * Throws a "SyntaxError" DOMException if one of the arguments is the empty
     * string.
     * Throws an "InvalidCharacterError" DOMException if one of the arguments
     * contains any ASCII whitespace.
     */
    add(...tokens: string[]): void;
    /**
     * Returns true if token is present, and false otherwise.
     */
    contains(token: string): boolean;
    /**
     * tokenlist[index]
     */
    item(index: number): string | null;
    /**
     * Removes arguments passed, if they are present.
     * Throws a "SyntaxError" DOMException if one of the arguments is the empty
     * string.
     * Throws an "InvalidCharacterError" DOMException if one of the arguments
     * contains any ASCII whitespace.
     */
    remove(...tokens: string[]): void;
    /**
     * Replaces token with newToken.
     * Returns true if token was replaced with newToken, and false otherwise.
     * Throws a "SyntaxError" DOMException if one of the arguments is the empty
     * string.
     * Throws an "InvalidCharacterError" DOMException if one of the arguments
     * contains any ASCII whitespace.
     */
    replace(oldToken: string, newToken: string): void;
    /**
     * Returns true if token is in the associated attribute's supported tokens. Returns
     * false otherwise.
     * Throws a TypeError if the associated attribute has no supported tokens defined.
     */
    supports(token: string): boolean;
    toggle(token: string, force?: boolean): boolean;
    forEach(callbackfn: (value: string, key: number, parent: DOMTokenList) => void, thisArg?: any): void;
    [index: number]: string;
}

declare var DOMTokenList: {
    prototype: DOMTokenList;
    new(): DOMTokenList;
};

declare class DataCue extends TextTrackCue {
    data: ArrayBuffer;
    addEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: DataCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: DataCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var DataCue: {
    prototype: DataCue;
    new(): DataCue;
};

declare class DataTransfer {
    dropEffect: string;
    effectAllowed: string;
    /**
     * Returns a FileList of the files being dragged, if any.
     */
    +files: FileList;
    /**
     * Returns a DataTransferItemList object, with the drag data.
     */
    +items: DataTransferItemList;
    /**
     * Returns a frozen array listing the formats that were set in the dragstart event. In addition, if any files are being
     * dragged, then one of the types will be the string "Files".
     */
    +types: ReadonlyArray<string>;
    /**
     * Removes the data of the specified formats. Removes all data if the argument is omitted.
     */
    clearData(format?: string): void;
    /**
     * Returns the specified data. If there is no such data, returns the empty string.
     */
    getData(format: string): string;
    /**
     * Adds the specified data.
     */
    setData(format: string, data: string): void;
    /**
     * Uses the given element to update the drag feedback, replacing any previously specified
     * feedback.
     */
    setDragImage(image: Element, x: number, y: number): void;
}

declare var DataTransfer: {
    prototype: DataTransfer;
    new(): DataTransfer;
};

declare class DataTransferItem {
    /**
     * Returns the drag data item kind, one of: "string",
     * "file".
     */
    +kind: string;
    /**
     * Returns the drag data item type string.
     */
    +type: string;
    /**
     * Returns a File object, if the drag data item kind is File.
     */
    getAsFile(): File | null;
    /**
     * Invokes the callback with the string data as the argument, if the drag data item
     * kind is Plain Unicode string.
     */
    getAsString(callback: FunctionStringCallback | null): void;
    webkitGetAsEntry(): any;
}

declare var DataTransferItem: {
    prototype: DataTransferItem;
    new(): DataTransferItem;
};

declare class DataTransferItemList {
    /**
     * Returns the number of items in the drag data store.
     */
    +length: number;
    /**
     * Adds a new entry for the given data to the drag data store. If the data is plain
     * text  then a type string has to be provided
     * also.
     */
    add(data: string, type: string): DataTransferItem | null;
    add(data: File): DataTransferItem | null;
    /**
     * Removes all the entries in the drag data store.
     */
    clear(): void;
    item(index: number): DataTransferItem;
    /**
     * Removes the indexth entry in the drag data store.
     */
    remove(index: number): void;
    [name: number]: DataTransferItem;
}

declare var DataTransferItemList: {
    prototype: DataTransferItemList;
    new(): DataTransferItemList;
};

declare class DeferredPermissionRequest {
    +id: number;
    +type: MSWebViewPermissionType;
    +uri: string;
    allow(): void;
    deny(): void;
}

declare var DeferredPermissionRequest: {
    prototype: DeferredPermissionRequest;
    new(): DeferredPermissionRequest;
};

declare class DelayNode extends AudioNode {
    +delayTime: AudioParam;
}

declare var DelayNode: {
    prototype: DelayNode;
    new(context: BaseAudioContext, options?: DelayOptions): DelayNode;
};

declare class DeviceAcceleration {
    +x: number | null;
    +y: number | null;
    +z: number | null;
}

declare var DeviceAcceleration: {
    prototype: DeviceAcceleration;
    new(): DeviceAcceleration;
};

declare class DeviceLightEvent extends Event {
    +value: number;
}

declare var DeviceLightEvent: {
    prototype: DeviceLightEvent;
    new(typeArg: string, eventInitDict?: DeviceLightEventInit): DeviceLightEvent;
};

declare class DeviceMotionEvent extends Event {
    +acceleration: DeviceAcceleration | null;
    +accelerationIncludingGravity: DeviceAcceleration | null;
    +interval: number | null;
    +rotationRate: DeviceRotationRate | null;
    initDeviceMotionEvent(type: string, bubbles: boolean, cancelable: boolean, acceleration: DeviceAccelerationDict | null, accelerationIncludingGravity: DeviceAccelerationDict | null, rotationRate: DeviceRotationRateDict | null, interval: number | null): void;
}

declare var DeviceMotionEvent: {
    prototype: DeviceMotionEvent;
    new(typeArg: string, eventInitDict?: DeviceMotionEventInit): DeviceMotionEvent;
};

declare class DeviceOrientationEvent extends Event {
    +absolute: boolean;
    +alpha: number | null;
    +beta: number | null;
    +gamma: number | null;
    initDeviceOrientationEvent(type: string, bubbles: boolean, cancelable: boolean, alpha: number | null, beta: number | null, gamma: number | null, absolute: boolean): void;
}

declare var DeviceOrientationEvent: {
    prototype: DeviceOrientationEvent;
    new(typeArg: string, eventInitDict?: DeviceOrientationEventInit): DeviceOrientationEvent;
};

declare class DeviceRotationRate {
    +alpha: number | null;
    +beta: number | null;
    +gamma: number | null;
}

declare var DeviceRotationRate: {
    prototype: DeviceRotationRate;
    new(): DeviceRotationRate;
};

declare class DhImportKeyParams extends Algorithm {
    generator: Uint8Array;
    prime: Uint8Array;
}

declare class DhKeyAlgorithm extends KeyAlgorithm {
    generator: Uint8Array;
    prime: Uint8Array;
}

declare class DhKeyDeriveParams extends Algorithm {
    public: CryptoKey;
}

declare class DhKeyGenParams extends Algorithm {
    generator: Uint8Array;
    prime: Uint8Array;
}

interface DocumentEventMap extends GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
    "fullscreenchange": Event;
    "fullscreenerror": Event;
    "readystatechange": ProgressEvent;
    "visibilitychange": Event;
}

declare class Document extends Node, NonElementParentNode, DocumentOrShadowRoot, ParentNode, GlobalEventHandlers, DocumentAndElementEventHandlers {
    /**
     * Sets or gets the URL for the current document.
     */
    +URL: string;
    /**
     * Gets the object that has the focus when the parent document has focus.
     */
    +activeElement: Element | null;
    /**
     * Sets or gets the color of all active links in the document.
     */
    /** @deprecated */
    alinkColor: string;
    /**
     * Returns a reference to the collection of elements contained by the object.
     */
    /** @deprecated */
    +all: HTMLAllCollection;
    /**
     * Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.
     */
    /** @deprecated */
    +anchors: HTMLCollectionOf<HTMLAnchorElement>;
    /**
     * Retrieves a collection of all applet objects in the document.
     */
    /** @deprecated */
    +applets: HTMLCollectionOf<HTMLAppletElement>;
    /**
     * Deprecated. Sets or retrieves a value that indicates the background color behind the object.
     */
    /** @deprecated */
    bgColor: string;
    /**
     * Specifies the beginning and end of the document body.
     */
    body: HTMLElement;
    /**
     * Returns document's encoding.
     */
    +characterSet: string;
    /**
     * Gets or sets the character set used to encode the object.
     */
    +charset: string;
    /**
     * Gets a value that indicates whether standards-compliant mode is switched on for the object.
     */
    +compatMode: string;
    /**
     * Returns document's content type.
     */
    +contentType: string;
    /**
     * Returns the HTTP cookies that apply to the Document. If there are no cookies or
     * cookies can't be applied to this resource, the empty string will be returned.
     * Can be set, to add a new cookie to the element's set of HTTP cookies.
     * If the contents are sandboxed into a
     * unique origin (e.g. in an iframe with the sandbox attribute), a
     * "SecurityError" DOMException will be thrown on getting
     * and setting.
     */
    cookie: string;
    /**
     * Returns the script element, or the SVG script element,
     * that is currently executing, as long as the element represents a classic script.
     * In the case of reentrant script execution, returns the one that most recently started executing
     * amongst those that have not yet finished executing.
     * Returns null if the Document is not currently executing a script
     * or SVG script element (e.g., because the running script is an event
     * handler, or a timeout), or if the currently executing script or SVG
     * script element represents a module script.
     */
    +currentScript: HTMLOrSVGScriptElement | null;
    +defaultView: WindowProxy | null;
    /**
     * Sets or gets a value that indicates whether the document can be edited.
     */
    designMode: string;
    /**
     * Sets or retrieves a value that indicates the reading order of the object.
     */
    dir: string;
    /**
     * Gets an object representing the document type declaration associated with the current document.
     */
    +doctype: DocumentType | null;
    /**
     * Gets a reference to the root node of the document.
     */
    +documentElement: HTMLElement;
    /**
     * Returns document's URL.
     */
    +documentURI: string;
    /**
     * Sets or gets the security domain of the document.
     */
    domain: string;
    /**
     * Retrieves a collection of all embed objects in the document.
     */
    +embeds: HTMLCollectionOf<HTMLEmbedElement>;
    /**
     * Sets or gets the foreground (text) color of the document.
     */
    /** @deprecated */
    fgColor: string;
    /**
     * Retrieves a collection, in source order, of all form objects in the document.
     */
    +forms: HTMLCollectionOf<HTMLFormElement>;
    /** @deprecated */
    +fullscreen: boolean;
    /**
     * Returns true if document has the ability to display elements fullscreen
     * and fullscreen is supported, or false otherwise.
     */
    +fullscreenEnabled: boolean;
    /**
     * Returns the head element.
     */
    +head: HTMLHeadElement;
    +hidden: boolean;
    /**
     * Retrieves a collection, in source order, of img objects in the document.
     */
    +images: HTMLCollectionOf<HTMLImageElement>;
    /**
     * Gets the implementation object of the current document.
     */
    +implementation: DOMImplementation;
    /**
     * Returns the character encoding used to create the webpage that is loaded into the document object.
     */
    +inputEncoding: string;
    /**
     * Gets the date that the page was last modified, if the page supplies one.
     */
    +lastModified: string;
    /**
     * Sets or gets the color of the document links.
     */
    /** @deprecated */
    linkColor: string;
    /**
     * Retrieves a collection of all a objects that specify the href property and all area objects in the document.
     */
    +links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;
    /**
     * Contains information about the current URL.
     */
    location: Location;
    onfullscreenchange: ((this: Document, ev: Event) => any) | null;
    onfullscreenerror: ((this: Document, ev: Event) => any) | null;
    /**
     * Fires when the state of the object has changed.
     * @param ev The event
     */
    onreadystatechange: ((this: Document, ev: ProgressEvent) => any) | null;
    onvisibilitychange: ((this: Document, ev: Event) => any) | null;
    /**
     * Returns document's origin.
     */
    +origin: string;
    /**
     * Return an HTMLCollection of the embed elements in the Document.
     */
    +plugins: HTMLCollectionOf<HTMLEmbedElement>;
    /**
     * Retrieves a value that indicates the current state of the object.
     */
    +readyState: DocumentReadyState;
    /**
     * Gets the URL of the location that referred the user to the current page.
     */
    +referrer: string;
    /**
     * Retrieves a collection of all script objects in the document.
     */
    +scripts: HTMLCollectionOf<HTMLScriptElement>;
    +scrollingElement: Element | null;
    +timeline: DocumentTimeline;
    /**
     * Contains the title of the document.
     */
    title: string;
    +visibilityState: VisibilityState;
    /**
     * Sets or gets the color of the links that the user has visited.
     */
    /** @deprecated */
    vlinkColor: string;
    /**
     * Moves node from another document and returns it.
     * If node is a document, throws a "NotSupportedError" DOMException or, if node is a shadow root, throws a
     * "HierarchyRequestError" DOMException.
     */
    adoptNode<T extends Node>(source: T): T;
    /** @deprecated */
    captureEvents(): void;
    caretPositionFromPoint(x: number, y: number): CaretPosition | null;
    /** @deprecated */
    caretRangeFromPoint(x: number, y: number): Range;
    /** @deprecated */
    clear(): void;
    /**
     * Closes an output stream and forces the sent data to display.
     */
    close(): void;
    /**
     * Creates an attribute object with a specified name.
     * @param name String that sets the attribute object's name.
     */
    createAttribute(localName: string): Attr;
    createAttributeNS(namespace: string | null, qualifiedName: string): Attr;
    /**
     * Returns a CDATASection node whose data is data.
     */
    createCDATASection(data: string): CDATASection;
    /**
     * Creates a comment object with the specified data.
     * @param data Sets the comment object's data.
     */
    createComment(data: string): Comment;
    /**
     * Creates a new document.
     */
    createDocumentFragment(): DocumentFragment;
    /**
     * Creates an instance of the element for the specified tag.
     * @param tagName The name of an element.
     */
    createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
    /** @deprecated */
    createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementDeprecatedTagNameMap[K];
    createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;
    /**
     * Returns an element with namespace namespace. Its namespace prefix will be everything before ":" (U+003E) in qualifiedName or null. Its local name will be everything after
     * ":" (U+003E) in qualifiedName or qualifiedName.
     * If localName does not match the Name production an
     * "InvalidCharacterError" DOMException will be thrown.
     * If one of the following conditions is true a "NamespaceError" DOMException will be thrown:
     * localName does not match the QName production.
     * Namespace prefix is not null and namespace is the empty string.
     * Namespace prefix is "xml" and namespace is not the XML namespace.
     * qualifiedName or namespace prefix is "xmlns" and namespace is not the XMLNS namespace.
     * namespace is the XMLNS namespace and
     * neither qualifiedName nor namespace prefix is "xmlns".
     * When supplied, options's is can be used to create a customized built-in element.
     */
    createElementNS(namespaceURI: "http://www.w3.org/1999/xhtml", qualifiedName: string): HTMLElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "a"): SVGAElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "circle"): SVGCircleElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "clipPath"): SVGClipPathElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "componentTransferFunction"): SVGComponentTransferFunctionElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "cursor"): SVGCursorElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "defs"): SVGDefsElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "desc"): SVGDescElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "ellipse"): SVGEllipseElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feBlend"): SVGFEBlendElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feColorMatrix"): SVGFEColorMatrixElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feComponentTransfer"): SVGFEComponentTransferElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feComposite"): SVGFECompositeElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feConvolveMatrix"): SVGFEConvolveMatrixElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDiffuseLighting"): SVGFEDiffuseLightingElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDisplacementMap"): SVGFEDisplacementMapElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feDistantLight"): SVGFEDistantLightElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFlood"): SVGFEFloodElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncA"): SVGFEFuncAElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncB"): SVGFEFuncBElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncG"): SVGFEFuncGElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feFuncR"): SVGFEFuncRElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feGaussianBlur"): SVGFEGaussianBlurElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feImage"): SVGFEImageElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMerge"): SVGFEMergeElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMergeNode"): SVGFEMergeNodeElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feMorphology"): SVGFEMorphologyElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feOffset"): SVGFEOffsetElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "fePointLight"): SVGFEPointLightElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feSpecularLighting"): SVGFESpecularLightingElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feSpotLight"): SVGFESpotLightElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feTile"): SVGFETileElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "feTurbulence"): SVGFETurbulenceElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "filter"): SVGFilterElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "foreignObject"): SVGForeignObjectElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "g"): SVGGElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "image"): SVGImageElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "gradient"): SVGGradientElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "line"): SVGLineElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "linearGradient"): SVGLinearGradientElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "marker"): SVGMarkerElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "mask"): SVGMaskElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "path"): SVGPathElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "metadata"): SVGMetadataElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "pattern"): SVGPatternElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "polygon"): SVGPolygonElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "polyline"): SVGPolylineElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "radialGradient"): SVGRadialGradientElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "rect"): SVGRectElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "svg"): SVGSVGElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "script"): SVGScriptElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "stop"): SVGStopElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "style"): SVGStyleElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "switch"): SVGSwitchElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "symbol"): SVGSymbolElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "tspan"): SVGTSpanElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textContent"): SVGTextContentElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "text"): SVGTextElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textPath"): SVGTextPathElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "textPositioning"): SVGTextPositioningElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "title"): SVGTitleElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "use"): SVGUseElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: "view"): SVGViewElement;
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: string): SVGElement;
    createElementNS(namespaceURI: string | null, qualifiedName: string, options?: ElementCreationOptions): Element;
    createElementNS(namespace: string | null, qualifiedName: string, options?: string | ElementCreationOptions): Element;
    createEvent(eventInterface: "AnimationEvent"): AnimationEvent;
    createEvent(eventInterface: "AnimationPlaybackEvent"): AnimationPlaybackEvent;
    createEvent(eventInterface: "AudioProcessingEvent"): AudioProcessingEvent;
    createEvent(eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent;
    createEvent(eventInterface: "ClipboardEvent"): ClipboardEvent;
    createEvent(eventInterface: "CloseEvent"): CloseEvent;
    createEvent(eventInterface: "CompositionEvent"): CompositionEvent;
    createEvent(eventInterface: "CustomEvent"): CustomEvent;
    createEvent(eventInterface: "DeviceLightEvent"): DeviceLightEvent;
    createEvent(eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
    createEvent(eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
    createEvent(eventInterface: "DragEvent"): DragEvent;
    createEvent(eventInterface: "ErrorEvent"): ErrorEvent;
    createEvent(eventInterface: "Event"): Event;
    createEvent(eventInterface: "Events"): Event;
    createEvent(eventInterface: "FocusEvent"): FocusEvent;
    createEvent(eventInterface: "FocusNavigationEvent"): FocusNavigationEvent;
    createEvent(eventInterface: "GamepadEvent"): GamepadEvent;
    createEvent(eventInterface: "HashChangeEvent"): HashChangeEvent;
    createEvent(eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
    createEvent(eventInterface: "KeyboardEvent"): KeyboardEvent;
    createEvent(eventInterface: "ListeningStateChangedEvent"): ListeningStateChangedEvent;
    createEvent(eventInterface: "MSGestureEvent"): MSGestureEvent;
    createEvent(eventInterface: "MSMediaKeyMessageEvent"): MSMediaKeyMessageEvent;
    createEvent(eventInterface: "MSMediaKeyNeededEvent"): MSMediaKeyNeededEvent;
    createEvent(eventInterface: "MSPointerEvent"): MSPointerEvent;
    createEvent(eventInterface: "MediaEncryptedEvent"): MediaEncryptedEvent;
    createEvent(eventInterface: "MediaKeyMessageEvent"): MediaKeyMessageEvent;
    createEvent(eventInterface: "MediaQueryListEvent"): MediaQueryListEvent;
    createEvent(eventInterface: "MediaStreamErrorEvent"): MediaStreamErrorEvent;
    createEvent(eventInterface: "MediaStreamEvent"): MediaStreamEvent;
    createEvent(eventInterface: "MediaStreamTrackEvent"): MediaStreamTrackEvent;
    createEvent(eventInterface: "MessageEvent"): MessageEvent;
    createEvent(eventInterface: "MouseEvent"): MouseEvent;
    createEvent(eventInterface: "MouseEvents"): MouseEvent;
    createEvent(eventInterface: "MutationEvent"): MutationEvent;
    createEvent(eventInterface: "MutationEvents"): MutationEvent;
    createEvent(eventInterface: "OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
    createEvent(eventInterface: "OverflowEvent"): OverflowEvent;
    createEvent(eventInterface: "PageTransitionEvent"): PageTransitionEvent;
    createEvent(eventInterface: "PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
    createEvent(eventInterface: "PermissionRequestedEvent"): PermissionRequestedEvent;
    createEvent(eventInterface: "PointerEvent"): PointerEvent;
    createEvent(eventInterface: "PopStateEvent"): PopStateEvent;
    createEvent(eventInterface: "ProgressEvent"): ProgressEvent;
    createEvent(eventInterface: "PromiseRejectionEvent"): PromiseRejectionEvent;
    createEvent(eventInterface: "RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
    createEvent(eventInterface: "RTCDataChannelEvent"): RTCDataChannelEvent;
    createEvent(eventInterface: "RTCDtlsTransportStateChangedEvent"): RTCDtlsTransportStateChangedEvent;
    createEvent(eventInterface: "RTCErrorEvent"): RTCErrorEvent;
    createEvent(eventInterface: "RTCIceCandidatePairChangedEvent"): RTCIceCandidatePairChangedEvent;
    createEvent(eventInterface: "RTCIceGathererEvent"): RTCIceGathererEvent;
    createEvent(eventInterface: "RTCIceTransportStateChangedEvent"): RTCIceTransportStateChangedEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceErrorEvent"): RTCPeerConnectionIceErrorEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
    createEvent(eventInterface: "RTCSsrcConflictEvent"): RTCSsrcConflictEvent;
    createEvent(eventInterface: "RTCStatsEvent"): RTCStatsEvent;
    createEvent(eventInterface: "RTCTrackEvent"): RTCTrackEvent;
    createEvent(eventInterface: "SVGZoomEvent"): SVGZoomEvent;
    createEvent(eventInterface: "SVGZoomEvents"): SVGZoomEvent;
    createEvent(eventInterface: "SecurityPolicyViolationEvent"): SecurityPolicyViolationEvent;
    createEvent(eventInterface: "ServiceWorkerMessageEvent"): ServiceWorkerMessageEvent;
    createEvent(eventInterface: "SpeechRecognitionError"): SpeechRecognitionError;
    createEvent(eventInterface: "SpeechRecognitionEvent"): SpeechRecognitionEvent;
    createEvent(eventInterface: "SpeechSynthesisErrorEvent"): SpeechSynthesisErrorEvent;
    createEvent(eventInterface: "SpeechSynthesisEvent"): SpeechSynthesisEvent;
    createEvent(eventInterface: "StorageEvent"): StorageEvent;
    createEvent(eventInterface: "TextEvent"): TextEvent;
    createEvent(eventInterface: "TouchEvent"): TouchEvent;
    createEvent(eventInterface: "TrackEvent"): TrackEvent;
    createEvent(eventInterface: "TransitionEvent"): TransitionEvent;
    createEvent(eventInterface: "UIEvent"): UIEvent;
    createEvent(eventInterface: "UIEvents"): UIEvent;
    createEvent(eventInterface: "VRDisplayEvent"): VRDisplayEvent;
    createEvent(eventInterface: "VRDisplayEvent "): VRDisplayEvent ;
    createEvent(eventInterface: "WebGLContextEvent"): WebGLContextEvent;
    createEvent(eventInterface: "WheelEvent"): WheelEvent;
    createEvent(eventInterface: string): Event;
    /**
     * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
     * @param root The root element or node to start traversing on.
     * @param whatToShow The type of nodes or elements to appear in the node list
     * @param filter A custom NodeFilter function to use. For more information, see filter. Use null for no filter.
     * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
     */
    createNodeIterator(root: Node, whatToShow?: number, filter?: NodeFilter | null): NodeIterator;
    /**
     * Returns a ProcessingInstruction node whose target is target and data is data.
     * If target does not match the Name production an
     * "InvalidCharacterError" DOMException will be thrown.
     * If data contains "?>" an
     * "InvalidCharacterError" DOMException will be thrown.
     */
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    /**
     *  Returns an empty range object that has both of its boundary points positioned at the beginning of the document.
     */
    createRange(): Range;
    /**
     * Creates a text string from the specified value.
     * @param data String that specifies the nodeValue property of the text node.
     */
    createTextNode(data: string): Text;
    createTouch(view: WindowProxy, target: EventTarget, identifier: number, pageX: number, pageY: number, screenX: number, screenY: number): Touch;
    createTouchList(...touches: Touch[]): TouchList;
    /**
     * Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.
     * @param root The root element or node to start traversing on.
     * @param whatToShow The type of nodes or elements to appear in the node list. For more information, see whatToShow.
     * @param filter A custom NodeFilter function to use.
     * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
     */
    createTreeWalker(root: Node, whatToShow?: number, filter?: NodeFilter | null): TreeWalker;
    /** @deprecated */
    createTreeWalker(root: Node, whatToShow: number, filter: NodeFilter | null, entityReferenceExpansion?: boolean): TreeWalker;
    /**
     * Returns the element for the specified x coordinate and the specified y coordinate.
     * @param x The x-offset
     * @param y The y-offset
     */
    elementFromPoint(x: number, y: number): Element | null;
    elementsFromPoint(x: number, y: number): Element[];
    evaluate(expression: string, contextNode: Node, resolver: XPathNSResolver | ((prefix: string) => string | null) | null, type: number, result: XPathResult | null): XPathResult;
    /**
     * Executes a command on the current document, current selection, or the given range.
     * @param commandId String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.
     * @param showUI Display the user interface, defaults to false.
     * @param value Value to assign.
     */
    execCommand(commandId: string, showUI?: boolean, value?: string): boolean;
    /**
     * Stops document's fullscreen element from being displayed fullscreen and
     * resolves promise when done.
     */
    exitFullscreen(): Promise<void>;
    getAnimations(): Animation[];
    /**
     * Returns a reference to the first object with the specified value of the ID or NAME attribute.
     * @param elementId String that specifies the ID value. Case-insensitive.
     */
    getElementById(elementId: string): HTMLElement | null;
    /**
     * collection = element . getElementsByClassName(classNames)
     */
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    /**
     * Gets a collection of objects based on the value of the NAME or ID attribute.
     * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
     */
    getElementsByName(elementName: string): NodeListOf<HTMLElement>;
    /**
     * Retrieves a collection of objects based on the specified element name.
     * @param name Specifies the name of an element.
     */
    getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
    /**
     * If namespace and localName are
     * "*" returns a HTMLCollection of all descendant elements.
     * If only namespace is "*" returns a HTMLCollection of all descendant elements whose local name is localName.
     * If only localName is "*" returns a HTMLCollection of all descendant elements whose namespace is namespace.
     * Otherwise, returns a HTMLCollection of all descendant elements whose namespace is namespace and local name is localName.
     */
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;
    /**
     * Gets a value indicating whether the object currently has focus.
     */
    hasFocus(): boolean;
    importNode<T extends Node>(importedNode: T, deep: boolean): T;
    /**
     * Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.
     * @param url Specifies a MIME type for the document.
     * @param name Specifies the name of the window. This name is used as the value for the TARGET attribute on a form or an anchor element.
     * @param features Contains a list of items separated by commas. Each item consists of an option and a value, separated by an equals sign (for example, "fullscreen=yes, toolbar=yes"). The following values are supported.
     * @param replace Specifies whether the existing entry for the document is replaced in the history list.
     */
    open(url?: string, name?: string, features?: string, replace?: boolean): Document;
    /**
     * Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.
     * @param commandId Specifies a command identifier.
     */
    queryCommandEnabled(commandId: string): boolean;
    /**
     * Returns a Boolean value that indicates whether the specified command is in the indeterminate state.
     * @param commandId String that specifies a command identifier.
     */
    queryCommandIndeterm(commandId: string): boolean;
    /**
     * Returns a Boolean value that indicates the current state of the command.
     * @param commandId String that specifies a command identifier.
     */
    queryCommandState(commandId: string): boolean;
    /**
     * Returns a Boolean value that indicates whether the current command is supported on the current range.
     * @param commandId Specifies a command identifier.
     */
    queryCommandSupported(commandId: string): boolean;
    /**
     * Returns the current value of the document, range, or current selection for the given command.
     * @param commandId String that specifies a command identifier.
     */
    queryCommandValue(commandId: string): string;
    /** @deprecated */
    releaseEvents(): void;
    /**
     * Writes one or more HTML expressions to a document in the specified window.
     * @param content Specifies the text and HTML tags to write.
     */
    write(...text: string[]): void;
    /**
     * Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window.
     * @param content The text and HTML tags to write.
     */
    writeln(...text: string[]): void;
    /**
     * Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.
     */
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Document: {
    prototype: Document;
    new(): Document;
};

interface DocumentAndElementEventHandlersEventMap {
    "copy": ClipboardEvent;
    "cut": ClipboardEvent;
    "paste": ClipboardEvent;
}

declare class DocumentAndElementEventHandlers {
    oncopy: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
    oncut: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
    onpaste: ((this: DocumentAndElementEventHandlers, ev: ClipboardEvent) => any) | null;
    addEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentAndElementEventHandlersEventMap>(type: K, listener: (this: DocumentAndElementEventHandlers, ev: DocumentAndElementEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare class DocumentEvent {
    createEvent(eventInterface: "AnimationEvent"): AnimationEvent;
    createEvent(eventInterface: "AnimationPlaybackEvent"): AnimationPlaybackEvent;
    createEvent(eventInterface: "AudioProcessingEvent"): AudioProcessingEvent;
    createEvent(eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent;
    createEvent(eventInterface: "ClipboardEvent"): ClipboardEvent;
    createEvent(eventInterface: "CloseEvent"): CloseEvent;
    createEvent(eventInterface: "CompositionEvent"): CompositionEvent;
    createEvent(eventInterface: "CustomEvent"): CustomEvent;
    createEvent(eventInterface: "DeviceLightEvent"): DeviceLightEvent;
    createEvent(eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
    createEvent(eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
    createEvent(eventInterface: "DragEvent"): DragEvent;
    createEvent(eventInterface: "ErrorEvent"): ErrorEvent;
    createEvent(eventInterface: "Event"): Event;
    createEvent(eventInterface: "Events"): Event;
    createEvent(eventInterface: "FocusEvent"): FocusEvent;
    createEvent(eventInterface: "FocusNavigationEvent"): FocusNavigationEvent;
    createEvent(eventInterface: "GamepadEvent"): GamepadEvent;
    createEvent(eventInterface: "HashChangeEvent"): HashChangeEvent;
    createEvent(eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
    createEvent(eventInterface: "KeyboardEvent"): KeyboardEvent;
    createEvent(eventInterface: "ListeningStateChangedEvent"): ListeningStateChangedEvent;
    createEvent(eventInterface: "MSGestureEvent"): MSGestureEvent;
    createEvent(eventInterface: "MSMediaKeyMessageEvent"): MSMediaKeyMessageEvent;
    createEvent(eventInterface: "MSMediaKeyNeededEvent"): MSMediaKeyNeededEvent;
    createEvent(eventInterface: "MSPointerEvent"): MSPointerEvent;
    createEvent(eventInterface: "MediaEncryptedEvent"): MediaEncryptedEvent;
    createEvent(eventInterface: "MediaKeyMessageEvent"): MediaKeyMessageEvent;
    createEvent(eventInterface: "MediaQueryListEvent"): MediaQueryListEvent;
    createEvent(eventInterface: "MediaStreamErrorEvent"): MediaStreamErrorEvent;
    createEvent(eventInterface: "MediaStreamEvent"): MediaStreamEvent;
    createEvent(eventInterface: "MediaStreamTrackEvent"): MediaStreamTrackEvent;
    createEvent(eventInterface: "MessageEvent"): MessageEvent;
    createEvent(eventInterface: "MouseEvent"): MouseEvent;
    createEvent(eventInterface: "MouseEvents"): MouseEvent;
    createEvent(eventInterface: "MutationEvent"): MutationEvent;
    createEvent(eventInterface: "MutationEvents"): MutationEvent;
    createEvent(eventInterface: "OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
    createEvent(eventInterface: "OverflowEvent"): OverflowEvent;
    createEvent(eventInterface: "PageTransitionEvent"): PageTransitionEvent;
    createEvent(eventInterface: "PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
    createEvent(eventInterface: "PermissionRequestedEvent"): PermissionRequestedEvent;
    createEvent(eventInterface: "PointerEvent"): PointerEvent;
    createEvent(eventInterface: "PopStateEvent"): PopStateEvent;
    createEvent(eventInterface: "ProgressEvent"): ProgressEvent;
    createEvent(eventInterface: "PromiseRejectionEvent"): PromiseRejectionEvent;
    createEvent(eventInterface: "RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
    createEvent(eventInterface: "RTCDataChannelEvent"): RTCDataChannelEvent;
    createEvent(eventInterface: "RTCDtlsTransportStateChangedEvent"): RTCDtlsTransportStateChangedEvent;
    createEvent(eventInterface: "RTCErrorEvent"): RTCErrorEvent;
    createEvent(eventInterface: "RTCIceCandidatePairChangedEvent"): RTCIceCandidatePairChangedEvent;
    createEvent(eventInterface: "RTCIceGathererEvent"): RTCIceGathererEvent;
    createEvent(eventInterface: "RTCIceTransportStateChangedEvent"): RTCIceTransportStateChangedEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceErrorEvent"): RTCPeerConnectionIceErrorEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
    createEvent(eventInterface: "RTCSsrcConflictEvent"): RTCSsrcConflictEvent;
    createEvent(eventInterface: "RTCStatsEvent"): RTCStatsEvent;
    createEvent(eventInterface: "RTCTrackEvent"): RTCTrackEvent;
    createEvent(eventInterface: "SVGZoomEvent"): SVGZoomEvent;
    createEvent(eventInterface: "SVGZoomEvents"): SVGZoomEvent;
    createEvent(eventInterface: "SecurityPolicyViolationEvent"): SecurityPolicyViolationEvent;
    createEvent(eventInterface: "ServiceWorkerMessageEvent"): ServiceWorkerMessageEvent;
    createEvent(eventInterface: "SpeechRecognitionError"): SpeechRecognitionError;
    createEvent(eventInterface: "SpeechRecognitionEvent"): SpeechRecognitionEvent;
    createEvent(eventInterface: "SpeechSynthesisErrorEvent"): SpeechSynthesisErrorEvent;
    createEvent(eventInterface: "SpeechSynthesisEvent"): SpeechSynthesisEvent;
    createEvent(eventInterface: "StorageEvent"): StorageEvent;
    createEvent(eventInterface: "TextEvent"): TextEvent;
    createEvent(eventInterface: "TouchEvent"): TouchEvent;
    createEvent(eventInterface: "TrackEvent"): TrackEvent;
    createEvent(eventInterface: "TransitionEvent"): TransitionEvent;
    createEvent(eventInterface: "UIEvent"): UIEvent;
    createEvent(eventInterface: "UIEvents"): UIEvent;
    createEvent(eventInterface: "VRDisplayEvent"): VRDisplayEvent;
    createEvent(eventInterface: "VRDisplayEvent "): VRDisplayEvent ;
    createEvent(eventInterface: "WebGLContextEvent"): WebGLContextEvent;
    createEvent(eventInterface: "WheelEvent"): WheelEvent;
    createEvent(eventInterface: string): Event;
}

declare class DocumentFragment extends Node, NonElementParentNode, ParentNode {
    getElementById(elementId: string): HTMLElement | null;
}

declare var DocumentFragment: {
    prototype: DocumentFragment;
    new(): DocumentFragment;
};

declare class DocumentOrShadowRoot {
    +activeElement: Element | null;
    /**
     * Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.
     */
    +styleSheets: StyleSheetList;
    caretPositionFromPoint(x: number, y: number): CaretPosition | null;
    /** @deprecated */
    caretRangeFromPoint(x: number, y: number): Range;
    elementFromPoint(x: number, y: number): Element | null;
    elementsFromPoint(x: number, y: number): Element[];
    getSelection(): Selection | null;
}

declare class DocumentTimeline extends AnimationTimeline {
}

declare var DocumentTimeline: {
    prototype: DocumentTimeline;
    new(options?: DocumentTimelineOptions): DocumentTimeline;
};

declare class DocumentType extends Node, ChildNode {
    +name: string;
    +publicId: string;
    +systemId: string;
}

declare var DocumentType: {
    prototype: DocumentType;
    new(): DocumentType;
};

declare class DragEvent extends MouseEvent {
    /**
     * Returns the DataTransfer object for the event.
     */
    +dataTransfer: DataTransfer | null;
}

declare var DragEvent: {
    prototype: DragEvent;
    new(type: string, eventInitDict?: DragEventInit): DragEvent;
};

declare class DynamicsCompressorNode extends AudioNode {
    +attack: AudioParam;
    +knee: AudioParam;
    +ratio: AudioParam;
    +reduction: number;
    +release: AudioParam;
    +threshold: AudioParam;
}

declare var DynamicsCompressorNode: {
    prototype: DynamicsCompressorNode;
    new(context: BaseAudioContext, options?: DynamicsCompressorOptions): DynamicsCompressorNode;
};

declare class EXT_blend_minmax {
    +MAX_EXT: GLenum;
    +MIN_EXT: GLenum;
}

declare class EXT_frag_depth {
}

declare class EXT_sRGB {
    +FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: GLenum;
    +SRGB8_ALPHA8_EXT: GLenum;
    +SRGB_ALPHA_EXT: GLenum;
    +SRGB_EXT: GLenum;
}

declare class EXT_shader_texture_lod {
}

declare class EXT_texture_filter_anisotropic {
    +MAX_TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
    +TEXTURE_MAX_ANISOTROPY_EXT: GLenum;
}

interface ElementEventMap {
    "fullscreenchange": Event;
    "fullscreenerror": Event;
}

declare class Element extends Node, ParentNode, NonDocumentTypeChildNode, ChildNode, Slotable, Animatable {
    +assignedSlot: HTMLSlotElement | null;
    +attributes: NamedNodeMap;
    /**
     * Allows for manipulation of element's class content attribute as a
     * set of whitespace-separated tokens through a DOMTokenList object.
     */
    +classList: DOMTokenList;
    /**
     * Returns the value of element's class content attribute. Can be set
     * to change it.
     */
    className: string;
    +clientHeight: number;
    +clientLeft: number;
    +clientTop: number;
    +clientWidth: number;
    /**
     * Returns the value of element's id content attribute. Can be set to
     * change it.
     */
    id: string;
    innerHTML: string;
    /**
     * Returns the local name.
     */
    +localName: string;
    /**
     * Returns the namespace.
     */
    +namespaceURI: string | null;
    onfullscreenchange: ((this: Element, ev: Event) => any) | null;
    onfullscreenerror: ((this: Element, ev: Event) => any) | null;
    outerHTML: string;
    /**
     * Returns the namespace prefix.
     */
    +prefix: string | null;
    +scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
    +scrollWidth: number;
    /**
     * Returns element's shadow root, if any, and if shadow root's mode is "open", and null otherwise.
     */
    +shadowRoot: ShadowRoot | null;
    /**
     * Returns the value of element's slot content attribute. Can be set to
     * change it.
     */
    slot: string;
    /**
     * Returns the HTML-uppercased qualified name.
     */
    +tagName: string;
    /**
     * Creates a shadow root for element and returns it.
     */
    attachShadow(shadowRootInitDict: ShadowRootInit): ShadowRoot;
    /**
     * Returns the first (starting at element) inclusive ancestor that matches selectors, and null otherwise.
     */
    closest<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
    closest<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
    closest(selector: string): Element | null;
    /**
     * Returns element's first attribute whose qualified name is qualifiedName, and null if there is no such attribute otherwise.
     */
    getAttribute(qualifiedName: string): string | null;
    /**
     * Returns element's attribute whose namespace is namespace and local name is localName, and null if there is
     * no such attribute otherwise.
     */
    getAttributeNS(namespace: string | null, localName: string): string | null;
    /**
     * Returns the qualified names of all element's attributes.
     * Can contain duplicates.
     */
    getAttributeNames(): string[];
    getAttributeNode(name: string): Attr | null;
    getAttributeNodeNS(namespaceURI: string, localName: string): Attr | null;
    getBoundingClientRect(): ClientRect | DOMRect;
    getClientRects(): ClientRectList | DOMRectList;
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element>;
    getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: string, localName: string): HTMLCollectionOf<Element>;
    /**
     * Returns true if element has an attribute whose qualified name is qualifiedName, and false otherwise.
     */
    hasAttribute(qualifiedName: string): boolean;
    /**
     * Returns true if element has an attribute whose namespace is namespace and local name is localName.
     */
    hasAttributeNS(namespace: string | null, localName: string): boolean;
    /**
     * Returns true if element has attributes, and false otherwise.
     */
    hasAttributes(): boolean;
    hasPointerCapture(pointerId: number): boolean;
    insertAdjacentElement(position: InsertPosition, insertedElement: Element): Element | null;
    insertAdjacentHTML(where: InsertPosition, html: string): void;
    insertAdjacentText(where: InsertPosition, text: string): void;
    /**
     * Returns true if matching selectors against element's root yields element, and false otherwise.
     */
    matches(selectors: string): boolean;
    msGetRegionContent(): any;
    releasePointerCapture(pointerId: number): void;
    /**
     * Removes element's first attribute whose qualified name is qualifiedName.
     */
    removeAttribute(qualifiedName: string): void;
    /**
     * Removes element's attribute whose namespace is namespace and local name is localName.
     */
    removeAttributeNS(namespace: string | null, localName: string): void;
    removeAttributeNode(attr: Attr): Attr;
    /**
     * Displays element fullscreen and resolves promise when done.
     */
    requestFullscreen(): Promise<void>;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollIntoView(arg?: boolean | ScrollIntoViewOptions): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    /**
     * Sets the value of element's first attribute whose qualified name is qualifiedName to value.
     */
    setAttribute(qualifiedName: string, value: string): void;
    /**
     * Sets the value of element's attribute whose namespace is namespace and local name is localName to value.
     */
    setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void;
    setAttributeNode(attr: Attr): Attr | null;
    setAttributeNodeNS(attr: Attr): Attr | null;
    setPointerCapture(pointerId: number): void;
    /**
     * If force is not given, "toggles" qualifiedName, removing it if it is
     * present and adding it if it is not present. If force is true, adds qualifiedName. If force is false, removes qualifiedName.
     * Returns true if qualifiedName is now present, and false otherwise.
     */
    toggleAttribute(qualifiedName: string, force?: boolean): boolean;
    webkitMatchesSelector(selectors: string): boolean;
    addEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Element: {
    prototype: Element;
    new(): Element;
};

declare class ElementCSSInlineStyle {
    +style: CSSStyleDeclaration;
}

declare class ElementContentEditable {
    contentEditable: string;
    inputMode: string;
    +isContentEditable: boolean;
}

declare class ElementCreationOptions {
    is?: string;
}

declare class ErrorEvent extends Event {
    +colno: number;
    +error: any;
    +filename: string;
    +lineno: number;
    +message: string;
}

declare var ErrorEvent: {
    prototype: ErrorEvent;
    new(type: string, eventInitDict?: ErrorEventInit): ErrorEvent;
};

declare class Event {
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

declare var Event: {
    prototype: Event;
    new(type: string, eventInitDict?: EventInit): Event;
    +AT_TARGET: number;
    +BUBBLING_PHASE: number;
    +CAPTURING_PHASE: number;
    +NONE: number;
};

declare class EventListenerObject {
    handleEvent(evt: Event): void;
}

declare class EventSource extends EventTarget {
    +CLOSED: number;
    +CONNECTING: number;
    +OPEN: number;
    onerror: (evt: MessageEvent) => any;
    onmessage: (evt: MessageEvent) => any;
    onopen: (evt: MessageEvent) => any;
    +readyState: number;
    +url: string;
    +withCredentials: boolean;
    close(): void;
}

declare var EventSource: {
    prototype: EventSource;
    new(url: string, eventSourceInitDict?: EventSourceInit): EventSource;
};

declare class EventSourceInit {
    +withCredentials: boolean;
}

declare class EventTarget {
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

declare var EventTarget: {
    prototype: EventTarget;
    new(): EventTarget;
};

declare class ExtensionScriptApis {
    extensionIdToShortId(extensionId: string): number;
    fireExtensionApiTelemetry(functionName: string, isSucceeded: boolean, isSupported: boolean, errorString: string): void;
    genericFunction(routerAddress: any, parameters?: string, callbackId?: number): void;
    genericSynchronousFunction(functionId: number, parameters?: string): string;
    genericWebRuntimeCallout(to: any, from: any, payload: string): void;
    getExtensionId(): string;
    registerGenericFunctionCallbackHandler(callbackHandler: Function): void;
    registerGenericPersistentCallbackHandler(callbackHandler: Function): void;
    registerWebRuntimeCallbackHandler(handler: Function): any;
}

declare var ExtensionScriptApis: {
    prototype: ExtensionScriptApis;
    new(): ExtensionScriptApis;
};

declare class External {
    /** @deprecated */
    AddSearchProvider(): void;
    /** @deprecated */
    IsSearchProviderInstalled(): void;
}

declare class File extends Blob {
    +lastModified: number;
    +name: string;
}

declare var File: {
    prototype: File;
    new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File;
};

declare class FileList {
    +length: number;
    item(index: number): File | null;
    [index: number]: File;
}

declare var FileList: {
    prototype: FileList;
    new(): FileList;
};

interface FileReaderEventMap {
    "abort": ProgressEvent;
    "error": ProgressEvent;
    "load": ProgressEvent;
    "loadend": ProgressEvent;
    "loadstart": ProgressEvent;
    "progress": ProgressEvent;
}

declare class FileReader extends EventTarget {
    +error: DOMException | null;
    onabort: ((this: FileReader, ev: ProgressEvent) => any) | null;
    onerror: ((this: FileReader, ev: ProgressEvent) => any) | null;
    onload: ((this: FileReader, ev: ProgressEvent) => any) | null;
    onloadend: ((this: FileReader, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: FileReader, ev: ProgressEvent) => any) | null;
    onprogress: ((this: FileReader, ev: ProgressEvent) => any) | null;
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
    addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var FileReader: {
    prototype: FileReader;
    new(): FileReader;
    +DONE: number;
    +EMPTY: number;
    +LOADING: number;
};

declare class FocusEvent extends UIEvent {
    +relatedTarget: EventTarget;
    initFocusEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, relatedTargetArg: EventTarget): void;
}

declare var FocusEvent: {
    prototype: FocusEvent;
    new(typeArg: string, eventInitDict?: FocusEventInit): FocusEvent;
};

declare class FocusNavigationEvent extends Event {
    +navigationReason: NavigationReason;
    +originHeight: number;
    +originLeft: number;
    +originTop: number;
    +originWidth: number;
    requestFocus(): void;
}

declare var FocusNavigationEvent: {
    prototype: FocusNavigationEvent;
    new(type: string, eventInitDict?: FocusNavigationEventInit): FocusNavigationEvent;
};

declare class FormData {
    append(name: string, value: string | Blob, fileName?: string): void;
    delete(name: string): void;
    get(name: string): FormDataEntryValue | null;
    getAll(name: string): FormDataEntryValue[];
    has(name: string): boolean;
    set(name: string, value: string | Blob, fileName?: string): void;
    forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}

declare var FormData: {
    prototype: FormData;
    new(form?: HTMLFormElement): FormData;
};

declare class GainNode extends AudioNode {
    +gain: AudioParam;
}

declare var GainNode: {
    prototype: GainNode;
    new(context: BaseAudioContext, options?: GainOptions): GainNode;
};

declare class Gamepad {
    +axes: number[];
    +buttons: GamepadButton[];
    +connected: boolean;
    +displayId: number;
    +hand: GamepadHand;
    +hapticActuators: GamepadHapticActuator[];
    +id: string;
    +index: number;
    +mapping: GamepadMappingType;
    +pose: GamepadPose | null;
    +timestamp: number;
}

declare var Gamepad: {
    prototype: Gamepad;
    new(): Gamepad;
};

declare class GamepadButton {
    +pressed: boolean;
    +touched: boolean;
    +value: number;
}

declare var GamepadButton: {
    prototype: GamepadButton;
    new(): GamepadButton;
};

declare class GamepadEvent extends Event {
    +gamepad: Gamepad;
}

declare var GamepadEvent: {
    prototype: GamepadEvent;
    new(typeArg: string, eventInitDict?: GamepadEventInit): GamepadEvent;
};

declare class GamepadHapticActuator {
    +type: GamepadHapticActuatorType;
    pulse(value: number, duration: number): Promise<boolean>;
}

declare var GamepadHapticActuator: {
    prototype: GamepadHapticActuator;
    new(): GamepadHapticActuator;
};

declare class GamepadPose {
    +angularAcceleration: Float32Array | null;
    +angularVelocity: Float32Array | null;
    +hasOrientation: boolean;
    +hasPosition: boolean;
    +linearAcceleration: Float32Array | null;
    +linearVelocity: Float32Array | null;
    +orientation: Float32Array | null;
    +position: Float32Array | null;
}

declare var GamepadPose: {
    prototype: GamepadPose;
    new(): GamepadPose;
};

declare class Geolocation {
    clearWatch(watchId: number): void;
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;
}

declare class GetSVGDocument {
    getSVGDocument(): Document;
}

interface GlobalEventHandlersEventMap {
    "abort": UIEvent;
    "animationcancel": AnimationEvent;
    "animationend": AnimationEvent;
    "animationiteration": AnimationEvent;
    "animationstart": AnimationEvent;
    "auxclick": Event;
    "blur": FocusEvent;
    "cancel": Event;
    "canplay": Event;
    "canplaythrough": Event;
    "change": Event;
    "click": MouseEvent;
    "close": Event;
    "contextmenu": MouseEvent;
    "cuechange": Event;
    "dblclick": MouseEvent;
    "drag": DragEvent;
    "dragend": DragEvent;
    "dragenter": DragEvent;
    "dragexit": Event;
    "dragleave": DragEvent;
    "dragover": DragEvent;
    "dragstart": DragEvent;
    "drop": DragEvent;
    "durationchange": Event;
    "emptied": Event;
    "ended": Event;
    "error": ErrorEvent;
    "focus": FocusEvent;
    "gotpointercapture": PointerEvent;
    "input": Event;
    "invalid": Event;
    "keydown": KeyboardEvent;
    "keypress": KeyboardEvent;
    "keyup": KeyboardEvent;
    "load": Event;
    "loadeddata": Event;
    "loadedmetadata": Event;
    "loadend": ProgressEvent;
    "loadstart": Event;
    "lostpointercapture": PointerEvent;
    "mousedown": MouseEvent;
    "mouseenter": MouseEvent;
    "mouseleave": MouseEvent;
    "mousemove": MouseEvent;
    "mouseout": MouseEvent;
    "mouseover": MouseEvent;
    "mouseup": MouseEvent;
    "pause": Event;
    "play": Event;
    "playing": Event;
    "pointercancel": PointerEvent;
    "pointerdown": PointerEvent;
    "pointerenter": PointerEvent;
    "pointerleave": PointerEvent;
    "pointermove": PointerEvent;
    "pointerout": PointerEvent;
    "pointerover": PointerEvent;
    "pointerup": PointerEvent;
    "progress": ProgressEvent;
    "ratechange": Event;
    "reset": Event;
    "resize": UIEvent;
    "scroll": UIEvent;
    "securitypolicyviolation": SecurityPolicyViolationEvent;
    "seeked": Event;
    "seeking": Event;
    "select": UIEvent;
    "stalled": Event;
    "submit": Event;
    "suspend": Event;
    "timeupdate": Event;
    "toggle": Event;
    "touchcancel": TouchEvent;
    "touchend": TouchEvent;
    "touchmove": TouchEvent;
    "touchstart": TouchEvent;
    "transitioncancel": TransitionEvent;
    "transitionend": TransitionEvent;
    "transitionrun": TransitionEvent;
    "transitionstart": TransitionEvent;
    "volumechange": Event;
    "waiting": Event;
    "wheel": WheelEvent;
}

declare class GlobalEventHandlers {
    /**
     * Fires when the user aborts the download.
     * @param ev The event.
     */
    onabort: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onanimationcancel: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationend: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationiteration: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onanimationstart: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    onauxclick: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the object loses the input focus.
     * @param ev The focus event.
     */
    onblur: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    oncancel: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when playback is possible, but would require further buffering.
     * @param ev The event.
     */
    oncanplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncanplaythrough: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the contents of the object or selection have changed.
     * @param ev The event.
     */
    onchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user clicks the left mouse button on the object
     * @param ev The mouse event.
     */
    onclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onclose: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user clicks the right mouse button in the client area, opening the context menu.
     * @param ev The mouse event.
     */
    oncontextmenu: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    oncuechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user double-clicks the object.
     * @param ev The mouse event.
     */
    ondblclick: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires on the source object continuously during a drag operation.
     * @param ev The event.
     */
    ondrag: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Fires on the source object when the user releases the mouse at the close of a drag operation.
     * @param ev The event.
     */
    ondragend: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Fires on the target element when the user drags the object to a valid drop target.
     * @param ev The drag event.
     */
    ondragenter: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondragexit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
     * @param ev The drag event.
     */
    ondragleave: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Fires on the target element continuously while the user drags the object over a valid drop target.
     * @param ev The event.
     */
    ondragover: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Fires on the source object when the user starts to drag a text selection or selected object.
     * @param ev The event.
     */
    ondragstart: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    ondrop: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    /**
     * Occurs when the duration attribute is updated.
     * @param ev The event.
     */
    ondurationchange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the media element is reset to its initial state.
     * @param ev The event.
     */
    onemptied: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the end of playback is reached.
     * @param ev The event
     */
    onended: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when an error occurs during object loading.
     * @param ev The event.
     */
    onerror: ErrorEventHandler;
    /**
     * Fires when the object receives focus.
     * @param ev The event.
     */
    onfocus: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    ongotpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    oninput: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oninvalid: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user presses a key.
     * @param ev The keyboard event
     */
    onkeydown: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    /**
     * Fires when the user presses an alphanumeric key.
     * @param ev The event.
     */
    onkeypress: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    /**
     * Fires when the user releases a key.
     * @param ev The keyboard event
     */
    onkeyup: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    /**
     * Fires immediately after the browser loads the object.
     * @param ev The event.
     */
    onload: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when media data is loaded at the current playback position.
     * @param ev The event.
     */
    onloadeddata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the duration and dimensions of the media have been determined.
     * @param ev The event.
     */
    onloadedmetadata: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadend: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    /**
     * Occurs when Internet Explorer begins looking for media data.
     * @param ev The event.
     */
    onloadstart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onlostpointercapture: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /**
     * Fires when the user clicks the object with either mouse button.
     * @param ev The mouse event.
     */
    onmousedown: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseenter: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    onmouseleave: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires when the user moves the mouse over the object.
     * @param ev The mouse event.
     */
    onmousemove: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires when the user moves the mouse pointer outside the boundaries of the object.
     * @param ev The mouse event.
     */
    onmouseout: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires when the user moves the mouse pointer into the object.
     * @param ev The mouse event.
     */
    onmouseover: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Fires when the user releases a mouse button while the mouse is over the object.
     * @param ev The mouse event.
     */
    onmouseup: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    /**
     * Occurs when playback is paused.
     * @param ev The event.
     */
    onpause: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the play method is requested.
     * @param ev The event.
     */
    onplay: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the audio or video has started playing.
     * @param ev The event.
     */
    onplaying: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onpointercancel: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerdown: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerenter: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerleave: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointermove: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerout: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerover: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    onpointerup: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    /**
     * Occurs to indicate progress while downloading media data.
     * @param ev The event.
     */
    onprogress: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    /**
     * Occurs when the playback rate is increased or decreased.
     * @param ev The event.
     */
    onratechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the user resets a form.
     * @param ev The event.
     */
    onreset: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onresize: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    /**
     * Fires when the user repositions the scroll box in the scroll bar on the object.
     * @param ev The event.
     */
    onscroll: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    onsecuritypolicyviolation: ((this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any) | null;
    /**
     * Occurs when the seek operation ends.
     * @param ev The event.
     */
    onseeked: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when the current playback position is moved.
     * @param ev The event.
     */
    onseeking: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Fires when the current selection changes.
     * @param ev The event.
     */
    onselect: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    /**
     * Occurs when the download has stopped.
     * @param ev The event.
     */
    onstalled: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onsubmit: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs if the load operation has been intentionally halted.
     * @param ev The event.
     */
    onsuspend: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs to indicate the current playback position.
     * @param ev The event.
     */
    ontimeupdate: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontoggle: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontouchcancel: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontouchend: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontouchmove: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontouchstart: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null;
    ontransitioncancel: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionend: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionrun: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    ontransitionstart: ((this: GlobalEventHandlers, ev: TransitionEvent) => any) | null;
    /**
     * Occurs when the volume is changed, or playback is muted or unmuted.
     * @param ev The event.
     */
    onvolumechange: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    /**
     * Occurs when playback stops because the next frame of a video resource is not available.
     * @param ev The event.
     */
    onwaiting: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwheel: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
    addEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare class GlobalFetch {
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}

declare class HTMLAllCollection {
    /**
     * Returns the number of elements in the collection.
     */
    +length: number;
    /**
     * element = collection(index)
     */
    item(nameOrIndex?: string): HTMLCollection | Element | null;
    /**
     * element = collection(name)
     */
    namedItem(name: string): HTMLCollection | Element | null;
    [index: number]: Element;
}

declare var HTMLAllCollection: {
    prototype: HTMLAllCollection;
    new(): HTMLAllCollection;
};

declare class HTMLAnchorElement extends HTMLElement, HTMLHyperlinkElementUtils {
    /**
     * Sets or retrieves the character set used to encode the object.
     */
    /** @deprecated */
    charset: string;
    /**
     * Sets or retrieves the coordinates of the object.
     */
    /** @deprecated */
    coords: string;
    download: string;
    /**
     * Sets or retrieves the language code of the object.
     */
    hreflang: string;
    /**
     * Sets or retrieves the shape of the object.
     */
    /** @deprecated */
    name: string;
    ping: string;
    referrerPolicy: string;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    rel: string;
    +relList: DOMTokenList;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    /** @deprecated */
    rev: string;
    /**
     * Sets or retrieves the shape of the object.
     */
    /** @deprecated */
    shape: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: string;
    /**
     * Retrieves or sets the text of the object as a string.
     */
    text: string;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLAnchorElement: {
    prototype: HTMLAnchorElement;
    new(): HTMLAnchorElement;
};

declare class HTMLAppletElement extends HTMLElement {
    /** @deprecated */
    align: string;
    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    /** @deprecated */
    alt: string;
    /**
     * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
     */
    /** @deprecated */
    archive: string;
    /** @deprecated */
    code: string;
    /**
     * Sets or retrieves the URL of the component.
     */
    /** @deprecated */
    codeBase: string;
    +form: HTMLFormElement | null;
    /**
     * Sets or retrieves the height of the object.
     */
    /** @deprecated */
    height: string;
    /** @deprecated */
    hspace: number;
    /**
     * Sets or retrieves the shape of the object.
     */
    /** @deprecated */
    name: string;
    /** @deprecated */
    object: string;
    /** @deprecated */
    vspace: number;
    /** @deprecated */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAppletElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAppletElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLAppletElement: {
    prototype: HTMLAppletElement;
    new(): HTMLAppletElement;
};

declare class HTMLAreaElement extends HTMLElement, HTMLHyperlinkElementUtils {
    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    alt: string;
    /**
     * Sets or retrieves the coordinates of the object.
     */
    coords: string;
    download: string;
    /**
     * Sets or gets whether clicks in this region cause action.
     */
    /** @deprecated */
    noHref: boolean;
    ping: string;
    referrerPolicy: string;
    rel: string;
    +relList: DOMTokenList;
    /**
     * Sets or retrieves the shape of the object.
     */
    shape: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLAreaElement: {
    prototype: HTMLAreaElement;
    new(): HTMLAreaElement;
};

declare class HTMLAudioElement extends HTMLMediaElement {
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLAudioElement: {
    prototype: HTMLAudioElement;
    new(): HTMLAudioElement;
};

declare class HTMLBRElement extends HTMLElement {
    /**
     * Sets or retrieves the side on which floating objects are not to be positioned when any IHTMLBlockElement is inserted into the document.
     */
    /** @deprecated */
    clear: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLBRElement: {
    prototype: HTMLBRElement;
    new(): HTMLBRElement;
};

declare class HTMLBaseElement extends HTMLElement {
    /**
     * Gets or sets the baseline URL on which relative links are based.
     */
    href: string;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLBaseElement: {
    prototype: HTMLBaseElement;
    new(): HTMLBaseElement;
};

declare class HTMLBaseFontElement extends HTMLElement, DOML2DeprecatedColorProperty {
    /**
     * Sets or retrieves the current typeface family.
     */
    /** @deprecated */
    face: string;
    /**
     * Sets or retrieves the font size of the object.
     */
    /** @deprecated */
    size: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLBaseFontElement: {
    prototype: HTMLBaseFontElement;
    new(): HTMLBaseFontElement;
};

interface HTMLBodyElementEventMap extends HTMLElementEventMap, WindowEventHandlersEventMap {
    "orientationchange": Event;
}

declare class HTMLBodyElement extends HTMLElement, WindowEventHandlers {
    /** @deprecated */
    aLink: string;
    /** @deprecated */
    background: string;
    /** @deprecated */
    bgColor: string;
    bgProperties: string;
    /** @deprecated */
    link: string;
    /** @deprecated */
    noWrap: boolean;
    /** @deprecated */
    onorientationchange: ((this: HTMLBodyElement, ev: Event) => any) | null;
    /** @deprecated */
    text: string;
    /** @deprecated */
    vLink: string;
    addEventListener<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLBodyElement: {
    prototype: HTMLBodyElement;
    new(): HTMLBodyElement;
};

declare class HTMLButtonElement extends HTMLElement {
    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: boolean;
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    +form: HTMLFormElement | null;
    /**
     * Overrides the action attribute (where the data on a form is sent) on the parent form element.
     */
    formAction: string;
    /**
     * Used to override the encoding (formEnctype attribute) specified on the form element.
     */
    formEnctype: string;
    /**
     * Overrides the submit method attribute previously specified on a form element.
     */
    formMethod: string;
    /**
     * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
     */
    formNoValidate: boolean;
    /**
     * Overrides the target attribute on a form element.
     */
    formTarget: string;
    +labels: NodeListOf<HTMLLabelElement>;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Gets the classification and default behavior of the button.
     */
    type: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    +validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    +validity: ValidityState;
    /**
     * Sets or retrieves the default or selected value of the control.
     */
    value: string;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    +willValidate: boolean;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLButtonElement: {
    prototype: HTMLButtonElement;
    new(): HTMLButtonElement;
};

declare class HTMLCanvasElement extends HTMLElement {
    /**
     * Gets or sets the height of a canvas element on a document.
     */
    height: number;
    /**
     * Gets or sets the width of a canvas element on a document.
     */
    width: number;
    /**
     * Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas.
     * @param contextId The identifier (ID) of the type of canvas to create. Internet Explorer 9 and Internet Explorer 10 support only a 2-D context using canvas.getContext("2d"); IE11 Preview also supports 3-D or WebGL context using canvas.getContext("experimental-webgl");
     */
    getContext(contextId: "2d", contextAttributes?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D | null;
    getContext(contextId: "webgl" | "experimental-webgl", contextAttributes?: WebGLContextAttributes): WebGLRenderingContext | null;
    getContext(contextId: string, contextAttributes?: {}): CanvasRenderingContext2D | WebGLRenderingContext | null;
    toBlob(callback: BlobCallback, type?: string, quality?: any): void;
    /**
     * Returns the content of the current canvas as an image that you can use as a source for another canvas or an HTML element.
     * @param type The standard MIME type for the image format to return. If you do not specify this parameter, the default value is a PNG format image.
     */
    toDataURL(type?: string, quality?: any): string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLCanvasElement: {
    prototype: HTMLCanvasElement;
    new(): HTMLCanvasElement;
};

declare class HTMLCollectionBase {
    /**
     * Sets or retrieves the number of objects in a collection.
     */
    +length: number;
    /**
     * Retrieves an object from various collections.
     */
    item(index: number): Element | null;
    [index: number]: Element;
}

declare class HTMLCollection extends HTMLCollectionBase {
    /**
     * Retrieves a select object or an object from an options collection.
     */
    namedItem(name: string): Element | null;
}

declare var HTMLCollection: {
    prototype: HTMLCollection;
    new(): HTMLCollection;
};

declare class HTMLCollectionOf<T extends Element> extends HTMLCollectionBase {
    item(index: number): T | null;
    namedItem(name: string): T | null;
    [index: number]: T;
}

declare class HTMLDListElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDListElement: {
    prototype: HTMLDListElement;
    new(): HTMLDListElement;
};

declare class HTMLDataElement extends HTMLElement {
    value: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDataElement: {
    prototype: HTMLDataElement;
    new(): HTMLDataElement;
};

declare class HTMLDataListElement extends HTMLElement {
    +options: HTMLCollectionOf<HTMLOptionElement>;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDataListElement: {
    prototype: HTMLDataListElement;
    new(): HTMLDataListElement;
};

declare class HTMLDetailsElement extends HTMLElement {
    open: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDetailsElement: {
    prototype: HTMLDetailsElement;
    new(): HTMLDetailsElement;
};

declare class HTMLDialogElement extends HTMLElement {
    open: boolean;
    returnValue: string;
    close(returnValue?: string): void;
    show(): void;
    showModal(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDialogElement: {
    prototype: HTMLDialogElement;
    new(): HTMLDialogElement;
};

declare class HTMLDirectoryElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDirectoryElement: {
    prototype: HTMLDirectoryElement;
    new(): HTMLDirectoryElement;
};

declare class HTMLDivElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDivElement: {
    prototype: HTMLDivElement;
    new(): HTMLDivElement;
};

declare class HTMLDocument extends Document {
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLDocument: {
    prototype: HTMLDocument;
    new(): HTMLDocument;
};

interface HTMLElementEventMap extends ElementEventMap, GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
}

declare class HTMLElement extends Element, GlobalEventHandlers, DocumentAndElementEventHandlers, ElementContentEditable, HTMLOrSVGElement, ElementCSSInlineStyle {
    accessKey: string;
    +accessKeyLabel: string;
    autocapitalize: string;
    dir: string;
    draggable: boolean;
    hidden: boolean;
    innerText: string;
    lang: string;
    +offsetHeight: number;
    +offsetLeft: number;
    +offsetParent: Element | null;
    +offsetTop: number;
    +offsetWidth: number;
    spellcheck: boolean;
    title: string;
    translate: boolean;
    click(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLElement: {
    prototype: HTMLElement;
    new(): HTMLElement;
};

declare class HTMLEmbedElement extends HTMLElement, GetSVGDocument {
    /** @deprecated */
    align: string;
    /**
     * Sets or retrieves the height of the object.
     */
    height: string;
    hidden: any;
    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */
    msPlayToDisabled: boolean;
    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     */
    msPlayToPreferredSourceUri: string;
    /**
     * Gets or sets the primary DLNA PlayTo device.
     */
    msPlayToPrimary: boolean;
    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */
    +msPlayToSource: any;
    /**
     * Sets or retrieves the name of the object.
     */
    /** @deprecated */
    name: string;
    /**
     * Retrieves the palette used for the embedded document.
     */
    +palette: string;
    /**
     * Retrieves the URL of the plug-in used to view an embedded document.
     */
    +pluginspage: string;
    +readyState: string;
    /**
     * Sets or retrieves a URL to be loaded by the object.
     */
    src: string;
    /**
     * Sets or retrieves the height and width units of the embed object.
     */
    units: string;
    /**
     * Sets or retrieves the width of the object.
     */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLEmbedElement: {
    prototype: HTMLEmbedElement;
    new(): HTMLEmbedElement;
};

declare class HTMLFieldSetElement extends HTMLElement {
    disabled: boolean;
    +elements: HTMLCollection;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    +form: HTMLFormElement | null;
    name: string;
    +type: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    +validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    +validity: ValidityState;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    +willValidate: boolean;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLFieldSetElement: {
    prototype: HTMLFieldSetElement;
    new(): HTMLFieldSetElement;
};

declare class HTMLFontElement extends HTMLElement {
    /** @deprecated */
    color: string;
    /**
     * Sets or retrieves the current typeface family.
     */
    /** @deprecated */
    face: string;
    /** @deprecated */
    size: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLFontElement: {
    prototype: HTMLFontElement;
    new(): HTMLFontElement;
};

declare class HTMLFormControlsCollection extends HTMLCollectionBase {
    /**
     * element = collection[name]
     */
    namedItem(name: string): RadioNodeList | Element | null;
}

declare var HTMLFormControlsCollection: {
    prototype: HTMLFormControlsCollection;
    new(): HTMLFormControlsCollection;
};

declare class HTMLFormElement extends HTMLElement {
    /**
     * Sets or retrieves a list of character encodings for input data that must be accepted by the server processing the form.
     */
    acceptCharset: string;
    /**
     * Sets or retrieves the URL to which the form content is sent for processing.
     */
    action: string;
    /**
     * Specifies whether autocomplete is applied to an editable text field.
     */
    autocomplete: string;
    /**
     * Retrieves a collection, in source order, of all controls in a given form.
     */
    +elements: HTMLFormControlsCollection;
    /**
     * Sets or retrieves the MIME encoding for the form.
     */
    encoding: string;
    /**
     * Sets or retrieves the encoding type for the form.
     */
    enctype: string;
    /**
     * Sets or retrieves the number of objects in a collection.
     */
    +length: number;
    /**
     * Sets or retrieves how to send the form data to the server.
     */
    method: string;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Designates a form that is not validated when submitted.
     */
    noValidate: boolean;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    target: string;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Fires when the user resets a form.
     */
    reset(): void;
    /**
     * Fires when a FORM is about to be submitted.
     */
    submit(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: Element;
    [name: string]: any;
}

declare var HTMLFormElement: {
    prototype: HTMLFormElement;
    new(): HTMLFormElement;
};

declare class HTMLFrameElement extends HTMLElement {
    /**
     * Retrieves the document object of the page or frame.
     */
    /** @deprecated */
    +contentDocument: Document | null;
    /**
     * Retrieves the object of the specified.
     */
    /** @deprecated */
    +contentWindow: WindowProxy | null;
    /**
     * Sets or retrieves whether to display a border for the frame.
     */
    /** @deprecated */
    frameBorder: string;
    /**
     * Sets or retrieves a URI to a long description of the object.
     */
    /** @deprecated */
    longDesc: string;
    /**
     * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
     */
    /** @deprecated */
    marginHeight: string;
    /**
     * Sets or retrieves the left and right margin widths before displaying the text in a frame.
     */
    /** @deprecated */
    marginWidth: string;
    /**
     * Sets or retrieves the frame name.
     */
    /** @deprecated */
    name: string;
    /**
     * Sets or retrieves whether the user can resize the frame.
     */
    /** @deprecated */
    noResize: boolean;
    /**
     * Sets or retrieves whether the frame can be scrolled.
     */
    /** @deprecated */
    scrolling: string;
    /**
     * Sets or retrieves a URL to be loaded by the object.
     */
    /** @deprecated */
    src: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLFrameElement: {
    prototype: HTMLFrameElement;
    new(): HTMLFrameElement;
};

interface HTMLFrameSetElementEventMap extends HTMLElementEventMap, WindowEventHandlersEventMap {
}

declare class HTMLFrameSetElement extends HTMLElement, WindowEventHandlers {
    /**
     * Sets or retrieves the frame widths of the object.
     */
    /** @deprecated */
    cols: string;
    /**
     * Sets or retrieves the frame heights of the object.
     */
    /** @deprecated */
    rows: string;
    addEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLFrameSetElement: {
    prototype: HTMLFrameSetElement;
    new(): HTMLFrameSetElement;
};

declare class HTMLHRElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    color: string;
    /**
     * Sets or retrieves whether the horizontal rule is drawn with 3-D shading.
     */
    /** @deprecated */
    noShade: boolean;
    /** @deprecated */
    size: string;
    /**
     * Sets or retrieves the width of the object.
     */
    /** @deprecated */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLHRElement: {
    prototype: HTMLHRElement;
    new(): HTMLHRElement;
};

declare class HTMLHeadElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLHeadElement: {
    prototype: HTMLHeadElement;
    new(): HTMLHeadElement;
};

declare class HTMLHeadingElement extends HTMLElement {
    /**
     * Sets or retrieves a value that indicates the table alignment.
     */
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLHeadingElement: {
    prototype: HTMLHeadingElement;
    new(): HTMLHeadingElement;
};

declare class HTMLHtmlElement extends HTMLElement {
    /**
     * Sets or retrieves the DTD version that governs the current document.
     */
    /** @deprecated */
    version: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLHtmlElement: {
    prototype: HTMLHtmlElement;
    new(): HTMLHtmlElement;
};

declare class HTMLHyperlinkElementUtils {
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
    username: string;
}

declare class HTMLIFrameElement extends HTMLElement, GetSVGDocument {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    allowFullscreen: boolean;
    allowPaymentRequest: boolean;
    /**
     * Retrieves the document object of the page or frame.
     */
    +contentDocument: Document | null;
    /**
     * Retrieves the object of the specified.
     */
    +contentWindow: Window | null;
    /**
     * Sets or retrieves whether to display a border for the frame.
     */
    /** @deprecated */
    frameBorder: string;
    /**
     * Sets or retrieves the height of the object.
     */
    height: string;
    /**
     * Sets or retrieves a URI to a long description of the object.
     */
    /** @deprecated */
    longDesc: string;
    /**
     * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
     */
    /** @deprecated */
    marginHeight: string;
    /**
     * Sets or retrieves the left and right margin widths before displaying the text in a frame.
     */
    /** @deprecated */
    marginWidth: string;
    /**
     * Sets or retrieves the frame name.
     */
    name: string;
    +referrerPolicy: ReferrerPolicy;
    +sandbox: DOMTokenList;
    /**
     * Sets or retrieves whether the frame can be scrolled.
     */
    /** @deprecated */
    scrolling: string;
    /**
     * Sets or retrieves a URL to be loaded by the object.
     */
    src: string;
    /**
     * Sets or retrives the content of the page that is to contain.
     */
    srcdoc: string;
    /**
     * Sets or retrieves the width of the object.
     */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLIFrameElement: {
    prototype: HTMLIFrameElement;
    new(): HTMLIFrameElement;
};

declare class HTMLImageElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    alt: string;
    /**
     * Specifies the properties of a border drawn around an object.
     */
    /** @deprecated */
    border: string;
    /**
     * Retrieves whether the object is fully loaded.
     */
    +complete: boolean;
    crossOrigin: string | null;
    +currentSrc: string;
    decoding: "async" | "sync" | "auto";
    /**
     * Sets or retrieves the height of the object.
     */
    height: number;
    /**
     * Sets or retrieves the width of the border to draw around the object.
     */
    /** @deprecated */
    hspace: number;
    /**
     * Sets or retrieves whether the image is a server-side image map.
     */
    isMap: boolean;
    /**
     * Sets or retrieves a Uniform Resource Identifier (URI) to a long description of the object.
     */
    /** @deprecated */
    longDesc: string;
    /** @deprecated */
    lowsrc: string;
    /**
     * Sets or retrieves the name of the object.
     */
    /** @deprecated */
    name: string;
    /**
     * The original height of the image resource before sizing.
     */
    +naturalHeight: number;
    /**
     * The original width of the image resource before sizing.
     */
    +naturalWidth: number;
    referrerPolicy: string;
    sizes: string;
    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: string;
    srcset: string;
    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */
    useMap: string;
    /**
     * Sets or retrieves the vertical margin for the object.
     */
    /** @deprecated */
    vspace: number;
    /**
     * Sets or retrieves the width of the object.
     */
    width: number;
    +x: number;
    +y: number;
    decode(): Promise<void>;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
};

declare class HTMLInputElement extends HTMLElement {
    /**
     * Sets or retrieves a comma-separated list of content types.
     */
    accept: string;
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    /**
     * Sets or retrieves a text alternative to the graphic.
     */
    alt: string;
    /**
     * Specifies whether autocomplete is applied to an editable text field.
     */
    autocomplete: string;
    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: boolean;
    /**
     * Sets or retrieves the state of the check box or radio button.
     */
    checked: boolean;
    /**
     * Sets or retrieves the state of the check box or radio button.
     */
    defaultChecked: boolean;
    /**
     * Sets or retrieves the initial contents of the object.
     */
    defaultValue: string;
    dirName: string;
    disabled: boolean;
    /**
     * Returns a FileList object on a file type input object.
     */
    files: FileList | null;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    +form: HTMLFormElement | null;
    /**
     * Overrides the action attribute (where the data on a form is sent) on the parent form element.
     */
    formAction: string;
    /**
     * Used to override the encoding (formEnctype attribute) specified on the form element.
     */
    formEnctype: string;
    /**
     * Overrides the submit method attribute previously specified on a form element.
     */
    formMethod: string;
    /**
     * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
     */
    formNoValidate: boolean;
    /**
     * Overrides the target attribute on a form element.
     */
    formTarget: string;
    /**
     * Sets or retrieves the height of the object.
     */
    height: number;
    indeterminate: boolean;
    +labels: NodeListOf<HTMLLabelElement> | null;
    /**
     * Specifies the ID of a pre-defined datalist of options for an input element.
     */
    +list: HTMLElement | null;
    /**
     * Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field.
     */
    max: string;
    /**
     * Sets or retrieves the maximum number of characters that the user can enter in a text control.
     */
    maxLength: number;
    /**
     * Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field.
     */
    min: string;
    minLength: number;
    /**
     * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
     */
    multiple: boolean;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Gets or sets a string containing a regular expression that the user's input must match.
     */
    pattern: string;
    /**
     * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
     */
    placeholder: string;
    readOnly: boolean;
    /**
     * When present, marks an element that can't be submitted without a value.
     */
    required: boolean;
    selectionDirection: string | null;
    /**
     * Gets or sets the end position or offset of a text selection.
     */
    selectionEnd: number | null;
    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    selectionStart: number | null;
    size: number;
    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: string;
    /**
     * Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field.
     */
    step: string;
    /**
     * Returns the content type of the object.
     */
    type: string;
    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */
    /** @deprecated */
    useMap: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    +validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    +validity: ValidityState;
    /**
     * Returns the value of the data at the cursor's current position.
     */
    value: string;
    valueAsDate: any;
    /**
     * Returns the input field value as a number.
     */
    valueAsNumber: number;
    /**
     * Sets or retrieves the width of the object.
     */
    width: number;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    +willValidate: boolean;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Makes the selection equal to the current object.
     */
    select(): void;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    setRangeText(replacement: string): void;
    setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     * @param direction The direction in which the selection is performed.
     */
    setSelectionRange(start: number, end: number, direction?: "forward" | "backward" | "none"): void;
    /**
     * Decrements a range input control's value by the value given by the Step attribute. If the optional parameter is used, it will decrement the input control's step value multiplied by the parameter's value.
     * @param n Value to decrement the value by.
     */
    stepDown(n?: number): void;
    /**
     * Increments a range input control's value by the value given by the Step attribute. If the optional parameter is used, will increment the input control's value by that value.
     * @param n Value to increment the value by.
     */
    stepUp(n?: number): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLInputElement: {
    prototype: HTMLInputElement;
    new(): HTMLInputElement;
};

declare class HTMLLIElement extends HTMLElement {
    /** @deprecated */
    type: string;
    /**
     * Sets or retrieves the value of a list item.
     */
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLLIElement: {
    prototype: HTMLLIElement;
    new(): HTMLLIElement;
};

declare class HTMLLabelElement extends HTMLElement {
    +control: HTMLElement | null;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    +form: HTMLFormElement | null;
    /**
     * Sets or retrieves the object to which the given label object is assigned.
     */
    htmlFor: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLLabelElement: {
    prototype: HTMLLabelElement;
    new(): HTMLLabelElement;
};

declare class HTMLLegendElement extends HTMLElement {
    /** @deprecated */
    align: string;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    +form: HTMLFormElement | null;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLLegendElement: {
    prototype: HTMLLegendElement;
    new(): HTMLLegendElement;
};

declare class HTMLLinkElement extends HTMLElement, LinkStyle {
    as: string;
    /**
     * Sets or retrieves the character set used to encode the object.
     */
    /** @deprecated */
    charset: string;
    crossOrigin: string | null;
    disabled: boolean;
    /**
     * Sets or retrieves a destination URL or an anchor point.
     */
    href: string;
    /**
     * Sets or retrieves the language code of the object.
     */
    hreflang: string;
    integrity: string;
    /**
     * Sets or retrieves the media type.
     */
    media: string;
    referrerPolicy: string;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    rel: string;
    +relList: DOMTokenList;
    /**
     * Sets or retrieves the relationship between the object and the destination of the link.
     */
    /** @deprecated */
    rev: string;
    +sizes: DOMTokenList;
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    /** @deprecated */
    target: string;
    /**
     * Sets or retrieves the MIME type of the object.
     */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLLinkElement: {
    prototype: HTMLLinkElement;
    new(): HTMLLinkElement;
};

declare class HTMLMainElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMainElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMainElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMainElement: {
    prototype: HTMLMainElement;
    new(): HTMLMainElement;
};

declare class HTMLMapElement extends HTMLElement {
    /**
     * Retrieves a collection of the area objects defined for the given map object.
     */
    +areas: HTMLCollection;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMapElement: {
    prototype: HTMLMapElement;
    new(): HTMLMapElement;
};

interface HTMLMarqueeElementEventMap extends HTMLElementEventMap {
    "bounce": Event;
    "finish": Event;
    "start": Event;
}

declare class HTMLMarqueeElement extends HTMLElement {
    /** @deprecated */
    behavior: string;
    /** @deprecated */
    bgColor: string;
    /** @deprecated */
    direction: string;
    /** @deprecated */
    height: string;
    /** @deprecated */
    hspace: number;
    /** @deprecated */
    loop: number;
    /** @deprecated */
    onbounce: ((this: HTMLMarqueeElement, ev: Event) => any) | null;
    /** @deprecated */
    onfinish: ((this: HTMLMarqueeElement, ev: Event) => any) | null;
    /** @deprecated */
    onstart: ((this: HTMLMarqueeElement, ev: Event) => any) | null;
    /** @deprecated */
    scrollAmount: number;
    /** @deprecated */
    scrollDelay: number;
    /** @deprecated */
    trueSpeed: boolean;
    /** @deprecated */
    vspace: number;
    /** @deprecated */
    width: string;
    /** @deprecated */
    start(): void;
    /** @deprecated */
    stop(): void;
    addEventListener<K extends keyof HTMLMarqueeElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLMarqueeElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLMarqueeElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLMarqueeElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMarqueeElement: {
    prototype: HTMLMarqueeElement;
    new(): HTMLMarqueeElement;
};

interface HTMLMediaElementEventMap extends HTMLElementEventMap {
    "encrypted": MediaEncryptedEvent;
    "msneedkey": Event;
}

declare class HTMLMediaElement extends HTMLElement {
    /**
     * Returns an AudioTrackList object with the audio tracks for a given video element.
     */
    +audioTracks: AudioTrackList;
    /**
     * Gets or sets a value that indicates whether to start playing the media automatically.
     */
    autoplay: boolean;
    /**
     * Gets a collection of buffered time ranges.
     */
    +buffered: TimeRanges;
    /**
     * Gets or sets a flag that indicates whether the client provides a set of controls for the media (in case the developer does not include controls for the player).
     */
    controls: boolean;
    crossOrigin: string | null;
    /**
     * Gets the address or URL of the current media resource that is selected by IHTMLMediaElement.
     */
    +currentSrc: string;
    /**
     * Gets or sets the current playback position, in seconds.
     */
    currentTime: number;
    defaultMuted: boolean;
    /**
     * Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource.
     */
    defaultPlaybackRate: number;
    /**
     * Returns the duration in seconds of the current media resource. A NaN value is returned if duration is not available, or Infinity if the media resource is streaming.
     */
    +duration: number;
    /**
     * Gets information about whether the playback has ended or not.
     */
    +ended: boolean;
    /**
     * Returns an object representing the current error state of the audio or video element.
     */
    +error: MediaError | null;
    /**
     * Gets or sets a flag to specify whether playback should restart after it completes.
     */
    loop: boolean;
    +mediaKeys: MediaKeys | null;
    /**
     * Specifies the purpose of the audio or video media, such as background audio or alerts.
     */
    msAudioCategory: string;
    /**
     * Specifies the output device id that the audio will be sent to.
     */
    msAudioDeviceType: string;
    +msGraphicsTrustStatus: MSGraphicsTrust;
    /**
     * Gets the MSMediaKeys object, which is used for decrypting media data, that is associated with this media element.
     */
    /** @deprecated */
    +msKeys: MSMediaKeys;
    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */
    msPlayToDisabled: boolean;
    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     */
    msPlayToPreferredSourceUri: string;
    /**
     * Gets or sets the primary DLNA PlayTo device.
     */
    msPlayToPrimary: boolean;
    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */
    +msPlayToSource: any;
    /**
     * Specifies whether or not to enable low-latency playback on the media element.
     */
    msRealTime: boolean;
    /**
     * Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted.
     */
    muted: boolean;
    /**
     * Gets the current network activity for the element.
     */
    +networkState: number;
    onencrypted: ((this: HTMLMediaElement, ev: MediaEncryptedEvent) => any) | null;
    /** @deprecated */
    onmsneedkey: ((this: HTMLMediaElement, ev: Event) => any) | null;
    /**
     * Gets a flag that specifies whether playback is paused.
     */
    +paused: boolean;
    /**
     * Gets or sets the current rate of speed for the media resource to play. This speed is expressed as a multiple of the normal speed of the media resource.
     */
    playbackRate: number;
    /**
     * Gets TimeRanges for the current media resource that has been played.
     */
    +played: TimeRanges;
    /**
     * Gets or sets the current playback position, in seconds.
     */
    preload: string;
    +readyState: number;
    /**
     * Returns a TimeRanges object that represents the ranges of the current media resource that can be seeked.
     */
    +seekable: TimeRanges;
    /**
     * Gets a flag that indicates whether the client is currently moving to a new playback position in the media resource.
     */
    +seeking: boolean;
    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: string;
    srcObject: MediaStream | MediaSource | Blob | null;
    +textTracks: TextTrackList;
    +videoTracks: VideoTrackList;
    /**
     * Gets or sets the volume level for audio portions of the media element.
     */
    volume: number;
    addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack;
    /**
     * Returns a string that specifies whether the client can play a given media resource type.
     */
    canPlayType(type: string): CanPlayTypeResult;
    /**
     * Resets the audio or video object and loads a new media resource.
     */
    load(): void;
    /**
     * Clears all effects from the media pipeline.
     */
    msClearEffects(): void;
    msGetAsCastingSource(): any;
    /**
     * Inserts the specified audio effect into media pipeline.
     */
    msInsertAudioEffect(activatableClassId: string, effectRequired: boolean, config?: any): void;
    /** @deprecated */
    msSetMediaKeys(mediaKeys: MSMediaKeys): void;
    /**
     * Specifies the media protection manager for a given media pipeline.
     */
    msSetMediaProtectionManager(mediaProtectionManager?: any): void;
    /**
     * Pauses the current playback and sets paused to TRUE. This can be used to test whether the media is playing or paused. You can also use the pause or play events to tell whether the media is playing or not.
     */
    pause(): void;
    /**
     * Loads and starts playback of a media resource.
     */
    play(): Promise<void>;
    setMediaKeys(mediaKeys: MediaKeys | null): Promise<void>;
    +HAVE_CURRENT_DATA: number;
    +HAVE_ENOUGH_DATA: number;
    +HAVE_FUTURE_DATA: number;
    +HAVE_METADATA: number;
    +HAVE_NOTHING: number;
    +NETWORK_EMPTY: number;
    +NETWORK_IDLE: number;
    +NETWORK_LOADING: number;
    +NETWORK_NO_SOURCE: number;
    addEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMediaElement: {
    prototype: HTMLMediaElement;
    new(): HTMLMediaElement;
    +HAVE_CURRENT_DATA: number;
    +HAVE_ENOUGH_DATA: number;
    +HAVE_FUTURE_DATA: number;
    +HAVE_METADATA: number;
    +HAVE_NOTHING: number;
    +NETWORK_EMPTY: number;
    +NETWORK_IDLE: number;
    +NETWORK_LOADING: number;
    +NETWORK_NO_SOURCE: number;
};

declare class HTMLMenuElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMenuElement: {
    prototype: HTMLMenuElement;
    new(): HTMLMenuElement;
};

declare class HTMLMetaElement extends HTMLElement {
    /**
     * Gets or sets meta-information to associate with httpEquiv or name.
     */
    content: string;
    /**
     * Gets or sets information used to bind the value of a content attribute of a meta element to an HTTP response header.
     */
    httpEquiv: string;
    /**
     * Sets or retrieves the value specified in the content attribute of the meta object.
     */
    name: string;
    /**
     * Sets or retrieves a scheme to be used in interpreting the value of a property specified for the object.
     */
    /** @deprecated */
    scheme: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMetaElement: {
    prototype: HTMLMetaElement;
    new(): HTMLMetaElement;
};

declare class HTMLMeterElement extends HTMLElement {
    high: number;
    +labels: NodeListOf<HTMLLabelElement>;
    low: number;
    max: number;
    min: number;
    optimum: number;
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLMeterElement: {
    prototype: HTMLMeterElement;
    new(): HTMLMeterElement;
};

declare class HTMLModElement extends HTMLElement {
    /**
     * Sets or retrieves reference information about the object.
     */
    cite: string;
    /**
     * Sets or retrieves the date and time of a modification to the object.
     */
    dateTime: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLModElement: {
    prototype: HTMLModElement;
    new(): HTMLModElement;
};

declare class HTMLOListElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    reversed: boolean;
    /**
     * The starting number.
     */
    start: number;
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLOListElement: {
    prototype: HTMLOListElement;
    new(): HTMLOListElement;
};

declare class HTMLObjectElement extends HTMLElement, GetSVGDocument {
    /**
     * Retrieves a string of the URL where the object tag can be found. This is often the href of the document that the object is in, or the value set by a base element.
     */
    +BaseHref: string;
    /** @deprecated */
    align: string;
    /**
     * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
     */
    /** @deprecated */
    archive: string;
    /** @deprecated */
    border: string;
    /**
     * Sets or retrieves the URL of the file containing the compiled Java class.
     */
    /** @deprecated */
    code: string;
    /**
     * Sets or retrieves the URL of the component.
     */
    /** @deprecated */
    codeBase: string;
    /**
     * Sets or retrieves the Internet media type for the code associated with the object.
     */
    /** @deprecated */
    codeType: string;
    /**
     * Retrieves the document object of the page or frame.
     */
    +contentDocument: Document | null;
    /**
     * Sets or retrieves the URL that references the data of the object.
     */
    data: string;
    /** @deprecated */
    declare: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    +form: HTMLFormElement | null;
    /**
     * Sets or retrieves the height of the object.
     */
    height: string;
    /** @deprecated */
    hspace: number;
    /**
     * Gets or sets whether the DLNA PlayTo device is available.
     */
    msPlayToDisabled: boolean;
    /**
     * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
     */
    msPlayToPreferredSourceUri: string;
    /**
     * Gets or sets the primary DLNA PlayTo device.
     */
    msPlayToPrimary: boolean;
    /**
     * Gets the source associated with the media element for use by the PlayToManager.
     */
    +msPlayToSource: any;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    +readyState: number;
    /**
     * Sets or retrieves a message to be displayed while an object is loading.
     */
    /** @deprecated */
    standby: string;
    /**
     * Sets or retrieves the MIME type of the object.
     */
    type: string;
    typemustmatch: boolean;
    /**
     * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
     */
    useMap: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    +validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    +validity: ValidityState;
    /** @deprecated */
    vspace: number;
    /**
     * Sets or retrieves the width of the object.
     */
    width: string;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    +willValidate: boolean;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLObjectElement: {
    prototype: HTMLObjectElement;
    new(): HTMLObjectElement;
};

declare class HTMLOptGroupElement extends HTMLElement {
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    +form: HTMLFormElement | null;
    /**
     * Sets or retrieves a value that you can use to implement your own label functionality for the object.
     */
    label: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLOptGroupElement: {
    prototype: HTMLOptGroupElement;
    new(): HTMLOptGroupElement;
};

declare class HTMLOptionElement extends HTMLElement {
    /**
     * Sets or retrieves the status of an option.
     */
    defaultSelected: boolean;
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    +form: HTMLFormElement | null;
    /**
     * Sets or retrieves the ordinal position of an option in a list box.
     */
    +index: number;
    /**
     * Sets or retrieves a value that you can use to implement your own label functionality for the object.
     */
    label: string;
    /**
     * Sets or retrieves whether the option in the list box is the default item.
     */
    selected: boolean;
    /**
     * Sets or retrieves the text string specified by the option tag.
     */
    text: string;
    /**
     * Sets or retrieves the value which is returned to the server when the form control is submitted.
     */
    value: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLOptionElement: {
    prototype: HTMLOptionElement;
    new(): HTMLOptionElement;
};

declare class HTMLOptionsCollection extends HTMLCollectionOf<HTMLOptionElement> {
    /**
     * Returns the number of elements in the collection.
     * When set to a smaller number, truncates the number of option elements in the corresponding container.
     * When set to a greater number, adds new blank option elements to that container.
     */
    length: number;
    /**
     * Returns the index of the first selected item, if any, or −1 if there is no selected
     * item.
     * Can be set, to change the selection.
     */
    selectedIndex: number;
    /**
     * Inserts element before the node given by before.
     * The before argument can be a number, in which case element is inserted before the item with that number, or an element from the
     * collection, in which case element is inserted before that element.
     * If before is omitted, null, or a number out of range, then element will be added at the end of the list.
     * This method will throw a "HierarchyRequestError" DOMException if
     * element is an ancestor of the element into which it is to be inserted.
     */
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    /**
     * Removes the item with index index from the collection.
     */
    remove(index: number): void;
}

declare var HTMLOptionsCollection: {
    prototype: HTMLOptionsCollection;
    new(): HTMLOptionsCollection;
};

declare class HTMLOrSVGElement {
    +dataset: DOMStringMap;
    nonce: string;
    tabIndex: number;
    blur(): void;
    focus(options?: FocusOptions): void;
}

declare class HTMLOutputElement extends HTMLElement {
    defaultValue: string;
    +form: HTMLFormElement | null;
    +htmlFor: DOMTokenList;
    +labels: NodeListOf<HTMLLabelElement>;
    name: string;
    +type: string;
    +validationMessage: string;
    +validity: ValidityState;
    value: string;
    +willValidate: boolean;
    checkValidity(): boolean;
    reportValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLOutputElement: {
    prototype: HTMLOutputElement;
    new(): HTMLOutputElement;
};

declare class HTMLParagraphElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLParagraphElement: {
    prototype: HTMLParagraphElement;
    new(): HTMLParagraphElement;
};

declare class HTMLParamElement extends HTMLElement {
    /**
     * Sets or retrieves the name of an input parameter for an element.
     */
    name: string;
    /**
     * Sets or retrieves the content type of the resource designated by the value attribute.
     */
    /** @deprecated */
    type: string;
    /**
     * Sets or retrieves the value of an input parameter for an element.
     */
    value: string;
    /**
     * Sets or retrieves the data type of the value attribute.
     */
    /** @deprecated */
    valueType: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLParamElement: {
    prototype: HTMLParamElement;
    new(): HTMLParamElement;
};

declare class HTMLPictureElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLPictureElement: {
    prototype: HTMLPictureElement;
    new(): HTMLPictureElement;
};

declare class HTMLPreElement extends HTMLElement {
    /**
     * Sets or gets a value that you can use to implement your own width functionality for the object.
     */
    /** @deprecated */
    width: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLPreElement: {
    prototype: HTMLPreElement;
    new(): HTMLPreElement;
};

declare class HTMLProgressElement extends HTMLElement {
    +labels: NodeListOf<HTMLLabelElement>;
    /**
     * Defines the maximum, or "done" value for a progress element.
     */
    max: number;
    /**
     * Returns the quotient of value/max when the value attribute is set (determinate progress bar), or -1 when the value attribute is missing (indeterminate progress bar).
     */
    +position: number;
    /**
     * Sets or gets the current value of a progress element. The value must be a non-negative number between 0 and the max value.
     */
    value: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLProgressElement: {
    prototype: HTMLProgressElement;
    new(): HTMLProgressElement;
};

declare class HTMLQuoteElement extends HTMLElement {
    /**
     * Sets or retrieves reference information about the object.
     */
    cite: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLQuoteElement: {
    prototype: HTMLQuoteElement;
    new(): HTMLQuoteElement;
};

declare class HTMLScriptElement extends HTMLElement {
    async: boolean;
    /**
     * Sets or retrieves the character set used to encode the object.
     */
    /** @deprecated */
    charset: string;
    crossOrigin: string | null;
    /**
     * Sets or retrieves the status of the script.
     */
    defer: boolean;
    /**
     * Sets or retrieves the event for which the script is written.
     */
    /** @deprecated */
    event: string;
    /**
     * Sets or retrieves the object that is bound to the event script.
     */
    /** @deprecated */
    htmlFor: string;
    integrity: string;
    noModule: boolean;
    referrerPolicy: string;
    /**
     * Retrieves the URL to an external file that contains the source code or data.
     */
    src: string;
    /**
     * Retrieves or sets the text of the object as a string.
     */
    text: string;
    /**
     * Sets or retrieves the MIME type for the associated scripting engine.
     */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLScriptElement: {
    prototype: HTMLScriptElement;
    new(): HTMLScriptElement;
};

declare class HTMLSelectElement extends HTMLElement {
    autocomplete: string;
    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: boolean;
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    +form: HTMLFormElement | null;
    +labels: NodeListOf<HTMLLabelElement>;
    /**
     * Sets or retrieves the number of objects in a collection.
     */
    length: number;
    /**
     * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
     */
    multiple: boolean;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    +options: HTMLOptionsCollection;
    /**
     * When present, marks an element that can't be submitted without a value.
     */
    required: boolean;
    /**
     * Sets or retrieves the index of the selected option in a select object.
     */
    selectedIndex: number;
    +selectedOptions: HTMLCollectionOf<HTMLOptionElement>;
    /**
     * Sets or retrieves the number of rows in the list box.
     */
    size: number;
    /**
     * Retrieves the type of select control based on the value of the MULTIPLE attribute.
     */
    +type: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    +validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    +validity: ValidityState;
    /**
     * Sets or retrieves the value which is returned to the server when the form control is submitted.
     */
    value: string;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    +willValidate: boolean;
    /**
     * Adds an element to the areas, controlRange, or options collection.
     * @param element Variant of type Number that specifies the index position in the collection where the element is placed. If no value is given, the method places the element at the end of the collection.
     * @param before Variant of type Object that specifies an element to insert before, or null to append the object to the collection.
     */
    add(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    /**
     * Retrieves a select object or an object from an options collection.
     * @param name Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is an integer, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.
     * @param index Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.
     */
    item(index: number): Element | null;
    /**
     * Retrieves a select object or an object from an options collection.
     * @param namedItem A String that specifies the name or id property of the object to retrieve. A collection is returned if more than one match is made.
     */
    namedItem(name: string): HTMLOptionElement | null;
    /**
     * Removes an element from the collection.
     * @param index Number that specifies the zero-based index of the element to remove from the collection.
     */
    remove(): void;
    remove(index: number): void;
    reportValidity(): boolean;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [name: number]: HTMLOptionElement | HTMLOptGroupElement;
}

declare var HTMLSelectElement: {
    prototype: HTMLSelectElement;
    new(): HTMLSelectElement;
};

declare class HTMLSlotElement extends HTMLElement {
    name: string;
    assignedElements(options?: AssignedNodesOptions): Element[];
    assignedNodes(options?: AssignedNodesOptions): Node[];
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLSlotElement: {
    prototype: HTMLSlotElement;
    new(): HTMLSlotElement;
};

declare class HTMLSourceElement extends HTMLElement {
    /**
     * Gets or sets the intended media type of the media source.
     */
    media: string;
    sizes: string;
    /**
     * The address or URL of the a media resource that is to be considered.
     */
    src: string;
    srcset: string;
    /**
     * Gets or sets the MIME type of a media resource.
     */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLSourceElement: {
    prototype: HTMLSourceElement;
    new(): HTMLSourceElement;
};

declare class HTMLSpanElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLSpanElement: {
    prototype: HTMLSpanElement;
    new(): HTMLSpanElement;
};

declare class HTMLStyleElement extends HTMLElement, LinkStyle {
    /**
     * Sets or retrieves the media type.
     */
    media: string;
    /**
     * Retrieves the CSS language in which the style sheet is written.
     */
    /** @deprecated */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLStyleElement: {
    prototype: HTMLStyleElement;
    new(): HTMLStyleElement;
};

declare class HTMLTableCaptionElement extends HTMLElement {
    /**
     * Sets or retrieves the alignment of the caption or legend.
     */
    /** @deprecated */
    align: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableCaptionElement: {
    prototype: HTMLTableCaptionElement;
    new(): HTMLTableCaptionElement;
};

declare class HTMLTableCellElement extends HTMLElement {
    /**
     * Sets or retrieves abbreviated text for the object.
     */
    abbr: string;
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    /**
     * Sets or retrieves a comma-delimited list of conceptual categories associated with the object.
     */
    /** @deprecated */
    axis: string;
    /** @deprecated */
    bgColor: string;
    /**
     * Retrieves the position of the object in the cells collection of a row.
     */
    +cellIndex: number;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    /**
     * Sets or retrieves the number columns in the table that the object should span.
     */
    colSpan: number;
    /**
     * Sets or retrieves a list of header cells that provide information for the object.
     */
    headers: string;
    /**
     * Sets or retrieves the height of the object.
     */
    /** @deprecated */
    height: string;
    /**
     * Sets or retrieves whether the browser automatically performs wordwrap.
     */
    /** @deprecated */
    noWrap: boolean;
    /**
     * Sets or retrieves how many rows in a table the cell should span.
     */
    rowSpan: number;
    /**
     * Sets or retrieves the group of cells in a table to which the object's information applies.
     */
    scope: string;
    /** @deprecated */
    vAlign: string;
    /**
     * Sets or retrieves the width of the object.
     */
    /** @deprecated */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableCellElement: {
    prototype: HTMLTableCellElement;
    new(): HTMLTableCellElement;
};

declare class HTMLTableColElement extends HTMLElement {
    /**
     * Sets or retrieves the alignment of the object relative to the display or table.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    /**
     * Sets or retrieves the number of columns in the group.
     */
    span: number;
    /** @deprecated */
    vAlign: string;
    /**
     * Sets or retrieves the width of the object.
     */
    /** @deprecated */
    width: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableColElement: {
    prototype: HTMLTableColElement;
    new(): HTMLTableColElement;
};

declare class HTMLTableDataCellElement extends HTMLTableCellElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableDataCellElement: {
    prototype: HTMLTableDataCellElement;
    new(): HTMLTableDataCellElement;
};

declare class HTMLTableElement extends HTMLElement {
    /**
     * Sets or retrieves a value that indicates the table alignment.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    bgColor: string;
    /**
     * Sets or retrieves the width of the border to draw around the object.
     */
    /** @deprecated */
    border: string;
    /**
     * Retrieves the caption object of a table.
     */
    caption: HTMLTableCaptionElement | null;
    /**
     * Sets or retrieves the amount of space between the border of the cell and the content of the cell.
     */
    /** @deprecated */
    cellPadding: string;
    /**
     * Sets or retrieves the amount of space between cells in a table.
     */
    /** @deprecated */
    cellSpacing: string;
    /**
     * Sets or retrieves the way the border frame around the table is displayed.
     */
    /** @deprecated */
    frame: string;
    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    +rows: HTMLCollectionOf<HTMLTableRowElement>;
    /**
     * Sets or retrieves which dividing lines (inner borders) are displayed.
     */
    /** @deprecated */
    rules: string;
    /**
     * Sets or retrieves a description and/or structure of the object.
     */
    /** @deprecated */
    summary: string;
    /**
     * Retrieves a collection of all tBody objects in the table. Objects in this collection are in source order.
     */
    +tBodies: HTMLCollectionOf<HTMLTableSectionElement>;
    /**
     * Retrieves the tFoot object of the table.
     */
    tFoot: HTMLTableSectionElement | null;
    /**
     * Retrieves the tHead object of the table.
     */
    tHead: HTMLTableSectionElement | null;
    /**
     * Sets or retrieves the width of the object.
     */
    /** @deprecated */
    width: string;
    /**
     * Creates an empty caption element in the table.
     */
    createCaption(): HTMLTableCaptionElement;
    /**
     * Creates an empty tBody element in the table.
     */
    createTBody(): HTMLTableSectionElement;
    /**
     * Creates an empty tFoot element in the table.
     */
    createTFoot(): HTMLTableSectionElement;
    /**
     * Returns the tHead element object if successful, or null otherwise.
     */
    createTHead(): HTMLTableSectionElement;
    /**
     * Deletes the caption element and its contents from the table.
     */
    deleteCaption(): void;
    /**
     * Removes the specified row (tr) from the element and from the rows collection.
     * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
     */
    deleteRow(index: number): void;
    /**
     * Deletes the tFoot element and its contents from the table.
     */
    deleteTFoot(): void;
    /**
     * Deletes the tHead element and its contents from the table.
     */
    deleteTHead(): void;
    /**
     * Creates a new row (tr) in the table, and adds the row to the rows collection.
     * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
     */
    insertRow(index?: number): HTMLTableRowElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableElement: {
    prototype: HTMLTableElement;
    new(): HTMLTableElement;
};

declare class HTMLTableHeaderCellElement extends HTMLTableCellElement {
    scope: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableHeaderCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableHeaderCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableHeaderCellElement: {
    prototype: HTMLTableHeaderCellElement;
    new(): HTMLTableHeaderCellElement;
};

declare class HTMLTableRowElement extends HTMLElement {
    /**
     * Sets or retrieves how the object is aligned with adjacent text.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    bgColor: string;
    /**
     * Retrieves a collection of all cells in the table row.
     */
    +cells: HTMLCollectionOf<HTMLTableDataCellElement | HTMLTableHeaderCellElement>;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    /**
     * Retrieves the position of the object in the rows collection for the table.
     */
    +rowIndex: number;
    /**
     * Retrieves the position of the object in the collection.
     */
    +sectionRowIndex: number;
    /** @deprecated */
    vAlign: string;
    /**
     * Removes the specified cell from the table row, as well as from the cells collection.
     * @param index Number that specifies the zero-based position of the cell to remove from the table row. If no value is provided, the last cell in the cells collection is deleted.
     */
    deleteCell(index: number): void;
    /**
     * Creates a new cell in the table row, and adds the cell to the cells collection.
     * @param index Number that specifies where to insert the cell in the tr. The default value is -1, which appends the new cell to the end of the cells collection.
     */
    insertCell(index?: number): HTMLTableDataCellElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableRowElement: {
    prototype: HTMLTableRowElement;
    new(): HTMLTableRowElement;
};

declare class HTMLTableSectionElement extends HTMLElement {
    /**
     * Sets or retrieves a value that indicates the table alignment.
     */
    /** @deprecated */
    align: string;
    /** @deprecated */
    ch: string;
    /** @deprecated */
    chOff: string;
    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    +rows: HTMLCollectionOf<HTMLTableRowElement>;
    /** @deprecated */
    vAlign: string;
    /**
     * Removes the specified row (tr) from the element and from the rows collection.
     * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
     */
    deleteRow(index: number): void;
    /**
     * Creates a new row (tr) in the table, and adds the row to the rows collection.
     * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
     */
    insertRow(index?: number): HTMLTableRowElement;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTableSectionElement: {
    prototype: HTMLTableSectionElement;
    new(): HTMLTableSectionElement;
};

declare class HTMLTemplateElement extends HTMLElement {
    +content: DocumentFragment;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTemplateElement: {
    prototype: HTMLTemplateElement;
    new(): HTMLTemplateElement;
};

declare class HTMLTextAreaElement extends HTMLElement {
    autocomplete: string;
    /**
     * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
     */
    autofocus: boolean;
    /**
     * Sets or retrieves the width of the object.
     */
    cols: number;
    /**
     * Sets or retrieves the initial contents of the object.
     */
    defaultValue: string;
    dirName: string;
    disabled: boolean;
    /**
     * Retrieves a reference to the form that the object is embedded in.
     */
    +form: HTMLFormElement | null;
    +labels: NodeListOf<HTMLLabelElement>;
    /**
     * Sets or retrieves the maximum number of characters that the user can enter in a text control.
     */
    maxLength: number;
    minLength: number;
    /**
     * Sets or retrieves the name of the object.
     */
    name: string;
    /**
     * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
     */
    placeholder: string;
    /**
     * Sets or retrieves the value indicated whether the content of the object is read-only.
     */
    readOnly: boolean;
    /**
     * When present, marks an element that can't be submitted without a value.
     */
    required: boolean;
    /**
     * Sets or retrieves the number of horizontal rows contained in the object.
     */
    rows: number;
    selectionDirection: string;
    /**
     * Gets or sets the end position or offset of a text selection.
     */
    selectionEnd: number;
    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    selectionStart: number;
    +textLength: number;
    /**
     * Retrieves the type of control.
     */
    +type: string;
    /**
     * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
     */
    +validationMessage: string;
    /**
     * Returns a  ValidityState object that represents the validity states of an element.
     */
    +validity: ValidityState;
    /**
     * Retrieves or sets the text in the entry field of the textArea element.
     */
    value: string;
    /**
     * Returns whether an element will successfully validate based on forms validation rules and constraints.
     */
    +willValidate: boolean;
    /**
     * Sets or retrieves how to handle wordwrapping in the object.
     */
    wrap: string;
    /**
     * Returns whether a form will validate when it is submitted, without having to submit it.
     */
    checkValidity(): boolean;
    reportValidity(): boolean;
    /**
     * Highlights the input area of a form element.
     */
    select(): void;
    /**
     * Sets a custom error message that is displayed when a form is submitted.
     * @param error Sets a custom error message that is displayed when a form is submitted.
     */
    setCustomValidity(error: string): void;
    setRangeText(replacement: string): void;
    setRangeText(replacement: string, start: number, end: number, selectionMode?: SelectionMode): void;
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     * @param direction The direction in which the selection is performed.
     */
    setSelectionRange(start: number, end: number, direction?: "forward" | "backward" | "none"): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTextAreaElement: {
    prototype: HTMLTextAreaElement;
    new(): HTMLTextAreaElement;
};

declare class HTMLTimeElement extends HTMLElement {
    dateTime: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTimeElement: {
    prototype: HTMLTimeElement;
    new(): HTMLTimeElement;
};

declare class HTMLTitleElement extends HTMLElement {
    /**
     * Retrieves or sets the text of the object as a string.
     */
    text: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTitleElement: {
    prototype: HTMLTitleElement;
    new(): HTMLTitleElement;
};

declare class HTMLTrackElement extends HTMLElement {
    default: boolean;
    kind: string;
    label: string;
    +readyState: number;
    src: string;
    srclang: string;
    +track: TextTrack;
    +ERROR: number;
    +LOADED: number;
    +LOADING: number;
    +NONE: number;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLTrackElement: {
    prototype: HTMLTrackElement;
    new(): HTMLTrackElement;
    +ERROR: number;
    +LOADED: number;
    +LOADING: number;
    +NONE: number;
};

declare class HTMLUListElement extends HTMLElement {
    /** @deprecated */
    compact: boolean;
    /** @deprecated */
    type: string;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLUListElement: {
    prototype: HTMLUListElement;
    new(): HTMLUListElement;
};

declare class HTMLUnknownElement extends HTMLElement {
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLUnknownElement: {
    prototype: HTMLUnknownElement;
    new(): HTMLUnknownElement;
};

interface HTMLVideoElementEventMap extends HTMLMediaElementEventMap {
    "MSVideoFormatChanged": Event;
    "MSVideoFrameStepCompleted": Event;
    "MSVideoOptimalLayoutChanged": Event;
}

declare class HTMLVideoElement extends HTMLMediaElement {
    /**
     * Gets or sets the height of the video element.
     */
    height: number;
    msHorizontalMirror: boolean;
    +msIsLayoutOptimalForPlayback: boolean;
    +msIsStereo3D: boolean;
    msStereo3DPackingMode: string;
    msStereo3DRenderMode: string;
    msZoom: boolean;
    onMSVideoFormatChanged: ((this: HTMLVideoElement, ev: Event) => any) | null;
    onMSVideoFrameStepCompleted: ((this: HTMLVideoElement, ev: Event) => any) | null;
    onMSVideoOptimalLayoutChanged: ((this: HTMLVideoElement, ev: Event) => any) | null;
    /**
     * Gets or sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.
     */
    poster: string;
    /**
     * Gets the intrinsic height of a video in CSS pixels, or zero if the dimensions are not known.
     */
    +videoHeight: number;
    /**
     * Gets the intrinsic width of a video in CSS pixels, or zero if the dimensions are not known.
     */
    +videoWidth: number;
    +webkitDisplayingFullscreen: boolean;
    +webkitSupportsFullscreen: boolean;
    /**
     * Gets or sets the width of the video element.
     */
    width: number;
    getVideoPlaybackQuality(): VideoPlaybackQuality;
    msFrameStep(forward: boolean): void;
    msInsertVideoEffect(activatableClassId: string, effectRequired: boolean, config?: any): void;
    msSetVideoRectangle(left: number, top: number, right: number, bottom: number): void;
    webkitEnterFullScreen(): void;
    webkitEnterFullscreen(): void;
    webkitExitFullScreen(): void;
    webkitExitFullscreen(): void;
    addEventListener<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var HTMLVideoElement: {
    prototype: HTMLVideoElement;
    new(): HTMLVideoElement;
};

declare class HashChangeEvent extends Event {
    +newURL: string;
    +oldURL: string;
}

declare var HashChangeEvent: {
    prototype: HashChangeEvent;
    new(type: string, eventInitDict?: HashChangeEventInit): HashChangeEvent;
};

declare class Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    has(name: string): boolean;
    set(name: string, value: string): void;
    forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
}

declare var Headers: {
    prototype: Headers;
    new(init?: HeadersInit): Headers;
};

declare class History {
    +length: number;
    scrollRestoration: ScrollRestoration;
    +state: any;
    back(): void;
    forward(): void;
    go(delta?: number): void;
    pushState(data: any, title: string, url?: string | null): void;
    replaceState(data: any, title: string, url?: string | null): void;
}

declare var History: {
    prototype: History;
    new(): History;
};

declare class HkdfCtrParams extends Algorithm {
    context: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
    hash: string | Algorithm;
    label: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer;
}

declare class IDBArrayKey extends Array<IDBValidKey> {
}

declare class IDBCursor {
    /**
     * Returns the direction ("next", "nextunique", "prev" or "prevunique")
     * of the cursor.
     */
    +direction: IDBCursorDirection;
    /**
     * Returns the key of the cursor.
     * Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
     */
    +key: IDBValidKey | IDBKeyRange;
    /**
     * Returns the effective key of the cursor.
     * Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
     */
    +primaryKey: IDBValidKey | IDBKeyRange;
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
    continue(key?: IDBValidKey | IDBKeyRange): void;
    /**
     * Advances the cursor to the next record in range matching
     * or after key and primaryKey. Throws an "InvalidAccessError" DOMException if the source is not an index.
     */
    continuePrimaryKey(key: IDBValidKey | IDBKeyRange, primaryKey: IDBValidKey | IDBKeyRange): void;
    /**
     * Delete the record pointed at by the cursor with a new value.
     * If successful, request's result will be undefined.
     */
    delete(): IDBRequest<undefined>;
    /**
     * Updated the record pointed at by the cursor with a new value.
     * Throws a "DataError" DOMException if the effective object store uses in-line keys and the key would have changed.
     * If successful, request's result will be the record's key.
     */
    update(value: any): IDBRequest<IDBValidKey>;
}

declare var IDBCursor: {
    prototype: IDBCursor;
    new(): IDBCursor;
};

declare class IDBCursorWithValue extends IDBCursor {
    /**
     * Returns the cursor's current value.
     */
    +value: any;
}

declare var IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    new(): IDBCursorWithValue;
};

interface IDBDatabaseEventMap {
    "abort": Event;
    "close": Event;
    "error": Event;
    "versionchange": IDBVersionChangeEvent;
}

declare class IDBDatabase extends EventTarget {
    /**
     * Returns the name of the database.
     */
    +name: string;
    /**
     * Returns a list of the names of object stores in the database.
     */
    +objectStoreNames: DOMStringList;
    onabort: ((this: IDBDatabase, ev: Event) => any) | null;
    onclose: ((this: IDBDatabase, ev: Event) => any) | null;
    onerror: ((this: IDBDatabase, ev: Event) => any) | null;
    onversionchange: ((this: IDBDatabase, ev: IDBVersionChangeEvent) => any) | null;
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
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBDatabase: {
    prototype: IDBDatabase;
    new(): IDBDatabase;
};

declare class IDBEnvironment {
    +indexedDB: IDBFactory;
}

declare class IDBFactory {
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

declare var IDBFactory: {
    prototype: IDBFactory;
    new(): IDBFactory;
};

declare class IDBIndex {
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
    get(key: IDBValidKey | IDBKeyRange): IDBRequest<any | undefined>;
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
    getKey(key: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
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

declare var IDBIndex: {
    prototype: IDBIndex;
    new(): IDBIndex;
};

declare class IDBKeyRange {
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

declare var IDBKeyRange: {
    prototype: IDBKeyRange;
    new(): IDBKeyRange;
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
};

declare class IDBObjectStore {
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
    add(value: any, key?: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey>;
    /**
     * Deletes all records in store.
     * If successful, request's result will
     * be undefined.
     */
    clear(): IDBRequest<undefined>;
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
    delete(key: IDBValidKey | IDBKeyRange): IDBRequest<undefined>;
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
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any | undefined>;
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
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
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
    put(value: any, key?: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey>;
}

declare var IDBObjectStore: {
    prototype: IDBObjectStore;
    new(): IDBObjectStore;
};

interface IDBOpenDBRequestEventMap extends IDBRequestEventMap {
    "blocked": Event;
    "upgradeneeded": IDBVersionChangeEvent;
}

declare class IDBOpenDBRequest extends IDBRequest<IDBDatabase> {
    onblocked: ((this: IDBOpenDBRequest, ev: Event) => any) | null;
    onupgradeneeded: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    addEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBOpenDBRequest: {
    prototype: IDBOpenDBRequest;
    new(): IDBOpenDBRequest;
};

interface IDBRequestEventMap {
    "error": Event;
    "success": Event;
}

declare class IDBRequest<T = any> extends EventTarget {
    /**
     * When a request is completed, returns the error (a DOMException), or null if the request succeeded. Throws
     * a "InvalidStateError" DOMException if the request is still pending.
     */
    +error: DOMException | null;
    onerror: ((this: IDBRequest<T>, ev: Event) => any) | null;
    onsuccess: ((this: IDBRequest<T>, ev: Event) => any) | null;
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
    addEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBRequest: {
    prototype: IDBRequest;
    new(): IDBRequest;
};

interface IDBTransactionEventMap {
    "abort": Event;
    "complete": Event;
    "error": Event;
}

declare class IDBTransaction extends EventTarget {
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
    onabort: ((this: IDBTransaction, ev: Event) => any) | null;
    oncomplete: ((this: IDBTransaction, ev: Event) => any) | null;
    onerror: ((this: IDBTransaction, ev: Event) => any) | null;
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
    addEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var IDBTransaction: {
    prototype: IDBTransaction;
    new(): IDBTransaction;
};

declare class IDBVersionChangeEvent extends Event {
    +newVersion: number | null;
    +oldVersion: number;
}

declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new(type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent;
};

declare class IIRFilterNode extends AudioNode {
    getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
}

declare var IIRFilterNode: {
    prototype: IIRFilterNode;
    new(context: BaseAudioContext, options: IIRFilterOptions): IIRFilterNode;
};

declare class ImageBitmap {
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

declare var ImageBitmap: {
    prototype: ImageBitmap;
    new(): ImageBitmap;
};

declare class ImageBitmapOptions {
    colorSpaceConversion?: "none" | "default";
    imageOrientation?: "none" | "flipY";
    premultiplyAlpha?: "none" | "premultiply" | "default";
    resizeHeight?: number;
    resizeQuality?: "pixelated" | "low" | "medium" | "high";
    resizeWidth?: number;
}

declare class ImageBitmapRenderingContext {
    /**
     * Returns the canvas element that the context is bound to.
     */
    +canvas: HTMLCanvasElement;
    /**
     * Replaces contents of the canvas element to which context
     * is bound with a transparent black bitmap whose size corresponds to the width and height
     * content attributes of the canvas element.
     */
    transferFromImageBitmap(bitmap: ImageBitmap | null): void;
}

declare var ImageBitmapRenderingContext: {
    prototype: ImageBitmapRenderingContext;
    new(): ImageBitmapRenderingContext;
};

declare class ImageData {
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

declare var ImageData: {
    prototype: ImageData;
    new(width: number, height: number): ImageData;
    new(array: Uint8ClampedArray, width: number, height: number): ImageData;
};

declare class IntersectionObserver {
    +root: Element | null;
    +rootMargin: string;
    +thresholds: number[];
    disconnect(): void;
    observe(target: Element): void;
    takeRecords(): IntersectionObserverEntry[];
    unobserve(target: Element): void;
}

declare var IntersectionObserver: {
    prototype: IntersectionObserver;
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
};

declare class IntersectionObserverEntry {
    +boundingClientRect: ClientRect | DOMRect;
    +intersectionRatio: number;
    +intersectionRect: ClientRect | DOMRect;
    +isIntersecting: boolean;
    +rootBounds: ClientRect | DOMRect;
    +target: Element;
    +time: number;
}

declare var IntersectionObserverEntry: {
    prototype: IntersectionObserverEntry;
    new(intersectionObserverEntryInit: IntersectionObserverEntryInit): IntersectionObserverEntry;
};

declare class KeyboardEvent extends UIEvent {
    +altKey: boolean;
    /** @deprecated */
    char: string;
    /** @deprecated */
    +charCode: number;
    +code: string;
    +ctrlKey: boolean;
    +key: string;
    /** @deprecated */
    +keyCode: number;
    +location: number;
    +metaKey: boolean;
    +repeat: boolean;
    +shiftKey: boolean;
    /** @deprecated */
    +which: number;
    getModifierState(keyArg: string): boolean;
    /** @deprecated */
    initKeyboardEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, keyArg: string, locationArg: number, modifiersListArg: string, repeat: boolean, locale: string): void;
    +DOM_KEY_LOCATION_JOYSTICK: number;
    +DOM_KEY_LOCATION_LEFT: number;
    +DOM_KEY_LOCATION_MOBILE: number;
    +DOM_KEY_LOCATION_NUMPAD: number;
    +DOM_KEY_LOCATION_RIGHT: number;
    +DOM_KEY_LOCATION_STANDARD: number;
}

declare var KeyboardEvent: {
    prototype: KeyboardEvent;
    new(typeArg: string, eventInitDict?: KeyboardEventInit): KeyboardEvent;
    +DOM_KEY_LOCATION_JOYSTICK: number;
    +DOM_KEY_LOCATION_LEFT: number;
    +DOM_KEY_LOCATION_MOBILE: number;
    +DOM_KEY_LOCATION_NUMPAD: number;
    +DOM_KEY_LOCATION_RIGHT: number;
    +DOM_KEY_LOCATION_STANDARD: number;
};

declare class KeyframeEffect extends AnimationEffect {
    composite: CompositeOperation;
    iterationComposite: IterationCompositeOperation;
    target: Element | null;
    getKeyframes(): ComputedKeyframe[];
    setKeyframes(keyframes: Keyframe[] | PropertyIndexedKeyframes | null): void;
}

declare var KeyframeEffect: {
    prototype: KeyframeEffect;
    new(target: Element | null, keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeEffectOptions): KeyframeEffect;
    new(source: KeyframeEffect): KeyframeEffect;
};

declare class LinkStyle {
    +sheet: StyleSheet | null;
}

declare class ListeningStateChangedEvent extends Event {
    +label: string;
    +state: ListeningState;
}

declare var ListeningStateChangedEvent: {
    prototype: ListeningStateChangedEvent;
    new(): ListeningStateChangedEvent;
};

declare class Location {
    /**
     * Returns a DOMStringList object listing the origins of the ancestor browsing contexts, from the parent browsing
     * context to the top-level browsing context.
     */
    +ancestorOrigins: DOMStringList;
    /**
     * Returns the Location object's URL's fragment (includes leading "#" if non-empty).
     * Can be set, to navigate to the same URL with a changed fragment (ignores leading "#").
     */
    hash: string;
    /**
     * Returns the Location object's URL's host and port (if different from the default
     * port for the scheme).
     * Can be set, to navigate to the same URL with a changed host and port.
     */
    host: string;
    /**
     * Returns the Location object's URL's host.
     * Can be set, to navigate to the same URL with a changed host.
     */
    hostname: string;
    /**
     * Returns the Location object's URL.
     * Can be set, to navigate to the given URL.
     */
    href: string;
    /**
     * Returns the Location object's URL's origin.
     */
    +origin: string;
    /**
     * Returns the Location object's URL's path.
     * Can be set, to navigate to the same URL with a changed path.
     */
    pathname: string;
    /**
     * Returns the Location object's URL's port.
     * Can be set, to navigate to the same URL with a changed port.
     */
    port: string;
    /**
     * Returns the Location object's URL's scheme.
     * Can be set, to navigate to the same URL with a changed scheme.
     */
    protocol: string;
    /**
     * Returns the Location object's URL's query (includes leading "?" if non-empty).
     * Can be set, to navigate to the same URL with a changed query (ignores leading "?").
     */
    search: string;
    /**
     * Navigates to the given URL.
     */
    assign(url: string): void;
    /**
     * Reloads the current page.
     */
    reload(): void;
    /** @deprecated */
    reload(forcedReload: boolean): void;
    /**
     * Removes the current page from the session history and navigates to the given URL.
     */
    replace(url: string): void;
}

declare var Location: {
    prototype: Location;
    new(): Location;
};

declare class MSAssertion {
    +id: string;
    +type: MSCredentialType;
}

declare var MSAssertion: {
    prototype: MSAssertion;
    new(): MSAssertion;
};

declare class MSBlobBuilder {
    append(data: any, endings?: string): void;
    getBlob(contentType?: string): Blob;
}

declare var MSBlobBuilder: {
    prototype: MSBlobBuilder;
    new(): MSBlobBuilder;
};

declare class MSFIDOCredentialAssertion extends MSAssertion {
    +algorithm: string | Algorithm;
    +attestation: any;
    +publicKey: string;
    +transportHints: MSTransportType[];
}

declare var MSFIDOCredentialAssertion: {
    prototype: MSFIDOCredentialAssertion;
    new(): MSFIDOCredentialAssertion;
};

declare class MSFIDOSignature {
    +authnrData: string;
    +clientData: string;
    +signature: string;
}

declare var MSFIDOSignature: {
    prototype: MSFIDOSignature;
    new(): MSFIDOSignature;
};

declare class MSFIDOSignatureAssertion extends MSAssertion {
    +signature: MSFIDOSignature;
}

declare var MSFIDOSignatureAssertion: {
    prototype: MSFIDOSignatureAssertion;
    new(): MSFIDOSignatureAssertion;
};

declare class MSFileSaver {
    msSaveBlob(blob: any, defaultName?: string): boolean;
    msSaveOrOpenBlob(blob: any, defaultName?: string): boolean;
}

declare class MSGesture {
    target: Element;
    addPointer(pointerId: number): void;
    stop(): void;
}

declare var MSGesture: {
    prototype: MSGesture;
    new(): MSGesture;
};

declare class MSGestureEvent extends UIEvent {
    +clientX: number;
    +clientY: number;
    +expansion: number;
    +gestureObject: any;
    +hwTimestamp: number;
    +offsetX: number;
    +offsetY: number;
    +rotation: number;
    +scale: number;
    +screenX: number;
    +screenY: number;
    +translationX: number;
    +translationY: number;
    +velocityAngular: number;
    +velocityExpansion: number;
    +velocityX: number;
    +velocityY: number;
    initGestureEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, offsetXArg: number, offsetYArg: number, translationXArg: number, translationYArg: number, scaleArg: number, expansionArg: number, rotationArg: number, velocityXArg: number, velocityYArg: number, velocityExpansionArg: number, velocityAngularArg: number, hwTimestampArg: number): void;
    +MSGESTURE_FLAG_BEGIN: number;
    +MSGESTURE_FLAG_CANCEL: number;
    +MSGESTURE_FLAG_END: number;
    +MSGESTURE_FLAG_INERTIA: number;
    +MSGESTURE_FLAG_NONE: number;
}

declare var MSGestureEvent: {
    prototype: MSGestureEvent;
    new(): MSGestureEvent;
    +MSGESTURE_FLAG_BEGIN: number;
    +MSGESTURE_FLAG_CANCEL: number;
    +MSGESTURE_FLAG_END: number;
    +MSGESTURE_FLAG_INERTIA: number;
    +MSGESTURE_FLAG_NONE: number;
};

declare class MSGraphicsTrust {
    +constrictionActive: boolean;
    +status: string;
}

declare var MSGraphicsTrust: {
    prototype: MSGraphicsTrust;
    new(): MSGraphicsTrust;
};

interface MSInputMethodContextEventMap {
    "MSCandidateWindowHide": Event;
    "MSCandidateWindowShow": Event;
    "MSCandidateWindowUpdate": Event;
}

declare class MSInputMethodContext extends EventTarget {
    +compositionEndOffset: number;
    +compositionStartOffset: number;
    oncandidatewindowhide: ((this: MSInputMethodContext, ev: Event) => any) | null;
    oncandidatewindowshow: ((this: MSInputMethodContext, ev: Event) => any) | null;
    oncandidatewindowupdate: ((this: MSInputMethodContext, ev: Event) => any) | null;
    +target: HTMLElement;
    getCandidateWindowClientRect(): ClientRect;
    getCompositionAlternatives(): string[];
    hasComposition(): boolean;
    isCandidateWindowVisible(): boolean;
    addEventListener<K extends keyof MSInputMethodContextEventMap>(type: K, listener: (this: MSInputMethodContext, ev: MSInputMethodContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MSInputMethodContextEventMap>(type: K, listener: (this: MSInputMethodContext, ev: MSInputMethodContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var MSInputMethodContext: {
    prototype: MSInputMethodContext;
    new(): MSInputMethodContext;
};

declare class MSMediaKeyError {
    +code: number;
    +systemCode: number;
    +MS_MEDIA_KEYERR_CLIENT: number;
    +MS_MEDIA_KEYERR_DOMAIN: number;
    +MS_MEDIA_KEYERR_HARDWARECHANGE: number;
    +MS_MEDIA_KEYERR_OUTPUT: number;
    +MS_MEDIA_KEYERR_SERVICE: number;
    +MS_MEDIA_KEYERR_UNKNOWN: number;
}

declare var MSMediaKeyError: {
    prototype: MSMediaKeyError;
    new(): MSMediaKeyError;
    +MS_MEDIA_KEYERR_CLIENT: number;
    +MS_MEDIA_KEYERR_DOMAIN: number;
    +MS_MEDIA_KEYERR_HARDWARECHANGE: number;
    +MS_MEDIA_KEYERR_OUTPUT: number;
    +MS_MEDIA_KEYERR_SERVICE: number;
    +MS_MEDIA_KEYERR_UNKNOWN: number;
};

declare class MSMediaKeyMessageEvent extends Event {
    +destinationURL: string | null;
    +message: Uint8Array;
}

declare var MSMediaKeyMessageEvent: {
    prototype: MSMediaKeyMessageEvent;
    new(): MSMediaKeyMessageEvent;
};

declare class MSMediaKeyNeededEvent extends Event {
    +initData: Uint8Array | null;
}

declare var MSMediaKeyNeededEvent: {
    prototype: MSMediaKeyNeededEvent;
    new(): MSMediaKeyNeededEvent;
};

declare class MSMediaKeySession extends EventTarget {
    +error: MSMediaKeyError | null;
    +keySystem: string;
    +sessionId: string;
    close(): void;
    update(key: Uint8Array): void;
}

declare var MSMediaKeySession: {
    prototype: MSMediaKeySession;
    new(): MSMediaKeySession;
};

declare class MSMediaKeys {
    +keySystem: string;
    createSession(type: string, initData: Uint8Array, cdmData?: Uint8Array | null): MSMediaKeySession;
}

declare var MSMediaKeys: {
    prototype: MSMediaKeys;
    new(keySystem: string): MSMediaKeys;
    isTypeSupported(keySystem: string, type?: string | null): boolean;
    isTypeSupportedWithFeatures(keySystem: string, type?: string | null): string;
};

declare class MSNavigatorDoNotTrack {
    confirmSiteSpecificTrackingException(args: ConfirmSiteSpecificExceptionsInformation): boolean;
    confirmWebWideTrackingException(args: ExceptionInformation): boolean;
    removeSiteSpecificTrackingException(args: ExceptionInformation): void;
    removeWebWideTrackingException(args: ExceptionInformation): void;
    storeSiteSpecificTrackingException(args: StoreSiteSpecificExceptionsInformation): void;
    storeWebWideTrackingException(args: StoreExceptionsInformation): void;
}

declare class MSPointerEvent extends MouseEvent {
    +currentPoint: any;
    +height: number;
    +hwTimestamp: number;
    +intermediatePoints: any;
    +isPrimary: boolean;
    +pointerId: number;
    +pointerType: any;
    +pressure: number;
    +rotation: number;
    +tiltX: number;
    +tiltY: number;
    +width: number;
    getCurrentPoint(element: Element): void;
    getIntermediatePoints(element: Element): void;
    initPointerEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: any, hwTimestampArg: number, isPrimary: boolean): void;
}

declare var MSPointerEvent: {
    prototype: MSPointerEvent;
    new(typeArg: string, eventInitDict?: PointerEventInit): MSPointerEvent;
};

declare class MSStream {
    +type: string;
    msClose(): void;
    msDetachStream(): any;
}

declare var MSStream: {
    prototype: MSStream;
    new(): MSStream;
};

declare class MediaDeviceInfo {
    +deviceId: string;
    +groupId: string;
    +kind: MediaDeviceKind;
    +label: string;
}

declare var MediaDeviceInfo: {
    prototype: MediaDeviceInfo;
    new(): MediaDeviceInfo;
};

interface MediaDevicesEventMap {
    "devicechange": Event;
}

declare class MediaDevices extends EventTarget {
    ondevicechange: ((this: MediaDevices, ev: Event) => any) | null;
    enumerateDevices(): Promise<MediaDeviceInfo[]>;
    getSupportedConstraints(): MediaTrackSupportedConstraints;
    getUserMedia(constraints: MediaStreamConstraints): Promise<MediaStream>;
    addEventListener<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var MediaDevices: {
    prototype: MediaDevices;
    new(): MediaDevices;
};

declare class MediaElementAudioSourceNode extends AudioNode {
    +mediaElement: HTMLMediaElement;
}

declare var MediaElementAudioSourceNode: {
    prototype: MediaElementAudioSourceNode;
    new(context: AudioContext, options: MediaElementAudioSourceOptions): MediaElementAudioSourceNode;
};

declare class MediaEncryptedEvent extends Event {
    +initData: ArrayBuffer | null;
    +initDataType: string;
}

declare var MediaEncryptedEvent: {
    prototype: MediaEncryptedEvent;
    new(type: string, eventInitDict?: MediaEncryptedEventInit): MediaEncryptedEvent;
};

declare class MediaError {
    +code: number;
    +message: string;
    +msExtendedCode: number;
    +MEDIA_ERR_ABORTED: number;
    +MEDIA_ERR_DECODE: number;
    +MEDIA_ERR_NETWORK: number;
    +MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    +MS_MEDIA_ERR_ENCRYPTED: number;
}

declare var MediaError: {
    prototype: MediaError;
    new(): MediaError;
    +MEDIA_ERR_ABORTED: number;
    +MEDIA_ERR_DECODE: number;
    +MEDIA_ERR_NETWORK: number;
    +MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    +MS_MEDIA_ERR_ENCRYPTED: number;
};

declare class MediaKeyMessageEvent extends Event {
    +message: ArrayBuffer;
    +messageType: MediaKeyMessageType;
}

declare var MediaKeyMessageEvent: {
    prototype: MediaKeyMessageEvent;
    new(type: string, eventInitDict?: MediaKeyMessageEventInit): MediaKeyMessageEvent;
};

declare class MediaKeySession extends EventTarget {
    +closed: Promise<void>;
    +expiration: number;
    +keyStatuses: MediaKeyStatusMap;
    +sessionId: string;
    close(): Promise<void>;
    generateRequest(initDataType: string, initData: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null): Promise<void>;
    load(sessionId: string): Promise<boolean>;
    remove(): Promise<void>;
    update(response: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null): Promise<void>;
}

declare var MediaKeySession: {
    prototype: MediaKeySession;
    new(): MediaKeySession;
};

declare class MediaKeyStatusMap {
    +size: number;
    forEach(callback: Function, thisArg?: any): void;
    get(keyId: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null): MediaKeyStatus;
    has(keyId: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null): boolean;
}

declare var MediaKeyStatusMap: {
    prototype: MediaKeyStatusMap;
    new(): MediaKeyStatusMap;
};

declare class MediaKeySystemAccess {
    +keySystem: string;
    createMediaKeys(): Promise<MediaKeys>;
    getConfiguration(): MediaKeySystemConfiguration;
}

declare var MediaKeySystemAccess: {
    prototype: MediaKeySystemAccess;
    new(): MediaKeySystemAccess;
};

declare class MediaKeys {
    createSession(sessionType?: MediaKeySessionType): MediaKeySession;
    setServerCertificate(serverCertificate: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null): Promise<void>;
}

declare var MediaKeys: {
    prototype: MediaKeys;
    new(): MediaKeys;
};

declare class MediaList {
    +length: number;
    mediaText: string;
    appendMedium(medium: string): void;
    deleteMedium(medium: string): void;
    item(index: number): string | null;
    toString(): number;
    [index: number]: string;
}

declare var MediaList: {
    prototype: MediaList;
    new(): MediaList;
};

interface MediaQueryListEventMap {
    "change": MediaQueryListEvent;
}

declare class MediaQueryList extends EventTarget {
    +matches: boolean;
    +media: string;
    onchange: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null;
    /** @deprecated */
    addListener(listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void;
    /** @deprecated */
    removeListener(listener: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void;
    addEventListener<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var MediaQueryList: {
    prototype: MediaQueryList;
    new(): MediaQueryList;
};

declare class MediaQueryListEvent extends Event {
    +matches: boolean;
    +media: string;
}

declare var MediaQueryListEvent: {
    prototype: MediaQueryListEvent;
    new(type: string, eventInitDict?: MediaQueryListEventInit): MediaQueryListEvent;
};

declare class MediaSource extends EventTarget {
    +activeSourceBuffers: SourceBufferList;
    duration: number;
    +readyState: ReadyState;
    +sourceBuffers: SourceBufferList;
    addSourceBuffer(type: string): SourceBuffer;
    endOfStream(error?: EndOfStreamError): void;
    removeSourceBuffer(sourceBuffer: SourceBuffer): void;
}

declare var MediaSource: {
    prototype: MediaSource;
    new(): MediaSource;
    isTypeSupported(type: string): boolean;
};

interface MediaStreamEventMap {
    "active": Event;
    "addtrack": MediaStreamTrackEvent;
    "inactive": Event;
    "removetrack": MediaStreamTrackEvent;
}

declare class MediaStream extends EventTarget {
    +active: boolean;
    +id: string;
    onactive: ((this: MediaStream, ev: Event) => any) | null;
    onaddtrack: ((this: MediaStream, ev: MediaStreamTrackEvent) => any) | null;
    oninactive: ((this: MediaStream, ev: Event) => any) | null;
    onremovetrack: ((this: MediaStream, ev: MediaStreamTrackEvent) => any) | null;
    addTrack(track: MediaStreamTrack): void;
    clone(): MediaStream;
    getAudioTracks(): MediaStreamTrack[];
    getTrackById(trackId: string): MediaStreamTrack | null;
    getTracks(): MediaStreamTrack[];
    getVideoTracks(): MediaStreamTrack[];
    removeTrack(track: MediaStreamTrack): void;
    stop(): void;
    addEventListener<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var MediaStream: {
    prototype: MediaStream;
    new(): MediaStream;
    new(stream: MediaStream): MediaStream;
    new(tracks: MediaStreamTrack[]): MediaStream;
};

declare class MediaStreamAudioDestinationNode extends AudioNode {
    +stream: MediaStream;
}

declare var MediaStreamAudioDestinationNode: {
    prototype: MediaStreamAudioDestinationNode;
    new(context: AudioContext, options?: AudioNodeOptions): MediaStreamAudioDestinationNode;
};

declare class MediaStreamAudioSourceNode extends AudioNode {
    +mediaStream: MediaStream;
}

declare var MediaStreamAudioSourceNode: {
    prototype: MediaStreamAudioSourceNode;
    new(context: AudioContext, options: MediaStreamAudioSourceOptions): MediaStreamAudioSourceNode;
};

declare class MediaStreamError {
    +constraintName: string | null;
    +message: string | null;
    +name: string;
}

declare var MediaStreamError: {
    prototype: MediaStreamError;
    new(): MediaStreamError;
};

declare class MediaStreamErrorEvent extends Event {
    +error: MediaStreamError | null;
}

declare var MediaStreamErrorEvent: {
    prototype: MediaStreamErrorEvent;
    new(typeArg: string, eventInitDict?: MediaStreamErrorEventInit): MediaStreamErrorEvent;
};

declare class MediaStreamEvent extends Event {
    +stream: MediaStream | null;
}

declare var MediaStreamEvent: {
    prototype: MediaStreamEvent;
    new(type: string, eventInitDict: MediaStreamEventInit): MediaStreamEvent;
};

interface MediaStreamTrackEventMap {
    "ended": MediaStreamErrorEvent;
    "isolationchange": Event;
    "mute": Event;
    "overconstrained": MediaStreamErrorEvent;
    "unmute": Event;
}

declare class MediaStreamTrack extends EventTarget {
    enabled: boolean;
    +id: string;
    +isolated: boolean;
    +kind: string;
    +label: string;
    +muted: boolean;
    onended: ((this: MediaStreamTrack, ev: MediaStreamErrorEvent) => any) | null;
    onisolationchange: ((this: MediaStreamTrack, ev: Event) => any) | null;
    onmute: ((this: MediaStreamTrack, ev: Event) => any) | null;
    onoverconstrained: ((this: MediaStreamTrack, ev: MediaStreamErrorEvent) => any) | null;
    onunmute: ((this: MediaStreamTrack, ev: Event) => any) | null;
    +readonly: boolean;
    +readyState: MediaStreamTrackState;
    +remote: boolean;
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
    clone(): MediaStreamTrack;
    getCapabilities(): MediaTrackCapabilities;
    getConstraints(): MediaTrackConstraints;
    getSettings(): MediaTrackSettings;
    stop(): void;
    addEventListener<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var MediaStreamTrack: {
    prototype: MediaStreamTrack;
    new(): MediaStreamTrack;
};

declare class MediaStreamTrackAudioSourceNode extends AudioNode {
}

declare var MediaStreamTrackAudioSourceNode: {
    prototype: MediaStreamTrackAudioSourceNode;
    new(context: AudioContext, options: MediaStreamTrackAudioSourceOptions): MediaStreamTrackAudioSourceNode;
};

declare class MediaStreamTrackEvent extends Event {
    +track: MediaStreamTrack;
}

declare var MediaStreamTrackEvent: {
    prototype: MediaStreamTrackEvent;
    new(typeArg: string, eventInitDict?: MediaStreamTrackEventInit): MediaStreamTrackEvent;
};

declare class MessageChannel {
    +port1: MessagePort;
    +port2: MessagePort;
}

declare var MessageChannel: {
    prototype: MessageChannel;
    new(): MessageChannel;
};

declare class MessageEvent extends Event {
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

declare var MessageEvent: {
    prototype: MessageEvent;
    new(type: string, eventInitDict?: MessageEventInit): MessageEvent;
};

interface MessagePortEventMap {
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

declare class MessagePort extends EventTarget {
    onmessage: ((this: MessagePort, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: MessagePort, ev: MessageEvent) => any) | null;
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
    addEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var MessagePort: {
    prototype: MessagePort;
    new(): MessagePort;
};

declare class MimeType {
    +description: string;
    +enabledPlugin: Plugin;
    +suffixes: string;
    +type: string;
}

declare var MimeType: {
    prototype: MimeType;
    new(): MimeType;
};

declare class MimeTypeArray {
    +length: number;
    item(index: number): Plugin;
    namedItem(type: string): Plugin;
    [index: number]: Plugin;
}

declare var MimeTypeArray: {
    prototype: MimeTypeArray;
    new(): MimeTypeArray;
};

declare class MouseEvent extends UIEvent {
    +altKey: boolean;
    +button: number;
    +buttons: number;
    +clientX: number;
    +clientY: number;
    +ctrlKey: boolean;
    /** @deprecated */
    +fromElement: Element;
    +layerX: number;
    +layerY: number;
    +metaKey: boolean;
    +movementX: number;
    +movementY: number;
    +offsetX: number;
    +offsetY: number;
    +pageX: number;
    +pageY: number;
    +relatedTarget: EventTarget;
    +screenX: number;
    +screenY: number;
    +shiftKey: boolean;
    /** @deprecated */
    +toElement: Element;
    /** @deprecated */
    +which: number;
    +x: number;
    +y: number;
    getModifierState(keyArg: string): boolean;
    initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget | null): void;
}

declare var MouseEvent: {
    prototype: MouseEvent;
    new(typeArg: string, eventInitDict?: MouseEventInit): MouseEvent;
};

declare class MutationEvent extends Event {
    +attrChange: number;
    +attrName: string;
    +newValue: string;
    +prevValue: string;
    +relatedNode: Node;
    initMutationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, relatedNodeArg: Node, prevValueArg: string, newValueArg: string, attrNameArg: string, attrChangeArg: number): void;
    +ADDITION: number;
    +MODIFICATION: number;
    +REMOVAL: number;
}

declare var MutationEvent: {
    prototype: MutationEvent;
    new(): MutationEvent;
    +ADDITION: number;
    +MODIFICATION: number;
    +REMOVAL: number;
};

declare class MutationObserver {
    disconnect(): void;
    /**
     * Instructs the user agent to observe a given target (a node) and report any mutations based on
     * the criteria given by options (an object).
     * The options argument allows for setting mutation
     * observation options via object members. These are the object members that
     * can be used:
     * childList
     * Set to true if mutations to target's children are to be observed.
     * attributes
     * Set to true if mutations to target's attributes are to be observed. Can be omitted if attributeOldValue or attributeFilter is
     * specified.
     * characterData
     * Set to true if mutations to target's data are to be observed. Can be omitted if characterDataOldValue is specified.
     * subtree
     * Set to true if mutations to not just target, but
     * also target's descendants are to be
     * observed.
     * attributeOldValue
     * Set to true if attributes is true or omitted
     * and target's attribute value before the mutation
     * needs to be recorded.
     * characterDataOldValue
     * Set to true if characterData is set to true or omitted and target's data before the mutation
     * needs to be recorded.
     * attributeFilter
     * Set to a list of attribute local names (without namespace) if not all attribute mutations need to be
     * observed and attributes is true
     * or omitted.
     */
    observe(target: Node, options?: MutationObserverInit): void;
    /**
     * Empties the record queue and
     * returns what was in there.
     */
    takeRecords(): MutationRecord[];
}

declare var MutationObserver: {
    prototype: MutationObserver;
    new(callback: MutationCallback): MutationObserver;
};

declare class MutationRecord {
    +addedNodes: NodeList;
    /**
     * Returns the local name of the
     * changed attribute, and null otherwise.
     */
    +attributeName: string | null;
    /**
     * Returns the namespace of the
     * changed attribute, and null otherwise.
     */
    +attributeNamespace: string | null;
    /**
     * Return the previous and next sibling respectively
     * of the added or removed nodes, and null otherwise.
     */
    +nextSibling: Node | null;
    /**
     * The return value depends on type. For
     * "attributes", it is the value of the
     * changed attribute before the change.
     * For "characterData", it is the data of the changed node before the change. For
     * "childList", it is null.
     */
    +oldValue: string | null;
    +previousSibling: Node | null;
    /**
     * Return the nodes added and removed
     * respectively.
     */
    +removedNodes: NodeList;
    +target: Node;
    /**
     * Returns "attributes" if it was an attribute mutation.
     * "characterData" if it was a mutation to a CharacterData node. And
     * "childList" if it was a mutation to the tree of nodes.
     */
    +type: MutationRecordType;
}

declare var MutationRecord: {
    prototype: MutationRecord;
    new(): MutationRecord;
};

declare class NamedNodeMap {
    +length: number;
    getNamedItem(qualifiedName: string): Attr | null;
    getNamedItemNS(namespace: string | null, localName: string): Attr | null;
    item(index: number): Attr | null;
    removeNamedItem(qualifiedName: string): Attr;
    removeNamedItemNS(namespace: string | null, localName: string): Attr;
    setNamedItem(attr: Attr): Attr | null;
    setNamedItemNS(attr: Attr): Attr | null;
    [index: number]: Attr;
}

declare var NamedNodeMap: {
    prototype: NamedNodeMap;
    new(): NamedNodeMap;
};

declare class NavigationPreloadManager {
    disable(): Promise<void>;
    enable(): Promise<void>;
    getState(): Promise<NavigationPreloadState>;
    setHeaderValue(value: string): Promise<void>;
}

declare var NavigationPreloadManager: {
    prototype: NavigationPreloadManager;
    new(): NavigationPreloadManager;
};

declare class Navigator extends NavigatorID, NavigatorOnLine, NavigatorContentUtils, NavigatorStorageUtils, MSNavigatorDoNotTrack, MSFileSaver, NavigatorBeacon, NavigatorConcurrentHardware, NavigatorUserMedia, NavigatorLanguage, NavigatorStorage, NavigatorAutomationInformation {
    +activeVRDisplays: ReadonlyArray<VRDisplay>;
    +authentication: WebAuthentication;
    +cookieEnabled: boolean;
    +doNotTrack: string | null;
    gamepadInputEmulation: GamepadInputEmulationType;
    +geolocation: Geolocation;
    +maxTouchPoints: number;
    +mimeTypes: MimeTypeArray;
    +msManipulationViewsEnabled: boolean;
    +msMaxTouchPoints: number;
    +msPointerEnabled: boolean;
    +plugins: PluginArray;
    +pointerEnabled: boolean;
    +serviceWorker: ServiceWorkerContainer;
    +webdriver: boolean;
    getGamepads(): (Gamepad | null)[];
    getVRDisplays(): Promise<VRDisplay[]>;
    javaEnabled(): boolean;
    msLaunchUri(uri: string, successCallback?: MSLaunchUriCallback, noHandlerCallback?: MSLaunchUriCallback): void;
    requestMediaKeySystemAccess(keySystem: string, supportedConfigurations: MediaKeySystemConfiguration[]): Promise<MediaKeySystemAccess>;
    vibrate(pattern: number | number[]): boolean;
}

declare var Navigator: {
    prototype: Navigator;
    new(): Navigator;
};

declare class NavigatorAutomationInformation {
    +webdriver: boolean;
}

declare class NavigatorBeacon {
    sendBeacon(url: string, data?: Blob | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | FormData | string | null): boolean;
}

declare class NavigatorConcurrentHardware {
    +hardwareConcurrency: number;
}

declare class NavigatorContentUtils {
}

declare class NavigatorID {
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

declare class NavigatorLanguage {
    +language: string;
    +languages: ReadonlyArray<string>;
}

declare class NavigatorOnLine {
    +onLine: boolean;
}

declare class NavigatorStorage {
    +storage: StorageManager;
}

declare class NavigatorStorageUtils {
}

declare class NavigatorUserMedia {
    +mediaDevices: MediaDevices;
    getDisplayMedia(constraints: MediaStreamConstraints): Promise<MediaStream>;
    getUserMedia(constraints: MediaStreamConstraints, successCallback: NavigatorUserMediaSuccessCallback, errorCallback: NavigatorUserMediaErrorCallback): void;
}

declare class Node extends EventTarget {
    /**
     * Returns node's node document's document base URL.
     */
    +baseURI: string;
    /**
     * Returns the children.
     */
    +childNodes: NodeListOf<ChildNode>;
    /**
     * Returns the first child.
     */
    +firstChild: ChildNode | null;
    /**
     * Returns true if node is connected and false otherwise.
     */
    +isConnected: boolean;
    /**
     * Returns the last child.
     */
    +lastChild: ChildNode | null;
    /** @deprecated */
    +namespaceURI: string | null;
    /**
     * Returns the next sibling.
     */
    +nextSibling: Node | null;
    /**
     * Returns a string appropriate for the type of node, as
     * follows:
     * Element
     * Its HTML-uppercased qualified name.
     * Attr
     * Its qualified name.
     * Text
     * "#text".
     * CDATASection
     * "#cdata-section".
     * ProcessingInstruction
     * Its target.
     * Comment
     * "#comment".
     * Document
     * "#document".
     * DocumentType
     * Its name.
     * DocumentFragment
     * "#document-fragment".
     */
    +nodeName: string;
    +nodeType: number;
    nodeValue: string | null;
    /**
     * Returns the node document.
     * Returns null for documents.
     */
    +ownerDocument: Document | null;
    /**
     * Returns the parent element.
     */
    +parentElement: HTMLElement | null;
    /**
     * Returns the parent.
     */
    +parentNode: Node & ParentNode | null;
    /**
     * Returns the previous sibling.
     */
    +previousSibling: Node | null;
    textContent: string | null;
    appendChild<T extends Node>(newChild: T): T;
    /**
     * Returns a copy of node. If deep is true, the copy also includes the node's descendants.
     */
    cloneNode(deep?: boolean): Node;
    compareDocumentPosition(other: Node): number;
    /**
     * Returns true if other is an inclusive descendant of node, and false otherwise.
     */
    contains(other: Node | null): boolean;
    /**
     * Returns node's shadow-including root.
     */
    getRootNode(options?: GetRootNodeOptions): Node;
    /**
     * Returns whether node has children.
     */
    hasChildNodes(): boolean;
    insertBefore<T extends Node>(newChild: T, refChild: Node | null): T;
    isDefaultNamespace(namespace: string | null): boolean;
    /**
     * Returns whether node and otherNode have the same properties.
     */
    isEqualNode(otherNode: Node | null): boolean;
    isSameNode(otherNode: Node | null): boolean;
    lookupNamespaceURI(prefix: string | null): string | null;
    lookupPrefix(namespace: string | null): string | null;
    /**
     * Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.
     */
    normalize(): void;
    removeChild<T extends Node>(oldChild: T): T;
    replaceChild<T extends Node>(newChild: Node, oldChild: T): T;
    +ATTRIBUTE_NODE: number;
    +CDATA_SECTION_NODE: number;
    +COMMENT_NODE: number;
    +DOCUMENT_FRAGMENT_NODE: number;
    +DOCUMENT_NODE: number;
    +DOCUMENT_POSITION_CONTAINED_BY: number;
    +DOCUMENT_POSITION_CONTAINS: number;
    +DOCUMENT_POSITION_DISCONNECTED: number;
    +DOCUMENT_POSITION_FOLLOWING: number;
    +DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    +DOCUMENT_POSITION_PRECEDING: number;
    +DOCUMENT_TYPE_NODE: number;
    +ELEMENT_NODE: number;
    +ENTITY_NODE: number;
    +ENTITY_REFERENCE_NODE: number;
    +NOTATION_NODE: number;
    +PROCESSING_INSTRUCTION_NODE: number;
    +TEXT_NODE: number;
}

declare var Node: {
    prototype: Node;
    new(): Node;
    +ATTRIBUTE_NODE: number;
    +CDATA_SECTION_NODE: number;
    +COMMENT_NODE: number;
    +DOCUMENT_FRAGMENT_NODE: number;
    +DOCUMENT_NODE: number;
    +DOCUMENT_POSITION_CONTAINED_BY: number;
    +DOCUMENT_POSITION_CONTAINS: number;
    +DOCUMENT_POSITION_DISCONNECTED: number;
    +DOCUMENT_POSITION_FOLLOWING: number;
    +DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    +DOCUMENT_POSITION_PRECEDING: number;
    +DOCUMENT_TYPE_NODE: number;
    +ELEMENT_NODE: number;
    +ENTITY_NODE: number;
    +ENTITY_REFERENCE_NODE: number;
    +NOTATION_NODE: number;
    +PROCESSING_INSTRUCTION_NODE: number;
    +TEXT_NODE: number;
};

declare class NodeFilter {
    acceptNode(node: Node): number;
}

declare var NodeFilter: {
    +FILTER_ACCEPT: number;
    +FILTER_REJECT: number;
    +FILTER_SKIP: number;
    +SHOW_ALL: number;
    +SHOW_ATTRIBUTE: number;
    +SHOW_CDATA_SECTION: number;
    +SHOW_COMMENT: number;
    +SHOW_DOCUMENT: number;
    +SHOW_DOCUMENT_FRAGMENT: number;
    +SHOW_DOCUMENT_TYPE: number;
    +SHOW_ELEMENT: number;
    +SHOW_ENTITY: number;
    +SHOW_ENTITY_REFERENCE: number;
    +SHOW_NOTATION: number;
    +SHOW_PROCESSING_INSTRUCTION: number;
    +SHOW_TEXT: number;
};

declare class NodeIterator {
    +filter: NodeFilter | null;
    +pointerBeforeReferenceNode: boolean;
    +referenceNode: Node;
    +root: Node;
    +whatToShow: number;
    detach(): void;
    nextNode(): Node | null;
    previousNode(): Node | null;
}

declare var NodeIterator: {
    prototype: NodeIterator;
    new(): NodeIterator;
};

declare class NodeList {
    /**
     * Returns the number of nodes in the collection.
     */
    +length: number;
    /**
     * element = collection[index]
     */
    item(index: number): Node | null;
    /**
     * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: Node, key: number, parent: NodeList) => void, thisArg?: any): void;
    [index: number]: Node;
}

declare var NodeList: {
    prototype: NodeList;
    new(): NodeList;
};

declare class NodeListOf<TNode extends Node> extends NodeList {
    length: number;
    item(index: number): TNode;
    /**
     * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: TNode, key: number, parent: NodeListOf<TNode>) => void, thisArg?: any): void;
    [index: number]: TNode;
}

declare class NodeSelector {
    querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
    querySelector<E extends Element = Element>(selectors: string): E | null;
    querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
}

declare class NonDocumentTypeChildNode {
    /**
     * Returns the first following sibling that
     * is an element, and null otherwise.
     */
    +nextElementSibling: Element | null;
    /**
     * Returns the first preceding sibling that
     * is an element, and null otherwise.
     */
    +previousElementSibling: Element | null;
}

declare class NonElementParentNode {
    /**
     * Returns the first element within node's descendants whose ID is elementId.
     */
    getElementById(elementId: string): Element | null;
}

interface NotificationEventMap {
    "click": Event;
    "close": Event;
    "error": Event;
    "show": Event;
}

declare class Notification extends EventTarget {
    +actions: ReadonlyArray<NotificationAction>;
    +badge: string;
    +body: string;
    +data: any;
    +dir: NotificationDirection;
    +icon: string;
    +image: string;
    +lang: string;
    onclick: ((this: Notification, ev: Event) => any) | null;
    onclose: ((this: Notification, ev: Event) => any) | null;
    onerror: ((this: Notification, ev: Event) => any) | null;
    onshow: ((this: Notification, ev: Event) => any) | null;
    +renotify: boolean;
    +requireInteraction: boolean;
    +silent: boolean;
    +tag: string;
    +timestamp: number;
    +title: string;
    +vibrate: ReadonlyArray<number>;
    close(): void;
    addEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Notification: {
    prototype: Notification;
    new(title: string, options?: NotificationOptions): Notification;
    +maxActions: number;
    +permission: NotificationPermission;
    requestPermission(deprecatedCallback?: NotificationPermissionCallback): Promise<NotificationPermission>;
};

declare class OES_element_index_uint {
}

declare class OES_standard_derivatives {
    +FRAGMENT_SHADER_DERIVATIVE_HINT_OES: GLenum;
}

declare class OES_texture_float {
}

declare class OES_texture_float_linear {
}

declare class OES_texture_half_float {
    +HALF_FLOAT_OES: GLenum;
}

declare class OES_texture_half_float_linear {
}

declare class OES_vertex_array_object {
    bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    createVertexArrayOES(): WebGLVertexArrayObjectOES | null;
    deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void;
    isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): GLboolean;
    +VERTEX_ARRAY_BINDING_OES: GLenum;
}

declare class OfflineAudioCompletionEvent extends Event {
    +renderedBuffer: AudioBuffer;
}

declare var OfflineAudioCompletionEvent: {
    prototype: OfflineAudioCompletionEvent;
    new(type: string, eventInitDict: OfflineAudioCompletionEventInit): OfflineAudioCompletionEvent;
};

interface OfflineAudioContextEventMap extends BaseAudioContextEventMap {
    "complete": OfflineAudioCompletionEvent;
}

declare class OfflineAudioContext extends BaseAudioContext {
    +length: number;
    oncomplete: ((this: OfflineAudioContext, ev: OfflineAudioCompletionEvent) => any) | null;
    startRendering(): Promise<AudioBuffer>;
    suspend(suspendTime: number): Promise<void>;
    addEventListener<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var OfflineAudioContext: {
    prototype: OfflineAudioContext;
    new(contextOptions: OfflineAudioContextOptions): OfflineAudioContext;
    new(numberOfChannels: number, length: number, sampleRate: number): OfflineAudioContext;
};

declare class OscillatorNode extends AudioScheduledSourceNode {
    +detune: AudioParam;
    +frequency: AudioParam;
    type: OscillatorType;
    setPeriodicWave(periodicWave: PeriodicWave): void;
    addEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var OscillatorNode: {
    prototype: OscillatorNode;
    new(context: BaseAudioContext, options?: OscillatorOptions): OscillatorNode;
};

declare class OverflowEvent extends UIEvent {
    +horizontalOverflow: boolean;
    +orient: number;
    +verticalOverflow: boolean;
    +BOTH: number;
    +HORIZONTAL: number;
    +VERTICAL: number;
}

declare var OverflowEvent: {
    prototype: OverflowEvent;
    new(): OverflowEvent;
    +BOTH: number;
    +HORIZONTAL: number;
    +VERTICAL: number;
};

declare class PageTransitionEvent extends Event {
    +persisted: boolean;
}

declare var PageTransitionEvent: {
    prototype: PageTransitionEvent;
    new(): PageTransitionEvent;
};

declare class PannerNode extends AudioNode {
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    distanceModel: DistanceModelType;
    maxDistance: number;
    +orientationX: AudioParam;
    +orientationY: AudioParam;
    +orientationZ: AudioParam;
    panningModel: PanningModelType;
    +positionX: AudioParam;
    +positionY: AudioParam;
    +positionZ: AudioParam;
    refDistance: number;
    rolloffFactor: number;
    /** @deprecated */
    setOrientation(x: number, y: number, z: number): void;
    /** @deprecated */
    setPosition(x: number, y: number, z: number): void;
}

declare var PannerNode: {
    prototype: PannerNode;
    new(context: BaseAudioContext, options?: PannerOptions): PannerNode;
};

declare class ParentNode {
    +childElementCount: number;
    /**
     * Returns the child elements.
     */
    +children: HTMLCollection;
    /**
     * Returns the first child that is an element, and null otherwise.
     */
    +firstElementChild: Element | null;
    /**
     * Returns the last child that is an element, and null otherwise.
     */
    +lastElementChild: Element | null;
    /**
     * Inserts nodes after the last child of node, while replacing
     * strings in nodes with equivalent Text nodes.
     * Throws a "HierarchyRequestError" DOMException if the constraints of
     * the node tree are violated.
     */
    append(...nodes: (Node | string)[]): void;
    /**
     * Inserts nodes before the first child of node, while
     * replacing strings in nodes with equivalent Text nodes.
     * Throws a "HierarchyRequestError" DOMException if the constraints of
     * the node tree are violated.
     */
    prepend(...nodes: (Node | string)[]): void;
    /**
     * Returns the first element that is a descendant of node that
     * matches selectors.
     */
    querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
    querySelector<E extends Element = Element>(selectors: string): E | null;
    /**
     * Returns all element descendants of node that
     * match selectors.
     */
    querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
}

declare class Path2D extends CanvasPath {
    addPath(path: Path2D, transform?: DOMMatrix2DInit): void;
}

declare var Path2D: {
    prototype: Path2D;
    new(path?: Path2D | string): Path2D;
};

declare class PaymentAddress {
    +addressLine: string[];
    +city: string;
    +country: string;
    +dependentLocality: string;
    +languageCode: string;
    +organization: string;
    +phone: string;
    +postalCode: string;
    +recipient: string;
    +region: string;
    +sortingCode: string;
    toJSON(): any;
}

declare var PaymentAddress: {
    prototype: PaymentAddress;
    new(): PaymentAddress;
};

interface PaymentRequestEventMap {
    "shippingaddresschange": Event;
    "shippingoptionchange": Event;
}

declare class PaymentRequest extends EventTarget {
    +id: string;
    onshippingaddresschange: ((this: PaymentRequest, ev: Event) => any) | null;
    onshippingoptionchange: ((this: PaymentRequest, ev: Event) => any) | null;
    +shippingAddress: PaymentAddress | null;
    +shippingOption: string | null;
    +shippingType: PaymentShippingType | null;
    abort(): Promise<void>;
    canMakePayment(): Promise<boolean>;
    show(): Promise<PaymentResponse>;
    addEventListener<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var PaymentRequest: {
    prototype: PaymentRequest;
    new(methodData: PaymentMethodData[], details: PaymentDetailsInit, options?: PaymentOptions): PaymentRequest;
};

declare class PaymentRequestUpdateEvent extends Event {
    updateWith(detailsPromise: Promise<PaymentDetailsUpdate>): void;
}

declare var PaymentRequestUpdateEvent: {
    prototype: PaymentRequestUpdateEvent;
    new(type: string, eventInitDict?: PaymentRequestUpdateEventInit): PaymentRequestUpdateEvent;
};

declare class PaymentResponse {
    +details: any;
    +methodName: string;
    +payerEmail: string | null;
    +payerName: string | null;
    +payerPhone: string | null;
    +requestId: string;
    +shippingAddress: PaymentAddress | null;
    +shippingOption: string | null;
    complete(result?: PaymentComplete): Promise<void>;
    toJSON(): any;
}

declare var PaymentResponse: {
    prototype: PaymentResponse;
    new(): PaymentResponse;
};

declare class PerfWidgetExternal {
    +activeNetworkRequestCount: number;
    +averageFrameTime: number;
    +averagePaintTime: number;
    +extraInformationEnabled: boolean;
    +independentRenderingEnabled: boolean;
    +irDisablingContentString: string;
    +irStatusAvailable: boolean;
    +maxCpuSpeed: number;
    +paintRequestsPerSecond: number;
    +performanceCounter: number;
    +performanceCounterFrequency: number;
    addEventListener(eventType: string, callback: Function): void;
    getMemoryUsage(): number;
    getProcessCpuUsage(): number;
    getRecentCpuUsage(last: number | null): any;
    getRecentFrames(last: number | null): any;
    getRecentMemoryUsage(last: number | null): any;
    getRecentPaintRequests(last: number | null): any;
    removeEventListener(eventType: string, callback: Function): void;
    repositionWindow(x: number, y: number): void;
    resizeWindow(width: number, height: number): void;
}

declare var PerfWidgetExternal: {
    prototype: PerfWidgetExternal;
    new(): PerfWidgetExternal;
};

interface PerformanceEventMap {
    "resourcetimingbufferfull": Event;
}

declare class Performance extends EventTarget {
    /** @deprecated */
    +navigation: PerformanceNavigation;
    onresourcetimingbufferfull: ((this: Performance, ev: Event) => any) | null;
    +timeOrigin: number;
    /** @deprecated */
    +timing: PerformanceTiming;
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
    addEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Performance: {
    prototype: Performance;
    new(): Performance;
};

declare class PerformanceEntry {
    +duration: number;
    +entryType: string;
    +name: string;
    +startTime: number;
    toJSON(): any;
}

declare var PerformanceEntry: {
    prototype: PerformanceEntry;
    new(): PerformanceEntry;
};

declare class PerformanceMark extends PerformanceEntry {
}

declare var PerformanceMark: {
    prototype: PerformanceMark;
    new(): PerformanceMark;
};

declare class PerformanceMeasure extends PerformanceEntry {
}

declare var PerformanceMeasure: {
    prototype: PerformanceMeasure;
    new(): PerformanceMeasure;
};

declare class PerformanceNavigation {
    +redirectCount: number;
    +type: number;
    toJSON(): any;
    +TYPE_BACK_FORWARD: number;
    +TYPE_NAVIGATE: number;
    +TYPE_RELOAD: number;
    +TYPE_RESERVED: number;
}

declare var PerformanceNavigation: {
    prototype: PerformanceNavigation;
    new(): PerformanceNavigation;
    +TYPE_BACK_FORWARD: number;
    +TYPE_NAVIGATE: number;
    +TYPE_RELOAD: number;
    +TYPE_RESERVED: number;
};

declare class PerformanceNavigationTiming extends PerformanceResourceTiming {
    +domComplete: number;
    +domContentLoadedEventEnd: number;
    +domContentLoadedEventStart: number;
    +domInteractive: number;
    +loadEventEnd: number;
    +loadEventStart: number;
    +redirectCount: number;
    +type: NavigationType;
    +unloadEventEnd: number;
    +unloadEventStart: number;
    toJSON(): any;
}

declare var PerformanceNavigationTiming: {
    prototype: PerformanceNavigationTiming;
    new(): PerformanceNavigationTiming;
};

declare class PerformanceObserver {
    disconnect(): void;
    observe(options: PerformanceObserverInit): void;
    takeRecords(): PerformanceEntryList;
}

declare var PerformanceObserver: {
    prototype: PerformanceObserver;
    new(callback: PerformanceObserverCallback): PerformanceObserver;
};

declare class PerformanceObserverEntryList {
    getEntries(): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
}

declare var PerformanceObserverEntryList: {
    prototype: PerformanceObserverEntryList;
    new(): PerformanceObserverEntryList;
};

declare class PerformanceResourceTiming extends PerformanceEntry {
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

declare var PerformanceResourceTiming: {
    prototype: PerformanceResourceTiming;
    new(): PerformanceResourceTiming;
};

declare class PerformanceTiming {
    +connectEnd: number;
    +connectStart: number;
    +domComplete: number;
    +domContentLoadedEventEnd: number;
    +domContentLoadedEventStart: number;
    +domInteractive: number;
    +domLoading: number;
    +domainLookupEnd: number;
    +domainLookupStart: number;
    +fetchStart: number;
    +loadEventEnd: number;
    +loadEventStart: number;
    +navigationStart: number;
    +redirectEnd: number;
    +redirectStart: number;
    +requestStart: number;
    +responseEnd: number;
    +responseStart: number;
    +secureConnectionStart: number;
    +unloadEventEnd: number;
    +unloadEventStart: number;
    toJSON(): any;
}

declare var PerformanceTiming: {
    prototype: PerformanceTiming;
    new(): PerformanceTiming;
};

declare class PeriodicWave {
}

declare var PeriodicWave: {
    prototype: PeriodicWave;
    new(context: BaseAudioContext, options?: PeriodicWaveOptions): PeriodicWave;
};

declare class PermissionRequest extends DeferredPermissionRequest {
    +state: MSWebViewPermissionState;
    defer(): void;
}

declare var PermissionRequest: {
    prototype: PermissionRequest;
    new(): PermissionRequest;
};

declare class PermissionRequestedEvent extends Event {
    +permissionRequest: PermissionRequest;
}

declare var PermissionRequestedEvent: {
    prototype: PermissionRequestedEvent;
    new(): PermissionRequestedEvent;
};

declare class Plugin {
    +description: string;
    +filename: string;
    +length: number;
    +name: string;
    +version: string;
    item(index: number): MimeType;
    namedItem(type: string): MimeType;
    [index: number]: MimeType;
}

declare var Plugin: {
    prototype: Plugin;
    new(): Plugin;
};

declare class PluginArray {
    +length: number;
    item(index: number): Plugin;
    namedItem(name: string): Plugin;
    refresh(reload?: boolean): void;
    [index: number]: Plugin;
}

declare var PluginArray: {
    prototype: PluginArray;
    new(): PluginArray;
};

declare class PointerEvent extends MouseEvent {
    +height: number;
    +isPrimary: boolean;
    +pointerId: number;
    +pointerType: string;
    +pressure: number;
    +tangentialPressure: number;
    +tiltX: number;
    +tiltY: number;
    +twist: number;
    +width: number;
}

declare var PointerEvent: {
    prototype: PointerEvent;
    new(type: string, eventInitDict?: PointerEventInit): PointerEvent;
};

declare class PopStateEvent extends Event {
    +state: any;
}

declare var PopStateEvent: {
    prototype: PopStateEvent;
    new(type: string, eventInitDict?: PopStateEventInit): PopStateEvent;
};

declare class Position {
    +coords: Coordinates;
    +timestamp: number;
}

declare class PositionError {
    +code: number;
    +message: string;
    +PERMISSION_DENIED: number;
    +POSITION_UNAVAILABLE: number;
    +TIMEOUT: number;
}

declare class ProcessingInstruction extends CharacterData {
    +target: string;
}

declare var ProcessingInstruction: {
    prototype: ProcessingInstruction;
    new(): ProcessingInstruction;
};

declare class ProgressEvent extends Event {
    +lengthComputable: boolean;
    +loaded: number;
    +total: number;
}

declare var ProgressEvent: {
    prototype: ProgressEvent;
    new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent;
};

declare class PromiseRejectionEvent extends Event {
    +promise: Promise<any>;
    +reason: any;
}

declare var PromiseRejectionEvent: {
    prototype: PromiseRejectionEvent;
    new(type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent;
};

declare class PushManager {
    getSubscription(): Promise<PushSubscription | null>;
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PushPermissionState>;
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>;
}

declare var PushManager: {
    prototype: PushManager;
    new(): PushManager;
    +supportedContentEncodings: ReadonlyArray<string>;
};

declare class PushSubscription {
    +endpoint: string;
    +expirationTime: number | null;
    +options: PushSubscriptionOptions;
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null;
    toJSON(): PushSubscriptionJSON;
    unsubscribe(): Promise<boolean>;
}

declare var PushSubscription: {
    prototype: PushSubscription;
    new(): PushSubscription;
};

declare class PushSubscriptionOptions {
    +applicationServerKey: ArrayBuffer | null;
    +userVisibleOnly: boolean;
}

declare var PushSubscriptionOptions: {
    prototype: PushSubscriptionOptions;
    new(): PushSubscriptionOptions;
};

declare class RTCCertificate {
    +expires: number;
    getFingerprints(): RTCDtlsFingerprint[];
}

declare var RTCCertificate: {
    prototype: RTCCertificate;
    new(): RTCCertificate;
    getSupportedAlgorithms(): AlgorithmIdentifier[];
};

interface RTCDTMFSenderEventMap {
    "tonechange": RTCDTMFToneChangeEvent;
}

declare class RTCDTMFSender extends EventTarget {
    +canInsertDTMF: boolean;
    ontonechange: ((this: RTCDTMFSender, ev: RTCDTMFToneChangeEvent) => any) | null;
    +toneBuffer: string;
    insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
    addEventListener<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var RTCDTMFSender: {
    prototype: RTCDTMFSender;
    new(): RTCDTMFSender;
};

declare class RTCDTMFToneChangeEvent extends Event {
    +tone: string;
}

declare var RTCDTMFToneChangeEvent: {
    prototype: RTCDTMFToneChangeEvent;
    new(type: string, eventInitDict: RTCDTMFToneChangeEventInit): RTCDTMFToneChangeEvent;
};

interface RTCDataChannelEventMap {
    "bufferedamountlow": Event;
    "close": Event;
    "error": RTCErrorEvent;
    "message": MessageEvent;
    "open": Event;
}

declare class RTCDataChannel extends EventTarget {
    binaryType: string;
    +bufferedAmount: number;
    bufferedAmountLowThreshold: number;
    +id: number | null;
    +label: string;
    +maxPacketLifeTime: number | null;
    +maxRetransmits: number | null;
    +negotiated: boolean;
    onbufferedamountlow: ((this: RTCDataChannel, ev: Event) => any) | null;
    onclose: ((this: RTCDataChannel, ev: Event) => any) | null;
    onerror: ((this: RTCDataChannel, ev: RTCErrorEvent) => any) | null;
    onmessage: ((this: RTCDataChannel, ev: MessageEvent) => any) | null;
    onopen: ((this: RTCDataChannel, ev: Event) => any) | null;
    +ordered: boolean;
    +priority: RTCPriorityType;
    +protocol: string;
    +readyState: RTCDataChannelState;
    close(): void;
    send(data: string): void;
    send(data: Blob): void;
    send(data: ArrayBuffer): void;
    send(data: ArrayBufferView): void;
    addEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var RTCDataChannel: {
    prototype: RTCDataChannel;
    new(): RTCDataChannel;
};

declare class RTCDataChannelEvent extends Event {
    +channel: RTCDataChannel;
}

declare var RTCDataChannelEvent: {
    prototype: RTCDataChannelEvent;
    new(type: string, eventInitDict: RTCDataChannelEventInit): RTCDataChannelEvent;
};

interface RTCDtlsTransportEventMap {
    "error": RTCErrorEvent;
    "statechange": Event;
}

declare class RTCDtlsTransport extends EventTarget {
    onerror: ((this: RTCDtlsTransport, ev: RTCErrorEvent) => any) | null;
    onstatechange: ((this: RTCDtlsTransport, ev: Event) => any) | null;
    +state: RTCDtlsTransportState;
    +transport: RTCIceTransport;
    getRemoteCertificates(): ArrayBuffer[];
    addEventListener<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var RTCDtlsTransport: {
    prototype: RTCDtlsTransport;
    new(): RTCDtlsTransport;
};

declare class RTCDtlsTransportStateChangedEvent extends Event {
    +state: RTCDtlsTransportState;
}

declare var RTCDtlsTransportStateChangedEvent: {
    prototype: RTCDtlsTransportStateChangedEvent;
    new(): RTCDtlsTransportStateChangedEvent;
};

interface RTCDtmfSenderEventMap {
    "tonechange": RTCDTMFToneChangeEvent;
}

declare class RTCDtmfSender extends EventTarget {
    +canInsertDTMF: boolean;
    +duration: number;
    +interToneGap: number;
    ontonechange: ((this: RTCDtmfSender, ev: RTCDTMFToneChangeEvent) => any) | null;
    +sender: RTCRtpSender;
    +toneBuffer: string;
    insertDTMF(tones: string, duration?: number, interToneGap?: number): void;
    addEventListener<K extends keyof RTCDtmfSenderEventMap>(type: K, listener: (this: RTCDtmfSender, ev: RTCDtmfSenderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCDtmfSenderEventMap>(type: K, listener: (this: RTCDtmfSender, ev: RTCDtmfSenderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var RTCDtmfSender: {
    prototype: RTCDtmfSender;
    new(sender: RTCRtpSender): RTCDtmfSender;
};

declare class RTCError extends Error {
    errorDetail: string;
    httpRequestStatusCode: number;
    message: string;
    name: string;
    receivedAlert: number | null;
    sctpCauseCode: number;
    sdpLineNumber: number;
    sentAlert: number | null;
}

declare var RTCError: {
    prototype: RTCError;
    new(errorDetail?: string, message?: string): RTCError;
};

declare class RTCErrorEvent extends Event {
    +error: RTCError | null;
}

declare var RTCErrorEvent: {
    prototype: RTCErrorEvent;
    new(type: string, eventInitDict: RTCErrorEventInit): RTCErrorEvent;
};

declare class RTCIceCandidate {
    +candidate: string;
    +component: RTCIceComponent | null;
    +foundation: string | null;
    +ip: string | null;
    +port: number | null;
    +priority: number | null;
    +protocol: RTCIceProtocol | null;
    +relatedAddress: string | null;
    +relatedPort: number | null;
    +sdpMLineIndex: number | null;
    +sdpMid: string | null;
    +tcpType: RTCIceTcpCandidateType | null;
    +type: RTCIceCandidateType | null;
    +usernameFragment: string | null;
    toJSON(): RTCIceCandidateInit;
}

declare var RTCIceCandidate: {
    prototype: RTCIceCandidate;
    new(candidateInitDict?: RTCIceCandidateInit): RTCIceCandidate;
};

declare class RTCIceCandidatePairChangedEvent extends Event {
    +pair: RTCIceCandidatePair;
}

declare var RTCIceCandidatePairChangedEvent: {
    prototype: RTCIceCandidatePairChangedEvent;
    new(): RTCIceCandidatePairChangedEvent;
};

interface RTCIceGathererEventMap {
    "error": Event;
    "localcandidate": RTCIceGathererEvent;
}

declare class RTCIceGatherer extends RTCStatsProvider {
    +component: RTCIceComponent;
    onerror: ((this: RTCIceGatherer, ev: Event) => any) | null;
    onlocalcandidate: ((this: RTCIceGatherer, ev: RTCIceGathererEvent) => any) | null;
    createAssociatedGatherer(): RTCIceGatherer;
    getLocalCandidates(): RTCIceCandidateDictionary[];
    getLocalParameters(): RTCIceParameters;
    addEventListener<K extends keyof RTCIceGathererEventMap>(type: K, listener: (this: RTCIceGatherer, ev: RTCIceGathererEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCIceGathererEventMap>(type: K, listener: (this: RTCIceGatherer, ev: RTCIceGathererEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var RTCIceGatherer: {
    prototype: RTCIceGatherer;
    new(options: RTCIceGatherOptions): RTCIceGatherer;
};

declare class RTCIceGathererEvent extends Event {
    +candidate: RTCIceCandidateDictionary | RTCIceCandidateComplete;
}

declare var RTCIceGathererEvent: {
    prototype: RTCIceGathererEvent;
    new(): RTCIceGathererEvent;
};

interface RTCIceTransportEventMap {
    "gatheringstatechange": Event;
    "selectedcandidatepairchange": Event;
    "statechange": Event;
}

declare class RTCIceTransport extends EventTarget {
    +component: RTCIceComponent;
    +gatheringState: RTCIceGathererState;
    ongatheringstatechange: ((this: RTCIceTransport, ev: Event) => any) | null;
    onselectedcandidatepairchange: ((this: RTCIceTransport, ev: Event) => any) | null;
    onstatechange: ((this: RTCIceTransport, ev: Event) => any) | null;
    +role: RTCIceRole;
    +state: RTCIceTransportState;
    getLocalCandidates(): RTCIceCandidate[];
    getLocalParameters(): RTCIceParameters | null;
    getRemoteCandidates(): RTCIceCandidate[];
    getRemoteParameters(): RTCIceParameters | null;
    getSelectedCandidatePair(): RTCIceCandidatePair | null;
    addEventListener<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var RTCIceTransport: {
    prototype: RTCIceTransport;
    new(): RTCIceTransport;
};

declare class RTCIceTransportStateChangedEvent extends Event {
    +state: RTCIceTransportState;
}

declare var RTCIceTransportStateChangedEvent: {
    prototype: RTCIceTransportStateChangedEvent;
    new(): RTCIceTransportStateChangedEvent;
};

declare class RTCIdentityAssertion {
    idp: string;
    name: string;
}

declare var RTCIdentityAssertion: {
    prototype: RTCIdentityAssertion;
    new(idp: string, name: string): RTCIdentityAssertion;
};

interface RTCPeerConnectionEventMap {
    "connectionstatechange": Event;
    "datachannel": RTCDataChannelEvent;
    "icecandidate": RTCPeerConnectionIceEvent;
    "icecandidateerror": RTCPeerConnectionIceErrorEvent;
    "iceconnectionstatechange": Event;
    "icegatheringstatechange": Event;
    "negotiationneeded": Event;
    "signalingstatechange": Event;
    "statsended": RTCStatsEvent;
    "track": RTCTrackEvent;
}

declare class RTCPeerConnection extends EventTarget {
    +canTrickleIceCandidates: boolean | null;
    +connectionState: RTCPeerConnectionState;
    +currentLocalDescription: RTCSessionDescription | null;
    +currentRemoteDescription: RTCSessionDescription | null;
    +iceConnectionState: RTCIceConnectionState;
    +iceGatheringState: RTCIceGatheringState;
    +idpErrorInfo: string | null;
    +idpLoginUrl: string | null;
    +localDescription: RTCSessionDescription | null;
    onconnectionstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    ondatachannel: ((this: RTCPeerConnection, ev: RTCDataChannelEvent) => any) | null;
    onicecandidate: ((this: RTCPeerConnection, ev: RTCPeerConnectionIceEvent) => any) | null;
    onicecandidateerror: ((this: RTCPeerConnection, ev: RTCPeerConnectionIceErrorEvent) => any) | null;
    oniceconnectionstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onicegatheringstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onnegotiationneeded: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onsignalingstatechange: ((this: RTCPeerConnection, ev: Event) => any) | null;
    onstatsended: ((this: RTCPeerConnection, ev: RTCStatsEvent) => any) | null;
    ontrack: ((this: RTCPeerConnection, ev: RTCTrackEvent) => any) | null;
    +peerIdentity: Promise<RTCIdentityAssertion>;
    +pendingLocalDescription: RTCSessionDescription | null;
    +pendingRemoteDescription: RTCSessionDescription | null;
    +remoteDescription: RTCSessionDescription | null;
    +sctp: RTCSctpTransport | null;
    +signalingState: RTCSignalingState;
    addIceCandidate(candidate: RTCIceCandidateInit | RTCIceCandidate): Promise<void>;
    addTrack(track: MediaStreamTrack, ...streams: MediaStream[]): RTCRtpSender;
    addTransceiver(trackOrKind: MediaStreamTrack | string, init?: RTCRtpTransceiverInit): RTCRtpTransceiver;
    close(): void;
    createAnswer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
    createDataChannel(label: string, dataChannelDict?: RTCDataChannelInit): RTCDataChannel;
    createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
    getConfiguration(): RTCConfiguration;
    getIdentityAssertion(): Promise<string>;
    getReceivers(): RTCRtpReceiver[];
    getSenders(): RTCRtpSender[];
    getStats(selector?: MediaStreamTrack | null): Promise<RTCStatsReport>;
    getTransceivers(): RTCRtpTransceiver[];
    removeTrack(sender: RTCRtpSender): void;
    setConfiguration(configuration: RTCConfiguration): void;
    setIdentityProvider(provider: string, options?: RTCIdentityProviderOptions): void;
    setLocalDescription(description: RTCSessionDescriptionInit): Promise<void>;
    setRemoteDescription(description: RTCSessionDescriptionInit): Promise<void>;
    addEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var RTCPeerConnection: {
    prototype: RTCPeerConnection;
    new(configuration?: RTCConfiguration): RTCPeerConnection;
    generateCertificate(keygenAlgorithm: AlgorithmIdentifier): Promise<RTCCertificate>;
    getDefaultIceServers(): RTCIceServer[];
};

declare class RTCPeerConnectionIceErrorEvent extends Event {
    +errorCode: number;
    +errorText: string;
    +hostCandidate: string;
    +url: string;
}

declare var RTCPeerConnectionIceErrorEvent: {
    prototype: RTCPeerConnectionIceErrorEvent;
    new(type: string, eventInitDict: RTCPeerConnectionIceErrorEventInit): RTCPeerConnectionIceErrorEvent;
};

declare class RTCPeerConnectionIceEvent extends Event {
    +candidate: RTCIceCandidate | null;
    +url: string | null;
}

declare var RTCPeerConnectionIceEvent: {
    prototype: RTCPeerConnectionIceEvent;
    new(type: string, eventInitDict?: RTCPeerConnectionIceEventInit): RTCPeerConnectionIceEvent;
};

declare class RTCRtpReceiver {
    +rtcpTransport: RTCDtlsTransport | null;
    +track: MediaStreamTrack;
    +transport: RTCDtlsTransport | null;
    getContributingSources(): RTCRtpContributingSource[];
    getParameters(): RTCRtpReceiveParameters;
    getStats(): Promise<RTCStatsReport>;
    getSynchronizationSources(): RTCRtpSynchronizationSource[];
}

declare var RTCRtpReceiver: {
    prototype: RTCRtpReceiver;
    new(): RTCRtpReceiver;
    getCapabilities(kind: string): RTCRtpCapabilities | null;
};

declare class RTCRtpSender {
    +dtmf: RTCDTMFSender | null;
    +rtcpTransport: RTCDtlsTransport | null;
    +track: MediaStreamTrack | null;
    +transport: RTCDtlsTransport | null;
    getParameters(): RTCRtpSendParameters;
    getStats(): Promise<RTCStatsReport>;
    replaceTrack(withTrack: MediaStreamTrack | null): Promise<void>;
    setParameters(parameters: RTCRtpSendParameters): Promise<void>;
    setStreams(...streams: MediaStream[]): void;
}

declare var RTCRtpSender: {
    prototype: RTCRtpSender;
    new(): RTCRtpSender;
    getCapabilities(kind: string): RTCRtpCapabilities | null;
};

declare class RTCRtpTransceiver {
    +currentDirection: RTCRtpTransceiverDirection | null;
    direction: RTCRtpTransceiverDirection;
    +mid: string | null;
    +receiver: RTCRtpReceiver;
    +sender: RTCRtpSender;
    +stopped: boolean;
    setCodecPreferences(codecs: RTCRtpCodecCapability[]): void;
    stop(): void;
}

declare var RTCRtpTransceiver: {
    prototype: RTCRtpTransceiver;
    new(): RTCRtpTransceiver;
};

interface RTCSctpTransportEventMap {
    "statechange": Event;
}

declare class RTCSctpTransport {
    +maxChannels: number | null;
    +maxMessageSize: number;
    onstatechange: ((this: RTCSctpTransport, ev: Event) => any) | null;
    +state: RTCSctpTransportState;
    +transport: RTCDtlsTransport;
    addEventListener<K extends keyof RTCSctpTransportEventMap>(type: K, listener: (this: RTCSctpTransport, ev: RTCSctpTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCSctpTransportEventMap>(type: K, listener: (this: RTCSctpTransport, ev: RTCSctpTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var RTCSctpTransport: {
    prototype: RTCSctpTransport;
    new(): RTCSctpTransport;
};

declare class RTCSessionDescription {
    +sdp: string;
    +type: RTCSdpType;
    toJSON(): any;
}

declare var RTCSessionDescription: {
    prototype: RTCSessionDescription;
    new(descriptionInitDict: RTCSessionDescriptionInit): RTCSessionDescription;
};

interface RTCSrtpSdesTransportEventMap {
    "error": Event;
}

declare class RTCSrtpSdesTransport extends EventTarget {
    onerror: ((this: RTCSrtpSdesTransport, ev: Event) => any) | null;
    +transport: RTCIceTransport;
    addEventListener<K extends keyof RTCSrtpSdesTransportEventMap>(type: K, listener: (this: RTCSrtpSdesTransport, ev: RTCSrtpSdesTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCSrtpSdesTransportEventMap>(type: K, listener: (this: RTCSrtpSdesTransport, ev: RTCSrtpSdesTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var RTCSrtpSdesTransport: {
    prototype: RTCSrtpSdesTransport;
    new(transport: RTCIceTransport, encryptParameters: RTCSrtpSdesParameters, decryptParameters: RTCSrtpSdesParameters): RTCSrtpSdesTransport;
    getLocalParameters(): RTCSrtpSdesParameters[];
};

declare class RTCSsrcConflictEvent extends Event {
    +ssrc: number;
}

declare var RTCSsrcConflictEvent: {
    prototype: RTCSsrcConflictEvent;
    new(): RTCSsrcConflictEvent;
};

declare class RTCStatsEvent extends Event {
    +report: RTCStatsReport;
}

declare var RTCStatsEvent: {
    prototype: RTCStatsEvent;
    new(type: string, eventInitDict: RTCStatsEventInit): RTCStatsEvent;
};

declare class RTCStatsProvider extends EventTarget {
    getStats(): Promise<RTCStatsReport>;
    msGetStats(): Promise<RTCStatsReport>;
}

declare var RTCStatsProvider: {
    prototype: RTCStatsProvider;
    new(): RTCStatsProvider;
};

declare class RTCStatsReport {
    forEach(callbackfn: (value: any, key: string, parent: RTCStatsReport) => void, thisArg?: any): void;
}

declare var RTCStatsReport: {
    prototype: RTCStatsReport;
    new(): RTCStatsReport;
};

declare class RTCTrackEvent extends Event {
    +receiver: RTCRtpReceiver;
    +streams: ReadonlyArray<MediaStream>;
    +track: MediaStreamTrack;
    +transceiver: RTCRtpTransceiver;
}

declare var RTCTrackEvent: {
    prototype: RTCTrackEvent;
    new(type: string, eventInitDict: RTCTrackEventInit): RTCTrackEvent;
};

declare class RadioNodeList extends NodeList {
    value: string;
}

declare var RadioNodeList: {
    prototype: RadioNodeList;
    new(): RadioNodeList;
};

declare class RandomSource {
    getRandomValues<T extends Int8Array | Uint8ClampedArray | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array>(array: T): T;
}

declare var RandomSource: {
    prototype: RandomSource;
    new(): RandomSource;
};

declare class Range extends AbstractRange {
    /**
     * Returns the node, furthest away from
     * the document, that is an ancestor of both range's start node and end node.
     */
    +commonAncestorContainer: Node;
    cloneContents(): DocumentFragment;
    cloneRange(): Range;
    collapse(toStart?: boolean): void;
    compareBoundaryPoints(how: number, sourceRange: Range): number;
    /**
     * Returns −1 if the point is before the range, 0 if the point is
     * in the range, and 1 if the point is after the range.
     */
    comparePoint(node: Node, offset: number): number;
    createContextualFragment(fragment: string): DocumentFragment;
    deleteContents(): void;
    detach(): void;
    extractContents(): DocumentFragment;
    getBoundingClientRect(): ClientRect | DOMRect;
    getClientRects(): ClientRectList | DOMRectList;
    insertNode(node: Node): void;
    /**
     * Returns whether range intersects node.
     */
    intersectsNode(node: Node): boolean;
    isPointInRange(node: Node, offset: number): boolean;
    selectNode(node: Node): void;
    selectNodeContents(node: Node): void;
    setEnd(node: Node, offset: number): void;
    setEndAfter(node: Node): void;
    setEndBefore(node: Node): void;
    setStart(node: Node, offset: number): void;
    setStartAfter(node: Node): void;
    setStartBefore(node: Node): void;
    surroundContents(newParent: Node): void;
    +END_TO_END: number;
    +END_TO_START: number;
    +START_TO_END: number;
    +START_TO_START: number;
}

declare var Range: {
    prototype: Range;
    new(): Range;
    +END_TO_END: number;
    +END_TO_START: number;
    +START_TO_END: number;
    +START_TO_START: number;
};

declare class ReadableByteStreamController {
    +byobRequest: ReadableStreamBYOBRequest | undefined;
    +desiredSize: number | null;
    close(): void;
    enqueue(chunk: ArrayBufferView): void;
    error(error?: any): void;
}

declare class ReadableStream<R = any> {
    +locked: boolean;
    cancel(reason?: any): Promise<void>;
    getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
    getReader(): ReadableStreamDefaultReader<R>;
    pipeThrough<T>({ writable, readable }: { writable: WritableStream<R>, readable: ReadableStream<T> }, options?: PipeOptions): ReadableStream<T>;
    pipeTo(dest: WritableStream<R>, options?: PipeOptions): Promise<void>;
    tee(): [ReadableStream<R>, ReadableStream<R>];
}

declare var ReadableStream: {
    prototype: ReadableStream;
    new(underlyingSource: UnderlyingByteSource, strategy?: { highWaterMark?: number, size?: undefined }): ReadableStream<Uint8Array>;
    new<R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>;
};

declare class ReadableStreamBYOBReader {
    +closed: Promise<void>;
    cancel(reason?: any): Promise<void>;
    read<T extends ArrayBufferView>(view: T): Promise<ReadableStreamReadResult<T>>;
    releaseLock(): void;
}

declare var ReadableStreamBYOBReader: {
    prototype: ReadableStreamBYOBReader;
    new(stream: ReadableStream<Uint8Array>): ReadableStreamBYOBReader;
};

declare class ReadableStreamBYOBRequest {
    +view: ArrayBufferView;
    respond(bytesWritten: number): void;
    respondWithNewView(view: ArrayBufferView): void;
}

declare class ReadableStreamDefaultController<R = any> {
    +desiredSize: number | null;
    close(): void;
    enqueue(chunk: R): void;
    error(error?: any): void;
}

declare class ReadableStreamDefaultReader<R = any> {
    +closed: Promise<void>;
    cancel(reason?: any): Promise<void>;
    read(): Promise<ReadableStreamReadResult<R>>;
    releaseLock(): void;
}

declare class ReadableStreamReadResult<T> {
    done: boolean;
    value: T;
}

declare class ReadableStreamReader<R = any> {
    cancel(): Promise<void>;
    read(): Promise<ReadableStreamReadResult<R>>;
    releaseLock(): void;
}

declare var ReadableStreamReader: {
    prototype: ReadableStreamReader;
    new(): ReadableStreamReader;
};

declare class Request extends Body {
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

declare var Request: {
    prototype: Request;
    new(input: RequestInfo, init?: RequestInit): Request;
};

declare class Response extends Body {
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

declare var Response: {
    prototype: Response;
    new(body?: BodyInit | null, init?: ResponseInit): Response;
    error(): Response;
    redirect(url: string, status?: number): Response;
};

declare class SVGAElement extends SVGGraphicsElement, SVGURIReference {
    +target: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGAElement: {
    prototype: SVGAElement;
    new(): SVGAElement;
};

declare class SVGAngle {
    +unitType: number;
    value: number;
    valueAsString: string;
    valueInSpecifiedUnits: number;
    convertToSpecifiedUnits(unitType: number): void;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    +SVG_ANGLETYPE_DEG: number;
    +SVG_ANGLETYPE_GRAD: number;
    +SVG_ANGLETYPE_RAD: number;
    +SVG_ANGLETYPE_UNKNOWN: number;
    +SVG_ANGLETYPE_UNSPECIFIED: number;
}

declare var SVGAngle: {
    prototype: SVGAngle;
    new(): SVGAngle;
    +SVG_ANGLETYPE_DEG: number;
    +SVG_ANGLETYPE_GRAD: number;
    +SVG_ANGLETYPE_RAD: number;
    +SVG_ANGLETYPE_UNKNOWN: number;
    +SVG_ANGLETYPE_UNSPECIFIED: number;
};

declare class SVGAnimateElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGAnimateElement: {
    prototype: SVGAnimateElement;
    new(): SVGAnimateElement;
};

declare class SVGAnimateMotionElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateMotionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateMotionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGAnimateMotionElement: {
    prototype: SVGAnimateMotionElement;
    new(): SVGAnimateMotionElement;
};

declare class SVGAnimateTransformElement extends SVGAnimationElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateTransformElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateTransformElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGAnimateTransformElement: {
    prototype: SVGAnimateTransformElement;
    new(): SVGAnimateTransformElement;
};

declare class SVGAnimatedAngle {
    +animVal: SVGAngle;
    +baseVal: SVGAngle;
}

declare var SVGAnimatedAngle: {
    prototype: SVGAnimatedAngle;
    new(): SVGAnimatedAngle;
};

declare class SVGAnimatedBoolean {
    +animVal: boolean;
    baseVal: boolean;
}

declare var SVGAnimatedBoolean: {
    prototype: SVGAnimatedBoolean;
    new(): SVGAnimatedBoolean;
};

declare class SVGAnimatedEnumeration {
    +animVal: number;
    baseVal: number;
}

declare var SVGAnimatedEnumeration: {
    prototype: SVGAnimatedEnumeration;
    new(): SVGAnimatedEnumeration;
};

declare class SVGAnimatedInteger {
    +animVal: number;
    baseVal: number;
}

declare var SVGAnimatedInteger: {
    prototype: SVGAnimatedInteger;
    new(): SVGAnimatedInteger;
};

declare class SVGAnimatedLength {
    +animVal: SVGLength;
    +baseVal: SVGLength;
}

declare var SVGAnimatedLength: {
    prototype: SVGAnimatedLength;
    new(): SVGAnimatedLength;
};

declare class SVGAnimatedLengthList {
    +animVal: SVGLengthList;
    +baseVal: SVGLengthList;
}

declare var SVGAnimatedLengthList: {
    prototype: SVGAnimatedLengthList;
    new(): SVGAnimatedLengthList;
};

declare class SVGAnimatedNumber {
    +animVal: number;
    baseVal: number;
}

declare var SVGAnimatedNumber: {
    prototype: SVGAnimatedNumber;
    new(): SVGAnimatedNumber;
};

declare class SVGAnimatedNumberList {
    +animVal: SVGNumberList;
    +baseVal: SVGNumberList;
}

declare var SVGAnimatedNumberList: {
    prototype: SVGAnimatedNumberList;
    new(): SVGAnimatedNumberList;
};

declare class SVGAnimatedPoints {
    +animatedPoints: SVGPointList;
    +points: SVGPointList;
}

declare class SVGAnimatedPreserveAspectRatio {
    +animVal: SVGPreserveAspectRatio;
    +baseVal: SVGPreserveAspectRatio;
}

declare var SVGAnimatedPreserveAspectRatio: {
    prototype: SVGAnimatedPreserveAspectRatio;
    new(): SVGAnimatedPreserveAspectRatio;
};

declare class SVGAnimatedRect {
    +animVal: DOMRectReadOnly;
    +baseVal: DOMRect;
}

declare var SVGAnimatedRect: {
    prototype: SVGAnimatedRect;
    new(): SVGAnimatedRect;
};

declare class SVGAnimatedString {
    +animVal: string;
    baseVal: string;
}

declare var SVGAnimatedString: {
    prototype: SVGAnimatedString;
    new(): SVGAnimatedString;
};

declare class SVGAnimatedTransformList {
    +animVal: SVGTransformList;
    +baseVal: SVGTransformList;
}

declare var SVGAnimatedTransformList: {
    prototype: SVGAnimatedTransformList;
    new(): SVGAnimatedTransformList;
};

declare class SVGAnimationElement extends SVGElement {
    +targetElement: SVGElement;
    getCurrentTime(): number;
    getSimpleDuration(): number;
    getStartTime(): number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimationElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimationElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGAnimationElement: {
    prototype: SVGAnimationElement;
    new(): SVGAnimationElement;
};

declare class SVGCircleElement extends SVGGraphicsElement {
    +cx: SVGAnimatedLength;
    +cy: SVGAnimatedLength;
    +r: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGCircleElement: {
    prototype: SVGCircleElement;
    new(): SVGCircleElement;
};

declare class SVGClipPathElement extends SVGGraphicsElement {
    +clipPathUnits: SVGAnimatedEnumeration;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGClipPathElement: {
    prototype: SVGClipPathElement;
    new(): SVGClipPathElement;
};

declare class SVGComponentTransferFunctionElement extends SVGElement {
    +amplitude: SVGAnimatedNumber;
    +exponent: SVGAnimatedNumber;
    +intercept: SVGAnimatedNumber;
    +offset: SVGAnimatedNumber;
    +slope: SVGAnimatedNumber;
    +tableValues: SVGAnimatedNumberList;
    +type: SVGAnimatedEnumeration;
    +SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    +SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    +SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    +SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
    +SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    +SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGComponentTransferFunctionElement: {
    prototype: SVGComponentTransferFunctionElement;
    new(): SVGComponentTransferFunctionElement;
    +SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    +SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    +SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    +SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
    +SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    +SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
};

declare class SVGCursorElement extends SVGElement {
    +x: SVGAnimatedLength;
    +y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCursorElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCursorElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGCursorElement: {
    prototype: SVGCursorElement;
    new(): SVGCursorElement;
};

declare class SVGDefsElement extends SVGGraphicsElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGDefsElement: {
    prototype: SVGDefsElement;
    new(): SVGDefsElement;
};

declare class SVGDescElement extends SVGElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDescElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDescElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGDescElement: {
    prototype: SVGDescElement;
    new(): SVGDescElement;
};

interface SVGElementEventMap extends ElementEventMap, GlobalEventHandlersEventMap, DocumentAndElementEventHandlersEventMap {
}

declare class SVGElement extends Element, GlobalEventHandlers, DocumentAndElementEventHandlers, SVGElementInstance, HTMLOrSVGElement, ElementCSSInlineStyle {
    /** @deprecated */
    +className: any;
    +ownerSVGElement: SVGSVGElement | null;
    +viewportElement: SVGElement | null;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGElement: {
    prototype: SVGElement;
    new(): SVGElement;
};

declare class SVGElementInstance extends EventTarget {
    +correspondingElement: SVGElement;
    +correspondingUseElement: SVGUseElement;
}

declare var SVGElementInstance: {
    prototype: SVGElementInstance;
    new(): SVGElementInstance;
};

declare class SVGElementInstanceList {
    /** @deprecated */
    +length: number;
    /** @deprecated */
    item(index: number): SVGElementInstance;
}

declare var SVGElementInstanceList: {
    prototype: SVGElementInstanceList;
    new(): SVGElementInstanceList;
};

declare class SVGEllipseElement extends SVGGraphicsElement {
    +cx: SVGAnimatedLength;
    +cy: SVGAnimatedLength;
    +rx: SVGAnimatedLength;
    +ry: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGEllipseElement: {
    prototype: SVGEllipseElement;
    new(): SVGEllipseElement;
};

declare class SVGFEBlendElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    +in1: SVGAnimatedString;
    +in2: SVGAnimatedString;
    +mode: SVGAnimatedEnumeration;
    +SVG_FEBLEND_MODE_COLOR: number;
    +SVG_FEBLEND_MODE_COLOR_BURN: number;
    +SVG_FEBLEND_MODE_COLOR_DODGE: number;
    +SVG_FEBLEND_MODE_DARKEN: number;
    +SVG_FEBLEND_MODE_DIFFERENCE: number;
    +SVG_FEBLEND_MODE_EXCLUSION: number;
    +SVG_FEBLEND_MODE_HARD_LIGHT: number;
    +SVG_FEBLEND_MODE_HUE: number;
    +SVG_FEBLEND_MODE_LIGHTEN: number;
    +SVG_FEBLEND_MODE_LUMINOSITY: number;
    +SVG_FEBLEND_MODE_MULTIPLY: number;
    +SVG_FEBLEND_MODE_NORMAL: number;
    +SVG_FEBLEND_MODE_OVERLAY: number;
    +SVG_FEBLEND_MODE_SATURATION: number;
    +SVG_FEBLEND_MODE_SCREEN: number;
    +SVG_FEBLEND_MODE_SOFT_LIGHT: number;
    +SVG_FEBLEND_MODE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEBlendElement: {
    prototype: SVGFEBlendElement;
    new(): SVGFEBlendElement;
    +SVG_FEBLEND_MODE_COLOR: number;
    +SVG_FEBLEND_MODE_COLOR_BURN: number;
    +SVG_FEBLEND_MODE_COLOR_DODGE: number;
    +SVG_FEBLEND_MODE_DARKEN: number;
    +SVG_FEBLEND_MODE_DIFFERENCE: number;
    +SVG_FEBLEND_MODE_EXCLUSION: number;
    +SVG_FEBLEND_MODE_HARD_LIGHT: number;
    +SVG_FEBLEND_MODE_HUE: number;
    +SVG_FEBLEND_MODE_LIGHTEN: number;
    +SVG_FEBLEND_MODE_LUMINOSITY: number;
    +SVG_FEBLEND_MODE_MULTIPLY: number;
    +SVG_FEBLEND_MODE_NORMAL: number;
    +SVG_FEBLEND_MODE_OVERLAY: number;
    +SVG_FEBLEND_MODE_SATURATION: number;
    +SVG_FEBLEND_MODE_SCREEN: number;
    +SVG_FEBLEND_MODE_SOFT_LIGHT: number;
    +SVG_FEBLEND_MODE_UNKNOWN: number;
};

declare class SVGFEColorMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    +in1: SVGAnimatedString;
    +type: SVGAnimatedEnumeration;
    +values: SVGAnimatedNumberList;
    +SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    +SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
    +SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    +SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    +SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEColorMatrixElement: {
    prototype: SVGFEColorMatrixElement;
    new(): SVGFEColorMatrixElement;
    +SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    +SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
    +SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    +SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    +SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
};

declare class SVGFEComponentTransferElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    +in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEComponentTransferElement: {
    prototype: SVGFEComponentTransferElement;
    new(): SVGFEComponentTransferElement;
};

declare class SVGFECompositeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    +in1: SVGAnimatedString;
    +in2: SVGAnimatedString;
    +k1: SVGAnimatedNumber;
    +k2: SVGAnimatedNumber;
    +k3: SVGAnimatedNumber;
    +k4: SVGAnimatedNumber;
    +operator: SVGAnimatedEnumeration;
    +SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    +SVG_FECOMPOSITE_OPERATOR_ATOP: number;
    +SVG_FECOMPOSITE_OPERATOR_IN: number;
    +SVG_FECOMPOSITE_OPERATOR_OUT: number;
    +SVG_FECOMPOSITE_OPERATOR_OVER: number;
    +SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    +SVG_FECOMPOSITE_OPERATOR_XOR: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFECompositeElement: {
    prototype: SVGFECompositeElement;
    new(): SVGFECompositeElement;
    +SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    +SVG_FECOMPOSITE_OPERATOR_ATOP: number;
    +SVG_FECOMPOSITE_OPERATOR_IN: number;
    +SVG_FECOMPOSITE_OPERATOR_OUT: number;
    +SVG_FECOMPOSITE_OPERATOR_OVER: number;
    +SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    +SVG_FECOMPOSITE_OPERATOR_XOR: number;
};

declare class SVGFEConvolveMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    +bias: SVGAnimatedNumber;
    +divisor: SVGAnimatedNumber;
    +edgeMode: SVGAnimatedEnumeration;
    +in1: SVGAnimatedString;
    +kernelMatrix: SVGAnimatedNumberList;
    +kernelUnitLengthX: SVGAnimatedNumber;
    +kernelUnitLengthY: SVGAnimatedNumber;
    +orderX: SVGAnimatedInteger;
    +orderY: SVGAnimatedInteger;
    +preserveAlpha: SVGAnimatedBoolean;
    +targetX: SVGAnimatedInteger;
    +targetY: SVGAnimatedInteger;
    +SVG_EDGEMODE_DUPLICATE: number;
    +SVG_EDGEMODE_NONE: number;
    +SVG_EDGEMODE_UNKNOWN: number;
    +SVG_EDGEMODE_WRAP: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEConvolveMatrixElement: {
    prototype: SVGFEConvolveMatrixElement;
    new(): SVGFEConvolveMatrixElement;
    +SVG_EDGEMODE_DUPLICATE: number;
    +SVG_EDGEMODE_NONE: number;
    +SVG_EDGEMODE_UNKNOWN: number;
    +SVG_EDGEMODE_WRAP: number;
};

declare class SVGFEDiffuseLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    +diffuseConstant: SVGAnimatedNumber;
    +in1: SVGAnimatedString;
    +kernelUnitLengthX: SVGAnimatedNumber;
    +kernelUnitLengthY: SVGAnimatedNumber;
    +surfaceScale: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEDiffuseLightingElement: {
    prototype: SVGFEDiffuseLightingElement;
    new(): SVGFEDiffuseLightingElement;
};

declare class SVGFEDisplacementMapElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    +in1: SVGAnimatedString;
    +in2: SVGAnimatedString;
    +scale: SVGAnimatedNumber;
    +xChannelSelector: SVGAnimatedEnumeration;
    +yChannelSelector: SVGAnimatedEnumeration;
    +SVG_CHANNEL_A: number;
    +SVG_CHANNEL_B: number;
    +SVG_CHANNEL_G: number;
    +SVG_CHANNEL_R: number;
    +SVG_CHANNEL_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEDisplacementMapElement: {
    prototype: SVGFEDisplacementMapElement;
    new(): SVGFEDisplacementMapElement;
    +SVG_CHANNEL_A: number;
    +SVG_CHANNEL_B: number;
    +SVG_CHANNEL_G: number;
    +SVG_CHANNEL_R: number;
    +SVG_CHANNEL_UNKNOWN: number;
};

declare class SVGFEDistantLightElement extends SVGElement {
    +azimuth: SVGAnimatedNumber;
    +elevation: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEDistantLightElement: {
    prototype: SVGFEDistantLightElement;
    new(): SVGFEDistantLightElement;
};

declare class SVGFEFloodElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEFloodElement: {
    prototype: SVGFEFloodElement;
    new(): SVGFEFloodElement;
};

declare class SVGFEFuncAElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEFuncAElement: {
    prototype: SVGFEFuncAElement;
    new(): SVGFEFuncAElement;
};

declare class SVGFEFuncBElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEFuncBElement: {
    prototype: SVGFEFuncBElement;
    new(): SVGFEFuncBElement;
};

declare class SVGFEFuncGElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEFuncGElement: {
    prototype: SVGFEFuncGElement;
    new(): SVGFEFuncGElement;
};

declare class SVGFEFuncRElement extends SVGComponentTransferFunctionElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEFuncRElement: {
    prototype: SVGFEFuncRElement;
    new(): SVGFEFuncRElement;
};

declare class SVGFEGaussianBlurElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    +in1: SVGAnimatedString;
    +stdDeviationX: SVGAnimatedNumber;
    +stdDeviationY: SVGAnimatedNumber;
    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEGaussianBlurElement: {
    prototype: SVGFEGaussianBlurElement;
    new(): SVGFEGaussianBlurElement;
};

declare class SVGFEImageElement extends SVGElement, SVGFilterPrimitiveStandardAttributes, SVGURIReference {
    +preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEImageElement: {
    prototype: SVGFEImageElement;
    new(): SVGFEImageElement;
};

declare class SVGFEMergeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEMergeElement: {
    prototype: SVGFEMergeElement;
    new(): SVGFEMergeElement;
};

declare class SVGFEMergeNodeElement extends SVGElement {
    +in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEMergeNodeElement: {
    prototype: SVGFEMergeNodeElement;
    new(): SVGFEMergeNodeElement;
};

declare class SVGFEMorphologyElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    +in1: SVGAnimatedString;
    +operator: SVGAnimatedEnumeration;
    +radiusX: SVGAnimatedNumber;
    +radiusY: SVGAnimatedNumber;
    +SVG_MORPHOLOGY_OPERATOR_DILATE: number;
    +SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    +SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEMorphologyElement: {
    prototype: SVGFEMorphologyElement;
    new(): SVGFEMorphologyElement;
    +SVG_MORPHOLOGY_OPERATOR_DILATE: number;
    +SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    +SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
};

declare class SVGFEOffsetElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    +dx: SVGAnimatedNumber;
    +dy: SVGAnimatedNumber;
    +in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEOffsetElement: {
    prototype: SVGFEOffsetElement;
    new(): SVGFEOffsetElement;
};

declare class SVGFEPointLightElement extends SVGElement {
    +x: SVGAnimatedNumber;
    +y: SVGAnimatedNumber;
    +z: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFEPointLightElement: {
    prototype: SVGFEPointLightElement;
    new(): SVGFEPointLightElement;
};

declare class SVGFESpecularLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    +in1: SVGAnimatedString;
    +kernelUnitLengthX: SVGAnimatedNumber;
    +kernelUnitLengthY: SVGAnimatedNumber;
    +specularConstant: SVGAnimatedNumber;
    +specularExponent: SVGAnimatedNumber;
    +surfaceScale: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFESpecularLightingElement: {
    prototype: SVGFESpecularLightingElement;
    new(): SVGFESpecularLightingElement;
};

declare class SVGFESpotLightElement extends SVGElement {
    +limitingConeAngle: SVGAnimatedNumber;
    +pointsAtX: SVGAnimatedNumber;
    +pointsAtY: SVGAnimatedNumber;
    +pointsAtZ: SVGAnimatedNumber;
    +specularExponent: SVGAnimatedNumber;
    +x: SVGAnimatedNumber;
    +y: SVGAnimatedNumber;
    +z: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFESpotLightElement: {
    prototype: SVGFESpotLightElement;
    new(): SVGFESpotLightElement;
};

declare class SVGFETileElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    +in1: SVGAnimatedString;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFETileElement: {
    prototype: SVGFETileElement;
    new(): SVGFETileElement;
};

declare class SVGFETurbulenceElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    +baseFrequencyX: SVGAnimatedNumber;
    +baseFrequencyY: SVGAnimatedNumber;
    +numOctaves: SVGAnimatedInteger;
    +seed: SVGAnimatedNumber;
    +stitchTiles: SVGAnimatedEnumeration;
    +type: SVGAnimatedEnumeration;
    +SVG_STITCHTYPE_NOSTITCH: number;
    +SVG_STITCHTYPE_STITCH: number;
    +SVG_STITCHTYPE_UNKNOWN: number;
    +SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    +SVG_TURBULENCE_TYPE_TURBULENCE: number;
    +SVG_TURBULENCE_TYPE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFETurbulenceElement: {
    prototype: SVGFETurbulenceElement;
    new(): SVGFETurbulenceElement;
    +SVG_STITCHTYPE_NOSTITCH: number;
    +SVG_STITCHTYPE_STITCH: number;
    +SVG_STITCHTYPE_UNKNOWN: number;
    +SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    +SVG_TURBULENCE_TYPE_TURBULENCE: number;
    +SVG_TURBULENCE_TYPE_UNKNOWN: number;
};

declare class SVGFilterElement extends SVGElement, SVGURIReference {
    /** @deprecated */
    +filterResX: SVGAnimatedInteger;
    /** @deprecated */
    +filterResY: SVGAnimatedInteger;
    +filterUnits: SVGAnimatedEnumeration;
    +height: SVGAnimatedLength;
    +primitiveUnits: SVGAnimatedEnumeration;
    +width: SVGAnimatedLength;
    +x: SVGAnimatedLength;
    +y: SVGAnimatedLength;
    /** @deprecated */
    setFilterRes(filterResX: number, filterResY: number): void;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGFilterElement: {
    prototype: SVGFilterElement;
    new(): SVGFilterElement;
};

declare class SVGFilterPrimitiveStandardAttributes {
    +height: SVGAnimatedLength;
    +result: SVGAnimatedString;
    +width: SVGAnimatedLength;
    +x: SVGAnimatedLength;
    +y: SVGAnimatedLength;
}

declare class SVGFitToViewBox {
    +preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    +viewBox: SVGAnimatedRect;
}

declare class SVGForeignObjectElement extends SVGGraphicsElement {
    +height: SVGAnimatedLength;
    +width: SVGAnimatedLength;
    +x: SVGAnimatedLength;
    +y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGForeignObjectElement: {
    prototype: SVGForeignObjectElement;
    new(): SVGForeignObjectElement;
};

declare class SVGGElement extends SVGGraphicsElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGGElement: {
    prototype: SVGGElement;
    new(): SVGGElement;
};

declare class SVGGeometryElement extends SVGGraphicsElement {
    +pathLength: SVGAnimatedNumber;
    getPointAtLength(distance: number): DOMPoint;
    getTotalLength(): number;
    isPointInFill(point?: DOMPointInit): boolean;
    isPointInStroke(point?: DOMPointInit): boolean;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGGeometryElement: {
    prototype: SVGGeometryElement;
    new(): SVGGeometryElement;
};

declare class SVGGradientElement extends SVGElement, SVGURIReference {
    +gradientTransform: SVGAnimatedTransformList;
    +gradientUnits: SVGAnimatedEnumeration;
    +spreadMethod: SVGAnimatedEnumeration;
    +SVG_SPREADMETHOD_PAD: number;
    +SVG_SPREADMETHOD_REFLECT: number;
    +SVG_SPREADMETHOD_REPEAT: number;
    +SVG_SPREADMETHOD_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGGradientElement: {
    prototype: SVGGradientElement;
    new(): SVGGradientElement;
    +SVG_SPREADMETHOD_PAD: number;
    +SVG_SPREADMETHOD_REFLECT: number;
    +SVG_SPREADMETHOD_REPEAT: number;
    +SVG_SPREADMETHOD_UNKNOWN: number;
};

declare class SVGGraphicsElement extends SVGElement, SVGTests {
    +transform: SVGAnimatedTransformList;
    getBBox(options?: SVGBoundingBoxOptions): DOMRect;
    getCTM(): DOMMatrix | null;
    getScreenCTM(): DOMMatrix | null;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGGraphicsElement: {
    prototype: SVGGraphicsElement;
    new(): SVGGraphicsElement;
};

declare class SVGImageElement extends SVGGraphicsElement, SVGURIReference {
    +height: SVGAnimatedLength;
    +preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    +width: SVGAnimatedLength;
    +x: SVGAnimatedLength;
    +y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGImageElement: {
    prototype: SVGImageElement;
    new(): SVGImageElement;
};

declare class SVGLength {
    +unitType: number;
    value: number;
    valueAsString: string;
    valueInSpecifiedUnits: number;
    convertToSpecifiedUnits(unitType: number): void;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    +SVG_LENGTHTYPE_CM: number;
    +SVG_LENGTHTYPE_EMS: number;
    +SVG_LENGTHTYPE_EXS: number;
    +SVG_LENGTHTYPE_IN: number;
    +SVG_LENGTHTYPE_MM: number;
    +SVG_LENGTHTYPE_NUMBER: number;
    +SVG_LENGTHTYPE_PC: number;
    +SVG_LENGTHTYPE_PERCENTAGE: number;
    +SVG_LENGTHTYPE_PT: number;
    +SVG_LENGTHTYPE_PX: number;
    +SVG_LENGTHTYPE_UNKNOWN: number;
}

declare var SVGLength: {
    prototype: SVGLength;
    new(): SVGLength;
    +SVG_LENGTHTYPE_CM: number;
    +SVG_LENGTHTYPE_EMS: number;
    +SVG_LENGTHTYPE_EXS: number;
    +SVG_LENGTHTYPE_IN: number;
    +SVG_LENGTHTYPE_MM: number;
    +SVG_LENGTHTYPE_NUMBER: number;
    +SVG_LENGTHTYPE_PC: number;
    +SVG_LENGTHTYPE_PERCENTAGE: number;
    +SVG_LENGTHTYPE_PT: number;
    +SVG_LENGTHTYPE_PX: number;
    +SVG_LENGTHTYPE_UNKNOWN: number;
};

declare class SVGLengthList {
    +length: number;
    +numberOfItems: number;
    appendItem(newItem: SVGLength): SVGLength;
    clear(): void;
    getItem(index: number): SVGLength;
    initialize(newItem: SVGLength): SVGLength;
    insertItemBefore(newItem: SVGLength, index: number): SVGLength;
    removeItem(index: number): SVGLength;
    replaceItem(newItem: SVGLength, index: number): SVGLength;
    [index: number]: SVGLength;
}

declare var SVGLengthList: {
    prototype: SVGLengthList;
    new(): SVGLengthList;
};

declare class SVGLineElement extends SVGGraphicsElement {
    +x1: SVGAnimatedLength;
    +x2: SVGAnimatedLength;
    +y1: SVGAnimatedLength;
    +y2: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGLineElement: {
    prototype: SVGLineElement;
    new(): SVGLineElement;
};

declare class SVGLinearGradientElement extends SVGGradientElement {
    +x1: SVGAnimatedLength;
    +x2: SVGAnimatedLength;
    +y1: SVGAnimatedLength;
    +y2: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGLinearGradientElement: {
    prototype: SVGLinearGradientElement;
    new(): SVGLinearGradientElement;
};

declare class SVGMarkerElement extends SVGElement, SVGFitToViewBox {
    +markerHeight: SVGAnimatedLength;
    +markerUnits: SVGAnimatedEnumeration;
    +markerWidth: SVGAnimatedLength;
    +orientAngle: SVGAnimatedAngle;
    +orientType: SVGAnimatedEnumeration;
    +refX: SVGAnimatedLength;
    +refY: SVGAnimatedLength;
    setOrientToAngle(angle: SVGAngle): void;
    setOrientToAuto(): void;
    +SVG_MARKERUNITS_STROKEWIDTH: number;
    +SVG_MARKERUNITS_UNKNOWN: number;
    +SVG_MARKERUNITS_USERSPACEONUSE: number;
    +SVG_MARKER_ORIENT_ANGLE: number;
    +SVG_MARKER_ORIENT_AUTO: number;
    +SVG_MARKER_ORIENT_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGMarkerElement: {
    prototype: SVGMarkerElement;
    new(): SVGMarkerElement;
    +SVG_MARKERUNITS_STROKEWIDTH: number;
    +SVG_MARKERUNITS_UNKNOWN: number;
    +SVG_MARKERUNITS_USERSPACEONUSE: number;
    +SVG_MARKER_ORIENT_ANGLE: number;
    +SVG_MARKER_ORIENT_AUTO: number;
    +SVG_MARKER_ORIENT_UNKNOWN: number;
};

declare class SVGMaskElement extends SVGElement, SVGTests {
    +height: SVGAnimatedLength;
    +maskContentUnits: SVGAnimatedEnumeration;
    +maskUnits: SVGAnimatedEnumeration;
    +width: SVGAnimatedLength;
    +x: SVGAnimatedLength;
    +y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGMaskElement: {
    prototype: SVGMaskElement;
    new(): SVGMaskElement;
};

declare class SVGMetadataElement extends SVGElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGMetadataElement: {
    prototype: SVGMetadataElement;
    new(): SVGMetadataElement;
};

declare class SVGNumber {
    value: number;
}

declare var SVGNumber: {
    prototype: SVGNumber;
    new(): SVGNumber;
};

declare class SVGNumberList {
    +length: number;
    +numberOfItems: number;
    appendItem(newItem: SVGNumber): SVGNumber;
    clear(): void;
    getItem(index: number): SVGNumber;
    initialize(newItem: SVGNumber): SVGNumber;
    insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;
    removeItem(index: number): SVGNumber;
    replaceItem(newItem: SVGNumber, index: number): SVGNumber;
    [index: number]: SVGNumber;
}

declare var SVGNumberList: {
    prototype: SVGNumberList;
    new(): SVGNumberList;
};

declare class SVGPathElement extends SVGGraphicsElement {
    /** @deprecated */
    +pathSegList: SVGPathSegList;
    /** @deprecated */
    createSVGPathSegArcAbs(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean): SVGPathSegArcAbs;
    /** @deprecated */
    createSVGPathSegArcRel(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean): SVGPathSegArcRel;
    /** @deprecated */
    createSVGPathSegClosePath(): SVGPathSegClosePath;
    /** @deprecated */
    createSVGPathSegCurvetoCubicAbs(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicAbs;
    /** @deprecated */
    createSVGPathSegCurvetoCubicRel(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicRel;
    /** @deprecated */
    createSVGPathSegCurvetoCubicSmoothAbs(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothAbs;
    /** @deprecated */
    createSVGPathSegCurvetoCubicSmoothRel(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothRel;
    /** @deprecated */
    createSVGPathSegCurvetoQuadraticAbs(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticAbs;
    /** @deprecated */
    createSVGPathSegCurvetoQuadraticRel(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticRel;
    /** @deprecated */
    createSVGPathSegCurvetoQuadraticSmoothAbs(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothAbs;
    /** @deprecated */
    createSVGPathSegCurvetoQuadraticSmoothRel(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothRel;
    /** @deprecated */
    createSVGPathSegLinetoAbs(x: number, y: number): SVGPathSegLinetoAbs;
    /** @deprecated */
    createSVGPathSegLinetoHorizontalAbs(x: number): SVGPathSegLinetoHorizontalAbs;
    /** @deprecated */
    createSVGPathSegLinetoHorizontalRel(x: number): SVGPathSegLinetoHorizontalRel;
    /** @deprecated */
    createSVGPathSegLinetoRel(x: number, y: number): SVGPathSegLinetoRel;
    /** @deprecated */
    createSVGPathSegLinetoVerticalAbs(y: number): SVGPathSegLinetoVerticalAbs;
    /** @deprecated */
    createSVGPathSegLinetoVerticalRel(y: number): SVGPathSegLinetoVerticalRel;
    /** @deprecated */
    createSVGPathSegMovetoAbs(x: number, y: number): SVGPathSegMovetoAbs;
    /** @deprecated */
    createSVGPathSegMovetoRel(x: number, y: number): SVGPathSegMovetoRel;
    /** @deprecated */
    getPathSegAtLength(distance: number): number;
    getPointAtLength(distance: number): SVGPoint;
    getTotalLength(): number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGPathElement: {
    prototype: SVGPathElement;
    new(): SVGPathElement;
};

declare class SVGPathSeg {
    +pathSegType: number;
    +pathSegTypeAsLetter: string;
    +PATHSEG_ARC_ABS: number;
    +PATHSEG_ARC_REL: number;
    +PATHSEG_CLOSEPATH: number;
    +PATHSEG_CURVETO_CUBIC_ABS: number;
    +PATHSEG_CURVETO_CUBIC_REL: number;
    +PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
    +PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
    +PATHSEG_CURVETO_QUADRATIC_ABS: number;
    +PATHSEG_CURVETO_QUADRATIC_REL: number;
    +PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
    +PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
    +PATHSEG_LINETO_ABS: number;
    +PATHSEG_LINETO_HORIZONTAL_ABS: number;
    +PATHSEG_LINETO_HORIZONTAL_REL: number;
    +PATHSEG_LINETO_REL: number;
    +PATHSEG_LINETO_VERTICAL_ABS: number;
    +PATHSEG_LINETO_VERTICAL_REL: number;
    +PATHSEG_MOVETO_ABS: number;
    +PATHSEG_MOVETO_REL: number;
    +PATHSEG_UNKNOWN: number;
}

declare var SVGPathSeg: {
    prototype: SVGPathSeg;
    new(): SVGPathSeg;
    +PATHSEG_ARC_ABS: number;
    +PATHSEG_ARC_REL: number;
    +PATHSEG_CLOSEPATH: number;
    +PATHSEG_CURVETO_CUBIC_ABS: number;
    +PATHSEG_CURVETO_CUBIC_REL: number;
    +PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
    +PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
    +PATHSEG_CURVETO_QUADRATIC_ABS: number;
    +PATHSEG_CURVETO_QUADRATIC_REL: number;
    +PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
    +PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
    +PATHSEG_LINETO_ABS: number;
    +PATHSEG_LINETO_HORIZONTAL_ABS: number;
    +PATHSEG_LINETO_HORIZONTAL_REL: number;
    +PATHSEG_LINETO_REL: number;
    +PATHSEG_LINETO_VERTICAL_ABS: number;
    +PATHSEG_LINETO_VERTICAL_REL: number;
    +PATHSEG_MOVETO_ABS: number;
    +PATHSEG_MOVETO_REL: number;
    +PATHSEG_UNKNOWN: number;
};

declare class SVGPathSegArcAbs extends SVGPathSeg {
    angle: number;
    largeArcFlag: boolean;
    r1: number;
    r2: number;
    sweepFlag: boolean;
    x: number;
    y: number;
}

declare var SVGPathSegArcAbs: {
    prototype: SVGPathSegArcAbs;
    new(): SVGPathSegArcAbs;
};

declare class SVGPathSegArcRel extends SVGPathSeg {
    angle: number;
    largeArcFlag: boolean;
    r1: number;
    r2: number;
    sweepFlag: boolean;
    x: number;
    y: number;
}

declare var SVGPathSegArcRel: {
    prototype: SVGPathSegArcRel;
    new(): SVGPathSegArcRel;
};

declare class SVGPathSegClosePath extends SVGPathSeg {
}

declare var SVGPathSegClosePath: {
    prototype: SVGPathSegClosePath;
    new(): SVGPathSegClosePath;
};

declare class SVGPathSegCurvetoCubicAbs extends SVGPathSeg {
    x: number;
    x1: number;
    x2: number;
    y: number;
    y1: number;
    y2: number;
}

declare var SVGPathSegCurvetoCubicAbs: {
    prototype: SVGPathSegCurvetoCubicAbs;
    new(): SVGPathSegCurvetoCubicAbs;
};

declare class SVGPathSegCurvetoCubicRel extends SVGPathSeg {
    x: number;
    x1: number;
    x2: number;
    y: number;
    y1: number;
    y2: number;
}

declare var SVGPathSegCurvetoCubicRel: {
    prototype: SVGPathSegCurvetoCubicRel;
    new(): SVGPathSegCurvetoCubicRel;
};

declare class SVGPathSegCurvetoCubicSmoothAbs extends SVGPathSeg {
    x: number;
    x2: number;
    y: number;
    y2: number;
}

declare var SVGPathSegCurvetoCubicSmoothAbs: {
    prototype: SVGPathSegCurvetoCubicSmoothAbs;
    new(): SVGPathSegCurvetoCubicSmoothAbs;
};

declare class SVGPathSegCurvetoCubicSmoothRel extends SVGPathSeg {
    x: number;
    x2: number;
    y: number;
    y2: number;
}

declare var SVGPathSegCurvetoCubicSmoothRel: {
    prototype: SVGPathSegCurvetoCubicSmoothRel;
    new(): SVGPathSegCurvetoCubicSmoothRel;
};

declare class SVGPathSegCurvetoQuadraticAbs extends SVGPathSeg {
    x: number;
    x1: number;
    y: number;
    y1: number;
}

declare var SVGPathSegCurvetoQuadraticAbs: {
    prototype: SVGPathSegCurvetoQuadraticAbs;
    new(): SVGPathSegCurvetoQuadraticAbs;
};

declare class SVGPathSegCurvetoQuadraticRel extends SVGPathSeg {
    x: number;
    x1: number;
    y: number;
    y1: number;
}

declare var SVGPathSegCurvetoQuadraticRel: {
    prototype: SVGPathSegCurvetoQuadraticRel;
    new(): SVGPathSegCurvetoQuadraticRel;
};

declare class SVGPathSegCurvetoQuadraticSmoothAbs extends SVGPathSeg {
    x: number;
    y: number;
}

declare var SVGPathSegCurvetoQuadraticSmoothAbs: {
    prototype: SVGPathSegCurvetoQuadraticSmoothAbs;
    new(): SVGPathSegCurvetoQuadraticSmoothAbs;
};

declare class SVGPathSegCurvetoQuadraticSmoothRel extends SVGPathSeg {
    x: number;
    y: number;
}

declare var SVGPathSegCurvetoQuadraticSmoothRel: {
    prototype: SVGPathSegCurvetoQuadraticSmoothRel;
    new(): SVGPathSegCurvetoQuadraticSmoothRel;
};

declare class SVGPathSegLinetoAbs extends SVGPathSeg {
    x: number;
    y: number;
}

declare var SVGPathSegLinetoAbs: {
    prototype: SVGPathSegLinetoAbs;
    new(): SVGPathSegLinetoAbs;
};

declare class SVGPathSegLinetoHorizontalAbs extends SVGPathSeg {
    x: number;
}

declare var SVGPathSegLinetoHorizontalAbs: {
    prototype: SVGPathSegLinetoHorizontalAbs;
    new(): SVGPathSegLinetoHorizontalAbs;
};

declare class SVGPathSegLinetoHorizontalRel extends SVGPathSeg {
    x: number;
}

declare var SVGPathSegLinetoHorizontalRel: {
    prototype: SVGPathSegLinetoHorizontalRel;
    new(): SVGPathSegLinetoHorizontalRel;
};

declare class SVGPathSegLinetoRel extends SVGPathSeg {
    x: number;
    y: number;
}

declare var SVGPathSegLinetoRel: {
    prototype: SVGPathSegLinetoRel;
    new(): SVGPathSegLinetoRel;
};

declare class SVGPathSegLinetoVerticalAbs extends SVGPathSeg {
    y: number;
}

declare var SVGPathSegLinetoVerticalAbs: {
    prototype: SVGPathSegLinetoVerticalAbs;
    new(): SVGPathSegLinetoVerticalAbs;
};

declare class SVGPathSegLinetoVerticalRel extends SVGPathSeg {
    y: number;
}

declare var SVGPathSegLinetoVerticalRel: {
    prototype: SVGPathSegLinetoVerticalRel;
    new(): SVGPathSegLinetoVerticalRel;
};

declare class SVGPathSegList {
    +numberOfItems: number;
    appendItem(newItem: SVGPathSeg): SVGPathSeg;
    clear(): void;
    getItem(index: number): SVGPathSeg;
    initialize(newItem: SVGPathSeg): SVGPathSeg;
    insertItemBefore(newItem: SVGPathSeg, index: number): SVGPathSeg;
    removeItem(index: number): SVGPathSeg;
    replaceItem(newItem: SVGPathSeg, index: number): SVGPathSeg;
}

declare var SVGPathSegList: {
    prototype: SVGPathSegList;
    new(): SVGPathSegList;
};

declare class SVGPathSegMovetoAbs extends SVGPathSeg {
    x: number;
    y: number;
}

declare var SVGPathSegMovetoAbs: {
    prototype: SVGPathSegMovetoAbs;
    new(): SVGPathSegMovetoAbs;
};

declare class SVGPathSegMovetoRel extends SVGPathSeg {
    x: number;
    y: number;
}

declare var SVGPathSegMovetoRel: {
    prototype: SVGPathSegMovetoRel;
    new(): SVGPathSegMovetoRel;
};

declare class SVGPatternElement extends SVGElement, SVGTests, SVGFitToViewBox, SVGURIReference {
    +height: SVGAnimatedLength;
    +patternContentUnits: SVGAnimatedEnumeration;
    +patternTransform: SVGAnimatedTransformList;
    +patternUnits: SVGAnimatedEnumeration;
    +width: SVGAnimatedLength;
    +x: SVGAnimatedLength;
    +y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGPatternElement: {
    prototype: SVGPatternElement;
    new(): SVGPatternElement;
};

declare class SVGPointList {
    +numberOfItems: number;
    appendItem(newItem: SVGPoint): SVGPoint;
    clear(): void;
    getItem(index: number): SVGPoint;
    initialize(newItem: SVGPoint): SVGPoint;
    insertItemBefore(newItem: SVGPoint, index: number): SVGPoint;
    removeItem(index: number): SVGPoint;
    replaceItem(newItem: SVGPoint, index: number): SVGPoint;
}

declare var SVGPointList: {
    prototype: SVGPointList;
    new(): SVGPointList;
};

declare class SVGPolygonElement extends SVGGraphicsElement, SVGAnimatedPoints {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGPolygonElement: {
    prototype: SVGPolygonElement;
    new(): SVGPolygonElement;
};

declare class SVGPolylineElement extends SVGGraphicsElement, SVGAnimatedPoints {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGPolylineElement: {
    prototype: SVGPolylineElement;
    new(): SVGPolylineElement;
};

declare class SVGPreserveAspectRatio {
    align: number;
    meetOrSlice: number;
    +SVG_MEETORSLICE_MEET: number;
    +SVG_MEETORSLICE_SLICE: number;
    +SVG_MEETORSLICE_UNKNOWN: number;
    +SVG_PRESERVEASPECTRATIO_NONE: number;
    +SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
    +SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    +SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    +SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    +SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    +SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    +SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    +SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    +SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    +SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
}

declare var SVGPreserveAspectRatio: {
    prototype: SVGPreserveAspectRatio;
    new(): SVGPreserveAspectRatio;
    +SVG_MEETORSLICE_MEET: number;
    +SVG_MEETORSLICE_SLICE: number;
    +SVG_MEETORSLICE_UNKNOWN: number;
    +SVG_PRESERVEASPECTRATIO_NONE: number;
    +SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
    +SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    +SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    +SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    +SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    +SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    +SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    +SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    +SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    +SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
};

declare class SVGRadialGradientElement extends SVGGradientElement {
    +cx: SVGAnimatedLength;
    +cy: SVGAnimatedLength;
    +fx: SVGAnimatedLength;
    +fy: SVGAnimatedLength;
    +r: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGRadialGradientElement: {
    prototype: SVGRadialGradientElement;
    new(): SVGRadialGradientElement;
};

declare class SVGRectElement extends SVGGraphicsElement {
    +height: SVGAnimatedLength;
    +rx: SVGAnimatedLength;
    +ry: SVGAnimatedLength;
    +width: SVGAnimatedLength;
    +x: SVGAnimatedLength;
    +y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGRectElement: {
    prototype: SVGRectElement;
    new(): SVGRectElement;
};

interface SVGSVGElementEventMap extends SVGElementEventMap {
    "SVGUnload": Event;
    "SVGZoom": SVGZoomEvent;
}

declare class SVGSVGElement extends SVGGraphicsElement, DocumentEvent, SVGFitToViewBox, SVGZoomAndPan {
    /** @deprecated */
    contentScriptType: string;
    /** @deprecated */
    contentStyleType: string;
    currentScale: number;
    +currentTranslate: SVGPoint;
    +height: SVGAnimatedLength;
    onunload: ((this: SVGSVGElement, ev: Event) => any) | null;
    onzoom: ((this: SVGSVGElement, ev: SVGZoomEvent) => any) | null;
    /** @deprecated */
    +pixelUnitToMillimeterX: number;
    /** @deprecated */
    +pixelUnitToMillimeterY: number;
    /** @deprecated */
    +screenPixelToMillimeterX: number;
    /** @deprecated */
    +screenPixelToMillimeterY: number;
    /** @deprecated */
    +viewport: SVGRect;
    +width: SVGAnimatedLength;
    +x: SVGAnimatedLength;
    +y: SVGAnimatedLength;
    checkEnclosure(element: SVGElement, rect: SVGRect): boolean;
    checkIntersection(element: SVGElement, rect: SVGRect): boolean;
    createSVGAngle(): SVGAngle;
    createSVGLength(): SVGLength;
    createSVGMatrix(): SVGMatrix;
    createSVGNumber(): SVGNumber;
    createSVGPoint(): SVGPoint;
    createSVGRect(): SVGRect;
    createSVGTransform(): SVGTransform;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
    deselectAll(): void;
    /** @deprecated */
    forceRedraw(): void;
    getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
    /** @deprecated */
    getCurrentTime(): number;
    getElementById(elementId: string): Element;
    getEnclosureList(rect: SVGRect, referenceElement: SVGElement): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;
    getIntersectionList(rect: SVGRect, referenceElement: SVGElement): NodeListOf<SVGCircleElement | SVGEllipseElement | SVGImageElement | SVGLineElement | SVGPathElement | SVGPolygonElement | SVGPolylineElement | SVGRectElement | SVGTextElement | SVGUseElement>;
    /** @deprecated */
    pauseAnimations(): void;
    /** @deprecated */
    setCurrentTime(seconds: number): void;
    /** @deprecated */
    suspendRedraw(maxWaitMilliseconds: number): number;
    /** @deprecated */
    unpauseAnimations(): void;
    /** @deprecated */
    unsuspendRedraw(suspendHandleID: number): void;
    /** @deprecated */
    unsuspendRedrawAll(): void;
    addEventListener<K extends keyof SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGSVGElement: {
    prototype: SVGSVGElement;
    new(): SVGSVGElement;
    +SVG_ZOOMANDPAN_DISABLE: number;
    +SVG_ZOOMANDPAN_MAGNIFY: number;
    +SVG_ZOOMANDPAN_UNKNOWN: number;
};

declare class SVGScriptElement extends SVGElement, SVGURIReference {
    type: string;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGScriptElement: {
    prototype: SVGScriptElement;
    new(): SVGScriptElement;
};

declare class SVGStopElement extends SVGElement {
    +offset: SVGAnimatedNumber;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGStopElement: {
    prototype: SVGStopElement;
    new(): SVGStopElement;
};

declare class SVGStringList {
    +length: number;
    +numberOfItems: number;
    appendItem(newItem: string): string;
    clear(): void;
    getItem(index: number): string;
    initialize(newItem: string): string;
    insertItemBefore(newItem: string, index: number): string;
    removeItem(index: number): string;
    replaceItem(newItem: string, index: number): string;
    [index: number]: string;
}

declare var SVGStringList: {
    prototype: SVGStringList;
    new(): SVGStringList;
};

declare class SVGStyleElement extends SVGElement {
    disabled: boolean;
    media: string;
    title: string;
    type: string;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGStyleElement: {
    prototype: SVGStyleElement;
    new(): SVGStyleElement;
};

declare class SVGSwitchElement extends SVGGraphicsElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGSwitchElement: {
    prototype: SVGSwitchElement;
    new(): SVGSwitchElement;
};

declare class SVGSymbolElement extends SVGElement, SVGFitToViewBox {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGSymbolElement: {
    prototype: SVGSymbolElement;
    new(): SVGSymbolElement;
};

declare class SVGTSpanElement extends SVGTextPositioningElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGTSpanElement: {
    prototype: SVGTSpanElement;
    new(): SVGTSpanElement;
};

declare class SVGTests {
    +requiredExtensions: SVGStringList;
    +systemLanguage: SVGStringList;
}

declare class SVGTextContentElement extends SVGGraphicsElement {
    +lengthAdjust: SVGAnimatedEnumeration;
    +textLength: SVGAnimatedLength;
    getCharNumAtPosition(point: SVGPoint): number;
    getComputedTextLength(): number;
    getEndPositionOfChar(charnum: number): SVGPoint;
    getExtentOfChar(charnum: number): SVGRect;
    getNumberOfChars(): number;
    getRotationOfChar(charnum: number): number;
    getStartPositionOfChar(charnum: number): SVGPoint;
    getSubStringLength(charnum: number, nchars: number): number;
    selectSubString(charnum: number, nchars: number): void;
    +LENGTHADJUST_SPACING: number;
    +LENGTHADJUST_SPACINGANDGLYPHS: number;
    +LENGTHADJUST_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGTextContentElement: {
    prototype: SVGTextContentElement;
    new(): SVGTextContentElement;
    +LENGTHADJUST_SPACING: number;
    +LENGTHADJUST_SPACINGANDGLYPHS: number;
    +LENGTHADJUST_UNKNOWN: number;
};

declare class SVGTextElement extends SVGTextPositioningElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGTextElement: {
    prototype: SVGTextElement;
    new(): SVGTextElement;
};

declare class SVGTextPathElement extends SVGTextContentElement, SVGURIReference {
    +method: SVGAnimatedEnumeration;
    +spacing: SVGAnimatedEnumeration;
    +startOffset: SVGAnimatedLength;
    +TEXTPATH_METHODTYPE_ALIGN: number;
    +TEXTPATH_METHODTYPE_STRETCH: number;
    +TEXTPATH_METHODTYPE_UNKNOWN: number;
    +TEXTPATH_SPACINGTYPE_AUTO: number;
    +TEXTPATH_SPACINGTYPE_EXACT: number;
    +TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGTextPathElement: {
    prototype: SVGTextPathElement;
    new(): SVGTextPathElement;
    +TEXTPATH_METHODTYPE_ALIGN: number;
    +TEXTPATH_METHODTYPE_STRETCH: number;
    +TEXTPATH_METHODTYPE_UNKNOWN: number;
    +TEXTPATH_SPACINGTYPE_AUTO: number;
    +TEXTPATH_SPACINGTYPE_EXACT: number;
    +TEXTPATH_SPACINGTYPE_UNKNOWN: number;
};

declare class SVGTextPositioningElement extends SVGTextContentElement {
    +dx: SVGAnimatedLengthList;
    +dy: SVGAnimatedLengthList;
    +rotate: SVGAnimatedNumberList;
    +x: SVGAnimatedLengthList;
    +y: SVGAnimatedLengthList;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGTextPositioningElement: {
    prototype: SVGTextPositioningElement;
    new(): SVGTextPositioningElement;
};

declare class SVGTitleElement extends SVGElement {
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGTitleElement: {
    prototype: SVGTitleElement;
    new(): SVGTitleElement;
};

declare class SVGTransform {
    +angle: number;
    +matrix: SVGMatrix;
    +type: number;
    setMatrix(matrix: SVGMatrix): void;
    setRotate(angle: number, cx: number, cy: number): void;
    setScale(sx: number, sy: number): void;
    setSkewX(angle: number): void;
    setSkewY(angle: number): void;
    setTranslate(tx: number, ty: number): void;
    +SVG_TRANSFORM_MATRIX: number;
    +SVG_TRANSFORM_ROTATE: number;
    +SVG_TRANSFORM_SCALE: number;
    +SVG_TRANSFORM_SKEWX: number;
    +SVG_TRANSFORM_SKEWY: number;
    +SVG_TRANSFORM_TRANSLATE: number;
    +SVG_TRANSFORM_UNKNOWN: number;
}

declare var SVGTransform: {
    prototype: SVGTransform;
    new(): SVGTransform;
    +SVG_TRANSFORM_MATRIX: number;
    +SVG_TRANSFORM_ROTATE: number;
    +SVG_TRANSFORM_SCALE: number;
    +SVG_TRANSFORM_SKEWX: number;
    +SVG_TRANSFORM_SKEWY: number;
    +SVG_TRANSFORM_TRANSLATE: number;
    +SVG_TRANSFORM_UNKNOWN: number;
};

declare class SVGTransformList {
    +numberOfItems: number;
    appendItem(newItem: SVGTransform): SVGTransform;
    clear(): void;
    consolidate(): SVGTransform;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
    getItem(index: number): SVGTransform;
    initialize(newItem: SVGTransform): SVGTransform;
    insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;
    removeItem(index: number): SVGTransform;
    replaceItem(newItem: SVGTransform, index: number): SVGTransform;
}

declare var SVGTransformList: {
    prototype: SVGTransformList;
    new(): SVGTransformList;
};

declare class SVGURIReference {
    +href: SVGAnimatedString;
}

declare class SVGUnitTypes {
    +SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    +SVG_UNIT_TYPE_UNKNOWN: number;
    +SVG_UNIT_TYPE_USERSPACEONUSE: number;
}

declare var SVGUnitTypes: {
    prototype: SVGUnitTypes;
    new(): SVGUnitTypes;
    +SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    +SVG_UNIT_TYPE_UNKNOWN: number;
    +SVG_UNIT_TYPE_USERSPACEONUSE: number;
};

declare class SVGUseElement extends SVGGraphicsElement, SVGURIReference {
    +animatedInstanceRoot: SVGElementInstance | null;
    +height: SVGAnimatedLength;
    +instanceRoot: SVGElementInstance | null;
    +width: SVGAnimatedLength;
    +x: SVGAnimatedLength;
    +y: SVGAnimatedLength;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGUseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGUseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGUseElement: {
    prototype: SVGUseElement;
    new(): SVGUseElement;
};

declare class SVGViewElement extends SVGElement, SVGFitToViewBox, SVGZoomAndPan {
    /** @deprecated */
    +viewTarget: SVGStringList;
    addEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGViewElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGViewElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SVGViewElement: {
    prototype: SVGViewElement;
    new(): SVGViewElement;
    +SVG_ZOOMANDPAN_DISABLE: number;
    +SVG_ZOOMANDPAN_MAGNIFY: number;
    +SVG_ZOOMANDPAN_UNKNOWN: number;
};

declare class SVGZoomAndPan {
    +zoomAndPan: number;
}

declare var SVGZoomAndPan: {
    +SVG_ZOOMANDPAN_DISABLE: number;
    +SVG_ZOOMANDPAN_MAGNIFY: number;
    +SVG_ZOOMANDPAN_UNKNOWN: number;
};

declare class SVGZoomEvent extends UIEvent {
    +newScale: number;
    +newTranslate: SVGPoint;
    +previousScale: number;
    +previousTranslate: SVGPoint;
    +zoomRectScreen: SVGRect;
}

declare var SVGZoomEvent: {
    prototype: SVGZoomEvent;
    new(): SVGZoomEvent;
};

declare class ScopedCredential {
    +id: ArrayBuffer;
    +type: ScopedCredentialType;
}

declare var ScopedCredential: {
    prototype: ScopedCredential;
    new(): ScopedCredential;
};

declare class ScopedCredentialInfo {
    +credential: ScopedCredential;
    +publicKey: CryptoKey;
}

declare var ScopedCredentialInfo: {
    prototype: ScopedCredentialInfo;
    new(): ScopedCredentialInfo;
};

declare class Screen {
    +availHeight: number;
    +availWidth: number;
    +colorDepth: number;
    +height: number;
    +orientation: ScreenOrientation;
    +pixelDepth: number;
    +width: number;
}

declare var Screen: {
    prototype: Screen;
    new(): Screen;
};

interface ScreenOrientationEventMap {
    "change": Event;
}

declare class ScreenOrientation extends EventTarget {
    +angle: number;
    onchange: ((this: ScreenOrientation, ev: Event) => any) | null;
    +type: OrientationType;
    lock(orientation: OrientationLockType): Promise<void>;
    unlock(): void;
    addEventListener<K extends keyof ScreenOrientationEventMap>(type: K, listener: (this: ScreenOrientation, ev: ScreenOrientationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ScreenOrientationEventMap>(type: K, listener: (this: ScreenOrientation, ev: ScreenOrientationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ScreenOrientation: {
    prototype: ScreenOrientation;
    new(): ScreenOrientation;
};

interface ScriptProcessorNodeEventMap {
    "audioprocess": AudioProcessingEvent;
}

declare class ScriptProcessorNode extends AudioNode {
    /** @deprecated */
    +bufferSize: number;
    /** @deprecated */
    onaudioprocess: ((this: ScriptProcessorNode, ev: AudioProcessingEvent) => any) | null;
    addEventListener<K extends keyof ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ScriptProcessorNode: {
    prototype: ScriptProcessorNode;
    new(): ScriptProcessorNode;
};

declare class SecurityPolicyViolationEvent extends Event {
    +blockedURI: string;
    +columnNumber: number;
    +documentURI: string;
    +effectiveDirective: string;
    +lineNumber: number;
    +originalPolicy: string;
    +referrer: string;
    +sourceFile: string;
    +statusCode: number;
    +violatedDirective: string;
}

declare var SecurityPolicyViolationEvent: {
    prototype: SecurityPolicyViolationEvent;
    new(type: string, eventInitDict?: SecurityPolicyViolationEventInit): SecurityPolicyViolationEvent;
};

declare class Selection {
    +anchorNode: Node;
    +anchorOffset: number;
    +baseNode: Node;
    +baseOffset: number;
    +extentNode: Node;
    +extentOffset: number;
    +focusNode: Node;
    +focusOffset: number;
    +isCollapsed: boolean;
    +rangeCount: number;
    +type: string;
    addRange(range: Range): void;
    collapse(parentNode: Node, offset: number): void;
    collapseToEnd(): void;
    collapseToStart(): void;
    containsNode(node: Node, partlyContained: boolean): boolean;
    deleteFromDocument(): void;
    empty(): void;
    extend(newNode: Node, offset: number): void;
    getRangeAt(index: number): Range;
    removeAllRanges(): void;
    removeRange(range: Range): void;
    selectAllChildren(parentNode: Node): void;
    setBaseAndExtent(baseNode: Node, baseOffset: number, extentNode: Node, extentOffset: number): void;
    setPosition(parentNode: Node, offset: number): void;
    toString(): string;
}

declare var Selection: {
    prototype: Selection;
    new(): Selection;
};

declare class ServiceUIFrameContext {
    getCachedFrameMessage(key: string): string;
    postFrameMessage(key: string, data: string): void;
}
declare var ServiceUIFrameContext: ServiceUIFrameContext;

interface ServiceWorkerEventMap extends AbstractWorkerEventMap {
    "statechange": Event;
}

declare class ServiceWorker extends EventTarget, AbstractWorker {
    onstatechange: ((this: ServiceWorker, ev: Event) => any) | null;
    +scriptURL: string;
    +state: ServiceWorkerState;
    postMessage(message: any, transfer?: Transferable[]): void;
    addEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorker: {
    prototype: ServiceWorker;
    new(): ServiceWorker;
};

interface ServiceWorkerContainerEventMap {
    "controllerchange": Event;
    "message": MessageEvent;
    "messageerror": MessageEvent;
}

declare class ServiceWorkerContainer extends EventTarget {
    +controller: ServiceWorker | null;
    oncontrollerchange: ((this: ServiceWorkerContainer, ev: Event) => any) | null;
    onmessage: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    +ready: Promise<ServiceWorkerRegistration>;
    getRegistration(clientURL?: string): Promise<ServiceWorkerRegistration | undefined>;
    getRegistrations(): Promise<ReadonlyArray<ServiceWorkerRegistration>>;
    register(scriptURL: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
    startMessages(): void;
    addEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerContainer: {
    prototype: ServiceWorkerContainer;
    new(): ServiceWorkerContainer;
};

declare class ServiceWorkerMessageEvent extends Event {
    +data: any;
    +lastEventId: string;
    +origin: string;
    +ports: ReadonlyArray<MessagePort> | null;
    +source: ServiceWorker | MessagePort | null;
}

declare var ServiceWorkerMessageEvent: {
    prototype: ServiceWorkerMessageEvent;
    new(type: string, eventInitDict?: ServiceWorkerMessageEventInit): ServiceWorkerMessageEvent;
};

interface ServiceWorkerRegistrationEventMap {
    "updatefound": Event;
}

declare class ServiceWorkerRegistration extends EventTarget {
    +active: ServiceWorker | null;
    +installing: ServiceWorker | null;
    +navigationPreload: NavigationPreloadManager;
    onupdatefound: ((this: ServiceWorkerRegistration, ev: Event) => any) | null;
    +pushManager: PushManager;
    +scope: string;
    +sync: SyncManager;
    +updateViaCache: ServiceWorkerUpdateViaCache;
    +waiting: ServiceWorker | null;
    getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>;
    showNotification(title: string, options?: NotificationOptions): Promise<void>;
    unregister(): Promise<boolean>;
    update(): Promise<void>;
    addEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var ServiceWorkerRegistration: {
    prototype: ServiceWorkerRegistration;
    new(): ServiceWorkerRegistration;
};

declare class ShadowRoot extends DocumentOrShadowRoot, DocumentFragment, DocumentOrShadowRoot {
    +host: Element;
    innerHTML: string;
    +mode: ShadowRootMode;
}

declare class ShadowRootInit {
    delegatesFocus?: boolean;
    mode: "open" | "closed";
}

declare class Slotable {
    +assignedSlot: HTMLSlotElement | null;
}

declare class SourceBuffer extends EventTarget {
    appendWindowEnd: number;
    appendWindowStart: number;
    +audioTracks: AudioTrackList;
    +buffered: TimeRanges;
    mode: AppendMode;
    +textTracks: TextTrackList;
    timestampOffset: number;
    +updating: boolean;
    +videoTracks: VideoTrackList;
    abort(): void;
    appendBuffer(data: ArrayBuffer | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | null): void;
    appendStream(stream: MSStream, maxSize?: number): void;
    remove(start: number, end: number): void;
}

declare var SourceBuffer: {
    prototype: SourceBuffer;
    new(): SourceBuffer;
};

declare class SourceBufferList extends EventTarget {
    +length: number;
    item(index: number): SourceBuffer;
    [index: number]: SourceBuffer;
}

declare var SourceBufferList: {
    prototype: SourceBufferList;
    new(): SourceBufferList;
};

declare class SpeechGrammar {
    src: string;
    weight: number;
}

declare var SpeechGrammar: {
    prototype: SpeechGrammar;
    new(): SpeechGrammar;
};

declare class SpeechGrammarList {
    +length: number;
    addFromString(string: string, weight?: number): void;
    addFromURI(src: string, weight?: number): void;
    item(index: number): SpeechGrammar;
    [index: number]: SpeechGrammar;
}

declare var SpeechGrammarList: {
    prototype: SpeechGrammarList;
    new(): SpeechGrammarList;
};

interface SpeechRecognitionEventMap {
    "audioend": Event;
    "audiostart": Event;
    "end": Event;
    "error": SpeechRecognitionError;
    "nomatch": SpeechRecognitionEvent;
    "result": SpeechRecognitionEvent;
    "soundend": Event;
    "soundstart": Event;
    "speechend": Event;
    "speechstart": Event;
    "start": Event;
}

declare class SpeechRecognition extends EventTarget {
    continuous: boolean;
    grammars: SpeechGrammarList;
    interimResults: boolean;
    lang: string;
    maxAlternatives: number;
    onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onerror: ((this: SpeechRecognition, ev: SpeechRecognitionError) => any) | null;
    onnomatch: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
    onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    serviceURI: string;
    abort(): void;
    start(): void;
    stop(): void;
    addEventListener<K extends keyof SpeechRecognitionEventMap>(type: K, listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SpeechRecognitionEventMap>(type: K, listener: (this: SpeechRecognition, ev: SpeechRecognitionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SpeechRecognition: {
    prototype: SpeechRecognition;
    new(): SpeechRecognition;
};

declare class SpeechRecognitionAlternative {
    +confidence: number;
    +transcript: string;
}

declare var SpeechRecognitionAlternative: {
    prototype: SpeechRecognitionAlternative;
    new(): SpeechRecognitionAlternative;
};

declare class SpeechRecognitionError extends Event {
    +error: SpeechRecognitionErrorCode;
    +message: string;
}

declare var SpeechRecognitionError: {
    prototype: SpeechRecognitionError;
    new(): SpeechRecognitionError;
};

declare class SpeechRecognitionEvent extends Event {
    +emma: Document | null;
    +interpretation: any;
    +resultIndex: number;
    +results: SpeechRecognitionResultList;
}

declare var SpeechRecognitionEvent: {
    prototype: SpeechRecognitionEvent;
    new(): SpeechRecognitionEvent;
};

declare class SpeechRecognitionResult {
    +isFinal: boolean;
    +length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
}

declare var SpeechRecognitionResult: {
    prototype: SpeechRecognitionResult;
    new(): SpeechRecognitionResult;
};

declare class SpeechRecognitionResultList {
    +length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}

declare var SpeechRecognitionResultList: {
    prototype: SpeechRecognitionResultList;
    new(): SpeechRecognitionResultList;
};

interface SpeechSynthesisEventMap {
    "voiceschanged": Event;
}

declare class SpeechSynthesis extends EventTarget {
    onvoiceschanged: ((this: SpeechSynthesis, ev: Event) => any) | null;
    +paused: boolean;
    +pending: boolean;
    +speaking: boolean;
    cancel(): void;
    getVoices(): SpeechSynthesisVoice[];
    pause(): void;
    resume(): void;
    speak(utterance: SpeechSynthesisUtterance): void;
    addEventListener<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SpeechSynthesis: {
    prototype: SpeechSynthesis;
    new(): SpeechSynthesis;
};

declare class SpeechSynthesisErrorEvent extends SpeechSynthesisEvent {
    +error: SpeechSynthesisErrorCode;
}

declare var SpeechSynthesisErrorEvent: {
    prototype: SpeechSynthesisErrorEvent;
    new(): SpeechSynthesisErrorEvent;
};

declare class SpeechSynthesisEvent extends Event {
    +charIndex: number;
    +elapsedTime: number;
    +name: string;
    +utterance: SpeechSynthesisUtterance;
}

declare var SpeechSynthesisEvent: {
    prototype: SpeechSynthesisEvent;
    new(): SpeechSynthesisEvent;
};

interface SpeechSynthesisUtteranceEventMap {
    "boundary": SpeechSynthesisEvent;
    "end": SpeechSynthesisEvent;
    "error": SpeechSynthesisErrorEvent;
    "mark": SpeechSynthesisEvent;
    "pause": SpeechSynthesisEvent;
    "resume": SpeechSynthesisEvent;
    "start": SpeechSynthesisEvent;
}

declare class SpeechSynthesisUtterance extends EventTarget {
    lang: string;
    onboundary: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onend: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onerror: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisErrorEvent) => any) | null;
    onmark: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onpause: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onresume: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    onstart: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    pitch: number;
    rate: number;
    text: string;
    voice: SpeechSynthesisVoice;
    volume: number;
    addEventListener<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var SpeechSynthesisUtterance: {
    prototype: SpeechSynthesisUtterance;
    new(): SpeechSynthesisUtterance;
    new(text: string): SpeechSynthesisUtterance;
};

declare class SpeechSynthesisVoice {
    +default: boolean;
    +lang: string;
    +localService: boolean;
    +name: string;
    +voiceURI: string;
}

declare var SpeechSynthesisVoice: {
    prototype: SpeechSynthesisVoice;
    new(): SpeechSynthesisVoice;
};

declare class StaticRange extends AbstractRange {
}

declare var StaticRange: {
    prototype: StaticRange;
    new(): StaticRange;
};

declare class StereoPannerNode extends AudioNode {
    +pan: AudioParam;
}

declare var StereoPannerNode: {
    prototype: StereoPannerNode;
    new(context: BaseAudioContext, options?: StereoPannerOptions): StereoPannerNode;
};

declare class Storage {
    /**
     * Returns the number of key/value pairs currently present in the list associated with the
     * object.
     */
    +length: number;
    /**
     * Empties the list associated with the object of all key/value pairs, if there are any.
     */
    clear(): void;
    /**
     * value = storage[key]
     */
    getItem(key: string): string | null;
    /**
     * Returns the name of the nth key in the list, or null if n is greater
     * than or equal to the number of key/value pairs in the object.
     */
    key(index: number): string | null;
    /**
     * delete storage[key]
     */
    removeItem(key: string): void;
    /**
     * storage[key] = value
     */
    setItem(key: string, value: string): void;
    [name: string]: any;
}

declare var Storage: {
    prototype: Storage;
    new(): Storage;
};

declare class StorageEvent extends Event {
    /**
     * Returns the key of the storage item being changed.
     */
    +key: string | null;
    /**
     * Returns the new value of the key of the storage item whose value is being changed.
     */
    +newValue: string | null;
    /**
     * Returns the old value of the key of the storage item whose value is being changed.
     */
    +oldValue: string | null;
    /**
     * Returns the Storage object that was affected.
     */
    +storageArea: Storage | null;
    /**
     * Returns the URL of the document whose storage item changed.
     */
    +url: string;
}

declare var StorageEvent: {
    prototype: StorageEvent;
    new(type: string, eventInitDict?: StorageEventInit): StorageEvent;
};

declare class StorageManager {
    estimate(): Promise<StorageEstimate>;
    persist(): Promise<boolean>;
    persisted(): Promise<boolean>;
}

declare var StorageManager: {
    prototype: StorageManager;
    new(): StorageManager;
};

declare class StyleMedia {
    +type: string;
    matchMedium(mediaquery: string): boolean;
}

declare var StyleMedia: {
    prototype: StyleMedia;
    new(): StyleMedia;
};

declare class StyleSheet {
    disabled: boolean;
    +href: string | null;
    +media: MediaList;
    +ownerNode: Node;
    +parentStyleSheet: StyleSheet | null;
    +title: string | null;
    +type: string;
}

declare var StyleSheet: {
    prototype: StyleSheet;
    new(): StyleSheet;
};

declare class StyleSheetList {
    +length: number;
    item(index: number): StyleSheet | null;
    [index: number]: StyleSheet;
}

declare var StyleSheetList: {
    prototype: StyleSheetList;
    new(): StyleSheetList;
};

declare class SubtleCrypto {
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

declare var SubtleCrypto: {
    prototype: SubtleCrypto;
    new(): SubtleCrypto;
};

declare class SyncManager {
    getTags(): Promise<string[]>;
    register(tag: string): Promise<void>;
}

declare var SyncManager: {
    prototype: SyncManager;
    new(): SyncManager;
};

declare class Text extends CharacterData, Slotable {
    +assignedSlot: HTMLSlotElement | null;
    /**
     * Returns the combined data of all direct Text node siblings.
     */
    +wholeText: string;
    /**
     * Splits data at the given offset and returns the remainder as Text node.
     */
    splitText(offset: number): Text;
}

declare var Text: {
    prototype: Text;
    new(data?: string): Text;
};

declare class TextDecoder {
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

declare var TextDecoder: {
    prototype: TextDecoder;
    new(label?: string, options?: TextDecoderOptions): TextDecoder;
};

declare class TextEncoder {
    /**
     * Returns "utf-8".
     */
    +encoding: string;
    /**
     * Returns the result of running UTF-8's encoder.
     */
    encode(input?: string): Uint8Array;
}

declare var TextEncoder: {
    prototype: TextEncoder;
    new(): TextEncoder;
};

declare class TextEvent extends UIEvent {
    +data: string;
    initTextEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, inputMethod: number, locale: string): void;
    +DOM_INPUT_METHOD_DROP: number;
    +DOM_INPUT_METHOD_HANDWRITING: number;
    +DOM_INPUT_METHOD_IME: number;
    +DOM_INPUT_METHOD_KEYBOARD: number;
    +DOM_INPUT_METHOD_MULTIMODAL: number;
    +DOM_INPUT_METHOD_OPTION: number;
    +DOM_INPUT_METHOD_PASTE: number;
    +DOM_INPUT_METHOD_SCRIPT: number;
    +DOM_INPUT_METHOD_UNKNOWN: number;
    +DOM_INPUT_METHOD_VOICE: number;
}

declare var TextEvent: {
    prototype: TextEvent;
    new(): TextEvent;
    +DOM_INPUT_METHOD_DROP: number;
    +DOM_INPUT_METHOD_HANDWRITING: number;
    +DOM_INPUT_METHOD_IME: number;
    +DOM_INPUT_METHOD_KEYBOARD: number;
    +DOM_INPUT_METHOD_MULTIMODAL: number;
    +DOM_INPUT_METHOD_OPTION: number;
    +DOM_INPUT_METHOD_PASTE: number;
    +DOM_INPUT_METHOD_SCRIPT: number;
    +DOM_INPUT_METHOD_UNKNOWN: number;
    +DOM_INPUT_METHOD_VOICE: number;
};

declare class TextMetrics {
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

declare var TextMetrics: {
    prototype: TextMetrics;
    new(): TextMetrics;
};

interface TextTrackEventMap {
    "cuechange": Event;
    "error": Event;
    "load": Event;
}

declare class TextTrack extends EventTarget {
    +activeCues: TextTrackCueList;
    +cues: TextTrackCueList;
    +inBandMetadataTrackDispatchType: string;
    +kind: string;
    +label: string;
    +language: string;
    mode: TextTrackMode | number;
    oncuechange: ((this: TextTrack, ev: Event) => any) | null;
    onerror: ((this: TextTrack, ev: Event) => any) | null;
    onload: ((this: TextTrack, ev: Event) => any) | null;
    +readyState: number;
    addCue(cue: TextTrackCue): void;
    removeCue(cue: TextTrackCue): void;
    +DISABLED: number;
    +ERROR: number;
    +HIDDEN: number;
    +LOADED: number;
    +LOADING: number;
    +NONE: number;
    +SHOWING: number;
    addEventListener<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var TextTrack: {
    prototype: TextTrack;
    new(): TextTrack;
    +DISABLED: number;
    +ERROR: number;
    +HIDDEN: number;
    +LOADED: number;
    +LOADING: number;
    +NONE: number;
    +SHOWING: number;
};

interface TextTrackCueEventMap {
    "enter": Event;
    "exit": Event;
}

declare class TextTrackCue extends EventTarget {
    endTime: number;
    id: string;
    onenter: ((this: TextTrackCue, ev: Event) => any) | null;
    onexit: ((this: TextTrackCue, ev: Event) => any) | null;
    pauseOnExit: boolean;
    startTime: number;
    text: string;
    +track: TextTrack;
    getCueAsHTML(): DocumentFragment;
    addEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var TextTrackCue: {
    prototype: TextTrackCue;
    new(startTime: number, endTime: number, text: string): TextTrackCue;
};

declare class TextTrackCueList {
    +length: number;
    getCueById(id: string): TextTrackCue;
    item(index: number): TextTrackCue;
    [index: number]: TextTrackCue;
}

declare var TextTrackCueList: {
    prototype: TextTrackCueList;
    new(): TextTrackCueList;
};

interface TextTrackListEventMap {
    "addtrack": TrackEvent;
}

declare class TextTrackList extends EventTarget {
    +length: number;
    onaddtrack: ((this: TextTrackList, ev: TrackEvent) => any) | null;
    item(index: number): TextTrack;
    addEventListener<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: TextTrack;
}

declare var TextTrackList: {
    prototype: TextTrackList;
    new(): TextTrackList;
};

declare class TimeRanges {
    +length: number;
    end(index: number): number;
    start(index: number): number;
}

declare var TimeRanges: {
    prototype: TimeRanges;
    new(): TimeRanges;
};

declare class Touch {
    +altitudeAngle: number;
    +azimuthAngle: number;
    +clientX: number;
    +clientY: number;
    +force: number;
    +identifier: number;
    +pageX: number;
    +pageY: number;
    +radiusX: number;
    +radiusY: number;
    +rotationAngle: number;
    +screenX: number;
    +screenY: number;
    +target: EventTarget;
    +touchType: TouchType;
}

declare var Touch: {
    prototype: Touch;
    new(touchInitDict: TouchInit): Touch;
};

declare class TouchEvent extends UIEvent {
    +altKey: boolean;
    +changedTouches: TouchList;
    +ctrlKey: boolean;
    +metaKey: boolean;
    +shiftKey: boolean;
    +targetTouches: TouchList;
    +touches: TouchList;
}

declare var TouchEvent: {
    prototype: TouchEvent;
    new(type: string, eventInitDict?: TouchEventInit): TouchEvent;
};

declare class TouchList {
    +length: number;
    item(index: number): Touch | null;
    [index: number]: Touch;
}

declare var TouchList: {
    prototype: TouchList;
    new(): TouchList;
};

declare class TrackEvent extends Event {
    +track: VideoTrack | AudioTrack | TextTrack | null;
}

declare var TrackEvent: {
    prototype: TrackEvent;
    new(typeArg: string, eventInitDict?: TrackEventInit): TrackEvent;
};

declare class TransformStream<I = any, O = any> {
    +readable: ReadableStream<O>;
    +writable: WritableStream<I>;
}

declare var TransformStream: {
    prototype: TransformStream;
    new<I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>;
};

declare class TransformStreamDefaultController<O = any> {
    +desiredSize: number | null;
    enqueue(chunk: O): void;
    error(reason?: any): void;
    terminate(): void;
}

declare class TransitionEvent extends Event {
    +elapsedTime: number;
    +propertyName: string;
    +pseudoElement: string;
}

declare var TransitionEvent: {
    prototype: TransitionEvent;
    new(type: string, transitionEventInitDict?: TransitionEventInit): TransitionEvent;
};

declare class TreeWalker {
    currentNode: Node;
    +filter: NodeFilter | null;
    +root: Node;
    +whatToShow: number;
    firstChild(): Node | null;
    lastChild(): Node | null;
    nextNode(): Node | null;
    nextSibling(): Node | null;
    parentNode(): Node | null;
    previousNode(): Node | null;
    previousSibling(): Node | null;
}

declare var TreeWalker: {
    prototype: TreeWalker;
    new(): TreeWalker;
};

declare class UIEvent extends Event {
    +detail: number;
    +view: Window;
    initUIEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number): void;
}

declare var UIEvent: {
    prototype: UIEvent;
    new(typeArg: string, eventInitDict?: UIEventInit): UIEvent;
};

declare class URL {
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

declare var URL: {
    prototype: URL;
    new(url: string, base?: string | URL): URL;
    createObjectURL(object: any): string;
    revokeObjectURL(url: string): void;
};

type webkitURL = URL;
declare var webkitURL: typeof URL;

declare class URLSearchParams {
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

declare var URLSearchParams: {
    prototype: URLSearchParams;
    new(init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams;
};

declare class VRDisplay extends EventTarget {
    +capabilities: VRDisplayCapabilities;
    depthFar: number;
    depthNear: number;
    +displayId: number;
    +displayName: string;
    +isConnected: boolean;
    +isPresenting: boolean;
    +stageParameters: VRStageParameters | null;
    cancelAnimationFrame(handle: number): void;
    exitPresent(): Promise<void>;
    getEyeParameters(whichEye: string): VREyeParameters;
    getFrameData(frameData: VRFrameData): boolean;
    getLayers(): VRLayer[];
    /** @deprecated */
    getPose(): VRPose;
    requestAnimationFrame(callback: FrameRequestCallback): number;
    requestPresent(layers: VRLayer[]): Promise<void>;
    resetPose(): void;
    submitFrame(pose?: VRPose): void;
}

declare var VRDisplay: {
    prototype: VRDisplay;
    new(): VRDisplay;
};

declare class VRDisplayCapabilities {
    +canPresent: boolean;
    +hasExternalDisplay: boolean;
    +hasOrientation: boolean;
    +hasPosition: boolean;
    +maxLayers: number;
}

declare var VRDisplayCapabilities: {
    prototype: VRDisplayCapabilities;
    new(): VRDisplayCapabilities;
};

declare class VRDisplayEvent extends Event {
    +display: VRDisplay;
    +reason: VRDisplayEventReason | null;
}

declare var VRDisplayEvent: {
    prototype: VRDisplayEvent;
    new(type: string, eventInitDict: VRDisplayEventInit): VRDisplayEvent;
};

declare class VREyeParameters {
    /** @deprecated */
    +fieldOfView: VRFieldOfView;
    +offset: Float32Array;
    +renderHeight: number;
    +renderWidth: number;
}

declare var VREyeParameters: {
    prototype: VREyeParameters;
    new(): VREyeParameters;
};

declare class VRFieldOfView {
    +downDegrees: number;
    +leftDegrees: number;
    +rightDegrees: number;
    +upDegrees: number;
}

declare var VRFieldOfView: {
    prototype: VRFieldOfView;
    new(): VRFieldOfView;
};

declare class VRFrameData {
    +leftProjectionMatrix: Float32Array;
    +leftViewMatrix: Float32Array;
    +pose: VRPose;
    +rightProjectionMatrix: Float32Array;
    +rightViewMatrix: Float32Array;
    +timestamp: number;
}

declare var VRFrameData: {
    prototype: VRFrameData;
    new(): VRFrameData;
};

declare class VRPose {
    +angularAcceleration: Float32Array | null;
    +angularVelocity: Float32Array | null;
    +linearAcceleration: Float32Array | null;
    +linearVelocity: Float32Array | null;
    +orientation: Float32Array | null;
    +position: Float32Array | null;
    +timestamp: number;
}

declare var VRPose: {
    prototype: VRPose;
    new(): VRPose;
};

declare class VTTCue extends TextTrackCue {
    align: AlignSetting;
    line: LineAndPositionSetting;
    lineAlign: LineAlignSetting;
    position: LineAndPositionSetting;
    positionAlign: PositionAlignSetting;
    region: VTTRegion | null;
    size: number;
    snapToLines: boolean;
    text: string;
    vertical: DirectionSetting;
    getCueAsHTML(): DocumentFragment;
    addEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var VTTCue: {
    prototype: VTTCue;
    new(startTime: number, endTime: number, text: string): VTTCue;
};

declare class VTTRegion {
    id: string;
    lines: number;
    regionAnchorX: number;
    regionAnchorY: number;
    scroll: ScrollSetting;
    viewportAnchorX: number;
    viewportAnchorY: number;
    width: number;
}

declare var VTTRegion: {
    prototype: VTTRegion;
    new(): VTTRegion;
};

declare class ValidityState {
    +badInput: boolean;
    +customError: boolean;
    +patternMismatch: boolean;
    +rangeOverflow: boolean;
    +rangeUnderflow: boolean;
    +stepMismatch: boolean;
    +tooLong: boolean;
    +tooShort: boolean;
    +typeMismatch: boolean;
    +valid: boolean;
    +valueMissing: boolean;
}

declare var ValidityState: {
    prototype: ValidityState;
    new(): ValidityState;
};

declare class VideoPlaybackQuality {
    +corruptedVideoFrames: number;
    +creationTime: number;
    +droppedVideoFrames: number;
    +totalFrameDelay: number;
    +totalVideoFrames: number;
}

declare var VideoPlaybackQuality: {
    prototype: VideoPlaybackQuality;
    new(): VideoPlaybackQuality;
};

declare class VideoTrack {
    +id: string;
    kind: string;
    +label: string;
    language: string;
    selected: boolean;
    +sourceBuffer: SourceBuffer;
}

declare var VideoTrack: {
    prototype: VideoTrack;
    new(): VideoTrack;
};

interface VideoTrackListEventMap {
    "addtrack": TrackEvent;
    "change": Event;
    "removetrack": TrackEvent;
}

declare class VideoTrackList extends EventTarget {
    +length: number;
    onaddtrack: ((this: VideoTrackList, ev: TrackEvent) => any) | null;
    onchange: ((this: VideoTrackList, ev: Event) => any) | null;
    onremovetrack: ((this: VideoTrackList, ev: TrackEvent) => any) | null;
    +selectedIndex: number;
    getTrackById(id: string): VideoTrack | null;
    item(index: number): VideoTrack;
    addEventListener<K extends keyof VideoTrackListEventMap>(type: K, listener: (this: VideoTrackList, ev: VideoTrackListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof VideoTrackListEventMap>(type: K, listener: (this: VideoTrackList, ev: VideoTrackListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    [index: number]: VideoTrack;
}

declare var VideoTrackList: {
    prototype: VideoTrackList;
    new(): VideoTrackList;
};

declare class WEBGL_color_buffer_float {
    +FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: GLenum;
    +RGBA32F_EXT: GLenum;
    +UNSIGNED_NORMALIZED_EXT: GLenum;
}

declare class WEBGL_compressed_texture_astc {
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

declare class WEBGL_compressed_texture_s3tc {
    +COMPRESSED_RGBA_S3TC_DXT1_EXT: GLenum;
    +COMPRESSED_RGBA_S3TC_DXT3_EXT: GLenum;
    +COMPRESSED_RGBA_S3TC_DXT5_EXT: GLenum;
    +COMPRESSED_RGB_S3TC_DXT1_EXT: GLenum;
}

declare class WEBGL_compressed_texture_s3tc_srgb {
    +COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: GLenum;
    +COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: GLenum;
    +COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: GLenum;
    +COMPRESSED_SRGB_S3TC_DXT1_EXT: GLenum;
}

declare class WEBGL_debug_renderer_info {
    +UNMASKED_RENDERER_WEBGL: GLenum;
    +UNMASKED_VENDOR_WEBGL: GLenum;
}

declare class WEBGL_debug_shaders {
    getTranslatedShaderSource(shader: WebGLShader): string;
}

declare class WEBGL_depth_texture {
    +UNSIGNED_INT_24_8_WEBGL: GLenum;
}

declare class WEBGL_draw_buffers {
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

declare class WEBGL_lose_context {
    loseContext(): void;
    restoreContext(): void;
}

declare class WaveShaperNode extends AudioNode {
    curve: Float32Array | null;
    oversample: OverSampleType;
}

declare var WaveShaperNode: {
    prototype: WaveShaperNode;
    new(context: BaseAudioContext, options?: WaveShaperOptions): WaveShaperNode;
};

declare class WebAuthentication {
    getAssertion(assertionChallenge: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null, options?: AssertionOptions): Promise<WebAuthnAssertion>;
    makeCredential(accountInformation: Account, cryptoParameters: ScopedCredentialParameters[], attestationChallenge: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null, options?: ScopedCredentialOptions): Promise<ScopedCredentialInfo>;
}

declare var WebAuthentication: {
    prototype: WebAuthentication;
    new(): WebAuthentication;
};

declare class WebAuthnAssertion {
    +authenticatorData: ArrayBuffer;
    +clientData: ArrayBuffer;
    +credential: ScopedCredential;
    +signature: ArrayBuffer;
}

declare var WebAuthnAssertion: {
    prototype: WebAuthnAssertion;
    new(): WebAuthnAssertion;
};

declare class WebGLActiveInfo {
    +name: string;
    +size: GLint;
    +type: GLenum;
}

declare var WebGLActiveInfo: {
    prototype: WebGLActiveInfo;
    new(): WebGLActiveInfo;
};

declare class WebGLBuffer extends WebGLObject {
}

declare var WebGLBuffer: {
    prototype: WebGLBuffer;
    new(): WebGLBuffer;
};

declare class WebGLContextEvent extends Event {
    +statusMessage: string;
}

declare var WebGLContextEvent: {
    prototype: WebGLContextEvent;
    new(type: string, eventInit?: WebGLContextEventInit): WebGLContextEvent;
};

declare class WebGLFramebuffer extends WebGLObject {
}

declare var WebGLFramebuffer: {
    prototype: WebGLFramebuffer;
    new(): WebGLFramebuffer;
};

declare class WebGLObject {
}

declare var WebGLObject: {
    prototype: WebGLObject;
    new(): WebGLObject;
};

declare class WebGLProgram extends WebGLObject {
}

declare var WebGLProgram: {
    prototype: WebGLProgram;
    new(): WebGLProgram;
};

declare class WebGLRenderbuffer extends WebGLObject {
}

declare var WebGLRenderbuffer: {
    prototype: WebGLRenderbuffer;
    new(): WebGLRenderbuffer;
};

declare class WebGLRenderingContext extends WebGLRenderingContextBase {
}

declare var WebGLRenderingContext: {
    prototype: WebGLRenderingContext;
    new(): WebGLRenderingContext;
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
};

declare class WebGLRenderingContextBase {
    +canvas: HTMLCanvasElement;
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
    pixelStorei(pname: GLenum, param: GLint): void;
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

declare class WebGLShader extends WebGLObject {
}

declare var WebGLShader: {
    prototype: WebGLShader;
    new(): WebGLShader;
};

declare class WebGLShaderPrecisionFormat {
    +precision: GLint;
    +rangeMax: GLint;
    +rangeMin: GLint;
}

declare var WebGLShaderPrecisionFormat: {
    prototype: WebGLShaderPrecisionFormat;
    new(): WebGLShaderPrecisionFormat;
};

declare class WebGLTexture extends WebGLObject {
}

declare var WebGLTexture: {
    prototype: WebGLTexture;
    new(): WebGLTexture;
};

declare class WebGLUniformLocation {
}

declare var WebGLUniformLocation: {
    prototype: WebGLUniformLocation;
    new(): WebGLUniformLocation;
};

declare class WebGLVertexArrayObjectOES extends WebGLObject {
}

declare class WebKitPoint {
    x: number;
    y: number;
}

declare var WebKitPoint: {
    prototype: WebKitPoint;
    new(x?: number, y?: number): WebKitPoint;
};

interface WebSocketEventMap {
    "close": CloseEvent;
    "error": Event;
    "message": MessageEvent;
    "open": Event;
}

declare class WebSocket extends EventTarget {
    binaryType: BinaryType;
    +bufferedAmount: number;
    +extensions: string;
    onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
    onerror: ((this: WebSocket, ev: Event) => any) | null;
    onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
    onopen: ((this: WebSocket, ev: Event) => any) | null;
    +protocol: string;
    +readyState: number;
    +url: string;
    close(code?: number, reason?: string): void;
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
    +CLOSED: number;
    +CLOSING: number;
    +CONNECTING: number;
    +OPEN: number;
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var WebSocket: {
    prototype: WebSocket;
    new(url: string, protocols?: string | string[]): WebSocket;
    +CLOSED: number;
    +CLOSING: number;
    +CONNECTING: number;
    +OPEN: number;
};

declare class WheelEvent extends MouseEvent {
    +deltaMode: number;
    +deltaX: number;
    +deltaY: number;
    +deltaZ: number;
    getCurrentPoint(element: Element): void;
    initWheelEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, deltaXArg: number, deltaYArg: number, deltaZArg: number, deltaMode: number): void;
    +DOM_DELTA_LINE: number;
    +DOM_DELTA_PAGE: number;
    +DOM_DELTA_PIXEL: number;
}

declare var WheelEvent: {
    prototype: WheelEvent;
    new(typeArg: string, eventInitDict?: WheelEventInit): WheelEvent;
    +DOM_DELTA_LINE: number;
    +DOM_DELTA_PAGE: number;
    +DOM_DELTA_PIXEL: number;
};

interface WindowEventMap extends GlobalEventHandlersEventMap, WindowEventHandlersEventMap {
    "abort": UIEvent;
    "afterprint": Event;
    "beforeprint": Event;
    "beforeunload": BeforeUnloadEvent;
    "blur": FocusEvent;
    "canplay": Event;
    "canplaythrough": Event;
    "change": Event;
    "click": MouseEvent;
    "compassneedscalibration": Event;
    "contextmenu": MouseEvent;
    "dblclick": MouseEvent;
    "devicelight": DeviceLightEvent;
    "devicemotion": DeviceMotionEvent;
    "deviceorientation": DeviceOrientationEvent;
    "drag": DragEvent;
    "dragend": DragEvent;
    "dragenter": DragEvent;
    "dragleave": DragEvent;
    "dragover": DragEvent;
    "dragstart": DragEvent;
    "drop": DragEvent;
    "durationchange": Event;
    "emptied": Event;
    "ended": Event;
    "error": ErrorEvent;
    "focus": FocusEvent;
    "hashchange": HashChangeEvent;
    "input": Event;
    "invalid": Event;
    "keydown": KeyboardEvent;
    "keypress": KeyboardEvent;
    "keyup": KeyboardEvent;
    "load": Event;
    "loadeddata": Event;
    "loadedmetadata": Event;
    "loadstart": Event;
    "message": MessageEvent;
    "mousedown": MouseEvent;
    "mouseenter": MouseEvent;
    "mouseleave": MouseEvent;
    "mousemove": MouseEvent;
    "mouseout": MouseEvent;
    "mouseover": MouseEvent;
    "mouseup": MouseEvent;
    "mousewheel": Event;
    "MSGestureChange": Event;
    "MSGestureDoubleTap": Event;
    "MSGestureEnd": Event;
    "MSGestureHold": Event;
    "MSGestureStart": Event;
    "MSGestureTap": Event;
    "MSInertiaStart": Event;
    "MSPointerCancel": Event;
    "MSPointerDown": Event;
    "MSPointerEnter": Event;
    "MSPointerLeave": Event;
    "MSPointerMove": Event;
    "MSPointerOut": Event;
    "MSPointerOver": Event;
    "MSPointerUp": Event;
    "offline": Event;
    "online": Event;
    "orientationchange": Event;
    "pagehide": PageTransitionEvent;
    "pageshow": PageTransitionEvent;
    "pause": Event;
    "play": Event;
    "playing": Event;
    "popstate": PopStateEvent;
    "progress": ProgressEvent;
    "ratechange": Event;
    "readystatechange": ProgressEvent;
    "reset": Event;
    "resize": UIEvent;
    "scroll": UIEvent;
    "seeked": Event;
    "seeking": Event;
    "select": UIEvent;
    "stalled": Event;
    "storage": StorageEvent;
    "submit": Event;
    "suspend": Event;
    "timeupdate": Event;
    "unload": Event;
    "volumechange": Event;
    "vrdisplayactivate": Event;
    "vrdisplayblur": Event;
    "vrdisplayconnect": Event;
    "vrdisplaydeactivate": Event;
    "vrdisplaydisconnect": Event;
    "vrdisplayfocus": Event;
    "vrdisplaypointerrestricted": Event;
    "vrdisplaypointerunrestricted": Event;
    "vrdisplaypresentchange": Event;
    "waiting": Event;
}

declare class Window extends EventTarget, WindowTimers, WindowSessionStorage, WindowLocalStorage, WindowConsole, GlobalEventHandlers, IDBEnvironment, WindowBase64, GlobalFetch, WindowOrWorkerGlobalScope, WindowEventHandlers {
    Blob: typeof Blob;
    URL: typeof URL;
    URLSearchParams: typeof URLSearchParams;
    +applicationCache: ApplicationCache;
    +caches: CacheStorage;
    +clientInformation: Navigator;
    +closed: boolean;
    +crypto: Crypto;
    customElements: CustomElementRegistry;
    defaultStatus: string;
    +devicePixelRatio: number;
    +doNotTrack: string;
    +document: Document;
    +event: Event | undefined;
    /** @deprecated */
    +external: External;
    +frameElement: Element;
    +frames: Window;
    +history: History;
    +innerHeight: number;
    +innerWidth: number;
    +isSecureContext: boolean;
    +length: number;
    location: Location;
    +locationbar: BarProp;
    +menubar: BarProp;
    +msContentScript: ExtensionScriptApis;
    name: string;
    +navigator: Navigator;
    offscreenBuffering: string | boolean;
    oncompassneedscalibration: ((this: Window, ev: Event) => any) | null;
    ondevicelight: ((this: Window, ev: DeviceLightEvent) => any) | null;
    ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null;
    ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => any) | null;
    onmousewheel: ((this: Window, ev: Event) => any) | null;
    onmsgesturechange: ((this: Window, ev: Event) => any) | null;
    onmsgesturedoubletap: ((this: Window, ev: Event) => any) | null;
    onmsgestureend: ((this: Window, ev: Event) => any) | null;
    onmsgesturehold: ((this: Window, ev: Event) => any) | null;
    onmsgesturestart: ((this: Window, ev: Event) => any) | null;
    onmsgesturetap: ((this: Window, ev: Event) => any) | null;
    onmsinertiastart: ((this: Window, ev: Event) => any) | null;
    onmspointercancel: ((this: Window, ev: Event) => any) | null;
    onmspointerdown: ((this: Window, ev: Event) => any) | null;
    onmspointerenter: ((this: Window, ev: Event) => any) | null;
    onmspointerleave: ((this: Window, ev: Event) => any) | null;
    onmspointermove: ((this: Window, ev: Event) => any) | null;
    onmspointerout: ((this: Window, ev: Event) => any) | null;
    onmspointerover: ((this: Window, ev: Event) => any) | null;
    onmspointerup: ((this: Window, ev: Event) => any) | null;
    /** @deprecated */
    onorientationchange: ((this: Window, ev: Event) => any) | null;
    onreadystatechange: ((this: Window, ev: ProgressEvent) => any) | null;
    onvrdisplayactivate: ((this: Window, ev: Event) => any) | null;
    onvrdisplayblur: ((this: Window, ev: Event) => any) | null;
    onvrdisplayconnect: ((this: Window, ev: Event) => any) | null;
    onvrdisplaydeactivate: ((this: Window, ev: Event) => any) | null;
    onvrdisplaydisconnect: ((this: Window, ev: Event) => any) | null;
    onvrdisplayfocus: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypointerrestricted: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypointerunrestricted: ((this: Window, ev: Event) => any) | null;
    onvrdisplaypresentchange: ((this: Window, ev: Event) => any) | null;
    opener: any;
    /** @deprecated */
    +orientation: string | number;
    +outerHeight: number;
    +outerWidth: number;
    +pageXOffset: number;
    +pageYOffset: number;
    +parent: Window;
    +performance: Performance;
    +personalbar: BarProp;
    +screen: Screen;
    +screenLeft: number;
    +screenTop: number;
    +screenX: number;
    +screenY: number;
    +scrollX: number;
    +scrollY: number;
    +scrollbars: BarProp;
    +self: Window;
    +speechSynthesis: SpeechSynthesis;
    status: string;
    +statusbar: BarProp;
    +styleMedia: StyleMedia;
    +toolbar: BarProp;
    +top: Window;
    +window: Window;
    alert(message?: any): void;
    blur(): void;
    cancelAnimationFrame(handle: number): void;
    /** @deprecated */
    captureEvents(): void;
    close(): void;
    confirm(message?: string): boolean;
    departFocus(navigationReason: NavigationReason, origin: FocusNavigationOrigin): void;
    focus(): void;
    getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
    getMatchedCSSRules(elt: Element, pseudoElt?: string | null): CSSRuleList;
    getSelection(): Selection;
    matchMedia(query: string): MediaQueryList;
    moveBy(x: number, y: number): void;
    moveTo(x: number, y: number): void;
    msWriteProfilerMark(profilerMarkName: string): void;
    open(url?: string, target?: string, features?: string, replace?: boolean): Window | null;
    postMessage(message: any, targetOrigin: string, transfer?: Transferable[]): void;
    print(): void;
    prompt(message?: string, _default?: string): string | null;
    /** @deprecated */
    releaseEvents(): void;
    requestAnimationFrame(callback: FrameRequestCallback): number;
    resizeBy(x: number, y: number): void;
    resizeTo(x: number, y: number): void;
    scroll(options?: ScrollToOptions): void;
    scroll(x: number, y: number): void;
    scrollBy(options?: ScrollToOptions): void;
    scrollBy(x: number, y: number): void;
    scrollTo(options?: ScrollToOptions): void;
    scrollTo(x: number, y: number): void;
    stop(): void;
    webkitCancelAnimationFrame(handle: number): void;
    webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint;
    webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint;
    webkitRequestAnimationFrame(callback: FrameRequestCallback): number;
    addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Window: {
    prototype: Window;
    new(): Window;
};

declare class WindowBase64 {
    atob(encodedString: string): string;
    btoa(rawString: string): string;
}

declare class WindowConsole {
    +console: Console;
}

interface WindowEventHandlersEventMap {
    "afterprint": Event;
    "beforeprint": Event;
    "beforeunload": BeforeUnloadEvent;
    "hashchange": HashChangeEvent;
    "languagechange": Event;
    "message": MessageEvent;
    "messageerror": MessageEvent;
    "offline": Event;
    "online": Event;
    "pagehide": PageTransitionEvent;
    "pageshow": PageTransitionEvent;
    "popstate": PopStateEvent;
    "rejectionhandled": Event;
    "storage": StorageEvent;
    "unhandledrejection": PromiseRejectionEvent;
    "unload": Event;
}

declare class WindowEventHandlers {
    onafterprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onbeforeprint: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onbeforeunload: ((this: WindowEventHandlers, ev: BeforeUnloadEvent) => any) | null;
    onhashchange: ((this: WindowEventHandlers, ev: HashChangeEvent) => any) | null;
    onlanguagechange: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onmessage: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    onmessageerror: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    onoffline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    ononline: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onpagehide: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    onpageshow: ((this: WindowEventHandlers, ev: PageTransitionEvent) => any) | null;
    onpopstate: ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null;
    onrejectionhandled: ((this: WindowEventHandlers, ev: Event) => any) | null;
    onstorage: ((this: WindowEventHandlers, ev: StorageEvent) => any) | null;
    onunhandledrejection: ((this: WindowEventHandlers, ev: PromiseRejectionEvent) => any) | null;
    onunload: ((this: WindowEventHandlers, ev: Event) => any) | null;
    addEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare class WindowLocalStorage {
    +localStorage: Storage;
}

declare class WindowOrWorkerGlobalScope {
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

declare class WindowSessionStorage {
    +sessionStorage: Storage;
}

declare class WindowTimers {
}

interface WorkerEventMap extends AbstractWorkerEventMap {
    "message": MessageEvent;
}

declare class Worker extends EventTarget, AbstractWorker {
    onmessage: ((this: Worker, ev: MessageEvent) => any) | null;
    postMessage(message: any, transfer?: Transferable[]): void;
    terminate(): void;
    addEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var Worker: {
    prototype: Worker;
    new(stringUrl: string, options?: WorkerOptions): Worker;
};

declare class Worklet {
    addModule(moduleURL: string, options?: WorkletOptions): Promise<void>;
}

declare var Worklet: {
    prototype: Worklet;
    new(): Worklet;
};

declare class WritableStream<W = any> {
    +locked: boolean;
    abort(reason?: any): Promise<void>;
    getWriter(): WritableStreamDefaultWriter<W>;
}

declare var WritableStream: {
    prototype: WritableStream;
    new<W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
};

declare class WritableStreamDefaultController {
    error(error?: any): void;
}

declare class WritableStreamDefaultWriter<W = any> {
    +closed: Promise<void>;
    +desiredSize: number | null;
    +ready: Promise<void>;
    abort(reason?: any): Promise<void>;
    close(): Promise<void>;
    releaseLock(): void;
    write(chunk: W): Promise<void>;
}

declare class XMLDocument extends Document {
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLDocument: {
    prototype: XMLDocument;
    new(): XMLDocument;
};

interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event;
}

declare class XMLHttpRequest extends XMLHttpRequestEventTarget {
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null;
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
    /**
     * Returns the document response.
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "document".
     */
    +responseXML: Document | null;
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
     * Initiates the request. The optional argument provides the request body. The argument is ignored if request method is GET or HEAD.
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     */
    send(body?: Document | BodyInit | null): void;
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
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new(): XMLHttpRequest;
    +DONE: number;
    +HEADERS_RECEIVED: number;
    +LOADING: number;
    +OPENED: number;
    +UNSENT: number;
};

interface XMLHttpRequestEventTargetEventMap {
    "abort": ProgressEvent;
    "error": ProgressEvent;
    "load": ProgressEvent;
    "loadend": ProgressEvent;
    "loadstart": ProgressEvent;
    "progress": ProgressEvent;
    "timeout": ProgressEvent;
}

declare class XMLHttpRequestEventTarget extends EventTarget {
    onabort: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onerror: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onload: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequestEventTarget: {
    prototype: XMLHttpRequestEventTarget;
    new(): XMLHttpRequestEventTarget;
};

declare class XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var XMLHttpRequestUpload: {
    prototype: XMLHttpRequestUpload;
    new(): XMLHttpRequestUpload;
};

declare class XMLSerializer {
    serializeToString(root: Node): string;
}

declare var XMLSerializer: {
    prototype: XMLSerializer;
    new(): XMLSerializer;
};

declare class XPathEvaluator {
    createExpression(expression: string, resolver: XPathNSResolver): XPathExpression;
    createNSResolver(nodeResolver?: Node): XPathNSResolver;
    evaluate(expression: string, contextNode: Node, resolver: XPathNSResolver | ((prefix: string) => string | null) | null, type: number, result: XPathResult | null): XPathResult;
}

declare var XPathEvaluator: {
    prototype: XPathEvaluator;
    new(): XPathEvaluator;
};

declare class XPathExpression {
    evaluate(contextNode: Node, type: number, result: XPathResult | null): XPathResult;
}

declare var XPathExpression: {
    prototype: XPathExpression;
    new(): XPathExpression;
};

declare class XPathNSResolver {
    lookupNamespaceURI(prefix: string): string | null;
}

declare var XPathNSResolver: {
    prototype: XPathNSResolver;
    new(): XPathNSResolver;
};

declare class XPathResult {
    +booleanValue: boolean;
    +invalidIteratorState: boolean;
    +numberValue: number;
    +resultType: number;
    +singleNodeValue: Node;
    +snapshotLength: number;
    +stringValue: string;
    iterateNext(): Node;
    snapshotItem(index: number): Node;
    +ANY_TYPE: number;
    +ANY_UNORDERED_NODE_TYPE: number;
    +BOOLEAN_TYPE: number;
    +FIRST_ORDERED_NODE_TYPE: number;
    +NUMBER_TYPE: number;
    +ORDERED_NODE_ITERATOR_TYPE: number;
    +ORDERED_NODE_SNAPSHOT_TYPE: number;
    +STRING_TYPE: number;
    +UNORDERED_NODE_ITERATOR_TYPE: number;
    +UNORDERED_NODE_SNAPSHOT_TYPE: number;
}

declare var XPathResult: {
    prototype: XPathResult;
    new(): XPathResult;
    +ANY_TYPE: number;
    +ANY_UNORDERED_NODE_TYPE: number;
    +BOOLEAN_TYPE: number;
    +FIRST_ORDERED_NODE_TYPE: number;
    +NUMBER_TYPE: number;
    +ORDERED_NODE_ITERATOR_TYPE: number;
    +ORDERED_NODE_SNAPSHOT_TYPE: number;
    +STRING_TYPE: number;
    +UNORDERED_NODE_ITERATOR_TYPE: number;
    +UNORDERED_NODE_SNAPSHOT_TYPE: number;
};

declare class XSLTProcessor {
    clearParameters(): void;
    getParameter(namespaceURI: string, localName: string): any;
    importStylesheet(style: Node): void;
    removeParameter(namespaceURI: string, localName: string): void;
    reset(): void;
    setParameter(namespaceURI: string, localName: string, value: any): void;
    transformToDocument(source: Node): Document;
    transformToFragment(source: Node, document: Document): DocumentFragment;
}

declare var XSLTProcessor: {
    prototype: XSLTProcessor;
    new(): XSLTProcessor;
};

declare class webkitRTCPeerConnection extends RTCPeerConnection {
    addEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: webkitRTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: webkitRTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

declare var webkitRTCPeerConnection: {
    prototype: webkitRTCPeerConnection;
    new(configuration: RTCConfiguration): webkitRTCPeerConnection;
};

declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;

interface BlobCallback {
    (blob: Blob | null): void;
}

interface DecodeErrorCallback {
    (error: DOMException): void;
}

interface DecodeSuccessCallback {
    (decodedData: AudioBuffer): void;
}

interface ErrorEventHandler {
    (event: Event | string, source?: string, fileno?: number, columnNumber?: number, error?: Error): void;
}

interface EventHandlerNonNull {
    (event: Event): any;
}

interface ForEachCallback {
    (keyId: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer | null, status: MediaKeyStatus): void;
}

interface FrameRequestCallback {
    (time: number): void;
}

interface FunctionStringCallback {
    (data: string): void;
}

interface IntersectionObserverCallback {
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void;
}

interface MSLaunchUriCallback {
    (): void;
}

interface MutationCallback {
    (mutations: MutationRecord[], observer: MutationObserver): void;
}

interface NavigatorUserMediaErrorCallback {
    (error: MediaStreamError): void;
}

interface NavigatorUserMediaSuccessCallback {
    (stream: MediaStream): void;
}

interface NotificationPermissionCallback {
    (permission: NotificationPermission): void;
}

interface OnBeforeUnloadEventHandlerNonNull {
    (event: Event): string | null;
}

interface OnErrorEventHandlerNonNull {
    (event: Event | string, source?: string, lineno?: number, colno?: number, error?: any): any;
}

interface PerformanceObserverCallback {
    (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
}

interface PositionCallback {
    (position: Position): void;
}

interface PositionErrorCallback {
    (positionError: PositionError): void;
}

interface QueuingStrategySizeCallback<T = any> {
    (chunk: T): number;
}

interface RTCPeerConnectionErrorCallback {
    (error: DOMException): void;
}

interface RTCSessionDescriptionCallback {
    (description: RTCSessionDescriptionInit): void;
}

interface RTCStatsCallback {
    (report: RTCStatsReport): void;
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

interface VoidFunction {
    (): void;
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

interface HTMLElementTagNameMap {
    "a": HTMLAnchorElement;
    "abbr": HTMLElement;
    "address": HTMLElement;
    "applet": HTMLAppletElement;
    "area": HTMLAreaElement;
    "article": HTMLElement;
    "aside": HTMLElement;
    "audio": HTMLAudioElement;
    "b": HTMLElement;
    "base": HTMLBaseElement;
    "basefont": HTMLBaseFontElement;
    "bdo": HTMLElement;
    "blockquote": HTMLQuoteElement;
    "body": HTMLBodyElement;
    "br": HTMLBRElement;
    "button": HTMLButtonElement;
    "canvas": HTMLCanvasElement;
    "caption": HTMLTableCaptionElement;
    "cite": HTMLElement;
    "code": HTMLElement;
    "col": HTMLTableColElement;
    "colgroup": HTMLTableColElement;
    "data": HTMLDataElement;
    "datalist": HTMLDataListElement;
    "dd": HTMLElement;
    "del": HTMLModElement;
    "details": HTMLDetailsElement;
    "dfn": HTMLElement;
    "dialog": HTMLDialogElement;
    "dir": HTMLDirectoryElement;
    "div": HTMLDivElement;
    "dl": HTMLDListElement;
    "dt": HTMLElement;
    "em": HTMLElement;
    "embed": HTMLEmbedElement;
    "fieldset": HTMLFieldSetElement;
    "figcaption": HTMLElement;
    "figure": HTMLElement;
    "font": HTMLFontElement;
    "footer": HTMLElement;
    "form": HTMLFormElement;
    "frame": HTMLFrameElement;
    "frameset": HTMLFrameSetElement;
    "h1": HTMLHeadingElement;
    "h2": HTMLHeadingElement;
    "h3": HTMLHeadingElement;
    "h4": HTMLHeadingElement;
    "h5": HTMLHeadingElement;
    "h6": HTMLHeadingElement;
    "head": HTMLHeadElement;
    "header": HTMLElement;
    "hgroup": HTMLElement;
    "hr": HTMLHRElement;
    "html": HTMLHtmlElement;
    "i": HTMLElement;
    "iframe": HTMLIFrameElement;
    "img": HTMLImageElement;
    "input": HTMLInputElement;
    "ins": HTMLModElement;
    "kbd": HTMLElement;
    "label": HTMLLabelElement;
    "legend": HTMLLegendElement;
    "li": HTMLLIElement;
    "link": HTMLLinkElement;
    "map": HTMLMapElement;
    "mark": HTMLElement;
    "marquee": HTMLMarqueeElement;
    "menu": HTMLMenuElement;
    "meta": HTMLMetaElement;
    "meter": HTMLMeterElement;
    "nav": HTMLElement;
    "noscript": HTMLElement;
    "object": HTMLObjectElement;
    "ol": HTMLOListElement;
    "optgroup": HTMLOptGroupElement;
    "option": HTMLOptionElement;
    "output": HTMLOutputElement;
    "p": HTMLParagraphElement;
    "param": HTMLParamElement;
    "picture": HTMLPictureElement;
    "pre": HTMLPreElement;
    "progress": HTMLProgressElement;
    "q": HTMLQuoteElement;
    "rt": HTMLElement;
    "ruby": HTMLElement;
    "s": HTMLElement;
    "samp": HTMLElement;
    "script": HTMLScriptElement;
    "section": HTMLElement;
    "select": HTMLSelectElement;
    "slot": HTMLSlotElement;
    "small": HTMLElement;
    "source": HTMLSourceElement;
    "span": HTMLSpanElement;
    "strong": HTMLElement;
    "style": HTMLStyleElement;
    "sub": HTMLElement;
    "sup": HTMLElement;
    "table": HTMLTableElement;
    "tbody": HTMLTableSectionElement;
    "td": HTMLTableDataCellElement;
    "template": HTMLTemplateElement;
    "textarea": HTMLTextAreaElement;
    "tfoot": HTMLTableSectionElement;
    "th": HTMLTableHeaderCellElement;
    "thead": HTMLTableSectionElement;
    "time": HTMLTimeElement;
    "title": HTMLTitleElement;
    "tr": HTMLTableRowElement;
    "track": HTMLTrackElement;
    "u": HTMLElement;
    "ul": HTMLUListElement;
    "var": HTMLElement;
    "video": HTMLVideoElement;
    "wbr": HTMLElement;
}

interface HTMLElementDeprecatedTagNameMap {
    "listing": HTMLPreElement;
    "xmp": HTMLPreElement;
}

interface SVGElementTagNameMap {
    "circle": SVGCircleElement;
    "clipPath": SVGClipPathElement;
    "defs": SVGDefsElement;
    "desc": SVGDescElement;
    "ellipse": SVGEllipseElement;
    "feBlend": SVGFEBlendElement;
    "feColorMatrix": SVGFEColorMatrixElement;
    "feComponentTransfer": SVGFEComponentTransferElement;
    "feComposite": SVGFECompositeElement;
    "feConvolveMatrix": SVGFEConvolveMatrixElement;
    "feDiffuseLighting": SVGFEDiffuseLightingElement;
    "feDisplacementMap": SVGFEDisplacementMapElement;
    "feDistantLight": SVGFEDistantLightElement;
    "feFlood": SVGFEFloodElement;
    "feFuncA": SVGFEFuncAElement;
    "feFuncB": SVGFEFuncBElement;
    "feFuncG": SVGFEFuncGElement;
    "feFuncR": SVGFEFuncRElement;
    "feGaussianBlur": SVGFEGaussianBlurElement;
    "feImage": SVGFEImageElement;
    "feMerge": SVGFEMergeElement;
    "feMergeNode": SVGFEMergeNodeElement;
    "feMorphology": SVGFEMorphologyElement;
    "feOffset": SVGFEOffsetElement;
    "fePointLight": SVGFEPointLightElement;
    "feSpecularLighting": SVGFESpecularLightingElement;
    "feSpotLight": SVGFESpotLightElement;
    "feTile": SVGFETileElement;
    "feTurbulence": SVGFETurbulenceElement;
    "filter": SVGFilterElement;
    "foreignObject": SVGForeignObjectElement;
    "g": SVGGElement;
    "image": SVGImageElement;
    "line": SVGLineElement;
    "linearGradient": SVGLinearGradientElement;
    "marker": SVGMarkerElement;
    "mask": SVGMaskElement;
    "metadata": SVGMetadataElement;
    "path": SVGPathElement;
    "pattern": SVGPatternElement;
    "polygon": SVGPolygonElement;
    "polyline": SVGPolylineElement;
    "radialGradient": SVGRadialGradientElement;
    "rect": SVGRectElement;
    "stop": SVGStopElement;
    "svg": SVGSVGElement;
    "switch": SVGSwitchElement;
    "symbol": SVGSymbolElement;
    "text": SVGTextElement;
    "textPath": SVGTextPathElement;
    "tspan": SVGTSpanElement;
    "use": SVGUseElement;
    "view": SVGViewElement;
}

/** @deprecated Directly use HTMLElementTagNameMap or SVGElementTagNameMap as appropriate, instead. */
interface ElementTagNameMap extends HTMLElementTagNameMap, SVGElementTagNameMap { }

declare var Audio: {
    new(src?: string): HTMLAudioElement;
};
declare var Image: {
    new(width?: number, height?: number): HTMLImageElement;
};
declare var Option: {
    new(text?: string, value?: string, defaultSelected?: boolean, selected?: boolean): HTMLOptionElement;
};
declare var Blob: typeof Blob;
declare var URL: typeof URL;
declare var URLSearchParams: typeof URLSearchParams;
declare var applicationCache: ApplicationCache;
declare var caches: CacheStorage;
declare var clientInformation: Navigator;
declare var closed: boolean;
declare var crypto: Crypto;
declare var customElements: CustomElementRegistry;
declare var defaultStatus: string;
declare var devicePixelRatio: number;
declare var doNotTrack: string;
declare var document: Document;
declare var event: Event | undefined;
/** @deprecated */
declare var external: External;
declare var frameElement: Element;
declare var frames: Window;
declare var history: History;
declare var innerHeight: number;
declare var innerWidth: number;
declare var isSecureContext: boolean;
declare var length: number;
declare var location: Location;
declare var locationbar: BarProp;
declare var menubar: BarProp;
declare var msContentScript: ExtensionScriptApis;
declare const name: never;
declare var navigator: Navigator;
declare var offscreenBuffering: string | boolean;
declare var oncompassneedscalibration: ((this: Window, ev: Event) => any) | null;
declare var ondevicelight: ((this: Window, ev: DeviceLightEvent) => any) | null;
declare var ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null;
declare var ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => any) | null;
declare var onmousewheel: ((this: Window, ev: Event) => any) | null;
declare var onmsgesturechange: ((this: Window, ev: Event) => any) | null;
declare var onmsgesturedoubletap: ((this: Window, ev: Event) => any) | null;
declare var onmsgestureend: ((this: Window, ev: Event) => any) | null;
declare var onmsgesturehold: ((this: Window, ev: Event) => any) | null;
declare var onmsgesturestart: ((this: Window, ev: Event) => any) | null;
declare var onmsgesturetap: ((this: Window, ev: Event) => any) | null;
declare var onmsinertiastart: ((this: Window, ev: Event) => any) | null;
declare var onmspointercancel: ((this: Window, ev: Event) => any) | null;
declare var onmspointerdown: ((this: Window, ev: Event) => any) | null;
declare var onmspointerenter: ((this: Window, ev: Event) => any) | null;
declare var onmspointerleave: ((this: Window, ev: Event) => any) | null;
declare var onmspointermove: ((this: Window, ev: Event) => any) | null;
declare var onmspointerout: ((this: Window, ev: Event) => any) | null;
declare var onmspointerover: ((this: Window, ev: Event) => any) | null;
declare var onmspointerup: ((this: Window, ev: Event) => any) | null;
/** @deprecated */
declare var onorientationchange: ((this: Window, ev: Event) => any) | null;
declare var onreadystatechange: ((this: Window, ev: ProgressEvent) => any) | null;
declare var onvrdisplayactivate: ((this: Window, ev: Event) => any) | null;
declare var onvrdisplayblur: ((this: Window, ev: Event) => any) | null;
declare var onvrdisplayconnect: ((this: Window, ev: Event) => any) | null;
declare var onvrdisplaydeactivate: ((this: Window, ev: Event) => any) | null;
declare var onvrdisplaydisconnect: ((this: Window, ev: Event) => any) | null;
declare var onvrdisplayfocus: ((this: Window, ev: Event) => any) | null;
declare var onvrdisplaypointerrestricted: ((this: Window, ev: Event) => any) | null;
declare var onvrdisplaypointerunrestricted: ((this: Window, ev: Event) => any) | null;
declare var onvrdisplaypresentchange: ((this: Window, ev: Event) => any) | null;
declare var opener: any;
/** @deprecated */
declare var orientation: string | number;
declare var outerHeight: number;
declare var outerWidth: number;
declare var pageXOffset: number;
declare var pageYOffset: number;
declare var parent: Window;
declare var performance: Performance;
declare var personalbar: BarProp;
declare var screen: Screen;
declare var screenLeft: number;
declare var screenTop: number;
declare var screenX: number;
declare var screenY: number;
declare var scrollX: number;
declare var scrollY: number;
declare var scrollbars: BarProp;
declare var self: Window;
declare var speechSynthesis: SpeechSynthesis;
declare var status: string;
declare var statusbar: BarProp;
declare var styleMedia: StyleMedia;
declare var toolbar: BarProp;
declare var top: Window;
declare var window: Window;
declare function alert(message?: any): void;
declare function blur(): void;
declare function cancelAnimationFrame(handle: number): void;
/** @deprecated */
declare function captureEvents(): void;
declare function close(): void;
declare function confirm(message?: string): boolean;
declare function departFocus(navigationReason: NavigationReason, origin: FocusNavigationOrigin): void;
declare function focus(): void;
declare function getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
declare function getMatchedCSSRules(elt: Element, pseudoElt?: string | null): CSSRuleList;
declare function getSelection(): Selection;
declare function matchMedia(query: string): MediaQueryList;
declare function moveBy(x: number, y: number): void;
declare function moveTo(x: number, y: number): void;
declare function msWriteProfilerMark(profilerMarkName: string): void;
declare function open(url?: string, target?: string, features?: string, replace?: boolean): Window | null;
declare function postMessage(message: any, targetOrigin: string, transfer?: Transferable[]): void;
declare function print(): void;
declare function prompt(message?: string, _default?: string): string | null;
/** @deprecated */
declare function releaseEvents(): void;
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
declare function resizeBy(x: number, y: number): void;
declare function resizeTo(x: number, y: number): void;
declare function scroll(options?: ScrollToOptions): void;
declare function scroll(x: number, y: number): void;
declare function scrollBy(options?: ScrollToOptions): void;
declare function scrollBy(x: number, y: number): void;
declare function scrollTo(options?: ScrollToOptions): void;
declare function scrollTo(x: number, y: number): void;
declare function stop(): void;
declare function webkitCancelAnimationFrame(handle: number): void;
declare function webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint;
declare function webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint;
declare function webkitRequestAnimationFrame(callback: FrameRequestCallback): number;
declare function toString(): string;
/**
 * Dispatches a synthetic event event to target and returns true
 * if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
 */
declare function dispatchEvent(event: Event): boolean;
declare var sessionStorage: Storage;
declare var localStorage: Storage;
declare var console: Console;
/**
 * Fires when the user aborts the download.
 * @param ev The event.
 */
declare var onabort: ((this: Window, ev: UIEvent) => any) | null;
declare var onanimationcancel: ((this: Window, ev: AnimationEvent) => any) | null;
declare var onanimationend: ((this: Window, ev: AnimationEvent) => any) | null;
declare var onanimationiteration: ((this: Window, ev: AnimationEvent) => any) | null;
declare var onanimationstart: ((this: Window, ev: AnimationEvent) => any) | null;
declare var onauxclick: ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the object loses the input focus.
 * @param ev The focus event.
 */
declare var onblur: ((this: Window, ev: FocusEvent) => any) | null;
declare var oncancel: ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when playback is possible, but would require further buffering.
 * @param ev The event.
 */
declare var oncanplay: ((this: Window, ev: Event) => any) | null;
declare var oncanplaythrough: ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the contents of the object or selection have changed.
 * @param ev The event.
 */
declare var onchange: ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the user clicks the left mouse button on the object
 * @param ev The mouse event.
 */
declare var onclick: ((this: Window, ev: MouseEvent) => any) | null;
declare var onclose: ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the user clicks the right mouse button in the client area, opening the context menu.
 * @param ev The mouse event.
 */
declare var oncontextmenu: ((this: Window, ev: MouseEvent) => any) | null;
declare var oncuechange: ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the user double-clicks the object.
 * @param ev The mouse event.
 */
declare var ondblclick: ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Fires on the source object continuously during a drag operation.
 * @param ev The event.
 */
declare var ondrag: ((this: Window, ev: DragEvent) => any) | null;
/**
 * Fires on the source object when the user releases the mouse at the close of a drag operation.
 * @param ev The event.
 */
declare var ondragend: ((this: Window, ev: DragEvent) => any) | null;
/**
 * Fires on the target element when the user drags the object to a valid drop target.
 * @param ev The drag event.
 */
declare var ondragenter: ((this: Window, ev: DragEvent) => any) | null;
declare var ondragexit: ((this: Window, ev: Event) => any) | null;
/**
 * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
 * @param ev The drag event.
 */
declare var ondragleave: ((this: Window, ev: DragEvent) => any) | null;
/**
 * Fires on the target element continuously while the user drags the object over a valid drop target.
 * @param ev The event.
 */
declare var ondragover: ((this: Window, ev: DragEvent) => any) | null;
/**
 * Fires on the source object when the user starts to drag a text selection or selected object.
 * @param ev The event.
 */
declare var ondragstart: ((this: Window, ev: DragEvent) => any) | null;
declare var ondrop: ((this: Window, ev: DragEvent) => any) | null;
/**
 * Occurs when the duration attribute is updated.
 * @param ev The event.
 */
declare var ondurationchange: ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when the media element is reset to its initial state.
 * @param ev The event.
 */
declare var onemptied: ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when the end of playback is reached.
 * @param ev The event
 */
declare var onended: ((this: Window, ev: Event) => any) | null;
/**
 * Fires when an error occurs during object loading.
 * @param ev The event.
 */
declare var onerror: ErrorEventHandler;
/**
 * Fires when the object receives focus.
 * @param ev The event.
 */
declare var onfocus: ((this: Window, ev: FocusEvent) => any) | null;
declare var ongotpointercapture: ((this: Window, ev: PointerEvent) => any) | null;
declare var oninput: ((this: Window, ev: Event) => any) | null;
declare var oninvalid: ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the user presses a key.
 * @param ev The keyboard event
 */
declare var onkeydown: ((this: Window, ev: KeyboardEvent) => any) | null;
/**
 * Fires when the user presses an alphanumeric key.
 * @param ev The event.
 */
declare var onkeypress: ((this: Window, ev: KeyboardEvent) => any) | null;
/**
 * Fires when the user releases a key.
 * @param ev The keyboard event
 */
declare var onkeyup: ((this: Window, ev: KeyboardEvent) => any) | null;
/**
 * Fires immediately after the browser loads the object.
 * @param ev The event.
 */
declare var onload: ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when media data is loaded at the current playback position.
 * @param ev The event.
 */
declare var onloadeddata: ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when the duration and dimensions of the media have been determined.
 * @param ev The event.
 */
declare var onloadedmetadata: ((this: Window, ev: Event) => any) | null;
declare var onloadend: ((this: Window, ev: ProgressEvent) => any) | null;
/**
 * Occurs when Internet Explorer begins looking for media data.
 * @param ev The event.
 */
declare var onloadstart: ((this: Window, ev: Event) => any) | null;
declare var onlostpointercapture: ((this: Window, ev: PointerEvent) => any) | null;
/**
 * Fires when the user clicks the object with either mouse button.
 * @param ev The mouse event.
 */
declare var onmousedown: ((this: Window, ev: MouseEvent) => any) | null;
declare var onmouseenter: ((this: Window, ev: MouseEvent) => any) | null;
declare var onmouseleave: ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Fires when the user moves the mouse over the object.
 * @param ev The mouse event.
 */
declare var onmousemove: ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Fires when the user moves the mouse pointer outside the boundaries of the object.
 * @param ev The mouse event.
 */
declare var onmouseout: ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Fires when the user moves the mouse pointer into the object.
 * @param ev The mouse event.
 */
declare var onmouseover: ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Fires when the user releases a mouse button while the mouse is over the object.
 * @param ev The mouse event.
 */
declare var onmouseup: ((this: Window, ev: MouseEvent) => any) | null;
/**
 * Occurs when playback is paused.
 * @param ev The event.
 */
declare var onpause: ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when the play method is requested.
 * @param ev The event.
 */
declare var onplay: ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when the audio or video has started playing.
 * @param ev The event.
 */
declare var onplaying: ((this: Window, ev: Event) => any) | null;
declare var onpointercancel: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerdown: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerenter: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerleave: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointermove: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerout: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerover: ((this: Window, ev: PointerEvent) => any) | null;
declare var onpointerup: ((this: Window, ev: PointerEvent) => any) | null;
/**
 * Occurs to indicate progress while downloading media data.
 * @param ev The event.
 */
declare var onprogress: ((this: Window, ev: ProgressEvent) => any) | null;
/**
 * Occurs when the playback rate is increased or decreased.
 * @param ev The event.
 */
declare var onratechange: ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the user resets a form.
 * @param ev The event.
 */
declare var onreset: ((this: Window, ev: Event) => any) | null;
declare var onresize: ((this: Window, ev: UIEvent) => any) | null;
/**
 * Fires when the user repositions the scroll box in the scroll bar on the object.
 * @param ev The event.
 */
declare var onscroll: ((this: Window, ev: UIEvent) => any) | null;
declare var onsecuritypolicyviolation: ((this: Window, ev: SecurityPolicyViolationEvent) => any) | null;
/**
 * Occurs when the seek operation ends.
 * @param ev The event.
 */
declare var onseeked: ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when the current playback position is moved.
 * @param ev The event.
 */
declare var onseeking: ((this: Window, ev: Event) => any) | null;
/**
 * Fires when the current selection changes.
 * @param ev The event.
 */
declare var onselect: ((this: Window, ev: UIEvent) => any) | null;
/**
 * Occurs when the download has stopped.
 * @param ev The event.
 */
declare var onstalled: ((this: Window, ev: Event) => any) | null;
declare var onsubmit: ((this: Window, ev: Event) => any) | null;
/**
 * Occurs if the load operation has been intentionally halted.
 * @param ev The event.
 */
declare var onsuspend: ((this: Window, ev: Event) => any) | null;
/**
 * Occurs to indicate the current playback position.
 * @param ev The event.
 */
declare var ontimeupdate: ((this: Window, ev: Event) => any) | null;
declare var ontoggle: ((this: Window, ev: Event) => any) | null;
declare var ontouchcancel: ((this: Window, ev: TouchEvent) => any) | null;
declare var ontouchend: ((this: Window, ev: TouchEvent) => any) | null;
declare var ontouchmove: ((this: Window, ev: TouchEvent) => any) | null;
declare var ontouchstart: ((this: Window, ev: TouchEvent) => any) | null;
declare var ontransitioncancel: ((this: Window, ev: TransitionEvent) => any) | null;
declare var ontransitionend: ((this: Window, ev: TransitionEvent) => any) | null;
declare var ontransitionrun: ((this: Window, ev: TransitionEvent) => any) | null;
declare var ontransitionstart: ((this: Window, ev: TransitionEvent) => any) | null;
/**
 * Occurs when the volume is changed, or playback is muted or unmuted.
 * @param ev The event.
 */
declare var onvolumechange: ((this: Window, ev: Event) => any) | null;
/**
 * Occurs when playback stops because the next frame of a video resource is not available.
 * @param ev The event.
 */
declare var onwaiting: ((this: Window, ev: Event) => any) | null;
declare var onwheel: ((this: Window, ev: WheelEvent) => any) | null;
declare var indexedDB: IDBFactory;
declare function atob(encodedString: string): string;
declare function btoa(rawString: string): string;
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
declare var sessionStorage: Storage;
declare var localStorage: Storage;
declare var onafterprint: ((this: Window, ev: Event) => any) | null;
declare var onbeforeprint: ((this: Window, ev: Event) => any) | null;
declare var onbeforeunload: ((this: Window, ev: BeforeUnloadEvent) => any) | null;
declare var onhashchange: ((this: Window, ev: HashChangeEvent) => any) | null;
declare var onlanguagechange: ((this: Window, ev: Event) => any) | null;
declare var onmessage: ((this: Window, ev: MessageEvent) => any) | null;
declare var onmessageerror: ((this: Window, ev: MessageEvent) => any) | null;
declare var onoffline: ((this: Window, ev: Event) => any) | null;
declare var ononline: ((this: Window, ev: Event) => any) | null;
declare var onpagehide: ((this: Window, ev: PageTransitionEvent) => any) | null;
declare var onpageshow: ((this: Window, ev: PageTransitionEvent) => any) | null;
declare var onpopstate: ((this: Window, ev: PopStateEvent) => any) | null;
declare var onrejectionhandled: ((this: Window, ev: Event) => any) | null;
declare var onstorage: ((this: Window, ev: StorageEvent) => any) | null;
declare var onunhandledrejection: ((this: Window, ev: PromiseRejectionEvent) => any) | null;
declare var onunload: ((this: Window, ev: Event) => any) | null;
declare function addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
declare function addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
declare function removeEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
declare function removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
type BlobPart = BufferSource | Blob | string;
type HeadersInit = Headers | string[][] | Record<string, string>;
type BodyInit = Blob | BufferSource | FormData | URLSearchParams | ReadableStream<Uint8Array> | string;
type RequestInfo = Request | string;
type DOMHighResTimeStamp = number;
type RenderingContext = CanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext;
type HTMLOrSVGImageElement = HTMLImageElement | SVGImageElement;
type CanvasImageSource = HTMLOrSVGImageElement | HTMLVideoElement | HTMLCanvasElement | ImageBitmap;
type MessageEventSource = WindowProxy | MessagePort | ServiceWorker;
type HTMLOrSVGScriptElement = HTMLScriptElement | SVGScriptElement;
type ImageBitmapSource = CanvasImageSource | Blob | ImageData;
type OnErrorEventHandler = OnErrorEventHandlerNonNull | null;
type OnBeforeUnloadEventHandler = OnBeforeUnloadEventHandlerNonNull | null;
type TimerHandler = string | Function;
type PerformanceEntryList = PerformanceEntry[];
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
type TexImageSource = ImageBitmap | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement;
type Float32List = Float32Array | GLfloat[];
type Int32List = Int32Array | GLint[];
type BufferSource = ArrayBufferView | ArrayBuffer;
type DOMTimeStamp = number;
type LineAndPositionSetting = number | AutoKeyword;
type FormDataEntryValue = File | string;
type InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";
type IDBValidKey = number | string | Date | BufferSource | IDBArrayKey;
type MutationRecordType = "attributes" | "characterData" | "childList";
type ConstrainBoolean = boolean | ConstrainBooleanParameters;
type ConstrainDOMString = string | string[] | ConstrainDOMStringParameters;
type ConstrainDouble = number | ConstrainDoubleRange;
type ConstrainLong = number | ConstrainLongRange;
type IDBKeyPath = string;
type Transferable = ArrayBuffer | MessagePort | ImageBitmap;
type RTCIceGatherCandidate = RTCIceCandidateDictionary | RTCIceCandidateComplete;
type RTCTransport = RTCDtlsTransport | RTCSrtpSdesTransport;
/** @deprecated */
type MouseWheelEvent = WheelEvent;
type WindowProxy = Window;
type AlignSetting = "start" | "center" | "end" | "left" | "right";
type AnimationPlayState = "idle" | "running" | "paused" | "finished";
type AppendMode = "segments" | "sequence";
type AudioContextLatencyCategory = "balanced" | "interactive" | "playback";
type AudioContextState = "suspended" | "running" | "closed";
type AutoKeyword = "auto";
type AutomationRate = "a-rate" | "k-rate";
type BinaryType = "blob" | "arraybuffer";
type BiquadFilterType = "lowpass" | "highpass" | "bandpass" | "lowshelf" | "highshelf" | "peaking" | "notch" | "allpass";
type CanPlayTypeResult = "" | "maybe" | "probably";
type CanvasDirection = "ltr" | "rtl" | "inherit";
type CanvasFillRule = "nonzero" | "evenodd";
type CanvasLineCap = "butt" | "round" | "square";
type CanvasLineJoin = "round" | "bevel" | "miter";
type CanvasTextAlign = "start" | "end" | "left" | "right" | "center";
type CanvasTextBaseline = "top" | "hanging" | "middle" | "alphabetic" | "ideographic" | "bottom";
type ChannelCountMode = "max" | "clamped-max" | "explicit";
type ChannelInterpretation = "speakers" | "discrete";
type ClientTypes = "window" | "worker" | "sharedworker" | "all";
type CompositeOperation = "replace" | "add" | "accumulate";
type CompositeOperationOrAuto = "replace" | "add" | "accumulate" | "auto";
type DirectionSetting = "" | "rl" | "lr";
type DisplayCaptureSurfaceType = "monitor" | "window" | "application" | "browser";
type DistanceModelType = "linear" | "inverse" | "exponential";
type DocumentReadyState = "loading" | "interactive" | "complete";
type EndOfStreamError = "network" | "decode";
type EndingType = "transparent" | "native";
type FillMode = "none" | "forwards" | "backwards" | "both" | "auto";
type GamepadHand = "" | "left" | "right";
type GamepadHapticActuatorType = "vibration";
type GamepadInputEmulationType = "mouse" | "keyboard" | "gamepad";
type GamepadMappingType = "" | "standard";
type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique";
type IDBRequestReadyState = "pending" | "done";
type IDBTransactionMode = "readonly" | "readwrite" | "versionchange";
type ImageSmoothingQuality = "low" | "medium" | "high";
type IterationCompositeOperation = "replace" | "accumulate";
type KeyFormat = "raw" | "spki" | "pkcs8" | "jwk";
type KeyType = "public" | "private" | "secret";
type KeyUsage = "encrypt" | "decrypt" | "sign" | "verify" | "deriveKey" | "deriveBits" | "wrapKey" | "unwrapKey";
type LineAlignSetting = "start" | "center" | "end";
type ListeningState = "inactive" | "active" | "disambiguation";
type MSCredentialType = "FIDO_2_0";
type MSTransportType = "Embedded" | "USB" | "NFC" | "BT";
type MSWebViewPermissionState = "unknown" | "defer" | "allow" | "deny";
type MSWebViewPermissionType = "geolocation" | "unlimitedIndexedDBQuota" | "media" | "pointerlock" | "webnotifications";
type MediaDeviceKind = "audioinput" | "audiooutput" | "videoinput";
type MediaKeyMessageType = "license-request" | "license-renewal" | "license-release" | "individualization-request";
type MediaKeySessionType = "temporary" | "persistent-license" | "persistent-release-message";
type MediaKeyStatus = "usable" | "expired" | "output-downscaled" | "output-not-allowed" | "status-pending" | "internal-error";
type MediaKeysRequirement = "required" | "optional" | "not-allowed";
type MediaStreamTrackState = "live" | "ended";
type NavigationReason = "up" | "down" | "left" | "right";
type NavigationType = "navigate" | "reload" | "back_forward" | "prerender";
type NotificationDirection = "auto" | "ltr" | "rtl";
type NotificationPermission = "default" | "denied" | "granted";
type OrientationLockType = "any" | "natural" | "landscape" | "portrait" | "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
type OrientationType = "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
type OscillatorType = "sine" | "square" | "sawtooth" | "triangle" | "custom";
type OverSampleType = "none" | "2x" | "4x";
type PanningModelType = "equalpower" | "HRTF";
type PaymentComplete = "success" | "fail" | "unknown";
type PaymentShippingType = "shipping" | "delivery" | "pickup";
type PlaybackDirection = "normal" | "reverse" | "alternate" | "alternate-reverse";
type PositionAlignSetting = "line-left" | "center" | "line-right" | "auto";
type PushEncryptionKeyName = "p256dh" | "auth";
type PushPermissionState = "denied" | "granted" | "prompt";
type RTCBundlePolicy = "balanced" | "max-compat" | "max-bundle";
type RTCDataChannelState = "connecting" | "open" | "closing" | "closed";
type RTCDegradationPreference = "maintain-framerate" | "maintain-resolution" | "balanced";
type RTCDtlsRole = "auto" | "client" | "server";
type RTCDtlsTransportState = "new" | "connecting" | "connected" | "closed" | "failed";
type RTCDtxStatus = "disabled" | "enabled";
type RTCErrorDetailType = "data-channel-failure" | "dtls-failure" | "fingerprint-failure" | "idp-bad-script-failure" | "idp-execution-failure" | "idp-load-failure" | "idp-need-login" | "idp-timeout" | "idp-tls-failure" | "idp-token-expired" | "idp-token-invalid" | "sctp-failure" | "sdp-syntax-error" | "hardware-encoder-not-available" | "hardware-encoder-error";
type RTCIceCandidateType = "host" | "srflx" | "prflx" | "relay";
type RTCIceComponent = "rtp" | "rtcp";
type RTCIceConnectionState = "new" | "checking" | "connected" | "completed" | "disconnected" | "failed" | "closed";
type RTCIceCredentialType = "password" | "oauth";
type RTCIceGatherPolicy = "all" | "nohost" | "relay";
type RTCIceGathererState = "new" | "gathering" | "complete";
type RTCIceGatheringState = "new" | "gathering" | "complete";
type RTCIceProtocol = "udp" | "tcp";
type RTCIceRole = "controlling" | "controlled";
type RTCIceTcpCandidateType = "active" | "passive" | "so";
type RTCIceTransportPolicy = "relay" | "all";
type RTCIceTransportState = "new" | "checking" | "connected" | "completed" | "disconnected" | "failed" | "closed";
type RTCPeerConnectionState = "new" | "connecting" | "connected" | "disconnected" | "failed" | "closed";
type RTCPriorityType = "very-low" | "low" | "medium" | "high";
type RTCRtcpMuxPolicy = "negotiate" | "require";
type RTCRtpTransceiverDirection = "sendrecv" | "sendonly" | "recvonly" | "inactive";
type RTCSctpTransportState = "connecting" | "connected" | "closed";
type RTCSdpType = "offer" | "pranswer" | "answer" | "rollback";
type RTCSignalingState = "stable" | "have-local-offer" | "have-remote-offer" | "have-local-pranswer" | "have-remote-pranswer" | "closed";
type RTCStatsIceCandidatePairState = "frozen" | "waiting" | "inprogress" | "failed" | "succeeded" | "cancelled";
type RTCStatsIceCandidateType = "host" | "serverreflexive" | "peerreflexive" | "relayed";
type RTCStatsType = "inboundrtp" | "outboundrtp" | "session" | "datachannel" | "track" | "transport" | "candidatepair" | "localcandidate" | "remotecandidate";
type ReadyState = "closed" | "open" | "ended";
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin-only" | "origin-when-cross-origin" | "unsafe-url";
type RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
type RequestCredentials = "omit" | "same-origin" | "include";
type RequestDestination = "" | "audio" | "audioworklet" | "document" | "embed" | "font" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt";
type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
type RequestRedirect = "follow" | "error" | "manual";
type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";
type ScopedCredentialType = "ScopedCred";
type ScrollBehavior = "auto" | "smooth";
type ScrollLogicalPosition = "start" | "center" | "end" | "nearest";
type ScrollRestoration = "auto" | "manual";
type ScrollSetting = "" | "up";
type SelectionMode = "select" | "start" | "end" | "preserve";
type ServiceWorkerState = "installing" | "installed" | "activating" | "activated" | "redundant";
type ServiceWorkerUpdateViaCache = "imports" | "all" | "none";
type ShadowRootMode = "open" | "closed";
type SpeechRecognitionErrorCode = "no-speech" | "aborted" | "audio-capture" | "network" | "not-allowed" | "service-not-allowed" | "bad-grammar" | "language-not-supported";
type SpeechSynthesisErrorCode = "canceled" | "interrupted" | "audio-busy" | "audio-hardware" | "network" | "synthesis-unavailable" | "synthesis-failed" | "language-unavailable" | "voice-unavailable" | "text-too-long" | "invalid-argument";
type SupportedType = "text/html" | "text/xml" | "application/xml" | "application/xhtml+xml" | "image/svg+xml";
type TextTrackKind = "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
type TextTrackMode = "disabled" | "hidden" | "showing";
type TouchType = "direct" | "stylus";
type Transport = "usb" | "nfc" | "ble";
type VRDisplayEventReason = "mounted" | "navigation" | "requested" | "unmounted";
type VideoFacingModeEnum = "user" | "environment" | "left" | "right";
type VisibilityState = "hidden" | "visible" | "prerender";
type WebGLPowerPreference = "default" | "low-power" | "high-performance";
type WorkerType = "classic" | "module";
type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text";
