import { IconButton } from '@mui/material'
import React from 'react'
import { AppbarContainer, AppbarHeader } from '../../styles/appbar'
import {Menu, Search} from '@mui/icons-material'
import Action from './Action'

const AppBarMobile = ({matches}) => {
  return (
    <AppbarContainer>
        <IconButton>
            <Menu/>
        </IconButton>
        <AppbarHeader textAlign={"center"} variant='h4'>My Bags</AppbarHeader>
        <IconButton>
            <Search/>
        </IconButton>
        <Action matches={matches}/>
    </AppbarContainer>
  )
}

export default AppBarMobile