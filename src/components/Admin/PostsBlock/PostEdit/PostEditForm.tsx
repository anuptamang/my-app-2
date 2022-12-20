import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Grid, MenuItem, Select, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { delay } from '../../../../utils/delay'
import { notify } from '../../../../utils/notification'
import { postCreateFormSchema } from '../../../../utils/validationSchema'
import { BtnLoading } from '../../../UI/BtnLoading'
import { InputForm } from '../../../UI/InputForm'

const InputStyles = {
  width: '100%',
  '& .MuiInputBase-input': {
    backgroundColor: '#BDB2FF',
    border: 0,
    color: '#262835',
  },
  '& .MuiInputLabel-root': {
    color: '#262835 !important',
  },
  '& .MuiInputAdornment-root': {
    position: 'absolute',
    right: '20px',
    top: '30px',
    zIndex: 10,
  },
}

type IFormInput = {
  id?: string | number
  title: string
  author: string
  status: { [x: string]: string }[]
  date?: string | number
  body: string
}

const PostEditForm = ({ setRows, rows, handleClose, editPost }: any) => {
  const [loading, setLoading] = useState(false)
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>({
    defaultValues: {
      id: editPost.id,
      title: editPost.title,
      author: editPost.author,
      status: editPost.status,
      date: editPost.date,
      body: editPost.body,
    },
    resolver: yupResolver(postCreateFormSchema),
  })

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true)
    await delay(3000)
    handleClose()
    reset()

    const updatedPosts = [...rows]
    const index = updatedPosts.findIndex((post: any) => post.id === editPost.id)
    updatedPosts[index] = {
      ...updatedPosts[index],
      title: data.title,
      author: data.author,
      status: data.status,
      date: data.date,
      body: data.body,
    }

    setRows(updatedPosts)
    setLoading(false)
    notify('Post updated successfully', 'post-update-form', 'success')
  }

  return (
    <Grid container justifyContent='center'>
      <Grid item xs={12} lg={9}>
        <Box
          sx={{
            p: { xs: '20px', lg: '50px', xl: '100px' },
          }}
        >
          <Typography
            variant='h4'
            sx={{
              color: '#fff',
              textAlign: 'center',
              marginBottom: { xs: '20px', lg: '50px' },
            }}
          >
            Edit a Post
          </Typography>
          <Box
            onSubmit={handleSubmit(onSubmit)}
            component='form'
            noValidate
            autoComplete='off'
          >
            <Grid container direction={{ xs: 'column', md: 'row' }} spacing={4}>
              <Grid item xs={12} md={6}>
                <Controller
                  rules={{ required: true }}
                  name='title'
                  control={control}
                  render={({ field }) => (
                    <InputForm
                      sx={InputStyles}
                      fullWidth
                      label='Title'
                      {...field}
                    />
                  )}
                />
                <p>{errors.title?.message}</p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  rules={{ required: true }}
                  name='author'
                  control={control}
                  render={({ field }) => (
                    <InputForm
                      sx={InputStyles}
                      fullWidth
                      label='Author'
                      {...field}
                    />
                  )}
                />
                <p>{errors.author?.message}</p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  rules={{ required: true }}
                  name='status'
                  control={control}
                  render={({ field }: any) => (
                    <Select {...field} label='Status' sx={InputStyles}>
                      <MenuItem value={'Status'}>Status</MenuItem>
                      <MenuItem value={'publish'}>Publish</MenuItem>
                      <MenuItem value={'future'}>Future</MenuItem>
                      <MenuItem value={'draft'}>Draft</MenuItem>
                    </Select>
                  )}
                />
                <p>{errors.status?.message}</p>
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  rules={{ required: true }}
                  name='date'
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DatePicker
                        label='Date'
                        value={value}
                        onChange={onChange}
                        renderInput={(params: any) => (
                          <InputForm sx={InputStyles} fullWidth {...params} />
                        )}
                      />
                    </LocalizationProvider>
                  )}
                />
                <p>{errors.date?.message}</p>
              </Grid>
              <Grid item xs={12}>
                <Controller
                  rules={{ required: true }}
                  name='body'
                  control={control}
                  render={({ field }) => (
                    <InputForm
                      sx={InputStyles}
                      multiline
                      rows={6}
                      fullWidth
                      label='Body'
                      {...field}
                    />
                  )}
                />
                <p>{errors.body?.message}</p>
              </Grid>
              <Grid item xs={12}>
                <BtnLoading
                  variant='contained'
                  loading={loading}
                  loadingPosition='center'
                  type='submit'
                >
                  Submit
                </BtnLoading>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default PostEditForm
