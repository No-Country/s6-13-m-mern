interface Props {
  loading: boolean
  loadingMessage: string
  isSuccess: boolean
  successMessage: string
  error: boolean
  errorMessage: string
}

const DynamicStatusView = ({ loading, loadingMessage, isSuccess, successMessage, error, errorMessage }: Props) => {
  const renderLoadingMessage = () => {
    const lines = loadingMessage.split('<br />')
    return (
      <div className="font-bold text-blueDark text-center">
        {lines.map((line, index) => (
          <p key={`loading-line-${index}`}>{line}</p>
        ))}
      </div>
    )
  }

  const renderSuccessMessage = () => {
    const lines = successMessage.split('<br />')
    return (
      <div className="font-bold text-blueDark text-center">
        {lines.map((line, index) => (
          <p key={`success-line-${index}`}>{line}</p>
        ))}
      </div>
    )
  }

  const renderErrorMessage = () => {
    const lines = errorMessage.split('<br />')
    return (
      <div className="font-bold text-blueDark text-center">
        {lines.map((line, index) => (
          <p key={`error-line-${index}`}>{line}</p>
        ))}
      </div>
    )
  }

  return (
    <>
      {loading && (
        <div className="w-full h-full flex justify-center items-center">
          <div className="animate-fadeInRight flex flex-col items-center gap-y-3">
            <span className="w-[108px] h-[108px] border-[10px] border-dotted border-blueDark rounded-full inline-block relative box-border animate-rotation"></span>
            {renderLoadingMessage()}
          </div>
        </div>
      )}

      {isSuccess && (
        <div className="w-full h-full flex justify-center items-center">
          <div className="animate-fadeInRight flex flex-col items-center gap-y-3">
            <img
              className="w-[108px] h-[108px]"
              src="https://res.cloudinary.com/dozwd1ssj/image/upload/v1677394138/512x512_mu9vbc.png"
            />
            {renderSuccessMessage()}
          </div>
        </div>
      )}

      {error && (
        <div className="w-full h-full flex justify-center items-center">
          <div className="animate-fadeInRight flex flex-col items-center gap-y-3">
            <img
              className="w-[108px] h-[108px]"
              src="https://res.cloudinary.com/dozwd1ssj/image/upload/v1677383270/cancelar_vw30xs.png"
            />
            {renderErrorMessage()}
          </div>
        </div>
      )}
    </>
  )
}

export default DynamicStatusView
