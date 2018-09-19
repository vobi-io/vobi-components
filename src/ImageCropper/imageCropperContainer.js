import React from 'react'
import { withStateHandlers } from 'recompose'

import ImageCropper from './ImageCropper'

const imageCropperContainer = withStateHandlers(
  props => ({
    croppedData: '',
    cropper: React.createRef(),
    ratio: props.width / props.height,
    imageData: {},
  }),
  {
    setState: () => state => state,
    setCroppedData: ({ cropper }) => () => ({
      croppedData: cropper.current.getCroppedCanvas().toDataURL(),
    }),
  }
)

const Cropper = imageCropperContainer(ImageCropper)

Cropper.defaultProps = {
  width: 200,
  height: 200,
  buttonText: 'Open Cropper',
}

export default Cropper
