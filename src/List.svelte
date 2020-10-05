<script>
    export let title;
    export let className;

    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { slide } from 'svelte/transition';
    import ChevronDown from "svelte-material-icons/ChevronDownBoxOutline.svelte";
    import ChevronUp from "svelte-material-icons/ChevronUpBoxOutline.svelte";
    import Form from "./Form.svelte";
    import Item from "./Item.svelte";

    let showList = false;
    let itemIndex = 0;
    let items = [
        { id: itemIndex, name: "gravy", completed: false }
    ];
    let itemsCompleted = 0;
    const progress = tweened(0, {
        duration: 400,
        easing: cubicOut
    });

    const addItem = (itemName) => {
        itemIndex++;
        items = [...items, { id: itemIndex, name: itemName, completed: false }];
    };

    const removeItem = (id) => {
        items = items.filter(item => item.id !== id);
    };

    const toggleStatus = (id) => {
        items = items.map(item => {
            if(item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }

            return item;
        });
        itemsCompleted = items.filter(item => item.completed).length;
        progress.set(itemsCompleted / items.length);
    };

    const toggleList = () => {
        showList = !showList;
    }
</script>

<div class={className}>
    <div class="flex items-center justify-between p-4">
        <div class="flex flex-grow items-center">
            <h2 class="text-4xl">{title}</h2>
            <span class="ml-2 text-gray-600">({itemsCompleted} / {items.length})</span>
            <progress class="flex-grow" value={$progress}></progress>
        </div>
        <button type="button" on:click={toggleList}>
            {#if showList}
                <ChevronUp size="1.25em" />
            {:else}
                <ChevronDown size="1.25em" />
            {/if}
        </button>
    </div>
    {#if showList}
    <Form onSubmit={addItem} />
    <div class="mt-2" transition:slide>
        {#each items as item (item.id)}
                <Item { ...item } toggleStatus={toggleStatus} removeItem={removeItem} />
            {/each}
        </div>
    {/if}
</div>