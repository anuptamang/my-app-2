import Modal from '../../../UI/Modal'
import PostDeleteForm from './PostDeleteForm'

const PostDelete = ({ rows, setRows, open, handleClose, deleteId }: any) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <PostDeleteForm
        rows={rows}
        setRows={setRows}
        handleClose={handleClose}
        deleteId={deleteId}
      />
    </Modal>
  )
}

export default PostDelete
