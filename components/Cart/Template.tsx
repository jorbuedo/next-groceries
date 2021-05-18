import { CartItem } from 'models/Cart'
import { tw } from 'twind'
import CartList from './List'

export default function CartTemplate() {
  const cartItemList = [
    {
      id: '20cc33f1-223b-4cf0-878d-fdedb3f60b56',
      image_url:
        'https://dummyimage.com/400x400/2ee9f7/000&text=Handcrafted Metal Towels',
      stock: 41,
      productName: 'Handcrafted Metal Towels',
      price: 98,
    },
  ] as CartItem[]
  return (
    <div className={tw`grid grid-flow-row gap-4`}>
      <CartList cartItemList={cartItemList} />
    </div>
  )
}
