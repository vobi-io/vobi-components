import React, { Fragment } from 'react'
import { compose, withStateHandlers } from 'recompose'

import { ImageCropper } from '../../src'

const Example = props => (
  <Fragment>
    <ImageCropper
      getImageData={data => console.log(data)}
      hasButton
      hasGuides
      height={250}
      isOpen={props.isOpen}
      src={'https://akm-img-a-in.tosshub.com/indiatoday/angelina-full-story_647_010418010625.jpg?2dnc3YIX.EMkO9n2JWJbYQJqT1Yro7Dc'}
      toggleOpen={props.toggleIsOpen}
      width={300}
    />
  </Fragment>
)

export default compose(
  withStateHandlers(
    () => ({ isOpen: false }),
    {
      toggleIsOpen: ({ isOpen }) => () => ({ isOpen: !isOpen }),
    }
  )
)(Example)
