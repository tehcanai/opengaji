import SalaryItem from "../../modules/SalaryItem";

const IndexPage = () => {
  return (
    <div class="my-24 mx-24 md:mx-48 space-y-8">
      <h1 class="font-bold text-3xl">Open Gaji MY</h1>
      <p class="text-gray-600">Add your salary anonymously. Advocate for pay transparency collectively.</p>
      <button class="border border-black rounded-md p-2 bg-white shadow-md hover:animate-bounce ">Add Your Salary</button>
      <div class="space-y-4">
        <SalaryItem />
        <SalaryItem />
        <SalaryItem />
        <SalaryItem />
      </div>
    </div>
  );
}

export default IndexPage;