import { Container, Typography } from '@mui/material'
import CoverImage from '../CoverImage'
import { BannerBox } from './styes'
import { BannerProps } from '../../../types/banner'

const Banner = ({ heading, imageUrl }: BannerProps) => {
  return (
    <BannerBox>
      <CoverImage imageUrl={imageUrl} imageAlt='cover image' />
      <Container sx={{ py: '50px' }}>
        <Typography variant='h1' component='h1'>
          {heading}
        </Typography>
      </Container>
    </BannerBox>
  )
}

export default Banner
