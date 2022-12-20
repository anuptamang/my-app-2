import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'

const AdminSummary = () => {
  return (
    <List sx={{ width: '100%' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>image</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary='Jon Doe'
          secondary='Admin'
          sx={{ color: '#333' }}
        />
      </ListItem>
    </List>
  )
}

export default AdminSummary
