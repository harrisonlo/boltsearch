import React, { FC } from 'react'

export type Option = 'simple' | 'complex'

type Props = {
  option: Option
  setOption: (option: Option) => void
}

const Switch: FC<Props> = ({ option, setOption }) => {
  return (
    <div className='switch'>
      <div 
        className={`option ${option === 'simple' ? 'selected' : ''}`}
        onClick={() => setOption('simple')}>
        Simple
      </div>
      <div 
        className={`option ${option === 'complex' ? 'selected' : ''}`}
        onClick={() => setOption('complex')}>
        Complex
      </div>
    </div>
  )
}

export default Switch