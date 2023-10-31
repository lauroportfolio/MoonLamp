import Image from 'react'

type ButtonProps = {
    type: 'button' | 'submit'
    title: string,
    icon?: string,
    variant: string,
    disabled?: boolean
}

const Button = ({ type, title, icon, variant, disabled }: ButtonProps) => {
  return (
    <button
        type={type}
        className={variant}
    >
      <label className='cursor-pointer'>
        {title}
      </label>
    </button>
  )
}

export default Button
