
const SalaryItem = () => {
    return (
        <div class="border border-black p-4 bg-white rounded-md shadow-md">
            <h1 class="font-bold text-xl">Code Monkey</h1>
            <div class="flex flex-row space-x-2">
                <p class="font-bold">Salary:</p>
                <p>RM ####</p>
            </div>
            <div class="flex flex-row space-x-2">
                <p class="font-bold">YOE:</p>
                <p>1 Year</p>
            </div>
            <div class="flex flex-row space-x-2">
                <p class="font-bold">State:</p>
                <p>Kuala Lumpur</p>
            </div>
            <div class="flex flex-row space-x-2">
                <p class="font-bold">Company / Org:</p>
                <p>Confidential</p>
            </div>
        </div>
    );
};

export default SalaryItem;
