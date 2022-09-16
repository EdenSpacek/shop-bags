import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import React from 'react'
import theme from '../../styles/theme';
import AppBarDesktop from './AppBarDesktop';
import AppBarMobile from './AppBarMobile';

const Appbar = () => {
    const them = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
        {matches ? <AppBarMobile matches={matches}/> : <AppBarDesktop matches={matches}/>}
    </>
  )
}

export default Appbar