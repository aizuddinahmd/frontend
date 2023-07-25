<script lang="ts">
    interface Recipe {
        id: number;
        title: string;  
        image: string;
        likes: number;
    }

    export let recipes: Recipe[];
    

    // console.log("recipes card:", recipes);
</script>


{#each recipes as recipe}
<div class="uk-card">
  <div class="uk-card-media-top uk-inline uk-light">
    <img
      class="w-[100%] justify-center rounded-2xl"
      src={recipe.image}
      alt="Course Title"
    />
    <div class="uk-position-cover uk-card-overlay uk-border-rounded-medium">
    </div>
    <div class="uk-position-xsmall uk-position-top-right">
      <!-- <a
        href="#"
        class="uk-icon-button uk-like uk-position-z-index uk-position-relative"
        data-uk-icon="heart"></a> -->
    </div>
  </div>
  <div>
    <h3 class="text-lg font-semibold">{recipe.title}</h3>
    <div class="flex flex-row">
      <div class="text-slate-400">
        <span class="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"
        ></span>
        <span class="uk-margin-xsmall-left">5.0</span>
        <span>({recipe.likes})</span>
      </div>
      <div class="ml-auto text-slate-400">by John Keller</div>
    </div>
  </div>
  <!-- <a href="recipe.html" class="uk-position-cover"></a> -->
</div>
{/each}
