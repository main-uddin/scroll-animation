import NavBar from 'components/nav'
import { SwapAnimation } from 'components'

export default function Home() {
  return (
    <div style={{ height: '1000px' }}>
      <NavBar />
      <SwapAnimation
        parentId='1'
        initialString={'/Scene01/Sc_One_00003.png'}
        folderPreset={'/Scene01/Sc_One'}
        jump={3}
        totalSlide={199}
        parentHeightQuantify={3}
      />

      <SwapAnimation
        parentId='2'
        initialString={'/Scene02/Sc_Two_00000.png'}
        folderPreset={'/Scene02/Sc_Two'}
        jump={0}
        totalSlide={21}
        parentHeightQuantify={1.75}
      />
      <SwapAnimation
        parentId='3'
        initialString={'/Scene03/Sc_Three_00000.png'}
        folderPreset={'/Scene03/Sc_Three'}
        jump={0}
        totalSlide={32}
        parentHeightQuantify={1.75}
      />
      <SwapAnimation
        parentId='5'
        initialString={'/Scene05/Sc_Five_00000.png'}
        folderPreset={'/Scene05/Sc_Five'}
        jump={0}
        totalSlide={32}
        parentHeightQuantify={1.75}
      />
    </div>
  )
}
