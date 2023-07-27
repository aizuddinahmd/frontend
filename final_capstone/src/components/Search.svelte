<script lang="ts">
  import { onMount } from "svelte";
  import FaSearch from "svelte-icons/fa/FaSearch.svelte";
  import RecipeCard from "./RecipeCard.svelte";
  // import dotenv from "dotenv";

  // dotenv.config();

  interface Recipe {
    id: number;
    title: string;
    image: string;
    likes: number;
  }

  let ingredients: string = "";
  let recipes = [];

  const formatInput = (input: string) => {
    return input
      .split(/\s*,\s*/)
      .map((str) => str.replace(/\s+/g, ",+"))
      .join(",+");
  };

  const fetchRecipes = async () => {
    const formattedIngredients = formatInput(ingredients);
    console.log(formattedIngredients);
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${formattedIngredients}&number=12&apiKey=44a285d632ba4ec2b08cffe374c72b33`
    );
    const data = await response.json();
    recipes = data.map((recipe: any) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      likes: recipe.likes,
    }));
    console.log("recipes:", recipes);
    return recipes;
  };

  onMount(fetchRecipes);
</script>

<div class="col-span-3">
  <div class="flex flex-row p-4">
    <div class="w-[450px]">
      <form
        class="border-2 rounded flex flex-row"
        on:submit|preventDefault={fetchRecipes}
      >
        <span>
          <div class="icon">
            <FaSearch />
          </div>
        </span>
        <input
          class="p-1 w-[100%]"
          type="search"
          placeholder="Type your ingredients..."
          bind:value={ingredients}
        />
        <button type="submit" class="px-2">Search</button>
      </form>
    </div>
    <div class="ml-auto">
      <select class="p-2 bg-orange-600 rounded-3xl text-white">
        <option>Sort by: Latest</option>
        <option>Sort by: Top Rated</option>
        <option>Sort by: Trending</option>
      </select>
    </div>
  </div>
  <div class="">
    <div class="grid grid-cols-3 gap-4">
      <RecipeCard {recipes} />
    </div>
  </div>
</div>

<style>
  .icon {
    color: black;
    width: 28px;
    height: 28px;
  }
</style>
