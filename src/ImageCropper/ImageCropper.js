import React, { Fragment } from 'react'
import styled from 'styled-components'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'

const ModalOpener = styled.button`
  width: 160px;
  height: 48px;
  margin: 16px;
  ${props => props.styles}
`
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0.8;
  z-index: 12000;
`
const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  background-color: white;
  font-family: sans-serif;
  top: 10%;
  left: 5%;
  right: 5%;
  max-height: 80vh;
  opacity: 1;
  z-index: 12001;
  overflow-y: auto;
`
const ModalBody = styled.div`
  background-color: white;
  width: 100%;
`
const BlockRow = styled.div`
  display: flex;
`
const Block = styled.div`
  display: inline-flex;
  width: 50%;
  flex-grow: 1;
`
const PreviewImg = styled.img`
  margin: auto;
`
const PreviewContainer = styled.div`
  margin: auto;
`
const PreviewBorders = styled.div`
  padding: 5px;
  border: 1px dashed black;
`
const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 8px;
  padding: 8px;
  width: 256px;
  height: 48px;
  background-color: ${props => props.bgColor};
  color: white;
  font-size: 28px;
  cursor: pointer;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
`

const ImageCropper = ({
  cropper,
  ratio,
  src,
  croppedData,
  setCroppedData,
  hasButton,
  buttonStyles,
  buttonText,
  width,
  height,
  hasGuides,
  isOpen,
  toggleOpen,
  getImageData,
  setState,
  imageData,
}) => (
  <Fragment>
    {hasButton &&
    <ModalOpener
      styles={buttonStyles}
      onClick={toggleOpen}
    >
      {buttonText}
    </ModalOpener>}

    {isOpen &&
    <Fragment>
      <ModalBackground onClick={toggleOpen} />
      <ModalContainer>
        <ModalBody>
          <BlockRow>
            <Block>
              <Cropper
                ref={cropper}
                src={src}
                style={{ height: 600, width: '100%', display: 'inline-flex' }}
                aspectRatio={ratio}
                crop={setCroppedData}
                guides={hasGuides}
                ready={() => {
                  cropper.current.setCropBoxData({ width })
                  setState({ imageData: cropper.current.getImageData() })
                }}
              />
            </Block>
            <Block>
              <PreviewContainer>
                <PreviewBorders>
                  <PreviewImg
                    alt="preview"
                    src={croppedData}
                    width={width}
                    height={height}
                  />
                </PreviewBorders>

                <ul style={{ marginLeft: '-8px' }}>
                  <li>Original size: {imageData.naturalWidth} X {imageData.naturalHeight}</li>
                  <li>New size: {width} X {height}</li>
                </ul>
              </PreviewContainer>
            </Block>
          </BlockRow>
          <BlockRow>
            <Button
              bgColor="green"
              onClick={() => {
                toggleOpen()
                getImageData(croppedData)
              }}
            >
              Save
            </Button>
            <Button bgColor="red" onClick={toggleOpen}>Discard</Button>
          </BlockRow>
        </ModalBody>
      </ModalContainer>
    </Fragment>}
  </Fragment>
)

export default ImageCropper
