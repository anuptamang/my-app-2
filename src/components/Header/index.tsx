import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import { Container } from '@mui/material'
import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { nav } from '../../data/static/nav'
import { useAuth } from '../../hooks/useAuth'
import { logout } from '../../redux/auth/authAction'
import { useAppDispatch } from '../../redux/hooks'
import Link from '../UI/Link'

interface Props {
  window?: () => Window
}

const drawerWidth = 240

const Header = (props: Props) => {
  const { window } = props
  const { user } = useAuth()
  const [mobileOpen, setMobileOpen] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        <Link href='/'>My App</Link>
      </Typography>
      <List>
        {nav.map((item, key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={item.to} key={key}>
                <Button>{item.text}</Button>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <AppBar
        component='nav'
        color='primary'
        sx={{ backgroundImage: 'none', px: 0 }}
        enableColorOnDark
      >
        <Container>
          <Toolbar sx={{ px: 0 }}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Link sx={{ color: '#fff' }} href='/'>
                My App
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {nav.map((item, key) => (
                <Link href={item.to} key={key}>
                  <Button sx={{ color: '#fff' }}>{item.text}</Button>
                </Link>
              ))}
            </Box>
            {user ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt='Jon Doe' src='/static/images/avatar/2.jpg' />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{
                    mt: '45px',
                  }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>
                      <Link
                        sx={{
                          color: '#333',
                          '&:hover': {
                            color: '#fff',
                          },
                        }}
                        href='/user'
                      >
                        Dashboard
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>
                      <Link
                        sx={{
                          color: '#333',
                          '&:hover': {
                            color: '#fff',
                          },
                        }}
                        href='/user/posts'
                      >
                        Posts
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>
                      <Link
                        sx={{
                          color: '#333',
                          '&:hover': {
                            color: '#fff',
                          },
                        }}
                        href='/user/tasks'
                      >
                        Tasks
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>
                      <Button
                        sx={{
                          color: '#333',
                          '&:hover': {
                            color: '#fff',
                          },
                        }}
                        onClick={() => dispatch(logout(navigate))}
                      >
                        Logout
                      </Button>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Link href={'/login'}>
                <Button sx={{ color: '#fff' }}>Login</Button>
              </Link>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default Header
