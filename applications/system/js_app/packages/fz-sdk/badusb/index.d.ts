/**
 * @brief Special key codes that this module recognizes
 * @version Added in JS SDK 0.1
 */
export type ModifierKey = "CTRL" | "SHIFT" | "ALT" | "GUI";

/** @version Added in JS SDK 0.1 */
export type MainKey =
    "DOWN" | "LEFT" | "RIGHT" | "UP" |

    "ENTER" | "PAUSE" | "CAPSLOCK" | "DELETE" | "BACKSPACE" | "END" | "ESC" |
    "HOME" | "INSERT" | "NUMLOCK" | "PAGEUP" | "PAGEDOWN" | "PRINTSCREEN" |
    "SCROLLLOCK" | "SPACE" | "TAB" | "MENU" |

    "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10" |
    "F11" | "F12" | "F13" | "F14" | "F15" | "F16" | "F17" | "F18" | "F19" |
    "F20" | "F21" | "F22" | "F23" | "F24" |

    "NUM0" | "NUM1" | "NUM2" | "NUM3" | "NUM4" | "NUM5" | "NUM6" | "NUM7" |
    "NUM8" | "NUM9" |

    "\n" | " " | "!" | "\"" | "#" | "$" | "%" | "&" | "'" | "(" | ")" | "*" |
    "+" | "," | "-" | "." | "/" | ":" | ";" | "<" | ">" | "=" | "?" | "@" | "[" |
    "]" | "\\" | "^" | "_" | "`" | "{" | "}" | "|" | "~" |

    "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" |

    "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" |
    "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" |
    "Y" | "Z" |

    "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" |
    "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" |
    "y" | "z";

/** @version Added in JS SDK 0.1 */
export type KeyCode = MainKey | ModifierKey | number;

/**
 * @brief Initializes the module
 * 
 * Automatically unlocks USB profile, so qFlipper connection will be interrupted.
 * 
 * @param settings USB device settings. Omit to select default parameters
 * @version Added in JS SDK 0.1
 */
export declare function setup(settings?: { vid: number, pid: number, mfrName?: string, prodName?: string, layoutPath?: string }): void;

/**
 * @brief Tells whether the virtual USB HID device has successfully connected
 * @version Added in JS SDK 0.1
 */
export declare function isConnected(): boolean;

/**
 * @brief Presses one or multiple keys at once, then releases them
 * @param keys The arguments represent a set of keys to. Out of that set, only
 *             one of the keys may represent a "main key" (see `MainKey`), with
 *             the rest being modifier keys (see `ModifierKey`).
 * @version Added in JS SDK 0.1
 */
export declare function press(...keys: KeyCode[]): void;

/**
 * @brief Presses one or multiple keys at once without releasing them
 * @param keys The arguments represent a set of keys to. Out of that set, only
 *             one of the keys may represent a "main key" (see `MainKey`), with
 *             the rest being modifier keys (see `ModifierKey`).
 * @version Added in JS SDK 0.1
 */
export declare function hold(...keys: KeyCode[]): void;

/**
 * @brief Releases one or multiple keys at once
 * @param keys The arguments represent a set of keys to. Out of that set, only
 *             one of the keys may represent a "main key" (see `MainKey`), with
 *             the rest being modifier keys (see `ModifierKey`).
 * @version Added in JS SDK 0.1
 */
export declare function release(...keys: KeyCode[]): void;

/**
 * @brief Prints a string by repeatedly pressing and releasing keys
 * @param string The string to print
 * @param delay How many milliseconds to wait between key presses
 * @version Added in JS SDK 0.1
 */
export declare function print(string: string, delay?: number): void;

/**
 * @brief Prints a string by repeatedly pressing and releasing keys. Presses
 *        "Enter" after printing the string
 * @param string The string to print
 * @param delay How many milliseconds to wait between key presses
 * @version Added in JS SDK 0.1
 */
export declare function println(string: string, delay?: number): void;

/**
 * @brief Prints a string by Alt+Numpad method - works only on Windows!
 * @param string The string to print
 * @param delay How many milliseconds to wait between key presses
 * @version Added in JS SDK 0.1
 */
export declare function altPrint(string: string, delay?: number): void;

/**
 * @brief Prints a string by Alt+Numpad method - works only on Windows!
 *        Presses "Enter" after printing the string
 * @param string The string to print
 * @param delay How many milliseconds to wait between key presses
 * @version Added in JS SDK 0.1
 */
export declare function altPrintln(string: string, delay?: number): void;

/**
 * @brief Releases usb, optional, but allows to switch usb profile
 * @version Added in JS SDK 0.1
 */
export declare function quit(): void;
