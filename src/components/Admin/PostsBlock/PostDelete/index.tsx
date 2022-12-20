import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import PostCreateForm from './PostEditForm'
import PostEditForm from './PostEditForm'
import PostDeleteForm from './PostEditForm'

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

const PostDelete = ({ rows, setRows, open, handleClose, deleteId }: any) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open}>
        <Box sx={style}>
          <PostDeleteForm
            rows={rows}
            setRows={setRows}
            handleClose={handleClose}
            deleteId={deleteId}
          />
        </Box>
      </Fade>
    </Modal>
  )
}

export default PostDelete
