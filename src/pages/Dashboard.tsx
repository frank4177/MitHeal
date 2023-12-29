import ProductCard from "../components/Cards/ProductCard";
import Layout from "../components/layout/Wrappers/DashboardWrapper";
import { products } from "../contants";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-row gap-5">
          {products?.map((item) => (
            <ProductCard key={item.name} data={item} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
