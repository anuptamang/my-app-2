import Modal from '../../../UI/Modal'
import PostCreateForm from './PostCreateForm'

const PostCreate = ({ setRows, open, handleClose }: any) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <PostCreateForm handleClose={handleClose} setRows={setRows} />
    </Modal>
  )
}

export default PostCreate
