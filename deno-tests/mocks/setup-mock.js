import {ElementMock} from "../../packages/crs-framework/test/mockups/element-mock.js";

globalThis.DocumentFragment = ElementMock;
globalThis.HTMLElement = ElementMock;
globalThis.HTMLInputElement = ElementMock;
globalThis.requestAnimationFrame = (callback) => callback();

globalThis.eventEmitter = {
    on : (...args) => {globalThis.eventEmitter.messages.push(args)},
    emit: (...args) => {globalThis.eventEmitter.messages.push(args)},
    postMessage: (...args) => {globalThis.eventEmitter.messages.push(args)},
    messages: [],
    clearAll: () => globalThis.eventEmitter.messages.length = 0
}