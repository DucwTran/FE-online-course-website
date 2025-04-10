import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function GoBack() {
  const navigate = useNavigate()
  return (
    <div>
      <Button className='mb-[30px]' type='primary' onClick={() => {navigate(-1)}}>
        Back
      </Button>
    </div>
  )
}

export default GoBack
