import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Payments from '../../../../components/payments/Payments'
const paymentsData = [
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

const ConsortiumPayments = () => {
  const [data, setData] = useState(paymentsData)
  const { id } = useParams()

  return (
    <Payments
      data={data}
      setData={setData}
      previusPage={`/admin/consortium/${id ?? ''}`}
      role={'admin'}
    />
  )
}

export default ConsortiumPayments
