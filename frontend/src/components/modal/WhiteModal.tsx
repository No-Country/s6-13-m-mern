import { type ReactNode } from 'react'

interface ModalType {
  children?: ReactNode
  isOpen: boolean
  toggle?: () => void
}

const WhiteModal = (props: ModalType) => {
  return (
    <>
      {props.isOpen && (
        <div
          className="fixed flex justify-center align-middle items-center top-0 left-0 z-10 w-screen h-screen outline-none overflow-x-hidden overflow-y-auto bg-black bg-opacity-70"
          onClick={props.toggle}
        >
          <div
            onClick={(e) => {
              e.stopPropagation()
            }}
            className="relative w-fit h-fit pointer-events-none"
          >
            <div className=" w-[350px] border-[3px] border-blueDark shadow-lg relative block flex-col pointer-events-auto bg-white bg-clip-padding rounded-2xl outline-none text-current text-center text-lg">
              <div className="modal-body relative p-4 my-6">{props.children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WhiteModal
