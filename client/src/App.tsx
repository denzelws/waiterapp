import Header from "./components/Header"
import OrdersList from "./components/OrdersList"
import SectionOrders from "./components/SectionOrders"
import SliderOrders from "./components/SliderOrders"

import { GlobalStyles } from "./styles/globals"

export default function App() {
  return (
    <>
    <GlobalStyles />
    <Header />
    <SliderOrders />
    <SectionOrders/>
    <OrdersList />
    </>
  )
}
