<script>
    export let id;
    export let name;
    export let completed;
    export let toggleStatus;
    export let removeItem;

    import { tap } from "@sveltejs/gestures";
    import { slide } from "svelte/transition";
    import Incomplete from "svelte-material-icons/CheckboxBlankOutline.svelte";
    import Complete from "svelte-material-icons/CheckboxOutline.svelte";
    import Trash from "svelte-material-icons/DeleteVariant.svelte";

    const capitalizeFirstLetter = (name) => {
        let firstLetter = name.charAt(0).toUpperCase();
        let postFix = name.split("").slice(1).join("");

        return firstLetter + postFix;
    };
</script>

<div
    class="flex border-solid border-2 border-gray-400 border-l-0 border-r-0 border-b-0 bg-purple-400"
    use:tap
    on:tap="{() => toggleStatus(id)}"
    transition:slide|local
>
    <div class="flex flex-grow justify-between ml-8 bg-white p-4 pr-8">
        <div class="flex items-center">
            <button type="button" on:click="{() => toggleStatus(id)}" class="focus:outline-none">
                {#if completed}
                    <Complete size="1.5em" color="#718096" />
                {:else}
                    <Incomplete size="1.5em" color="#718096" />
                {/if}
            </button>
            <h3 class="{`text-lg ml-2 ${completed ? 'line-through text-gray-600' : ''}`}">
                {capitalizeFirstLetter(name)}
            </h3>
        </div>
        <button
            type="button"
            on:click|stopPropagation="{() => removeItem(id)}"
            class="focus:outline-none"
        >
            <Trash size="1.5em" color="#121212" />
        </button>
    </div>
</div>
