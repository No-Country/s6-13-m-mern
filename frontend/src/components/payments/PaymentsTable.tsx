import { useEffect } from 'react'
import { PaymentsValues } from '../../interfaces/paymentsInterfaces'

interface Props {
  data: PaymentsValues[]
  setData: React.Dispatch<React.SetStateAction<PaymentsValues[]>>
  dataToCompare: PaymentsValues[]
  filterValue: string
  setIsDataModified: React.Dispatch<React.SetStateAction<boolean>>
}

const PaymentsTable = ({ data, setData, dataToCompare, filterValue, setIsDataModified }: Props) => {
  const headers = ['Name', 'Vouchers', 'Amount', 'Method', 'Status']

  const selectOption = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    setData((prevData) =>
      prevData.map((item, i) => {
        if (i === index) {
          return { ...item, pStatus: e.target.value }
        }
        return item
      }),
    )
  }

  useEffect(() => {
    if (isDataModified()) {
      setIsDataModified(true)
    } else {
      setIsDataModified(false)
    }
  }, [data])

  const isDataModified = () => {
    let isModified = false
    data.forEach((item) => {
      const sameIdItem = dataToCompare.find((itemToCompare) => item._id === itemToCompare._id)
      if (sameIdItem?.pStatus !== item.pStatus) {
        isModified = true
      }
    })
    return isModified
  }

  const sortedData = (data: PaymentsValues[]) => {
    return data.sort((a, b) => {
      const statusOrder = ['pending', 'denied', 'validated']
      return statusOrder.indexOf(a.pStatus) - statusOrder.indexOf(b.pStatus)
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
          .filter((row) => row.user.name.toLocaleLowerCase().includes(filterValue.toLowerCase()))
          .map((row: PaymentsValues, index: number) => (
            <tr
              key={row._id}
              className={`${index !== data.length - 1 ? 'border-b-[1px] border-greyLight' : ''}`}
            >
              <td className="pt-5 py-2">{row.user.name}</td>
              <td className="pt-5 py-2 text-blue">
                <a
                  target="_blank"
                  href={row.image}
                  className="underline decoration-1 hover:text-violet ease-out duration-300"
                  rel="noreferrer"
                >
                  {row.image.split('/')[row.image.split('/').length - 1]}
                </a>
              </td>
              <td className="pt-5 py-2">{row.ammount}</td>
              <td className="pt-5 py-2">{row.paymentMethod}</td>

              <td
                className="pt-5 py-2"
                key={row._id}
              >
                <select
                  onChange={(e) => {
                    selectOption(e, index)
                  }}
                  value={row.pStatus}
                >
                  <option value="pending">Pending</option>
                  <option value="denied">Denied</option>
                  <option value="validated">Validated</option>
                </select>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default PaymentsTable
