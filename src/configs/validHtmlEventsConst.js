const validHtmlEvents = new Set([
    // Clipboard Events
    "onCopy",
    "onCut",
    "onPaste",

    // Composition Events
    "onCompositionEnd",
    "onCompositionStart",
    "onCompositionUpdate",

    // Focus Events
    "onFocus",
    "onBlur",

    // Form Events
    "onChange",
    "onInput",
    "onInvalid",
    "onReset",
    "onSubmit",

    // Keyboard Events
    "onKeyDown",
    "onKeyPress", // Deprecated, but still exists
    "onKeyUp",

    // Mouse Events
    "onClick",
    "onContextMenu",
    "onDoubleClick",
    "onDrag",
    "onDragEnd",
    "onDragEnter",
    "onDragLeave",
    "onDragOver",
    "onDragStart",
    "onDrop",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseOut",
    "onMouseOver",
    "onMouseUp",

    // Selection Events
    "onSelect",

    // Touch Events
    "onTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",

    // UI Events
    "onScroll",

    // Wheel Events
    "onWheel",

    // Media Events
    "onAbort",
    "onCanPlay",
    "onCanPlayThrough",
    "onDurationChange",
    "onEmptied",
    "onEncrypted",
    "onEnded",
    "onError",
    "onLoadedData",
    "onLoadedMetadata",
    "onLoadStart",
    "onPause",
    "onPlay",
    "onPlaying",
    "onProgress",
    "onRateChange",
    "onSeeked",
    "onSeeking",
    "onStalled",
    "onSuspend",
    "onTimeUpdate",
    "onVolumeChange",
    "onWaiting",

    // Image Events
    "onLoad",

    // Animation Events
    "onAnimationStart",
    "onAnimationEnd",
    "onAnimationIteration",

    // Transition Events
    "onTransitionEnd",

    // Pointer Events
    "onPointerDown",
    "onPointerMove",
    "onPointerUp",
    "onPointerCancel",
    "onGotPointerCapture",
    "onLostPointerCapture",
    "onPointerEnter",
    "onPointerLeave",
    "onPointerOver",
    "onPointerOut",

    // Other Events
    "onToggle"
]);

export { validHtmlEvents };
