import BackTitleComponent from '../../../components/BackTitleComponent'
import Container from '../../../components/Container'

const tableData = [
  {
    id_: '1',
    name: 'Mónica Rivera',
    vouchers: 'https://i.ytimg.com/vi/OTJdf_0oU8Q/mqdefault.jpg',
    amount: '$200',
    method: 'Cash',
    status: 'Pending',
  },
  {
    id_: '2',
    name: 'Mónica Rivera',
    vouchers: 'https://i.ytimg.com/vi/OTJdf_0oU8Q/mqdefault.jpg',
    amount: '$200',
    method: 'Transfer',
    status: 'Pending',
  },
  {
    id_: '3',
    name: 'Mónica Rivera',
    vouchers: 'https://i.ytimg.com/vi/OTJdf_0oU8Q/mqdefault.jpg',
    amount: '$200',
    method: 'Cash',
    status: 'Denied',
  },
  {
    id_: '4',
    name: 'Mónica Rivera',
    vouchers: 'https://i.ytimg.com/vi/OTJdf_0oU8Q/mqdefault.jpg',
    amount: '$200',
    method: 'Cash',
    status: 'Validated',
  },
]

const UserPayments = () => {
  const headers = ['Name', 'Vouchers', 'Amount', 'Method', 'Status']

  const renderSearch = () => (
    <div className="flex mt-6">
      <input
        type="text"
        autoComplete="off"
        className="border border-black
                   p-1 rounded-lg w-full h-12
                   placeholder:italic placeholder:text-grey
                   px-5"
        placeholder="Search by member"
      />
      <i
        className="fa-solid fa-magnifying-glass
                    -ml-8 text-xl text-grey my-auto"
      ></i>
    </div>
  )

  const renderTable = () => (
    <table className="text-left font-inter text-lg">
      <tr className="border-b-[1px] border-greyLight">
        {headers.map((header, index) => (
          <th
            className="h-full pt-6"
            key={index}
          >
            {header}
          </th>
        ))}
      </tr>
      {tableData.map((row, index) => (
        <tr
          key={row.id_}
          className={`${index !== tableData.length - 1 ? 'border-b-[1px] border-greyLight' : ''}`}
        >
          <td
            className="pt-5 py-2"
            key={row.id_}
          >
            {row.name}
          </td>
          <td
            className="pt-5 py-2 text-blue"
            key={row.id_}
          >
            <a
              href={row.vouchers}
              className="underline decoration-1 hover:text-violet ease-out duration-300"
            >
              {row.vouchers.split('/')[row.vouchers.split('/').length - 1]}
            </a>
          </td>
          <td
            className="pt-5 py-2"
            key={row.id_}
          >
            {row.amount}
          </td>
          <td
            className="pt-5 py-2"
            key={row.id_}
          >
            {row.method}
          </td>
          <td
            className="pt-5 py-2"
            key={row.id_}
          >
            {row.status}
          </td>
        </tr>
      ))}
    </table>
  )

  return (
    <div className="w-full min-h-[680px] bg-white">
      <Container>
        <div className="mt-20">
          <BackTitleComponent
            title="Payments"
            navigateTo="/user"
          />
          <div className="flex justify-center">
            <div className="relative flex flex-col w-[67vw] min-w-[350px] max-w-[1200px]">
              {renderSearch()}
              {renderTable()}
              <button className="absolute -bottom-24 right-0 text-lg bg-blueDark text-white px-12 py-3 rounded-lg">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default UserPayments
