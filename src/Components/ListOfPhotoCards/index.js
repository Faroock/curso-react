import React from 'react'
import {PhotoCard} from '../PhotoCard'
import {List, Item} from './styles'

import { photos } from '../../../api/db.json'

export const ListOfPhotoCards = () => {
  return (
    <List>
      {
        photos.map(photo => <Item key={photo.id}><PhotoCard {...photo}/></Item>)
      }
    </List>
  )
}
