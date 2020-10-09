<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    html,
    body {
        position: relative;
        width: 100%;
        height: 100%;
    }

    body {
        font-family: "Quicksand", sans-serif;
        background-color: #121212;
    }

    h1 {
        font-weight: 600;
    }
</style>

<script>
    import List from "./List.svelte";

    let lists = [
        { id: 1, title: "Produce" },
        { id: 2, title: "Meat" },
        { id: 3, title: "Dairy" },
        { id: 4, title: "Snacks" },
        { id: 5, title: "Grain" },
        { id: 6, title: "Household" },
        { id: 7, title: "Canned & Dry" }
    ];
</script>

<main class="flex-grow w-full flex items-center p-4">
    <div class="max-w-screen-md mx-auto min-w-sm w-full">
        <div class="flex justify-center">
            <h1
                class="text-4xl text-center mb-6 opacity-high text-white border-solid border-4 border-l-0 border-r-0 border-t-0 border-purple-400"
            >
                Oh My Groceries!
            </h1>
        </div>
        <div
            class="border-solid border-gray-200 border-2 rounded-lg shadow-dark bg-gray-900 border-purple-400"
        >
            {#each lists as list, index (list.id)}
                <List
                    title="{list.title}"
                    className="{`border-solid border-4 border-gray-700 border-l-0 border-r-0 border-b-0 ${index === 0 ? 'border-t-0' : ''}`}"
                />
            {/each}
        </div>
    </div>
</main>
