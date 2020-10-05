<script>
    export let id;
    export let name;
    export let completed;
    export let toggleStatus;
    export let removeItem;

    import { slide } from 'svelte/transition';
    import Complete from "svelte-material-icons/CheckboxBlankOutline.svelte";
    import Incomplete from "svelte-material-icons/CheckboxOutline.svelte";
    import Trash from "svelte-material-icons/DeleteVariant.svelte";

    const capitalizeFirstLetter = (name) => {
        let firstLetter = name.charAt(0).toUpperCase();
        let postFix = name.split("").slice(1).join("");

        return firstLetter + postFix;
    };
</script>

<div
    class="flex border-solid border-2 border-gray-400 border-l-0 border-r-0 border-b-0 bg-gray-400"
    on:click={() => toggleStatus(id)}
    transition:slide|local
>
    <div class="flex flex-grow justify-between ml-8 bg-white p-4">
        <div class="flex items-center">
            {#if completed}
                <Incomplete size="1.5em" />
            {:else}
                <Complete size="1.5em" />
            {/if}
            <h3 class={`text-2xl ml-2 ${completed ? "line-through text-gray-600" : ""}`}>{capitalizeFirstLetter(name)}</h3>
        </div>
        <button type="button" on:click|stopPropagation={() => removeItem(id)}>
            <Trash size="1.5em"/>
        </button>
    </div>
</div>