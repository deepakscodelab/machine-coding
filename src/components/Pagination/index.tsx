import { useState } from "react";
import "./index.css";

const productList = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  name: `Product_${i}`,
}));

type Product = {
  id: number;
  name: string;
};

function paginateProducts(
  products: Product[],
  pageNo: number,
  pageSize: number
) {
  const start = (pageNo - 1) * pageSize;
  const end = start + pageSize;
  const perPageProducts = products.slice(start, end);
  const totalPages = Math.ceil(products.length / pageSize);
  return { perPageProducts, totalPages };
}

export default function Pagination() {
  const [pageNo, setPageNo] = useState<number>(1);
  const [pageSize, setPageSize] = useState(10);
  const { perPageProducts: products, totalPages } = paginateProducts(
    productList,
    pageNo,
    pageSize
  );

  const renderPageSizeOptions = () => {
    const options = [5, 10, 15, 20];
    return options.map((size) => (
      <option key={size} value={size}>
        {size}
      </option>
    ));
  };

  const paginationNav = Array.from({ length: totalPages }, (_, i) => i + 1).map(
    (page) => (
      <button
        key={page}
        onClick={() => setPageNo(page)}
        style={{ fontWeight: pageNo === page ? "bold" : "normal" }}
      >
        {page}
      </button>
    )
  );

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
          setPageNo(1);
        }}
      >
        {renderPageSizeOptions()}
      </select>
      <button
        onClick={() => setPageNo((prevPage) => prevPage - 1)}
        disabled={pageNo === 1}
      >
        Prev
      </button>
      Page {pageNo} of {totalPages}
      <button
        onClick={() => setPageNo((prevPage) => prevPage + 1)}
        disabled={pageNo === totalPages}
      >
        Next
      </button>
      <hr />
      {paginationNav}
    </div>
  );
}
