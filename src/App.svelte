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

<main class="h-screen w-full">
    <div class="max-w-screen-md mx-auto px-4 py-2">
        <div class="border-solid border-gray-200 border-2 rounded-sm shadow-sm">
            {#each lists as list, index (list.id)}
                <List
                    title={list.title}
                    className={`border-solid border-4 border-violet border-l-0 border-r-0 border-b-0 ${index === 0 ? "border-t-0" : ""}`}
                />
            {/each}
        </div>
    </div>
</main>

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>