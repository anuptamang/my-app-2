import { Link as MuiLink, LinkProps } from '@mui/material'
import { forwardRef } from 'react'
import { NavLink as ReactRouterLink } from 'react-router-dom'

const NavLink = forwardRef((props: LinkProps) => {
  return (
    <MuiLink {...props} component={ReactRouterLink} to={props.href ?? '#'} />
  )
})

export default NavLink
