import React, { useRef, useState } from 'react'
import { 
  Container, 
  ImageIndexes, 
  ImageIndex, 
  CarImageWrapper, 
  CarImage,
} from './styles'
import { FlatList, ViewToken } from 'react-native'

interface ImageSliderProps {
  imagesUrl: string[]
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ imagesUrl }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index
    setImageIndex(index)
  })

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <ImageIndex key={index} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <FlatList 
        data={imagesUrl}
        keyExtractor={key => key}
        pagingEnabled
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage 
              source={{ uri: item }}
              resizeMode='contain'
            />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  )
}
