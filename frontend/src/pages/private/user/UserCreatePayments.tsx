import BackTitleComponent from '../../../components/BackTitleComponent'

const UserCreatePayments = () => {
  return (
    <div>
      <div className="w-full pl-11 pt-11 pb-5">
        <BackTitleComponent
          title={'Attach Payment'}
          navigateTo={'/user'}
        />
      </div>
      <div className="w-full pl-7 pr-16">
        <div className="w-full h-[220px] flex flex-row justify-between">
          <div className="w-[363px]">
            <select className="w-full h-[40px] rounded-lg px-4 pt-2 pb-2.5 text-sm text-grey italic font-normal border-2 border-black">
              <option>Unity</option>
            </select>
            <input
              type={'text'}
              placeholder={'Amount'}
              className="w-full h-[40px] rounded-lg px-4 pt-2 pb-2.5 placeholder:text-sm placeholder:text-grey placeholder:italic mt-7 border-2 border-black"
            />
            <textarea
              placeholder={'Note'}
              className="w-full h-[83px] rounded-lg px-4 pt-2 pb-2.5 placeholder:text-sm placeholder:text-grey placeholder:italic mt-7 border-2 border-black"
            />
          </div>
          <div className="w-[363px] h-full flex flex-col justify-center">
            <select className="w-full h-[40px] rounded-lg px-4 pt-2 pb-2.5 text-sm text-grey italic font-normal border-2 border-black">
              <option>Method</option>
            </select>
            <div className="mt-8 text-sm flex justify-between items-center">
              <div>Attach voucher</div>
              <button className="w-[181px] h-[40px] bg-[rgba(49,103,174,0.84)] rounded-lg px-6 flex justify-between items-center">
                <img src="../assets/Pdf.svg" />
                <span className="text-sm">Upload voucher</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-20">
          <button className="text-lg text-white w-[363px] py-2 bg-blueDark rounded-lg border-2 border-black">
            Report payment
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserCreatePayments
