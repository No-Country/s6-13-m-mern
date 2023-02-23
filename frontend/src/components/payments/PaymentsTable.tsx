import { PaymentsValues } from '../../interfaces/paymentsInterfaces'

interface Props {
  data: PaymentsValues[]
  setData: React.Dispatch<React.SetStateAction<PaymentsValues[]>>
  role: string | undefined
  filterValue: string
}

const PaymentsTable = ({ data, setData, role, filterValue }: Props) => {
  const headers = ['Name', 'Vouchers', 'Amount', 'Method', 'Status']

  const selectOption = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    setData((prevData) =>
      prevData.map((item, i) => {
        if (i === index) {
          return { ...item, status: e.target.value }
        }
        return item
      }),
    )
  }

  const sortedData = (data: PaymentsValues[]) => {
    return data.sort((a, b) => {
      const statusOrder = ['Pending', 'Denied', 'Validated']
      return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)
    })
  }

  return (
    <table className="text-left font-inter text-lg">
      <thead>
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
      </thead>
      <tbody>
        {sortedData(data)
          .filter((row) => row.name.includes(filterValue))
          .map((row: PaymentsValues, index: number) => (
            <tr
              key={row.id_}
              className={`${index !== data.length - 1 ? 'border-b-[1px] border-greyLight' : ''}`}
            >
              <td className="pt-5 py-2">{row.name}</td>
              <td className="pt-5 py-2 text-blue">
                <a
                  target="_blank"
                  href={row.vouchers}
                  className="underline decoration-1 hover:text-violet ease-out duration-300"
                  rel="noreferrer"
                >
                  {row.vouchers.split('/')[row.vouchers.split('/').length - 1]}
                </a>
              </td>
              <td className="pt-5 py-2">{row.amount}</td>
              <td className="pt-5 py-2">{row.method}</td>
              {role === 'user' && (
                <td
                  className="pt-5 py-2"
                  key={row.id_}
                >
                  {row.status}
                </td>
              )}
              {role === 'admin' && (
                <td
                  className="pt-5 py-2"
                  key={row.id_}
                >
                  <select
                    onChange={(e) => {
                      selectOption(e, index)
                    }}
                    value={row.status}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Denied">Denied</option>
                    <option value="Validated">Validated</option>
                  </select>
                </td>
              )}
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default PaymentsTable
