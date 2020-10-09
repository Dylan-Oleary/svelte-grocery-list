<style>
    progress {
        border-radius: 7px;
        height: 8px;
    }
    progress::-webkit-progress-bar {
        background-color: #a0aec0;
        border-radius: 7px;
    }
    progress::-webkit-progress-value {
        background-color: #6b46c1;
        border-radius: 7px;
    }
    progress::-webkit-progress-value::after {
        content: ":)";
        color: white;
    }
    .title {
        font-weight: 600;
    }
</style>

<script>
    export let title;
    export let className;

    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { slide } from "svelte/transition";
    import ChevronDown from "svelte-material-icons/ChevronDownBoxOutline.svelte";
    import ChevronUp from "svelte-material-icons/ChevronUpBoxOutline.svelte";
    import Form from "./Form.svelte";
    import Item from "./Item.svelte";

    let showList = false;
    let itemIndex = 0;
    let items = [];
    let itemsCompleted = 0;

    const progress = tweened(0, {
        duration: 400,
        easing: cubicOut
    });

    const addItem = (itemName) => {
        itemIndex++;

        items = [...items, { id: itemIndex, name: itemName, completed: false }];
        itemsCompleted = items.filter((item) => item.completed).length;
        setProgress();

        if (window.localStorage) updateLocalStorage(items);
    };

    const removeItem = (id) => {
        items = items.filter((item) => item.id !== id);
        itemsCompleted = items.filter((item) => item.completed).length;
        setProgress();

        if (window.localStorage) updateLocalStorage(items);
    };

    const toggleStatus = (id) => {
        items = items.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                };
            }

            return item;
        });
        itemsCompleted = items.filter((item) => item.completed).length;
        setProgress();

        if (window.localStorage) updateLocalStorage(items);
    };

    const toggleList = () => {
        showList = !showList;
    };

    const setProgress = () => {
        if (items.length === 0) {
            progress.set(0);
        } else {
            progress.set(itemsCompleted / items.length);
        }
    };

    const updateLocalStorage = (items) => {
        window.localStorage.setItem(title, JSON.stringify(items));
    };

    onMount(() => {
        if (window.localStorage) {
            items = JSON.parse(localStorage.getItem(title)) || [];
            itemsCompleted = items.filter((item) => item.completed).length;

            // Update New Index on browser refresh to prevent duplicate indices
            if (items.length > 0) {
                let newIndex = items[0].id;

                items.forEach((item) => {
                    if (parseInt(item.id) > newIndex) newIndex = item.id + 1;
                });

                itemIndex = newIndex;
            }

            setProgress();
        }
    });
</script>

<div class="{className}">
    <div
        class="flex items-center justify-between px-8 pt-4 pb-2 text-white"
        on:dblclick="{toggleList}"
    >
        <div class="flex items-center">
            <h2 class="text-2xl opacity-high title">{title}</h2>
            <span class="ml-2 text-gray-600">({itemsCompleted} / {items.length})</span>
        </div>
        <button type="button" on:click="{toggleList}" class="focus:outline-none">
            {#if showList}
                <ChevronUp size="1.5em" color="#b794f4" />
            {:else}
                <ChevronDown size="1.5em" color="#b794f4" />
            {/if}
        </button>
    </div>
    <progress class="px-8 mb-2 w-full progress-bar" value="{$progress}"></progress>
    {#if showList}
        <div class="mt-2" transition:slide>
            <Form onSubmit="{addItem}" />
            {#each items as item (item.id)}
                <Item {...item} toggleStatus="{toggleStatus}" removeItem="{removeItem}" />
            {/each}
        </div>
    {/if}
</div>
