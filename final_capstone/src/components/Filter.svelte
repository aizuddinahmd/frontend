
<script lang="ts">
   import { onMount } from 'svelte';
   import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte'

  interface Category {
    id: number;
    itemName: string;
    itemLink: string;
    volume?: number;
  }

  let mealTypes: Category[];
  let cuisineTypes: Category[];
  let ingredients: string = '';
  let recipes = [];
  let currentCategory: string = "";

  mealTypes=[{itemName: "main course", itemLink: "/main-course", id: 1},
    {itemName: "side dish",
    itemLink: "/side-dish",
    id: 2},
    {itemName: "dessert", itemLink: "/dessert", id: 3},
    {itemName: "appetizer", itemLink: "/appetizer", id: 4},
    {itemName: "salad", itemLink: "/salad", id: 5},
    {itemName: "bread", itemLink: "/bread", id: 6},
    {itemName: "breakfast", itemLink: "/breakfast", id: 7},
    {itemName: "soup", itemLink: "/soup", id: 8},
    {itemName: "beverage", itemLink: "/beverage", id: 9},
    {itemName: "sauce", itemLink: "/sauce", id: 10},
    {itemName: "marinade", itemLink: "/marinade", id: 11},
    {itemName: "fingerfood", itemLink: "/fingerfood", id: 12},
    {itemName: "snack", itemLink: "/snack", id: 13},
    {itemName: "drink", itemLink: "/drink", id: 14}
];

cuisineTypes = [
    {itemName: "African", itemLink: "/african", id: 1},
    {itemName: "Asian", itemLink: "/asian", id: 2},
    {itemName: "American", itemLink: "/american", id: 3},
    {itemName: "British", itemLink: "/british", id: 4},
    {itemName: "Cajun", itemLink: "/cajun", id: 5},
    {itemName: "Caribbean", itemLink: "/caribbean", id: 6},
    {itemName: "Chinese", itemLink: "/chinese", id: 7},
    {itemName: "Eastern European", itemLink: "/eastern-european", id: 8},
    {itemName: "European", itemLink: "/european", id: 9},
    {itemName: "French", itemLink: "/french", id: 10},
    {itemName: "German", itemLink: "/german", id: 11},
    {itemName: "Greek", itemLink: "/greek", id: 12},
    {itemName: "Indian", itemLink: "/indian", id: 13},
    {itemName: "Irish", itemLink: "/irish", id: 14},
    {itemName: "Italian", itemLink: "/italian", id: 15},
    {itemName: "Japanese", itemLink: "/japanese", id: 16},
    {itemName: "Jewish", itemLink: "/jewish", id: 17},
    {itemName: "Korean", itemLink: "/korean", id: 18},
    {itemName: "Latin American", itemLink: "/latin-american", id: 19},
    {itemName: "Mediterranean", itemLink: "/mediterranean", id: 20},
    {itemName: "Mexican", itemLink: "/mexican", id: 21},
    {itemName: "Middle Eastern", itemLink: "/middle-eastern", id: 22},
    {itemName: "Nordic", itemLink: "/nordic", id: 23},
    {itemName: "Southern", itemLink: "/southern", id: 24},
    {itemName: "Spanish", itemLink: "/spanish", id: 25},
    {itemName: "Thai", itemLink: "/thai", id: 26},
    {itemName: "Vietnamese", itemLink: "/vietnamese", id: 27}
];


</script>
<div class="flex flex-col p-4">
  
  <h1 class="text-4xl font-semibold">Recipes</h1>
  <ul class="mt-10">

    <div class="relative overflow-hidden rounded-lg mb-2 border-none">
      
        <input
          type="checkbox"
          
          class="peer absolute top-0 inset-x-0 w-full h-10 opacity-0 z-10"
        />
        <div class="w-full flex items-center h-10 cursor-pointer">
          <label
            for="toggle"
            class="flex justify-between w-full text-black"
          >
            <a class="font-semibold text-lg cursor-pointer">Dish Type</a>
            <span
              class="icon duration-500 rotate-0 peer-checked:rotate-180 cursor-pointer"
            >
              <MdKeyboardArrowDown/>
            </span>
          </label>
        </div>
        {#each mealTypes as item, index}
        <div
          class="bg-white overflow-hidden transition-all duration-500 max-h-full peer-checked:max-h-0"
        >
          <div class="p-2 border-none items-center flex col">
            <div class="flex items-center ml-[20px]">
              <a
                    class={`${index === 0 ? "active" : ""} text-base hover:text-[#ff5400]`}
                    id={`${item.itemName}-tab`}
                    data-toggle="tab"
                    href={`/meal${item.itemLink}`}
                    role="tab"
                    aria-controls={item.itemName}
                    aria-selected={index === 0 ? "true" : "false"}
                    
                >
                    {item.itemName}
                </a>
            </div>
           
          </div>
        </div>
      {/each}
    </div>

    <div class="relative overflow-hidden rounded-lg mb-2 border-none">
      
        <input
          type="checkbox"
          
          class="peer absolute top-0 inset-x-0 w-full h-10 opacity-0 z-10"
        />
        <div class="w-full flex items-center h-10 cursor-pointer">
          <label
            for="toggle"
            class="flex justify-between w-full text-black"
          >
            <a class="font-semibold text-lg cursor-pointer">Cuisine</a>
            <span
              class="icon duration-500 rotate-0 peer-checked:rotate-180 cursor-pointer"
            >
              <MdKeyboardArrowDown/>
            </span>
          </label>
        </div>
        {#each cuisineTypes as item, index}
        <div
          class="bg-white overflow-hidden transition-all duration-500 max-h-full peer-checked:max-h-0"
        >
          <div class="p-2 border-none items-center flex col">
            <div class="flex items-center ml-[20px]">
              <a
                    class={`${index === 0 ? "active" : ""} text-base hover:text-[#ff5400]`}
                    id={`${item.itemName}-tab`}
                    data-toggle="tab"
                    href={`/cuisine${item.itemLink}`}
                    role="tab"
                    aria-controls={item.itemName}
                    aria-selected={index === 0 ? "true" : "false"}
                    
                >
                    {item.itemName}
                </a>
            </div>
           
          </div>
        </div>
      {/each}
      
    </div>
  </ul>
</div>

<style>
  .nav-sub {
    margin-left: 20px;
  }

  .icon {
    color: #ff5400;
    width: 30px;
    height: 30px;
  }
</style>
