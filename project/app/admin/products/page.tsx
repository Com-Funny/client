import ProductTable from "components/products/productTable";
import NewProductList from "components/products/newProductList";

export default function ProductsPage() {
  return (
    <div className="shrink-0 h-max min-h-[calc(100vh-128px)] p-4 flex flex-col items-start justify-start gap-4">
      <NewProductList />
      <ProductTable />
    </div>
  );
}
