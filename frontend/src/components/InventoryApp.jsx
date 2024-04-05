import Create from "./Create"
import Inventory from "./Inventory"

const InventoryApp = () => {
  return (
    <main className="flex flex-col pl-4 place-items-center gap-4">
      <section className=" flex flex-col gap-6 w-1/2 bg-slate-200 p-4 rounded">
        <Create />
        <Inventory />
      </section>
    </main>
  )
}

export default InventoryApp