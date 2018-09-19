/**
 * @param getImageData {Function} @required - function executing on confirm
 * @param isOpen {Boolean} @default false - controll of cropper modal
 * @param toggleOpen {Function} @required - toggle cropper mdoal
 * @param hasButton {Boolean} @default false - render toggle button
 * @param buttonStyles {Object} - overrides button styles
 * @param buttonText {String} @default 'Open Cropper' - overrides button styles
 * @param hasGuides {Boolean} @default false - Crop box has grids or not
 * @param src {String} @required - image you want to crop
 * @param width {Number} @default 200 - cropped image width
 * @param height {Number} @default 200 - cropped image height
 */
export { default } from './imageCropperContainer'
