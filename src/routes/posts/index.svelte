<script>
  import { onMount } from "svelte";

  onMount(async () => {
    await fetch("getLatestPosts")
      .then((res) => res.json())
      .then((data) => {
        if (data.posts) {
          console.log(data.posts);
        } else {
          console.log(data.message);
        }
      })
      .catch((err) => console.log(err));
  });
</script>

<main>
  <h2>Latest blogs</h2>
</main>
