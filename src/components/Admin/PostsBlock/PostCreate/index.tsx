import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import PostCreateForm from './PostCreateForm'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#262835',
  border: '0',
  boxShadow: 24,
  outline: 'none',
  width: '100%',
  maxWidth: '1100px',
  borderRadius: '20px',
  p: 4,
}

const PostCreate = ({ setRows, open, handleClose }: any) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open}>
        <Box sx={style}>
          <PostCreateForm handleClose={handleClose} setRows={setRows} />
        </Box>
      </Fade>
    </Modal>
  )
}

export default PostCreate
