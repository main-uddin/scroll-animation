import { useState } from 'react'
import { useScrollAnimate, useSetScrollableHeight } from 'hooks'

export const SwapAnimation = props => {
  const {
    parentId,
    totalSlide,
    parentHeightQuantify,
    jump,
    folderPreset
  } = props

  const [heightToScroll, setHeightToScroll] = useState()
  const [imageLink, setImageLink] = useState(props.initialString)

  useSetScrollableHeight({ setHeightToScroll, parentHeightQuantify })
  useScrollAnimate({
    heightToScroll,
    setImageLink,
    totalSlide,
    parentId,
    jump,
    folderPreset
  })

  return (
    <div
      id={`${parentId}-scroll-element`}
      style={{
        height: `${heightToScroll}px`,
        position: 'relative',
        background: '#000'
      }}
    >
      <img
        id={`${parentId}-img`}
        src={imageLink}
        style={{
          position: 'sticky',
          top: '120px',
          left: '0',
          width: '100%',
          height: 'calc(100vh - 120px)'
        }}
      />
    </div>
  )
}
