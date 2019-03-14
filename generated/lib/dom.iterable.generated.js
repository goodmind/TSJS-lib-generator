/////////////////////////////
/// DOM Iterable APIs
/////////////////////////////

interface AudioParamMap extends ReadonlyMap<string, AudioParam> {
}

interface AudioTrackList {
    @@iterator(): Iterator<AudioTrack>;
}

interface CSSRuleList {
    @@iterator(): Iterator<CSSRule>;
}

interface CSSStyleDeclaration {
    @@iterator(): Iterator<string>;
}

interface ClientRectList {
    @@iterator(): Iterator<ClientRect>;
}

interface DOMRectList {
    @@iterator(): Iterator<DOMRect>;
}

interface DOMStringList {
    @@iterator(): Iterator<string>;
}

interface DOMTokenList {
    @@iterator(): Iterator<string>;
    entries(): IterableIterator<[number, string]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<string>;
}

interface DataTransferItemList {
    @@iterator(): Iterator<DataTransferItem>;
}

interface FileList {
    @@iterator(): Iterator<File>;
}

interface FormData {
    @@iterator(): Iterator<[string, FormDataEntryValue]>;
    /**
     * Returns an array of key, value pairs for every entry in the list.
     */
    entries(): IterableIterator<[string, FormDataEntryValue]>;
    /**
     * Returns a list of keys in the list.
     */
    keys(): IterableIterator<string>;
    /**
     * Returns a list of values in the list.
     */
    values(): IterableIterator<FormDataEntryValue>;
}

interface HTMLAllCollection {
    @@iterator(): Iterator<Element>;
}

interface HTMLCollectionBase {
    @@iterator(): Iterator<Element>;
}

interface HTMLCollectionOf<T: Element> {
    @@iterator(): Iterator<T>;
}

interface HTMLFormElement {
    @@iterator(): Iterator<Element>;
}

interface HTMLSelectElement {
    @@iterator(): Iterator<Element>;
}

interface Headers {
    @@iterator(): Iterator<[string, string]>;
    /**
     * Returns an iterator allowing to go through all key/value pairs contained in this object.
     */
    entries(): IterableIterator<[string, string]>;
    /**
     * Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.
     */
    keys(): IterableIterator<string>;
    /**
     * Returns an iterator allowing to go through all values of the key/value pairs contained in this object.
     */
    values(): IterableIterator<string>;
}

interface MediaKeyStatusMap {
    @@iterator(): Iterator<[BufferSource, MediaKeyStatus]>;
    entries(): IterableIterator<[BufferSource, MediaKeyStatus]>;
    keys(): IterableIterator<BufferSource>;
    values(): IterableIterator<MediaKeyStatus>;
}

interface MediaList {
    @@iterator(): Iterator<string>;
}

interface MimeTypeArray {
    @@iterator(): Iterator<Plugin>;
}

interface NamedNodeMap {
    @@iterator(): Iterator<Attr>;
}

interface NodeList {
    @@iterator(): Iterator<Node>;
    /**
     * Returns an array of key, value pairs for every entry in the list.
     */
    entries(): IterableIterator<[number, Node]>;
    /**
     * Returns an list of keys in the list.
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an list of values in the list.
     */
    values(): IterableIterator<Node>;
}

interface NodeListOf<TNode: Node> {
    @@iterator(): Iterator<TNode>;
    /**
     * Returns an array of key, value pairs for every entry in the list.
     */
    entries(): IterableIterator<[number, TNode]>;
    /**
     * Returns an list of keys in the list.
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an list of values in the list.
     */
    values(): IterableIterator<TNode>;
}

interface Plugin {
    @@iterator(): Iterator<MimeType>;
}

interface PluginArray {
    @@iterator(): Iterator<Plugin>;
}

interface RTCStatsReport extends ReadonlyMap<string, any> {
}

interface SVGLengthList {
    @@iterator(): Iterator<SVGLength>;
}

interface SVGNumberList {
    @@iterator(): Iterator<SVGNumber>;
}

interface SVGStringList {
    @@iterator(): Iterator<string>;
}

interface SourceBufferList {
    @@iterator(): Iterator<SourceBuffer>;
}

interface SpeechGrammarList {
    @@iterator(): Iterator<SpeechGrammar>;
}

interface SpeechRecognitionResult {
    @@iterator(): Iterator<SpeechRecognitionAlternative>;
}

interface SpeechRecognitionResultList {
    @@iterator(): Iterator<SpeechRecognitionResult>;
}

interface StyleSheetList {
    @@iterator(): Iterator<StyleSheet>;
}

interface TextTrackCueList {
    @@iterator(): Iterator<TextTrackCue>;
}

interface TextTrackList {
    @@iterator(): Iterator<TextTrack>;
}

interface TouchList {
    @@iterator(): Iterator<Touch>;
}

interface URLSearchParams {
    @@iterator(): Iterator<[string, string]>;
    /**
     * Returns an array of key, value pairs for every entry in the search params.
     */
    entries(): IterableIterator<[string, string]>;
    /**
     * Returns a list of keys in the search params.
     */
    keys(): IterableIterator<string>;
    /**
     * Returns a list of values in the search params.
     */
    values(): IterableIterator<string>;
}

interface VideoTrackList {
    @@iterator(): Iterator<VideoTrack>;
}
