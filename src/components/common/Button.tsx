type ButtonProps = {
  text: string
  onClick: () => void
  disabled?: boolean //nextbuttonでは値が渡ってこないから？をつけてる
  className: string
  isButtonHide: boolean
}

function Button({
  text,
  onClick,
  disabled = false, //初期値の設定
  className,
  isButtonHide,
}: ButtonProps) {
  if (isButtonHide) return null

  return (
    <button
      className={`baseButton ${className}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
