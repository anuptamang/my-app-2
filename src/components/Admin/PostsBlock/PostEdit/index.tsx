import Modal from '../../../UI/Modal'
import PostEditForm from './PostEditForm'

const PostEdit = ({ setRows, rows, open, handleClose, editPost }: any) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <PostEditForm
        editPost={editPost}
        handleClose={handleClose}
        setRows={setRows}
        rows={rows}
      />
    </Modal>
  )
}

export default PostEdit
