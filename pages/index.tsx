import Sidebar from "../components/Sidebar";
import "tailwindcss/tailwind.css";
import User from "../components/User";
import UserFunctions from "../components/UserFunctions";

const IndexPage = ({ data }) => (
  <div className="md:h-screen bg-gray-100 flex">
    <div className="flex md:block">
      <Sidebar />
    </div>
    <div className="w-full mt-4 md:ml-[100px] md:mt-[50px] px-10 pb-20">
      <h1 className="text-3xl font-semibold">Our Users</h1>
      <UserFunctions data={data} />
    </div>
  </div>
);

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://test-front-p6cqni7znq-uc.a.run.app/`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default IndexPage;
