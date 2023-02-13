import { type ReactNode } from 'react'

interface ModalType {
  title?: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
  isOpen: boolean
  footer?: ReactNode
  toggle: () => void
}

const Modal = (props: ModalType) => {
  return (
    <>
      {props.isOpen && (
        <div
          className=" modal-overlay fixed flex justify-center align-middle items-center top-0 left-0 z-10 w-screen h-screen outline-none overflow-x-hidden overflow-y-auto bg-black bg-opacity-70"
          onClick={props.toggle}
        >
          <div
            onClick={(e) => { e.stopPropagation() }}
            className="relative w-fit h-fit pointer-events-none"
          >
            <div className=" modal-box border-none shadow-lg relative block flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <button
                className="ease-in duration-300 hover:scale-105 absolute -top-2 -right-2 flex justify-center items-center align-middle  rounded-full w-8 h-8 bg-slate-300 z-10  text-black cursor-pointer shadow-xl"
                onClick={props.toggle}
                title="Bye bye"
              >
                <span className="text-2.5xl flex font-bold select-none">&times;</span>
              </button>

              {/* -----------  Modal Header  ----------- */}
              {(props.title || props.subtitle) && (
                //  -----------  Modal Title  ----------- */}
                <div className="modal-header flex-shrink-0 items-center justify-between p-4 px-6 border-b border-gray-200 rounded-t-md">
                  {props.title && (
                    <h5
                      className="text-xl row-start-auto font-medium leading-normal text-gray-800"
                      id="exampleModalLabel"
                    >
                      {props.title}
                    </h5>
                  )}
                  {/* -----------  Modal Subtitle  ----------- */}
                  {props.subtitle && (
                    <h6
                      className="text-sm row-end-auto font-light  leading-tight text-gray-600"
                      id="exampleModalLabel"
                    >
                      {props.subtitle}
                    </h6>
                  )}
                </div>
              )}
              {/* ------ Final Header  -------- */}

              {/* -----------  Modal Body  ----------- */}
              <div className="modal-body relative p-4">{props.children}</div>

              {/* -----------  Modal Footer  ----------- */}
              {props.footer && (
                <div className="modal-footer flex flex-shrink-0 items-center justify-between p-4 border-t border-gray-200 rounded-t-md">
                  {props.footer}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
